/* V6.01 – four real mobile shortcuts; avoid duplicate editing state. */
(()=>{'use strict';
function init(){
 if(document.querySelector('#v600Bar'))return;
 const phone=()=>window.matchMedia('(max-width:740px)').matches;
 const bar=document.createElement('nav');bar.id='v600Bar';bar.setAttribute('aria-label','剪輯快捷操作');
 bar.innerHTML='<button type="button" data-act="add">＋<span>素材</span></button><button type="button" data-act="theme">🎨<span>主題</span></button><button type="button" data-act="music">♫<span>音樂</span></button><button type="button" data-act="export">↗<span>匯出</span></button>';
 document.body.appendChild(bar);
 const click=s=>{const x=document.querySelector(s);if(!x){console.warn('V6.01 missing entry:',s);return false;}x.click();return true};
 const actions={
   add:()=>click('#files'),
   theme:()=>click('#mobileTheme'),
   music:()=>click('#openMusicLibrary'),
   export:()=>click('#mobileExport')
 };
 bar.addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b||!phone())return;actions[b.dataset.act]?.()});
 function sync(){bar.hidden=!phone()};window.addEventListener('resize',sync);sync();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
