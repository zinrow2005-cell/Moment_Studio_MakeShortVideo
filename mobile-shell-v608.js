/* V6.08 mobile workspace — one navigation, one theme dialog. */
(()=>{'use strict';
const q=(s)=>document.querySelector(s);
function init(){
  const catalog=q('.workspace > .catalog');
  if(!catalog||q('#v608Bar'))return;
  const phone=()=>window.matchMedia('(max-width:740px)').matches;
  const home=catalog.parentNode, next=catalog.nextSibling;
  const dialog=document.createElement('dialog');dialog.id='v608Themes';dialog.setAttribute('aria-label','選擇蠟筆主題');
  const closeBtn=document.createElement('button');closeBtn.type='button';closeBtn.id='v608ThemesClose';closeBtn.textContent='完成選擇';
  closeBtn.className='v608-close-theme';catalog.prepend(closeBtn);document.body.append(dialog);
  let moved=false;
  function closeTheme(){if(!moved)return;dialog.close();if(next&&next.parentNode===home)home.insertBefore(catalog,next);else home.append(catalog);moved=false;}
  function openTheme(){if(!phone())return;document.body.classList.remove('v592-themes-open','mobile-themes-open','v593-theme-dialog-open');dialog.append(catalog);moved=true;if(!dialog.open)dialog.showModal();catalog.scrollTop=0;}
  closeBtn.addEventListener('click',e=>{e.preventDefault();closeTheme()});
  dialog.addEventListener('cancel',e=>{e.preventDefault();closeTheme()});
  catalog.querySelector('#cards')?.addEventListener('click',e=>{if(moved&&e.target.closest('button.card'))setTimeout(closeTheme,150)});
  const bar=document.createElement('nav');bar.id='v608Bar';bar.setAttribute('aria-label','手機剪輯工具');
  bar.innerHTML='<button type="button" data-action="media" aria-label="加入照片與影片">＋<span>素材</span></button><button type="button" data-action="themes" aria-label="探索主題">🎨<span>主題</span></button><button type="button" data-action="music" aria-label="打開音樂素材中心">♫<span>音樂</span></button><button type="button" data-action="export" aria-label="匯出影片">↗<span>匯出</span></button>';
  document.body.append(bar);
  const actions={
    media:()=>{const el=q('#files')||q('#upload');if(el)el.click();else report('找不到照片選擇器')},
    themes:openTheme,
    music:()=>{const el=q('#openMusicLibrary')||q('#quickMusic');if(el)el.click();else report('找不到音樂素材中心')},
    export:()=>{const el=q('#mobileExport')||q('#export');if(el)el.click();else report('找不到影片匯出入口')}
  };
  function report(message){console.warn('V6.08:',message);const status=q('#status');if(status)status.textContent=message;}
  bar.addEventListener('click',e=>{const btn=e.target.closest('[data-action]');if(btn&&phone())actions[btn.dataset.action]?.()});
  const sync=()=>{bar.hidden=!phone();if(moved&&!phone())closeTheme()};window.addEventListener('resize',sync);sync();
  // Keep the user on the editor after importing files; never move underlying DOM controls.
  q('#files')?.addEventListener('change',()=>{if(phone())q('.editor .stage')?.scrollIntoView({behavior:'smooth',block:'start'})});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
