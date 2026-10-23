/* V5.93 mobile-only overrides. Reuse original catalog and editing engine. */
(()=>{'use strict';
function init(){const mobile=()=>matchMedia('(max-width:740px)').matches;const q=s=>document.querySelector(s);
const catalog=q('.workspace>.catalog');if(!catalog)return;
const toggle=q('#v592ThemeToggle');const close=q('#v592ThemeClose');
const curtain=document.createElement('div');curtain.id='v593ThemeBackdrop';document.body.append(curtain);
function show(open){if(!mobile())return;document.body.classList.toggle('v593-theme-dialog-open',open);document.body.classList.toggle('v592-themes-open',open);document.body.classList.toggle('mobile-themes-open',open);catalog.setAttribute('role','dialog');catalog.setAttribute('aria-modal','true');catalog.setAttribute('aria-label','挑選蠟筆主題');if(open){catalog.scrollTop=0;close?.focus();}}
if(toggle){toggle.addEventListener('click',e=>{if(!mobile())return;e.stopImmediatePropagation();e.preventDefault();show(true)},true)}
if(close)close.addEventListener('click',e=>{if(!mobile())return;e.preventDefault();e.stopImmediatePropagation();show(false)},true);
curtain.addEventListener('click',()=>show(false));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('v593-theme-dialog-open'))show(false)});
document.addEventListener('click',e=>{if(!mobile()||!e.target.closest('#quickThemes,#mobileTheme,[data-ms="theme"]'))return;e.preventDefault();e.stopImmediatePropagation();show(true)},true);
catalog.addEventListener('click',e=>{if(!mobile()||!e.target.closest('#cards button,#cards [role="button"]'))return;setTimeout(()=>show(false),175)},true);
// Eliminate old inline theme behavior without deleting the underlying controls.
if(toggle){toggle.textContent='🎨 挑選蠟筆主題';toggle.setAttribute('aria-haspopup','dialog')}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
