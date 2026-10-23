/* V5.92: Single inline theme selector & actionable music fallback on mobile/tablet. */
(()=>{'use strict';
 const init=()=>{
 const mobile=()=>matchMedia('(max-width:1180px)').matches;
 const q=s=>document.querySelector(s);
 const catalog=q('.catalog'),editor=q('.editor'),upload=q('.upload'),mediaList=q('#mediaList'),storyActions=q('.story-actions'),preview=q('.stage');
 if(!catalog||!editor)return;
 // Keep user material import first without cloning or moving the actual media input.
 const top=document.createElement('section');top.id='v592Materials';top.className='v592-materials';
 top.innerHTML='<h2>整理相片與影片</h2>';
 if(upload)top.append(upload);
 if(storyActions)top.append(storyActions);
 if(mediaList)top.append(mediaList);
 editor.prepend(top);
 const themeToggle=document.createElement('button');themeToggle.id='v592ThemeToggle';themeToggle.type='button';
 themeToggle.textContent='🎨 挑選蠟筆主題（24 款）';
 top.after(themeToggle);
 const close=document.createElement('button');close.id='v592ThemeClose';close.type='button';close.textContent='完成選擇主題';
 catalog.prepend(close);
 function setTheme(v){document.body.classList.toggle('v592-themes-open',v);document.body.classList.toggle('mobile-themes-open',v);if(v)catalog.scrollIntoView({behavior:'smooth',block:'start'});}
 themeToggle.addEventListener('click',()=>{if(matchMedia('(max-width:740px)').matches)return;setTheme(!document.body.classList.contains('v592-themes-open'))});
 close.addEventListener('click',()=>{if(matchMedia('(max-width:740px)').matches)return;setTheme(false)});
 document.addEventListener('click',e=>{
 if(!mobile()||matchMedia('(max-width:740px)').matches||!e.target.closest('#quickThemes,#mobileTheme,[data-ms="theme"]'))return;
 e.preventDefault();e.stopImmediatePropagation();
 setTheme(!document.body.classList.contains('v592-themes-open'));
},true);
 catalog.querySelector('#cards')?.addEventListener('click',e=>{if(!mobile())return;const card=e.target.closest('button,[role=button]');if(card)setTimeout(()=>{setTheme(false);preview?.scrollIntoView({behavior:'smooth',block:'start'})},130)});
 // Keep one clear fallback when Openverse network requests do not finish.
 const musicDialog=q('#musicLibrary');
 const center=q('#musicCenterRoot')||q('#music-center')||musicDialog;
 if(center&&!q('#v592MusicHelp')){
   const help=document.createElement('div');help.id='v592MusicHelp';help.className='v592-music-help';
   help.innerHTML='<b>連線失敗時的其他方式</b><p>Openverse 需要網路服務回應。如歌曲無法載入，可重試，或先從手機檔案選擇自己的音樂。</p>';
   const retry=document.createElement('button');retry.textContent='↻ 重試搜尋';retry.type='button';retry.onclick=()=>(center.querySelector('#search')||center.querySelector('[data-music-search]'))?.click();
   const local=document.createElement('button');local.textContent='＋ 匯入本機音樂';local.type='button';local.onclick=()=>q('#musicAdd')?.click();
   help.append(retry,local);center.append(help);
 }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
