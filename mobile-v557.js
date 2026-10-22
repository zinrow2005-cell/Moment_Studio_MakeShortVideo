/* V5.57: small-screen navigation using existing editor controls; no cloned audio engines. */
(()=>{'use strict';
 const q=s=>document.querySelector(s),body=document.body;
 const dock=q('.mobile-workbar'),catalog=q('.catalog'),workspace=q('.workspace');
 if(!dock||!catalog||!workspace)return;
 const mobile=()=>matchMedia('(max-width:740px)').matches;
 const scrim=document.createElement('button');scrim.type='button';scrim.className='mobile-theme-scrim';scrim.setAttribute('aria-label','關閉主題選單');body.append(scrim);
 const heading=document.createElement('span');heading.className='mobile-theme-heading';heading.textContent='🎨 探索主題';catalog.prepend(heading);
 const close=document.createElement('button');close.type='button';close.className='mobile-theme-close';close.textContent='✕';close.setAttribute('aria-label','關閉主題');catalog.prepend(close);
 const setTheme=open=>{body.classList.toggle('mobile-themes-open',!!open);q('#mobileTheme')?.setAttribute('aria-expanded',String(!!open));if(open){catalog.scrollTop=0;} };
 const goto=sel=>{const el=q(sel);if(!el)return;el.scrollIntoView({behavior:'smooth',block:'start'});};
 [close,scrim].forEach(el=>el.addEventListener('click',()=>setTheme(false)));
 q('#mobileTheme')?.addEventListener('click',e=>{if(!mobile())return;e.stopImmediatePropagation();setTheme(!body.classList.contains('mobile-themes-open'));},true);
 q('#mobileMedia')?.addEventListener('click',e=>{if(!mobile())return;e.stopImmediatePropagation();setTheme(false);goto('.material-surface');},true);
 q('#mobilePreview')?.addEventListener('click',e=>{if(!mobile())return;e.stopImmediatePropagation();setTheme(false);goto('.preview-surface');},true);
 q('#mobileExport')?.addEventListener('click',e=>{if(!mobile())return;e.stopImmediatePropagation();setTheme(false);goto('.finish-surface');q('#export')?.focus({preventScroll:true});},true);
 const music=document.createElement('button');music.type='button';music.id='mobileMusicV557';music.textContent='♫ 音樂';music.setAttribute('aria-label','前往音樂軸');
 music.addEventListener('click',()=>{setTheme(false);goto('.audio-lane');});dock.insertBefore(music,q('#mobileExport'));
 catalog.addEventListener('click',e=>{if(mobile()&&e.target.closest('.card,#cards button'))setTheme(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&body.classList.contains('mobile-themes-open'))setTheme(false)});
 matchMedia('(max-width:740px)').addEventListener('change',e=>{if(!e.matches)setTheme(false)});
 const library=q('#musicLibrary');if(library){const closeLibrary=q('#closeMusicLibrary');closeLibrary?.addEventListener('click',()=>{if(library.open)library.close()});}
 if(mobile())setTheme(false);
})();
