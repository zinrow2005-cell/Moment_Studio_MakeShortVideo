/* V5.49 exclusive sound: editor <-> music center */
(()=>{ 'use strict';
 const frame=document.getElementById('musicLibraryFrame');
 const dialog=document.getElementById('musicLibrary');
 function stopLibrary(){try{frame?.contentWindow?.postMessage({type:'moment:stop-music-preview'},'*')}catch{}}
 function pauseOtherMedia(active){document.querySelectorAll('audio,video').forEach(el=>{if(el!==active&&!el.paused)try{el.pause()}catch{}})}
 function stopEditorPreview(){
  const btn=document.getElementById('play');
  if(btn&&btn.textContent.includes('❚'))btn.click();
  pauseOtherMedia(null);
 }
 window.addEventListener('message',e=>{
   if(e.source!==frame?.contentWindow||e.data?.type!=='moment:preview-audio-start')return;
   stopEditorPreview();
 });
 // Native HTML media controls: prevent two players from sounding at once.
 document.addEventListener('play',e=>{if(e.target instanceof HTMLMediaElement){
   pauseOtherMedia(e.target);stopLibrary();
 }},true);
 // Main canvas/Web Audio preview has a custom play action.
 document.getElementById('play')?.addEventListener('click',()=>{
   const btn=document.getElementById('play');if(btn?.textContent.includes('❚'))stopLibrary();
 });
 dialog?.addEventListener('close',stopLibrary);
 document.getElementById('closeMusicLibrary')?.addEventListener('click',stopLibrary);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stopLibrary();stopEditorPreview()}});
 window.addEventListener('pagehide',()=>{stopLibrary();stopEditorPreview()});
})();
