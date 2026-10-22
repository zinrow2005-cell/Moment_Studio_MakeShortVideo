/* V5.60 responsive cover jump and export checkpoint; keep all existing engines. */
(()=>{'use strict';
const q=s=>document.querySelector(s);
const install=()=>{
 const finish=q('.finish-surface')||q('.actions'),cover=q('#coverPanel');
 if(!finish||!cover||q('#mobileCoverV560'))return;
 const button=document.createElement('button');
 button.type='button';button.id='mobileCoverV560';
 button.className='mobile-cover-shortcut-v560';
 button.textContent='🖼️ 編輯影片封面（標題・照片・停留時間）';
 button.addEventListener('click',()=>{
  cover.scrollIntoView({behavior:'smooth',block:'start'});
  q('#coverTitle')?.focus({preventScroll:true});
 });
 finish.insertBefore(button,finish.firstChild);
 const exportButton=q('#mobileExport');
 if(exportButton)exportButton.setAttribute('aria-label','前往匯出設定，先檢查封面與影片格式');
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();
