/* V5.32: one music control surface, inside the central timeline. */
(()=>{'use strict';
 const $=s=>document.querySelector(s);
 const lane=$('.audio-lane'), panel=$('.musicpanel'), sidebar=$('#musicSidebarV525'), toggle=$('#toggleMusic');
 if(!lane||!panel)return;
 document.body.classList.add('workspace-v532');
 // Preserve original controls and their event handlers: move instead of recreating.
 const tools=document.createElement('div');tools.className='music-lane-controls';
 const library=$('#openMusicLibrary'), local=$('#musicAdd'), remove=$('#musicRemove');
 const name=$('#musicName'), volume=$('#volume'), volText=$('#volText');
 const wave=$('#wave');
 // Preserve non-visual runtime dependencies BEFORE deleting the old panel.
 const dependencies=['#beatStatus','#musicStart','#loopMusic','#musicFile','#musicName','#openMusicLibrary'];
 const retained=new Map(dependencies.map(id=>[id,$(id)]));
 // The source panel must not be removed while its waveform canvas is still inside.
 if(wave)lane.append(wave);
 const choose=$('.lane-music-button');
 if(choose){choose.textContent='♫ 開啟音樂庫';choose.onclick=()=>library?.click();tools.append(choose)}
 if(local){local.textContent='＋ 本機音樂';tools.append(local)}
 if(remove){remove.textContent='移除歌曲';tools.append(remove)}
 const soundGroup=document.createElement('div');soundGroup.className='music-lane-settings';
 const volumeLabel=volume?.closest('label');if(volumeLabel){soundGroup.append(volumeLabel)}
 const fade=$('#fadeMusic')?.closest('label');if(fade)soundGroup.append(fade);
 const beat=$('#beatSync')?.closest('label');if(beat)soundGroup.append(beat);
 // Keep all non-visible dependencies in the original music panel, including file input.
 lane.append(tools,soundGroup);
 const file=$('#musicFile');if(file)lane.append(file);
 const musicHead=lane.querySelector('.timeline-title');
 if(musicHead)musicHead.querySelector('span')?.setAttribute('aria-live','polite');
 // Remove duplicated music surface and related sidebar toggle.
 // Move all required runtime inputs out of the disposable panel first.
 for(const [id,el] of retained){if(el){lane.append(el);if(id!=='#openMusicLibrary')el.hidden=true;}}
 sidebar?.remove();toggle?.remove();panel.remove();
 // Quick step now directly opens the integrated library, not a non-existing sidebar.
 const quick=$('#quickMusic');if(quick){quick.addEventListener('click',()=>library?.click())}
 // Keep original music-button and library click listeners, but the old button must
 // remain connected to the document because other modules use it by ID.
 if(library){library.hidden=true;lane.append(library)}
 const fallbackName=name;if(fallbackName){fallbackName.hidden=true;lane.append(fallbackName)}
 const beatStatus=$('#beatStatus');if(beatStatus){beatStatus.hidden=true;lane.append(beatStatus)}
 const start=$('#musicStart');if(start){start.hidden=true;lane.append(start)}
 const loop=$('#loopMusic');if(loop){loop.checked=false;loop.hidden=true;lane.append(loop)}
 // Ensure source file input has a connected element after the move.
 document.querySelector('.workspace-topbar')?.classList.add('workspace-topbar-no-music');
})();
