/* V5.0 interface adapter: never replaces Moment Studio playback/render/export engine. */
'use strict';
(()=>{
 const el=id=>document.getElementById(id);
 const click=id=>el(id)?.click();
 el('quickUpload')?.addEventListener('click',()=>click('upload'));
 el('quickThemes')?.addEventListener('click',()=>document.querySelector('.catalog')?.scrollIntoView({behavior:'smooth',block:'start'}));
 el('quickMusic')?.addEventListener('click',()=>{document.querySelector('.musicpanel')?.scrollIntoView({behavior:'smooth',block:'center'});click('openMusicLibrary');});
 el('quickCreate')?.addEventListener('click',()=>{el('canvas')?.scrollIntoView({behavior:'smooth',block:'center'});if(el('play')?.textContent==='▶') click('play');});
 el('quickExport')?.addEventListener('click',()=>click('export'));
 const box=el('showIllustrations');
 box?.addEventListener('change',()=>document.body.classList.toggle('fusion-dynamic-thumbs',!box.checked));
})();
