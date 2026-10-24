/* V5.24 music-center project => main editing timeline. Files remain on device. */
(()=>{'use strict';
const $=s=>document.querySelector(s);
const hub=$('#musicLibraryFrame');
const timeline=window.MomentTimeline;
if(!timeline||!hub)return;
const button=document.createElement('button');button.id='mtImportProject';button.type='button';button.textContent='↧ 同步音樂中心片段';
$('#mtLibrary')?.after(button);
const info=document.createElement('p');info.id='mtSyncStatus';info.className='mt-note';info.setAttribute('role','status');
info.textContent='可把音樂中心 V2.6 的多段片段設定及已下載的音檔匯入主編輯器。';
$('#mainTimeline')?.append(info);
const savedKey='music-center-v26-project';
function fetchBlob(key){return new Promise((resolve,reject)=>{const request=indexedDB.open('music-center-offline-v21',2);request.onerror=()=>reject(request.error||Error('無法開啟本機音樂庫'));request.onsuccess=()=>{const db=request.result;try{const tx=db.transaction('audio','readonly');const req=tx.objectStore('audio').get(key);req.onsuccess=()=>resolve(req.result?.blob||null);req.onerror=()=>reject(req.error);tx.oncomplete=()=>db.close()}catch(e){db.close();reject(e)}}})}
async function importProject(project){if(exporting){info.textContent='匯出中不可更改音樂軌。';return}const items=Array.isArray(project?.clips)?project.clips:[];if(!items.length){info.textContent='音樂中心沒有可匯入的剪輯片段。';return}
 button.disabled=true;info.textContent='正在讀取 '+items.length+' 段音樂的本機快取…';
 const prepared=[],missing=[];
 try{await ensureAudio();for(const c of items){try{const blob=await fetchBlob(c.key);if(!blob){missing.push(c.title||c.key);continue}if(blob.size>60*1024*1024){missing.push((c.title||c.key)+'（超過 60 MB）');continue}const buffer=await audioCtx.decodeAudioData(await blob.arrayBuffer());if(!buffer?.duration)throw Error('音訊長度無效');const offset=Math.max(0,Math.min(buffer.duration-.2,Number(c.in)||0));const reqLen=Number(c.length)>0?Number(c.length):Number(c.out)>offset?Number(c.out)-offset:8;const at=Math.max(0,Number(c.place)||0);const d=Number($('#duration').value)||30;const len=Math.min(reqLen,buffer.duration-offset,d-at);if(len<.2){missing.push((c.title||c.key)+'（片段超出影片長度）');continue}prepared.push({name:c.title||'音樂片段',buffer,at,offset,len,vol:Math.max(0,Math.min(1,Number(c.volume)??.85)),fadeIn:Math.max(0,Number(c.fadeIn)||0),fadeOut:Math.max(0,Number(c.fadeOut)||0)})}catch(e){missing.push((c.title||c.key)+'（'+e.message+'）')}}
 if(!prepared.length){info.textContent='沒有可用音檔。請先在音樂中心重新下載：'+missing.join('、');return}
 // No partial replacement: keep existing clips until at least one valid clip was decoded.
 timeline.replaceClips(prepared);
 info.textContent='✓ 已同步 '+prepared.length+' 段音樂'+(missing.length?'；另有 '+missing.length+' 段未匯入：'+missing.join('、'):'')+'。預覽與匯出共用此時間軸。';
 }catch(e){info.textContent='同步失敗，原有時間軸已保留：'+e.message}finally{button.disabled=false}}
button.onclick=()=>{let project;try{project=JSON.parse(localStorage.getItem(savedKey)||'null')}catch{}if(project){importProject(project)}else{hub.contentWindow?.postMessage({type:'moment:request-project'},location.origin);info.textContent='正在向音樂中心取得專案…'}};
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==hub.contentWindow)return;if(e.data?.type==='moment:music-project'&&e.data.project)importProject(e.data.project)});
})();
