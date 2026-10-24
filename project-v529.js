/* V5.29 — self-contained local/portable projects, including source media. */
'use strict';
(()=>{
 const $=q=>document.querySelector(q);
 const state=$('#projectSaveStatus');
 if(!state)return;
 const say=t=>{state.textContent=t;};
 const dbName='moment-studio-project-v529';
 function db(){return new Promise((resolve,reject)=>{const r=indexedDB.open(dbName,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains('project'))r.result.createObjectStore('project')};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
 async function saveStore(project){const d=await db();try{await new Promise((resolve,reject)=>{const tx=d.transaction('project','readwrite');tx.objectStore('project').put(project,'current');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}finally{d.close()}}
 async function readStore(){const d=await db();try{return await new Promise((resolve,reject)=>{const tx=d.transaction('project');const r=tx.objectStore('project').get('current');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}finally{d.close()}}
 const controls=['title','ratio','duration','density','pace','motion','fit','curve','textMotion','textScope','atmosphere','foreground','light','opening','ending','reduced','beatSync','volume','musicStart','loopMusic','fadeMusic'];
 function snapshot(){
  if(exporting)throw Error('影片匯出時無法儲存，請等匯出完成。');
  const missing=media.filter(m=>!(m.file instanceof Blob));
  if(missing.length)throw Error('部分素材沒有原始檔，請重新匯入後再保存。');
  const settings={};for(const id of controls){const node=$('#'+id);if(node)settings[id]=node.type==='checkbox'?node.checked:node.value}
  return {format:'MomentStudioProject',version:1,createdAt:new Date().toISOString(),theme:current,settings,materials:media.map(m=>({name:m.name,type:m.file.type||'',lastModified:m.file.lastModified||Date.now(),blob:m.file})),audio:music?.file?{name:music.file.name,type:music.file.type,lastModified:music.file.lastModified||Date.now(),blob:music.file}:null,manualCuts:window.__momentManualCuts?JSON.parse(JSON.stringify(window.__momentManualCuts)):null};
 }
 function toFile(entry){if(!entry?.blob||typeof entry.name!=='string')throw Error('備份素材缺失');return new File([entry.blob],entry.name,{type:entry.type||entry.blob.type||'',lastModified:entry.lastModified||Date.now()})}
 async function injectFiles(input,files,finished){return new Promise((resolve,reject)=>{if(!files.length){resolve();return}if(typeof DataTransfer!=='function'){reject(Error('此瀏覽器不支援自動還原檔案'));return}const transfer=new DataTransfer();files.forEach(f=>transfer.items.add(f));const timer=setTimeout(()=>{cleanup();reject(Error('讀取素材逾時'))},180000);const done=()=>{cleanup();resolve()};function cleanup(){clearTimeout(timer);document.removeEventListener(finished,done)}document.addEventListener(finished,done,{once:true});input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}))})}
 async function restore(project){
  if(project?.format!=='MomentStudioProject'||project.version!==1||!Array.isArray(project.materials)||project.materials.length>30)throw Error('專案格式不正確或超過 30 個素材');
  if(exporting)throw Error('匯出進行中，無法開啟專案');
  if(media.length&&!confirm('開啟專案會取代目前素材及配樂。確定繼續？'))return;
  say('正在還原素材，請勿關閉頁面…');
  stopPlayback();media.forEach(m=>{try{m.el.pause?.();URL.revokeObjectURL(m.url)}catch{}});media.length=0;orderSeed=0;originalStoryOrder=null;
  $('#musicRemove').click();window.__momentRestoring=true;
  try{
   const files=project.materials.map(toFile);
   await injectFiles($('#files'),files,'moment:media-import-finished');
   if(media.length!==files.length)throw Error('有素材無法解碼；請檢查素材格式後重新匯入備份');
   for(const [id,val] of Object.entries(project.settings||{})){const node=$('#'+id);if(!node||!controls.includes(id))continue;if(node.type==='checkbox')node.checked=!!val;else node.value=String(val)}
   $('#ratio').dispatchEvent(new Event('change'));$('#duration').dispatchEvent(new Event('change'));
   if(Number.isInteger(project.theme)&&project.theme>=0&&project.theme<themes.length)select(project.theme);
   if(project.audio?.blob)await injectFiles($('#musicFile'),[toFile(project.audio)],'moment:music-import-finished');
   // Audio import resets start; apply saved source offset afterwards.
   const musicStart=$('#musicStart');if(music&&project.settings?.musicStart!==undefined){musicStart.value=String(project.settings.musicStart);musicStart.dispatchEvent(new Event('change'))}
   window.__momentManualCuts=project.manualCuts||null;
   $('#storyRestore').disabled=true;$('#storyReason').textContent='已從完整專案恢復素材順序，仍可手動調整。';
   refreshPlan();drawCards();drawMedia();$('#volume').dispatchEvent(new Event('input'));
   say('✓ 專案已還原：'+media.length+' 個素材'+(music?'，含配樂':'')+'。請先播放確認。');
  }finally{window.__momentRestoring=false}
 }
 const b64=blob=>new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result));r.onerror=()=>reject(r.error);r.readAsDataURL(blob)});
 const dataBlob=async data=>{if(typeof data!=='string'||!/^data:[^,]*;base64,/.test(data))throw Error('備份內容有無效音檔');const r=await fetch(data);return r.blob()};

 // V6.09: bounded, debounced autosave reuses this existing IndexedDB project store.
 let autoTimer=0, autoBusy=false, dirty=false, lastSaved=0;
 const maxAutoBytes=120*1024*1024;
 const autoStatus=(message)=>{if(state)state.textContent=message};
 async function autosave(){
  if(autoBusy||!dirty||window.__momentRestoring||exporting)return;
  if(!media.length)return;
  const size=media.reduce((sum,m)=>sum+(m.file?.size||0),0)+(music?.file?.size||0);
  if(size>maxAutoBytes){autoStatus('素材超過 120 MB，為避免手機儲存空間不足，請使用「儲存專案」或「下載完整備份」。');dirty=false;return}
  autoBusy=true;
  try{await saveStore(snapshot());dirty=false;lastSaved=Date.now();autoStatus('✓ 已自動儲存草稿（含素材與配樂）· '+new Date(lastSaved).toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'}))}
  catch(e){autoStatus('自動儲存失敗：'+(e?.message||e)+'。可嘗試手動儲存或下載完整備份。')}
  finally{autoBusy=false;if(dirty)scheduleAuto(12000)}
 }
 function scheduleAuto(delay=6000){if(window.__momentRestoring)return;dirty=true;clearTimeout(autoTimer);autoTimer=setTimeout(autosave,delay)}
 document.addEventListener('moment:media-import-finished',()=>scheduleAuto(5000));
 document.addEventListener('moment:music-import-finished',()=>scheduleAuto(5000));
 window.addEventListener('moment:theme-changed',()=>{if(media.length)scheduleAuto()});
 // Changes from the working editor (not the search box or navigation) update the same draft.
 const editor=$('.editor');if(editor){editor.addEventListener('change',e=>{if(e.target.matches('input,select'))scheduleAuto()});}
 window.addEventListener('pagehide',()=>{clearTimeout(autoTimer); /* IndexedDB cannot reliably finish when page closes; autosave is performed earlier. */});
 // Offer recovery only after data is loaded, and never silently overwrite a new draft.
 (async()=>{try{
   const project=await readStore();if(!project?.materials?.length)return;
   const dt=new Date(project.createdAt||Date.now());
   const prompt=document.createElement('div');prompt.id='v609Recover';prompt.setAttribute('role','region');prompt.setAttribute('aria-label','恢復上次草稿');
   Object.assign(prompt.style,{position:'fixed',left:'12px',right:'12px',bottom:'calc(82px + env(safe-area-inset-bottom))',zIndex:'900',maxWidth:'480px',margin:'0 auto',padding:'15px',border:'1px solid #d8c8aa',borderRadius:'16px',background:'#fffdf7',boxShadow:'0 12px 32px #0003',color:'#333'});
   const msg=document.createElement('div');msg.textContent='找到上次保存的剪輯草稿（'+project.materials.length+' 個素材，'+dt.toLocaleString('zh-TW')+'）。要恢復嗎？';
   const buttons=document.createElement('div');buttons.style.cssText='display:flex;gap:8px;margin-top:10px';
   const accept=document.createElement('button');accept.type='button';accept.textContent='恢復草稿';
   const dismiss=document.createElement('button');dismiss.type='button';dismiss.textContent='這次先不要';
   buttons.append(accept,dismiss);prompt.append(msg,buttons);document.body.append(prompt);
   dismiss.onclick=()=>prompt.remove();
   accept.onclick=async()=>{accept.disabled=true;try{await restore(project);prompt.remove()}catch(e){autoStatus('草稿恢復失敗：'+(e?.message||e));accept.disabled=false}};
  }catch(e){console.warn('[V6.09] draft discovery failed',e)}})();

 $('#projectSaveLocal').onclick=async()=>{try{say('正在保存完整素材至瀏覽器…');await saveStore(snapshot());say('✓ 已儲存完整專案至此瀏覽器。')}catch(e){say('保存失敗：'+e.message)}};
 $('#projectRestoreLocal').onclick=async()=>{try{const project=await readStore();if(!project){say('尚未儲存任何專案。');return}await restore(project)}catch(e){say('還原失敗：'+e.message)}};
 $('#projectExportFull').onclick=async()=>{try{say('正在製作完整備份（包含原始影片可能較大）…');const proj=snapshot();const records=[];for(const m of proj.materials)records.push({...m,blob:await b64(m.blob)});const audio=proj.audio?{...proj.audio,blob:await b64(proj.audio.blob)}:null;const output={...proj,materials:records,audio};const data=new Blob([JSON.stringify(output)],{type:'application/json'});if(data.size>350*1024*1024)throw Error('備份超過 350 MB，請改用瀏覽器本機儲存');const u=URL.createObjectURL(data);const a=document.createElement('a');a.href=u;a.download='MomentStudio-'+new Date().toISOString().slice(0,10)+'.momentproj';a.click();setTimeout(()=>URL.revokeObjectURL(u),60000);say('✓ 完整備份已產生（'+(data.size/1048576).toFixed(1)+' MB），可在其他裝置匯入。')}catch(e){say('備份失敗：'+e.message)}};
 $('#projectImportFull').onclick=()=>$('#projectBackupFile').click();
 $('#projectBackupFile').onchange=async e=>{const file=e.target.files?.[0];e.target.value='';if(!file)return;try{if(file.size>350*1024*1024)throw Error('備份檔大於 350 MB');say('正在讀取備份檔…');const raw=JSON.parse(await file.text());if(raw.format!=='MomentStudioProject'||raw.version!==1||!Array.isArray(raw.materials)||raw.materials.length>30)throw Error('不是支援的完整專案備份');const materials=[];for(const m of raw.materials)materials.push({...m,blob:await dataBlob(m.blob)});const audio=raw.audio?{...raw.audio,blob:await dataBlob(raw.audio.blob)}:null;await restore({...raw,materials,audio})}catch(err){say('匯入失敗：'+err.message)}};
})();
