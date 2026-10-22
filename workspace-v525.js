/* V5.25 — three-column editing workspace; move live elements without cloning controls. */
(()=>{'use strict';
 const q=s=>document.querySelector(s), mk=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e};
 const workspace=q('.workspace'),catalog=q('.catalog'),editor=q('.editor');if(!workspace||!catalog||!editor)return;
 document.body.classList.add('workspace-v525');
 const settings=q('.settings'),previewHead=q('.previewhead'),stage=q('.stage'),transport=q('.transport'),shotbar=q('.shotbar');
 const materials=q('#panel-materials'),sound=q('#panel-sound'),publish=q('#panel-publish');
 const advanced=q('.advanced-settings');
 // Unwrap legacy step panels and keep all existing listeners intact.
 [materials,sound,publish].forEach(panel=>{if(!panel)return;panel.hidden=false;panel.querySelector('.workflow-panel-title')?.remove();});
 q('#workflowV523')?.remove();
 // Sidebars and toggles
 const leftToggle=mk('button','sidebar-toggle','☰ 主題');leftToggle.id='toggleThemes';leftToggle.type='button';leftToggle.setAttribute('aria-expanded','true');
 const rightToggle=mk('button','sidebar-toggle','♫ 音樂');rightToggle.id='toggleMusic';rightToggle.type='button';rightToggle.setAttribute('aria-expanded','true');
 const topbar=mk('div','workspace-topbar');topbar.append(leftToggle,mk('strong','workspace-top-title','拾光・剪輯工作台'),rightToggle);
 workspace.before(topbar);
 catalog.classList.add('workspace-sidebar','workspace-themes');
 const musicSidebar=mk('aside','workspace-sidebar workspace-music');musicSidebar.id='musicSidebarV525';
 const musicHead=mk('div','sidebar-heading');musicHead.innerHTML='<strong>♫ 背景音樂</strong><span>搜尋・加入・調整</span>';
 musicSidebar.append(musicHead);workspace.append(musicSidebar);
 const setCollapsed=(part,collapsed)=>{document.body.classList.toggle('collapse-'+part,collapsed);const btn=part==='themes'?leftToggle:rightToggle;btn.setAttribute('aria-expanded',String(!collapsed));};
 leftToggle.onclick=()=>setCollapsed('themes',!document.body.classList.contains('collapse-themes'));
 rightToggle.onclick=()=>setCollapsed('music',!document.body.classList.contains('collapse-music'));
 const musicPanel=q('.musicpanel');if(musicPanel){musicSidebar.append(musicPanel);musicPanel.hidden=false;}
 // Main preview with media manager to its right
 const previewArea=mk('section','preview-area');
 const previewSurface=mk('div','preview-surface');[previewHead,stage,transport].forEach(n=>n&&previewSurface.append(n));
 const materialSurface=mk('div','material-surface');
 const materialHead=mk('div','material-head');materialHead.innerHTML='<strong>整理相片與影片</strong><span id="materialCountV525">尚未加入素材</span>';
 materialSurface.append(materialHead);
 if(materials){materials.hidden=false;materialSurface.append(materials);}
 const mediaDetail=q('#mediaDetailsV523');if(mediaDetail){mediaDetail.open=true;mediaDetail.querySelector('summary').textContent='檢視與調整素材順序';}
 previewArea.append(previewSurface,materialSurface);
 const timelineSection=mk('section','timeline-surface');
 const head=mk('div','timeline-title');head.innerHTML='<strong>分鏡時間軸</strong><span>可點選分鏡跳轉預覽</span>';timelineSection.append(head);
 if(shotbar){shotbar.hidden=false;timelineSection.append(shotbar);}
 const audioLane=mk('div','audio-lane');audioLane.innerHTML='<div class="timeline-title"><strong>♫ 音樂軸</strong><span id="audioLaneNameV525">尚未選擇配樂</span></div>';
 const wave=q('#wave');if(wave){wave.hidden=false;audioLane.append(wave);}
 const openMusic=mk('button','lane-music-button','♫ 選擇音樂');openMusic.type='button';openMusic.onclick=()=>{setCollapsed('music',false);q('#openMusicLibrary')?.click()};audioLane.append(openMusic);
 timelineSection.append(audioLane);
 const advancedSurface=mk('section','advanced-surface');const advancedHead=mk('div','timeline-title');advancedHead.innerHTML='<strong>進階演出設定</strong><span>不使用時可保持收合</span>';advancedSurface.append(advancedHead);
 if(advanced){advanced.open=false;advancedSurface.append(advanced);advanced.hidden=false;}
 const finishArea=mk('section','finish-surface');finishArea.append(mk('strong','','預覽與匯出'));
 if(publish){publish.hidden=false;finishArea.append(publish);}
 const selected=q('.selected');if(selected){selected.hidden=false;advancedSurface.prepend(selected);}
 const container=mk('div','editor-sections');container.append(previewArea,timelineSection,advancedSurface,finishArea);
 editor.replaceChildren(container);
 // Legacy detached settings still owns status nodes moved to publish; no duplicate IDs.
 const musicName=q('#musicName');const audioName=q('#audioLaneNameV525');
 if(musicName&&audioName){const reflect=()=>audioName.textContent=musicName.textContent||'尚未選擇配樂';const obs=new MutationObserver(reflect);obs.observe(musicName,{childList:true,subtree:true,characterData:true});reflect();}
 const count=q('#materialCountV525'),list=q('#mediaList');if(count&&list){const update=()=>{const n=list.children.length;count.textContent=n?`${n} 個素材・已可調整順序`:'尚未加入素材'};new MutationObserver(update).observe(list,{childList:true});update()}
 // Both sidebar buttons remain accessible at narrow widths.
 const mobileMedia=q('#mobileMedia');if(mobileMedia)mobileMedia.addEventListener('click',()=>materialSurface.scrollIntoView({behavior:'smooth',block:'center'}));
 q('#quickThemes')?.addEventListener('click',()=>setCollapsed('themes',false));
 q('#quickMusic')?.addEventListener('click',()=>setCollapsed('music',false));
 // Hide empty legacy containers only (not attached live controls).
 settings?.remove();
})();
