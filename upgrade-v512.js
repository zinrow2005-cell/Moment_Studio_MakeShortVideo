/* V5.12 — immediate theme preview, active scene detail and music import feedback */
'use strict';
(()=>{
 const $=s=>document.querySelector(s);
 const cards=$('#cards'), shots=$('#shots'), stage=$('.shotbar');
 if(!cards||!stage)return;
 const detail=document.createElement('div');detail.id='sceneLive';detail.className='scene-live';detail.setAttribute('role','status');detail.setAttribute('aria-live','off');
 stage.querySelector('.shotbar-title')?.after(detail);
 const musicInfo=document.createElement('div');musicInfo.id='musicWorkflow';musicInfo.className='music-workflow';musicInfo.setAttribute('role','status');
 $('#musicName')?.after(musicInfo);
 let queuedPreview=false;
 cards.addEventListener('click',e=>{
   const card=e.target.closest('.card');if(!card||!cards.contains(card))return;
   queuedPreview=true;
   requestAnimationFrame(()=>{
     if(!queuedPreview)return;queuedPreview=false;
     const play=$('#play');
     if(play?.textContent.trim()==='▶' && !$('#exportProgress')?.offsetParent){play.click();}
     const chosen=$('#selTitle')?.textContent||'目前主題';
     $('#status').textContent=`已套用「${chosen}」，正在預覽完整動態分鏡。可使用下方片段按鈕跳轉。`;
   });
 });
 const previewButton=$('#previewDemo');
 previewButton?.addEventListener('click',()=>{setTimeout(()=>{$('#status').textContent='正在播放主題動態範例；可拖曳時間軸查看不同畫面。'},0)});
 let lastScene=-1,lastName='',lastMusic='';
 function refresh(){
  const active=shots?.querySelector('button.active');
  const index=active?Array.from(shots.children).indexOf(active):-1;
  const name=$('#selTitle')?.textContent||'主題';
  if(index!==lastScene||name!==lastName){
   lastScene=index;lastName=name;
   const count=shots?.children.length||0;
   const title=(active?.textContent||'請加入素材，查看分鏡').replace(/\s+/g,' ').trim();
   detail.textContent=`🎬 ${name}｜${index>=0?`第 ${index+1} / ${count} 段 · ${title}`:title}`;
  }
  const music=$('#musicName')?.textContent||'';
  if(music!==lastMusic){
   lastMusic=music;
   musicInfo.textContent=music.startsWith('尚未')?'先從音樂庫搜尋與試聽，成功取得音檔後即可加入剪輯。':music.startsWith('待匯入')?'這首歌曲尚未取得可匯出的音檔；請依音樂庫提示完成下載。':`✓ 配樂狀態：${music}。匯出前建議先播放檢查。`;
   musicInfo.dataset.state=music.startsWith('尚未')?'empty':music.startsWith('待匯入')?'pending':'ready';
  }
 }
 const observer=new MutationObserver(refresh);
 observer.observe(shots,{subtree:true,attributes:true,childList:true});
 if($('#musicName'))observer.observe($('#musicName'),{subtree:true,childList:true,characterData:true});
 refresh();
 document.title='小小映畫 × Moment Studio V5.17';
})();
