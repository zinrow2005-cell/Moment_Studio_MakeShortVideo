/* V5.24 — compact sidebar workflow, preserves original editor controls and listeners. */
(()=>{
 'use strict';
 const $=s=>document.querySelector(s);
 const settings=$('.editor .settings');
 if(!settings || $('#workflowV523'))return;
 const bar=document.createElement('nav');bar.id='workflowV523';bar.className='workflow-v523';bar.setAttribute('aria-label','剪輯操作階段');
 const items=[['materials','① 素材'],['sound','② 音樂'],['publish','③ 預覽・匯出']];
 bar.innerHTML=items.map(([id,label],i)=>`<button type="button" data-step="${id}" aria-pressed="${i===0}">${label}</button>`).join('');
 settings.prepend(bar);
 const upload=$('.upload'), story=$('.story-actions'),mediaList=$('#mediaList'),music=$('.musicpanel'),actions=$('.actions');
 const block=(id,title,node)=>{
   const wrap=document.createElement('section');wrap.id='panel-'+id;wrap.className='workflow-panel';
   const heading=document.createElement('div');heading.className='workflow-panel-title';heading.textContent=title;
   wrap.append(heading); node.before(wrap);wrap.append(node);return wrap;
 };
 const material=upload?block('materials','整理相片與影片',upload):null;
 if(material){if(story)material.append(story);if(mediaList){const detail=document.createElement('details');detail.id='mediaDetailsV523';detail.className='material-details';const summary=document.createElement('summary');summary.textContent='檢視與調整素材順序';detail.append(summary);mediaList.before(detail);detail.append(mediaList);material.append(detail);}}
 const sound=music?block('sound','挑選影片配樂',music):null;
 const publish=actions?block('publish','預覽完成後輸出',actions):null;
 if(publish){const r=$('#exportReadiness');if(r)publish.insertBefore(r,actions);const progress=$('#exportProgress'),status=$('#status'),result=$('#result');[progress,status,result].forEach(n=>{if(n)publish.append(n)});const previews=document.createElement('div');previews.className='workflow-preview-actions';previews.innerHTML='<button type="button" id="previewFromSteps">▶ 播放預覽</button><button type="button" id="expandFromSteps">⛶ 放大查看</button>';publish.insertBefore(previews,actions);$('#previewFromSteps').addEventListener('click',()=>{if($('#play')?.textContent.trim()==='▶')$('#play').click();$('.stage')?.scrollIntoView({behavior:'smooth',block:'center'});});$('#expandFromSteps').addEventListener('click',()=>$('#expand')?.click());}
 // Remove visual duplication, not the original controls required by the rendering engine.
 const hint=$('#workflowHint');if(hint)hint.hidden=true;
 const labels=[...settings.querySelectorAll('.sideblock-label')];labels.forEach(n=>n.hidden=true);
 const save=$('#save');if(save){save.classList.add('utility-hidden');}
 const selected=$('.selected');if(selected){selected.classList.add('selected-compact');const small=selected.querySelector('.compact-flow');if(small)small.hidden=true;}
 const lastStep={materials:material,sound,publish};
 function setStep(id,scroll=false){
  if(!lastStep[id])return;
  bar.querySelectorAll('button').forEach(b=>{b.classList.toggle('active',b.dataset.step===id);b.setAttribute('aria-pressed',b.dataset.step===id?'true':'false')});
  Object.entries(lastStep).forEach(([key,node])=>{if(node)node.hidden=key!==id});
  if(scroll)bar.scrollIntoView({behavior:'smooth',block:'start'});
 }
 bar.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setStep(b.dataset.step,true)));
 $('#quickUpload')?.addEventListener('click',()=>setStep('materials'));
 $('#quickMusic')?.addEventListener('click',()=>setStep('sound'));
 $('#quickExport')?.addEventListener('click',()=>setStep('publish'));
 $('#mobileMedia')?.addEventListener('click',()=>setStep('materials'));
 $('#mobilePreview')?.addEventListener('click',()=>setStep('publish'));
 $('#mobileExport')?.addEventListener('click',()=>setStep('publish'));
 $('#cards')?.addEventListener('click',e=>{if(e.target.closest('.card'))setStep('sound');});
 const fileInput=$('#files');fileInput?.addEventListener('change',()=>{setStep('materials');const d=$('#mediaDetailsV523');if(d)d.open=true;});
 $('#openMusicLibrary')?.addEventListener('click',()=>setStep('sound'));
 const musicName=$('#musicName');if(musicName){const observer=new MutationObserver(()=>{if(musicName.textContent&&!musicName.textContent.startsWith('尚未')&&!musicName.textContent.startsWith('待匯入'))setStep('publish')});observer.observe(musicName,{characterData:true,childList:true,subtree:true});}
 $('#mediaList')?.addEventListener('click',()=>{const d=$('#mediaDetailsV523');if(d)d.open=true;});
 setStep('materials');
})();
