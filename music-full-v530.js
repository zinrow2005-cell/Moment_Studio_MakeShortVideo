/* V5.30 full song in central audio lane, no segment-switch editor */
(()=>{'use strict';const q=s=>document.querySelector(s);const lane=q('.audio-lane');if(!lane)return;
 const card=document.createElement('div');card.className='fullsong-track';card.setAttribute('aria-live','polite');
 card.innerHTML='<div class="fullsong-main"><span class="fullsong-icon">♫</span><div><strong id="fullsongName">尚未加入歌曲</strong><small id="fullsongLength">從中央音樂軸開啟音樂庫並按「加入剪輯」，整首歌曲會放在這裡</small></div></div><div class="fullsong-trackfill"></div>';
 const wave=q('#wave');if(wave)wave.before(card);else lane.append(card);
 const name=q('#musicName'),remove=q('#musicRemove');const label=q('#fullsongName'),info=q('#fullsongLength');
 function sync(){const ready=!!remove&&!remove.disabled;card.classList.toggle('has-song',ready);const text=name?.textContent?.trim()||'';
  label.textContent=ready?text.split(' · ')[0]:'尚未加入歌曲';info.textContent=ready?'整首歌曲已加入 · 影片結束即停止，無需設定換歌秒數':'從音樂庫選曲並按「加入剪輯」';
  card.querySelector('.fullsong-trackfill').style.width=ready?'100%':'0%';
 }
 if(name)new MutationObserver(sync).observe(name,{subtree:true,childList:true,characterData:true});
 document.addEventListener('moment:music-import-finished',sync);remove?.addEventListener('click',()=>queueMicrotask(sync));sync();
 const start=q('#musicStart');if(start){const wrap=start.closest('label');if(wrap)wrap.hidden=true;}
 const loop=q('#loopMusic');if(loop){loop.checked=false;const wrap=loop.closest('label');if(wrap)wrap.hidden=true;}
 const library=q('#musicLibraryFrame');library?.addEventListener('load',()=>{try{library.contentDocument?.body?.classList.add('moment-embedded-music')}catch{}});
})();
