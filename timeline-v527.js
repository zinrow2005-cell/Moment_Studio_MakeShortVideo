/* V5.27 — draggable shot boundaries for the shared storyboard plan. */
(()=>{'use strict';
 const shots=document.querySelector('#shots');if(!shots)return;
 const wrap=document.createElement('section');wrap.className='boundary-editor';wrap.setAttribute('aria-label','分鏡秒數調整');
 wrap.innerHTML='<div class="boundary-header"><strong>調整分鏡秒數</strong><span class="timing-controls"><button type="button" id="restoreShotTiming">還原已存設定</button><button type="button" id="resetShotTiming">重設自動秒數</button></span></div><div class="boundary-rail" id="boundaryRail" aria-label="拖動分界點調整分鏡時長"></div><p class="boundary-hint" id="boundaryHint">拖動分界點可以調整相鄰片段秒數；總片長保持不變。</p>';
 shots.after(wrap);
 const rail=wrap.querySelector('#boundaryRail'),hint=wrap.querySelector('#boundaryHint');
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
 const STORAGE_KEY='moment-studio-v528-timing-v1';
 let active=null,lastSignature='';
 function storageRead(){try{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return null;const data=JSON.parse(raw);return data?.version===1&&Number.isInteger(data.sceneCount)&&data.sceneCount>=2&&data.sceneCount<=100&&Array.isArray(data.points)&&data.points.length===data.sceneCount-1&&data.points.every(v=>Number.isFinite(v)&&v>0&&v<1)?data:null}catch{return null}}
 function storageWrite(manual){try{localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,sceneCount:manual.sceneCount,points:manual.points,savedAt:new Date().toISOString()}));return true}catch{return false}}
 function restoreSaved(showNotice=false){const data=storageRead();if(!data){if(showNotice)hint.textContent='沒有可還原的分鏡秒數設定。';return false}const p=currentPlan();if(!p||p.cuts.length-1!==data.sceneCount){if(showNotice)hint.textContent='已存設定為 '+data.sceneCount+' 段，目前為 '+(p?.cuts.length-1||0)+' 段。請先匯入相同數量的素材。';return false}const duration=p.cuts.at(-1);const all=[0,...data.points.map(x=>Math.round(x*duration*10)/10),duration];if(!all.every((v,i)=>i===0||v-all[i-1]>=.5)){if(showNotice)hint.textContent='目前片長不適合已存的分鏡秒數，請重新調整。';return false}window.__momentManualCuts={sceneCount:data.sceneCount,points:data.points.slice()};lastSignature='';refreshPlan();render();if(showNotice)hint.textContent='✓ 已還原已存的分鏡秒數。';return true}
 
 function currentPlan(){try{return getPlan()}catch{return null}}
 function render(){
  if(active)return;
  const p=currentPlan();if(!p||!p.cuts||p.cuts.length<3){rail.replaceChildren();return}
  const cuts=p.cuts,duration=cuts[cuts.length-1],signature=cuts.map(v=>v.toFixed(3)).join(':');
  if(signature===lastSignature)return;lastSignature=signature;rail.replaceChildren();
  cuts.slice(0,-1).forEach((start,i)=>{
   const segment=document.createElement('div');segment.className='boundary-segment';
   segment.style.left=(start/duration*100)+'%';segment.style.width=((cuts[i+1]-start)/duration*100)+'%';
   segment.textContent=(i+1)+' · '+(cuts[i+1]-start).toFixed(1)+'秒';rail.append(segment);
  });
  for(let i=1;i<cuts.length-1;i++){
   const h=document.createElement('div');h.className='boundary-handle';h.tabIndex=0;h.setAttribute('role','slider');h.setAttribute('aria-label','第 '+i+' 段與第 '+(i+1)+' 段的分界');
   h.setAttribute('aria-valuemin',String((cuts[i-1]+.5).toFixed(1)));
   h.setAttribute('aria-valuemax',String((cuts[i+1]-.5).toFixed(1)));
   h.setAttribute('aria-valuenow',String(cuts[i].toFixed(1)));
   h.style.left=(cuts[i]/duration*100)+'%';h.dataset.index=i;
   h.addEventListener('pointerdown',ev=>{if(ev.button!==0||window.__momentExporting)return;ev.preventDefault();active={index:i,id:ev.pointerId};h.setPointerCapture(ev.pointerId)});
   h.addEventListener('pointermove',ev=>{if(!active||active.id!==ev.pointerId||active.index!==i)return;const rect=rail.getBoundingClientRect();if(!rect.width)return;const value=clamp((ev.clientX-rect.left)/rect.width*duration,cuts[i-1]+.5,cuts[i+1]-.5);h.style.left=(value/duration*100)+'%';h.setAttribute('aria-valuenow',String(value.toFixed(1)));hint.textContent='第 '+i+' 段結束於 '+value.toFixed(1)+' 秒';});
   const finish=ev=>{if(!active||active.id!==ev.pointerId)return;const rect=rail.getBoundingClientRect();const value=clamp((ev.clientX-rect.left)/Math.max(1,rect.width)*duration,cuts[i-1]+.5,cuts[i+1]-.5);active=null;commit(i,value)};
   h.addEventListener('pointerup',finish);h.addEventListener('pointercancel',()=>{active=null;lastSignature='';render()});h.addEventListener('lostpointercapture',()=>{if(active&&active.index===i){active=null;lastSignature='';render()}});
   h.addEventListener('keydown',ev=>{let delta=0;if(ev.key==='ArrowLeft')delta=ev.shiftKey?-1:-.2;else if(ev.key==='ArrowRight')delta=ev.shiftKey?1:.2;else return;ev.preventDefault();commit(i,clamp(cuts[i]+delta,cuts[i-1]+.5,cuts[i+1]-.5))});
   rail.append(h);
  }
 }
 function commit(i,value){
  const p=currentPlan();if(!p)return;const next=p.cuts.slice(),duration=next[next.length-1];next[i]=Math.round(value*10)/10;
  window.__momentManualCuts={sceneCount:next.length-1,points:next.slice(1,-1).map(x=>x/duration)};
  const saved=storageWrite(window.__momentManualCuts);lastSignature='';refreshPlan();render();hint.textContent=saved?'✓ 分鏡秒數已自動保存在此瀏覽器，預覽與匯出同步。':'✓ 分鏡秒數已更新，但瀏覽器拒絕保存；重新整理後可能遺失。';
 }
 wrap.querySelector('#restoreShotTiming').addEventListener('click',()=>restoreSaved(true));
 wrap.querySelector('#resetShotTiming').addEventListener('click',()=>{window.__momentManualCuts=null;try{localStorage.removeItem(STORAGE_KEY)}catch{};lastSignature='';refreshPlan();render();hint.textContent='已恢復自動分鏡時間。'});
 const observer=new MutationObserver(()=>{if(!active)render()});observer.observe(shots,{childList:true});
 document.querySelector('#duration')?.addEventListener('change',()=>{lastSignature='';requestAnimationFrame(render)});
 restoreSaved(false);render();
})();
