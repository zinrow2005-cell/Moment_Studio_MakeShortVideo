/* V5.98: true native theme dialog, no overlay z-index conflict. */
(()=>{'use strict';
function init(){
 const isPhone=()=>matchMedia('(max-width:740px)').matches;
 const catalog=document.querySelector('.workspace>.catalog');if(!catalog)return;
 const home=catalog.parentNode,next=catalog.nextSibling;
 const dlg=document.createElement('dialog');dlg.id='v598Themes';dlg.setAttribute('aria-label','探索蠟筆主題');
 document.body.append(dlg);
 let inDialog=false;
 function open(){if(!isPhone())return;document.body.classList.remove('v592-themes-open','mobile-themes-open','v593-theme-dialog-open');dlg.append(catalog);inDialog=true;if(!dlg.open)dlg.showModal();catalog.scrollTop=0;}
 function close(){if(!inDialog)return;dlg.close();if(next&&next.parentNode===home)home.insertBefore(catalog,next);else home.append(catalog);inDialog=false;document.body.classList.remove('v592-themes-open','mobile-themes-open','v593-theme-dialog-open');}
 dlg.addEventListener('cancel',e=>{e.preventDefault();close()});
 // Do not close on backdrop taps: scrolling and rapid touches on iOS can be misclassified.
 // Close explicitly with the finish button or Escape only.
 catalog.querySelector('#v592ThemeClose')?.addEventListener('click',e=>{if(!isPhone())return;e.preventDefault();e.stopImmediatePropagation();close()},true);
 catalog.querySelector('#cards')?.addEventListener('click',e=>{if(isPhone()&&e.target.closest('button,[role="button"]'))setTimeout(close,180)});
 document.addEventListener('click',e=>{
   if(!isPhone())return;
   if(e.target.closest('#v592ThemeToggle,#quickThemes,#mobileTheme,[data-ms="theme"]')){
     e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();open();
   }
 },true);
 window.addEventListener('resize',()=>{if(inDialog&&!isPhone())close()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();