/* V5.88 mobile editor: linked to actual existing playback, media, theme and music controls. */
(()=>{'use strict';
 const $=s=>document.querySelector(s), mobile=()=>matchMedia('(max-width:1180px)').matches;
 const editor=$('.editor'),stage=$('.stage'), transport=$('.transport'), list=$('#mediaList'),seek=$('#seek');
 if(!editor||!stage||!transport||!list||!seek)return;
 const panel=document.createElement('section');panel.className='moment-mobile-studio';panel.setAttribute('aria-label','行動多軌剪輯工作台');
 panel.innerHTML=`<div class="ms-heading"><strong>✂ 拾光 · 手機／平板剪輯</strong><span id="msCurrentTheme">24 款主題共用引擎</span></div>
 <div class="ms-tools" aria-label="片段工具"><button type="button" data-ms="add">＋ 素材</button><button type="button" data-ms="cover">▣ 封面</button><button type="button" data-ms="reorder">↕ 排序</button><button type="button" data-ms="theme">✦ 特效主題</button><button type="button" data-ms="music">♫ 配樂</button></div>
 <div class="ms-timehead"><b>影片軌道</b><span id="ms-time">00:00 / 00:30</span></div>
 <div class="ms-track-scroller"><div class="ms-film" id="ms-film" role="group" aria-label="照片與影片片段"></div><div class="ms-audio" id="ms-audio"><span>♫ 尚未加入音樂</span><div class="ms-wave" id="ms-wave"></div></div><div id="ms-playhead" class="ms-playhead" aria-hidden="true"></div></div>
 <input type="range" min="0" max="30" step="0.01" value="0" id="ms-scrub" aria-label="手機時間軸播放位置"><div class="ms-note">拖曳上方播放頭調整時間；點擊片段可選取、預覽，長按素材右側握把可排序。</div>`;
 transport.after(panel);
 const rail=panel.querySelector('#ms-film'),scrub=panel.querySelector('#ms-scrub'),audio=panel.querySelector('#ms-audio'),playhead=panel.querySelector('#ms-playhead');
 const goto=el=>{if(!el)return;el.scrollIntoView({behavior:'smooth',block:'center'});};
 const actions={add:()=>{const btn=$('#quickUpload');if(btn)btn.click();else goto(list)},cover:()=>{$('#coverPanel')?goto($('#coverPanel')):goto(list)},reorder:()=>goto(list),theme:()=>{if(matchMedia('(max-width:740px)').matches){$('#mobileTheme')?.click()}else{const catalog=$('.catalog');if(catalog){catalog.classList.add('tablet-theme-visible');goto(catalog)}}},music:()=>{const btn=$('#openMusicLibrary');if(btn)btn.click();else goto($('.audio-lane'))}};
 panel.querySelectorAll('[data-ms]').forEach(b=>b.addEventListener('click',()=>actions[b.dataset.ms]?.()));
 // Use the same underlying player; never maintain independent video time.
 let dragging=false;
 scrub.addEventListener('input',()=>{dragging=true;seek.value=scrub.value;seek.dispatchEvent(new Event('input',{bubbles:true}));});
 scrub.addEventListener('change',()=>{seek.value=scrub.value;seek.dispatchEvent(new Event('change',{bubbles:true}));dragging=false;});
 const fmt=t=>{t=Math.max(0,Math.floor(Number(t)||0));return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0')};
 function sync(){if(!dragging){scrub.max=seek.max||$('#duration')?.value||30;scrub.value=seek.value||0;}const dur=Number(scrub.max)||30,t=Number(scrub.value)||0;playhead.style.left=`calc(${Math.min(100,t/dur*100)}% - 1px)`;panel.querySelector('#ms-time').textContent=fmt(t)+' / '+fmt(dur);const title=$('#selTitle')?.textContent;panel.querySelector('#msCurrentTheme').textContent=title||'選擇影片主題';}
 function build(){const rows=[...list.children].filter(el=>el.querySelector('img,video,.media-thumb,canvas'));rail.replaceChildren();
 if(!rows.length){const empty=document.createElement('div');empty.className='ms-empty';empty.textContent='先加入照片／影片，這裡會顯示分鏡縮圖';rail.append(empty);}else rows.forEach((row,i)=>{const b=document.createElement('button');b.type='button';b.className='ms-clip';b.setAttribute('aria-label',`前往第 ${i+1} 個片段`);const img=row.querySelector('img');if(img?.src){const pic=document.createElement('img');pic.src=img.src;pic.alt='';b.append(pic)}else{const fallback=document.createElement('span');fallback.textContent='🎬';b.append(fallback)}const n=document.createElement('small');n.textContent=String(i+1).padStart(2,'0');b.append(n);b.addEventListener('click',()=>{let d=Number($('#duration')?.value)||30;let at=d*i/rows.length;seek.value=at;seek.dispatchEvent(new Event('input',{bubbles:true}));scrub.value=at;sync();rail.querySelectorAll('.ms-clip').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')});rail.append(b)});
 const musicName=$('#musicName')?.textContent?.trim()||'尚未加入音樂';audio.querySelector('span').textContent='♫ '+musicName;
 const wave=$('#wave');const dst=panel.querySelector('#ms-wave'); if(wave&&wave.width&&wave.height){try{dst.style.backgroundImage='url('+wave.toDataURL('image/png')+')'}catch(_){}}sync();}
 let pending=false;function update(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;build()})}
 new MutationObserver(update).observe(list,{childList:true,subtree:true,attributes:true,attributeFilter:['src','class']});
 const mn=$('#musicName');if(mn)new MutationObserver(update).observe(mn,{childList:true,subtree:true,characterData:true});
 $('#duration')?.addEventListener('change',sync);setInterval(()=>{if(mobile())sync()},250);
 build();
})();