/* V5.18 step guide; observes current editor instead of replacing animation engine */
'use strict';
(()=>{
 const $=s=>document.querySelector(s),root=$('#guidedProgress');if(!root)return;
 const labels=['照片','主題','音樂','預覽','匯出'];
 let phase=0,hasPickedTheme=false,hasPreviewed=false;
 root.innerHTML='<div class="gp-steps"></div><button type="button" class="gp-next">下一步</button><div class="gp-message" role="status"></div>';
 const steps=root.querySelector('.gp-steps'),next=root.querySelector('.gp-next'),message=root.querySelector('.gp-message');
 labels.forEach((label,i)=>{let el=document.createElement('span');el.className='gp-step';el.textContent=(i+1)+' '+label;steps.append(el)});
 function update(){const count=$('#mediaList')?.children.length||0;const hasMusic=!($('#musicName')?.textContent||'尚未').startsWith('尚未')&&!($('#musicName')?.textContent||'').startsWith('待匯入');
   const done=[count>0,hasPickedTheme,hasMusic,hasPreviewed,false];
   [...steps.children].forEach((el,i)=>{el.classList.toggle('done',done[i]);el.classList.toggle('current',phase===i)});
   next.textContent=['＋ 加入照片／影片','挑選蠟筆主題','🎵 開啟音樂庫','▶ 大畫面預覽','↗ 匯出作品'][phase];
   message.textContent=[count?'已加入 '+count+' 個素材，請確認智慧排序結果。':'先加入照片或影片；3 個以上素材會自動智慧排序。','挑選一款主題，系統會使用原有的動態分鏡。','可從 Openverse 搜尋試聽、下載可用的音檔，也可匯入本機音樂。','檢查照片構圖、轉場和配樂，再決定是否匯出。','請確認瀏覽器輸出格式與配樂，再按匯出。'][phase];
 }
 function go(n){phase=Math.max(0,Math.min(4,n));update()}
 next.addEventListener('click',()=>{if(phase===0){$('#upload')?.click()}else if(phase===1){$('.catalog')?.scrollIntoView({behavior:'smooth',block:'start'})}else if(phase===2){$('#openMusicLibrary')?.click()}else if(phase===3){hasPreviewed=true;document.body.classList.add('guided-preview');$('.editor')?.scrollIntoView({behavior:'smooth',block:'start'});if($('#play')?.textContent.trim()==='▶')$('#play').click();go(4)}else{$('#export')?.click()}});
 window.addEventListener('moment:story-sorted',()=>go(1));
 window.addEventListener('moment:theme-picked',()=>{hasPickedTheme=true;go(2)});
 $('#musicName')&&new MutationObserver(()=>{const t=$('#musicName')?.textContent||'';if(t&&!t.startsWith('尚未')&&!t.startsWith('待匯入')&&hasPickedTheme&&phase===2)go(3);else update()}).observe($('#musicName'),{childList:true,subtree:true,characterData:true});
 $('#quickCreate')?.addEventListener('click',()=>{hasPreviewed=true;document.body.classList.add('guided-preview');go(4)});
 $('#quickMusic')?.addEventListener('click',()=>go(2));
 $('#files')?.addEventListener('change',()=>{setTimeout(update,500)});
 update();
})();
