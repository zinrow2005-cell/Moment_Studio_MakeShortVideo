/* Moment Studio V5.50 — Theme-based, exclusive, cached preview soundtrack. */
(()=>{'use strict';
 const ID='moment-theme-music-v550';
 const family=[
 ['piano','cinematic','ambient'],['children','happy','upbeat'],['ambient','acoustic','folk'],['ambient','cinematic','piano'],
 ['folk','acoustic','cinematic'],['upbeat','pop','acoustic'],['ambient','piano','acoustic'],['children','happy','pop'],
 ['acoustic','piano','folk'],['piano','children','gentle'],['romantic','piano','cinematic'],['pop','upbeat','electronic'],
 ['jazz','piano','lofi'],['cinematic','orchestral','epic'],['electronic','pop','upbeat'],['ambient','piano','lofi'],
 ['pop','electronic','upbeat'],['jazz','acoustic','folk'],['children','happy','acoustic'],['rock','upbeat','electronic'],
 ['cinematic','electronic','ambient'],['ambient','classical','piano'],['folk','acoustic','children'],['folk','acoustic','cinematic']
 ];
 const $=s=>document.querySelector(s);
 let rev=0, url=null, preview=new Audio(), active=null, selected=null, manual=false, themeIndex=0;
 let trackOwner=document.querySelector('#musicRemove')?.disabled===false?'manual':'none';
 let importingAuto=false;
 document.addEventListener('moment:music-track-ready',()=>{trackOwner=importingAuto?'auto':'manual';});
 document.addEventListener('moment:music-import-finished',()=>{if(!importingAuto&&document.querySelector('#musicRemove')?.disabled===false)trackOwner='manual';});
 document.querySelector('#musicRemove')?.addEventListener('click',()=>{trackOwner='none';});
 const toFilename=(track,blob)=>String(track.title||'主題推薦音樂')+'.'+((blob.type||'').includes('wav')?'wav':(blob.type||'').includes('ogg')?'ogg':(blob.type||'').includes('mp4')?'m4a':'mp3');
 async function importRecommended(track,blob,token,explicit=false){
   if(typeof window.momentImportAudioDirect!=='function')throw Error('正式音樂軸尚未準備好');
   if(!explicit&&trackOwner==='manual')return false;
   // Serializing selection checks prevents an outdated cache read from replacing the newer theme.
   if(token!==rev)return false;
   importingAuto=!explicit;
   try{await window.momentImportAudioDirect(blob,toFilename(track,blob));
      if(explicit)trackOwner='manual';else trackOwner='auto';
      return true;
   }finally{importingAuto=false;}
 }
 preview.preload='auto';preview.volume=.7;preview.loop=false;
 const getStyle=id=>family[Math.max(0,Math.min(23,Number(id)||0))]||family[0];
 const panel=document.createElement('div');panel.id=ID;panel.className='theme-music-panel';
 panel.innerHTML='<div class="theme-music-top"><b>♫ 主題配樂</b><label><input id="themeAutoMusic" type="checkbox" checked> 自動搭配</label></div><div id="themeMusicInfo" class="theme-music-info">選擇主題後，從已下載音樂中挑選適合曲風。</div><div class="theme-music-actions"><button type="button" id="themeMusicShuffle">↻ 換一首</button><button type="button" id="themeMusicAdd">＋ 加入正式剪輯</button><button type="button" id="themeMusicOpen">搜尋音樂庫</button></div>';
 const work=$('.stage')||$('.editor'); if(work)work.insertAdjacentElement('afterend',panel);
 const info=panel.querySelector('#themeMusicInfo');const auto=panel.querySelector('#themeAutoMusic');
 const btnAdd=panel.querySelector('#themeMusicAdd');
 function label(s){info.textContent=s}
 function release(){lastActive=false;pendingPlay=false;preview.pause();preview.removeAttribute('src');preview.load();if(url){URL.revokeObjectURL(url);url=null}}
 function stopOther(){try{if(typeof stopMusic==='function')stopMusic()}catch{}; const f=$('#musicLibraryFrame');try{f?.contentWindow?.postMessage({type:'moment:stop-music-preview'},'*')}catch{} }
 function readCache(){return new Promise((resolve,reject)=>{let request=indexedDB.open('music-center-offline-v21');request.onerror=()=>reject(request.error||Error('快取無法開啟'));request.onsuccess=()=>{let db=request.result;if(!db.objectStoreNames.contains('audio')){db.close();resolve([]);return}let tx=db.transaction('audio','readonly');let q=tx.objectStore('audio').getAll();q.onsuccess=()=>resolve(q.result||[]);q.onerror=()=>reject(q.error);tx.oncomplete=()=>db.close()}})}
 function chooseTracks(records,id){const words=getStyle(id);const valid=records.filter(r=>{let b=r.blob||r.file;return b&&typeof b.arrayBuffer==='function'&&b.size>0&&r.track});const scores=valid.map(r=>{let t=r.track,phrase=[t.title,t.artist,t.genre,t.tags,t.description].filter(Boolean).join(' ').toLowerCase();let pts=words.reduce((a,k)=>a+(phrase.includes(k)?4:0),0);return{r,pts}});const matched=scores.filter(x=>x.pts>0);const pool=matched.length?matched:scores;return pool[Math.floor(Math.random()*pool.length)]?.r||null}
 async function selectSong(themeId){const token=++rev;release();selected=null;btnAdd.disabled=true;label('正在準備推薦歌曲…');try{const records=await readCache();if(token!==rev)return;const pick=chooseTracks(records,themeId);if(!pick){label('目前沒有已下載的歌曲。請先開啟音樂庫下載，再返回選擇主題。');return}const blob=pick.blob||pick.file;url=URL.createObjectURL(blob);preview.src=url;selected={track:pick.track,blob};btnAdd.disabled=false;label('正在將推薦歌曲放入正式音樂軸：'+(pick.track.title||'背景音樂')+'…');preview.pause();preview.currentTime=0;lastActive=false;lastPosition=-1;
   if(trackOwner==='manual'){label('已推薦：'+(pick.track.title||'背景音樂')+'。你已手動指定正式配樂，因此保留原音樂軸；可按「加入正式剪輯」使用這首。');return}
   try{const added=await importRecommended(pick.track,blob,token);if(token!==rev)return;
     label(added?'✓ 自動加入正式音樂軸：'+(pick.track.title||'背景音樂')+'。預覽及匯出都使用這首歌。':'保留目前已手動選取的正式配樂。');
   }catch(e){if(token===rev)label('推薦配樂加入音樂軸失敗：'+(e.message||e))}
   syncSound(true);}catch(err){if(token===rev)label('無法讀取下載清單：'+(err?.message||err))}}
 window.addEventListener('moment:theme-changed',e=>{themeIndex=e.detail?.id||0;if(!auto.checked)return;manual=false;playBlocked=false;selectSong(themeIndex)});
 panel.querySelector('#themeMusicShuffle').onclick=()=>{manual=false;playBlocked=false;selectSong(themeIndex)};
 btnAdd.onclick=async()=>{if(!selected)return label('尚未選取推薦歌曲');btnAdd.disabled=true;preview.pause();try{await importRecommended(selected.track,selected.blob,rev,true);label('✓ 已手動指定正式配樂：'+selected.track.title)}catch(e){label('加入失敗：'+e.message)}finally{btnAdd.disabled=false}};
 panel.querySelector('#themeMusicOpen').onclick=()=>$('#openMusicLibrary')?.click();
 auto.onchange=()=>{if(auto.checked){playBlocked=false;selectSong(themeIndex)}else{++rev;release();label('自動搭配已關閉；已加入的正式音樂軸歌曲仍保留。')}};
 // The editor playhead is the single source of truth. Never free-run on selecting a theme.
 // A manually imported soundtrack has priority; recommendation plays only while trying themes.
 let lastPosition=-1, lastActive=false, pendingPlay=false, playBlocked=false;
 function editorPlaying(){return ($('#play')?.textContent||'').includes('❚')}
 function hasFormalTrack(){const name=$('#musicName')?.textContent||'';return !!name&&!/尚未加入|尚未選擇|未加入/.test(name)}
 function syncSound(force=false){
   if(!selected||!preview.src)return;
   let position=Number($('#seek')?.value)||0;
   let active=editorPlaying()&&!document.hidden&&!$('#musicLibrary')?.open&&!hasFormalTrack();
   if(!active){if(!preview.paused)preview.pause();lastActive=false;lastPosition=position;return}
   const duration=Number.isFinite(preview.duration)&&preview.duration>0?preview.duration:0;
   if(duration&&position>=duration){preview.pause();lastActive=false;return}
   if(force||!lastActive||Math.abs(position-lastPosition)>0.65||Math.abs(preview.currentTime-position)>0.45){
     try{preview.currentTime=Math.max(0,position)}catch{}
   }
   if(preview.paused&&!pendingPlay&&!playBlocked){
     pendingPlay=true;stopOther();
     preview.play().then(()=>{pendingPlay=false;playBlocked=false}).catch(err=>{
       pendingPlay=false;playBlocked=true;lastActive=false;
       label('配樂已準備，但瀏覽器阻擋自動播放；請再點一次動態預覽播放鍵。'+(err?.name==='NotAllowedError'?'':' '+(err?.message||'')));
     });
   }
   lastPosition=position;lastActive=true;
 }
 // Explicit player gestures re-arm autoplay when the browser requires a user activation.
 $('#play')?.addEventListener('click',()=>{playBlocked=false;queueMicrotask(()=>syncSound(true))});
 $('#seek')?.addEventListener('input',()=>syncSound(true));
 $('#seek')?.addEventListener('change',()=>syncSound(true));
 window.addEventListener('moment:theme-changed',()=>{playBlocked=false});
 function loop(){syncSound();requestAnimationFrame(loop)}
 requestAnimationFrame(loop);
 $('#musicLibrary')?.addEventListener('close',()=>syncSound(true));
 document.addEventListener('play',e=>{if(e.target instanceof HTMLMediaElement&&e.target!==preview)preview.pause()},true);
 window.addEventListener('message',e=>{if(e.data?.type==='moment:preview-audio-start')preview.pause()});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)preview.pause()});
 window.addEventListener('pagehide',()=>{++rev;release()});
 btnAdd.disabled=true;
 // Initial recommendation only after an explicit user click; no hidden autoplay on page load.
})();
