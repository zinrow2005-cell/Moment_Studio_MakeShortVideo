/* V5.26: editable visual scrub lanes, building on the existing live editor and its single seek source. */
(()=>{'use strict';
 const $=s=>document.querySelector(s), shots=$('#shots'), seek=$('#seek'), audio=$('.audio-lane'), media=$('#mediaList');
 if(!shots||!seek||!audio)return;
 document.body.classList.add('timeline-v526');
 const label=document.createElement('div');label.className='lane-caption';label.textContent='點選片段跳至該分鏡；拖動播放指標可逐格檢視。';shots.before(label);
 const musicBar=document.createElement('div');musicBar.className='music-scrubber';musicBar.setAttribute('role','slider');musicBar.setAttribute('tabindex','0');musicBar.setAttribute('aria-label','音樂時間軸播放位置');musicBar.setAttribute('aria-valuemin','0');
 musicBar.innerHTML='<div class="music-scrubber-fill"></div><div class="music-scrubber-playhead"></div>';
 const wave=$('#wave');if(wave)wave.after(musicBar);else audio.append(musicBar);
 const timeLabel=document.createElement('span');timeLabel.className='music-time-readout';musicBar.after(timeLabel);
 const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
 const duration=()=>Math.max(1,Number(seek.max)||Number($('#duration')?.value)||30);
 function jump(seconds){const v=clamp(seconds,0,duration());seek.value=String(v);seek.dispatchEvent(new Event('input',{bubbles:true}));sync();}
 function sync(){const d=duration(),v=clamp(Number(seek.value)||0,0,d),p=v/d*100;
  musicBar.querySelector('.music-scrubber-fill').style.width=p+'%';musicBar.querySelector('.music-scrubber-playhead').style.left=p+'%';
  musicBar.setAttribute('aria-valuemax',String(d));musicBar.setAttribute('aria-valuenow',String(v.toFixed(1)));
  timeLabel.textContent=v.toFixed(1)+' / '+d.toFixed(1)+' 秒';
  shots.querySelectorAll('button').forEach(b=>b.classList.toggle('playhead-active', b.classList.contains('active')));
 }
 let dragging=false;
 const seekPointer=e=>{const r=musicBar.getBoundingClientRect();if(r.width)jump((e.clientX-r.left)/r.width*duration())};
 musicBar.addEventListener('pointerdown',e=>{if(e.button!==0)return;dragging=true;musicBar.setPointerCapture?.(e.pointerId);seekPointer(e)});
 musicBar.addEventListener('pointermove',e=>{if(dragging)seekPointer(e)});
 musicBar.addEventListener('pointerup',e=>{if(dragging){seekPointer(e);dragging=false}});
 musicBar.addEventListener('pointercancel',()=>{dragging=false});
 musicBar.addEventListener('keydown',e=>{const step=e.shiftKey?5:.5;const v=Number(seek.value)||0;
  if(e.key==='ArrowRight'||e.key==='ArrowUp'){e.preventDefault();jump(v+step)}
  if(e.key==='ArrowLeft'||e.key==='ArrowDown'){e.preventDefault();jump(v-step)}
  if(e.key==='Home'){e.preventDefault();jump(0)}
  if(e.key==='End'){e.preventDefault();jump(duration())}
 });
 const renderVisuals=()=>{
  const thumbs=[...(media?.querySelectorAll('.media-thumb')||[])].map(x=>x.getAttribute('src')).filter(Boolean);
  const buttons=[...shots.querySelectorAll('button')];
  buttons.forEach((b,i)=>{
   b.classList.add('visual-shot');
   let pic=b.querySelector('.shot-thumb');if(!pic){pic=document.createElement('span');pic.className='shot-thumb';b.prepend(pic)}
   if(thumbs.length){const src=thumbs[i%thumbs.length];pic.style.backgroundImage='url("'+src.replace(/"/g,'%22')+'")';pic.classList.remove('placeholder')}
   else{pic.style.backgroundImage='';pic.classList.add('placeholder')}
  });
 };
 const obs=new MutationObserver(renderVisuals);obs.observe(shots,{childList:true});if(media)obs.observe(media,{childList:true,subtree:true});renderVisuals();
 let last=0;function animate(now){if(now-last>85){last=now;sync()}requestAnimationFrame(animate)}requestAnimationFrame(animate);
})();
