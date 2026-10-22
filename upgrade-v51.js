/* V5.1 progressive upgrade. Preserve Moment Studio rendering and export engine. */
'use strict';
(()=>{
  const $=s=>document.querySelector(s);
  const click=s=>$(s)?.click();
  const scroll=s=>$(s)?.scrollIntoView({behavior:'smooth',block:'start'});
  $('#mobileMedia')?.addEventListener('click',()=>click('#upload'));
  $('#mobileTheme')?.addEventListener('click',()=>scroll('.catalog'));
  $('#mobilePreview')?.addEventListener('click',()=>{scroll('.stage');if($('#play')?.textContent==='▶')click('#play')});
  $('#mobileExport')?.addEventListener('click',()=>{scroll('.actions');click('#export')});
  $('#previewDemo')?.addEventListener('click',()=>{
    const seek=$('#seek'); if(seek){seek.value='0';seek.dispatchEvent(new Event('input',{bubbles:true}));}
    if($('#play')?.textContent==='▶')click('#play');
    scroll('.stage');
    const st=$('#status');if(st)st.textContent='正在預覽目前主題的動態構圖；可用進度條或分鏡卡片跳轉。';
  });
  const checks=$('#exportCheck');
  function preflight(){
    if(!checks)return;
    const cap=HTMLCanvasElement.prototype.captureStream;
    const recorder=window.MediaRecorder;
    const support=!!(cap&&recorder);
    const mp4=support&&recorder.isTypeSupported('video/mp4');
    const webm=support&&recorder.isTypeSupported('video/webm');
    const n=$('#mediaList')?.children.length||0;
    const duration=$('#duration')?.value||'30';
    checks.textContent=!support?'⚠ 此瀏覽器不具備 Canvas 錄製功能，無法匯出影片。':(!mp4&&!webm?'⚠ 此瀏覽器沒有可用的 MP4/WebM 錄製格式。':`✓ 匯出前檢查：${n?`${n} 個素材`:'示範畫面（尚未匯入素材）'} · ${duration} 秒 · ${mp4?'MP4 可用':webm?'WebM 可用':'格式待確認'}。預覽與匯出共用動畫引擎。`);
    checks.classList.toggle('warn',!support||(!mp4&&!webm));
  }
  $('#files')?.addEventListener('change',()=>setTimeout(preflight,200));
  $('#duration')?.addEventListener('change',preflight);
  $('#ratio')?.addEventListener('change',preflight);
  const cards=$('#cards');
  if(cards) new MutationObserver(()=>{
    for(const card of cards.querySelectorAll('button.card')){
      if(card.querySelector('.selected-pill'))continue;
      const pill=document.createElement('span');pill.className='selected-pill';pill.textContent='✓ 已選擇';
      card.querySelector('.card-visual')?.appendChild(pill);
    }
  }).observe(cards,{childList:true});
  const observer=new MutationObserver(preflight);
  if($('#mediaList'))observer.observe($('#mediaList'),{childList:true});
  preflight();
})();
