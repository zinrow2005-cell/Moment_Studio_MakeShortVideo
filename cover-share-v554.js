/* Moment Studio V5.68 — simple cover designer from selected photo */
(()=>{'use strict';
const $=s=>document.querySelector(s);
const state={title:'',place:'',time:'',font:'Noto Serif TC',titleSize:54,placeSize:28,timeSize:24,image:null,imageUrl:'',objectUrl:null,template:0,positions:{title:{x:.10,y:.66},place:{x:.10,y:.75},time:{x:.10,y:.81}}};
let dialog,preview;
const FONT_OPTIONS=[
 {value:'Noto Serif TC',label:'思源宋體 / Noto Serif TC'},
 {value:'Ma Shan Zheng',label:'馬善政書法 / Ma Shan Zheng'},
 {value:'ZCOOL KuaiLe',label:'站酷快樂體 / ZCOOL KuaiLe'},
 {value:'Long Cang',label:'龍藏體 / Long Cang'},
 {value:'Zhi Mang Xing',label:'志莽行書 / Zhi Mang Xing'},
 {value:'Liu Jian Mao Cao',label:'流劍毛草 / Liu Jian Mao Cao'},
 {value:'ZCOOL XiaoWei',label:'站酷小薇 / ZCOOL XiaoWei'},
 {value:'Noto Sans TC',label:'思源黑體 / Noto Sans TC'}
];
function injectFonts(){
 if(document.getElementById('coverFontLinkV568'))return;
 const link=document.createElement('link');
 link.id='coverFontLinkV568';
 link.rel='stylesheet';
 link.href='https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600;700&family=Ma+Shan+Zheng&family=ZCOOL+KuaiLe&family=Long+Cang&family=Zhi+Mang+Xing&family=Liu+Jian+Mao+Cao&family=ZCOOL+XiaoWei&family=Noto+Sans+TC:wght@500;700&display=swap';
 document.head.append(link);
}
function injectStyle(){
 if(document.getElementById('coverDesignerStyleV568'))return;
 const style=document.createElement('style'); style.id='coverDesignerStyleV568';
 style.textContent=`
 .cover-selected-row-v569{background:#fff8df!important;outline:2px solid #dcb56d;outline-offset:-2px;border-radius:12px}
 .cover-selected-badge-v569{display:inline-flex;width:max-content;padding:3px 9px;border-radius:40px;color:#784c1d;background:#f7dc9d;font-weight:800;font-size:12px}
 .cover-result-card-v569{margin:12px 0;border-radius:14px;background:#fffaf0;border:1px solid #e9d5b4;padding:12px;display:flex;align-items:center;gap:12px}
 .cover-result-card-v569 img{display:block;max-height:150px;max-width:120px;border-radius:9px;object-fit:contain;box-shadow:0 4px 12px #0002}
 .cover-result-card-v569 strong{font-size:14px;color:#4a4535}
 .cover-result-card-v569 small{font-size:12px;color:#7b715c;display:block;margin-top:5px}
 .media-thumb-actions{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
 .media-thumb-actions .media-cover-setter{padding:.5rem .7rem;border-radius:12px;background:#fff6df;border:1px solid #e9d29b;color:#7a5620;font-size:.88rem}
 .cover-design-dialog{width:min(960px,96vw);max-width:96vw;border:none;border-radius:24px;padding:0;overflow:hidden;background:#fffaf2;box-shadow:0 20px 60px rgba(40,25,0,.22)}
 .cover-design-dialog::backdrop{background:rgba(22,20,18,.45)}
 .cover-design-wrap{display:grid;grid-template-columns:minmax(280px,1.1fr) minmax(300px,.9fr);gap:0;height:min(92dvh,860px);max-height:92dvh}
 .cover-design-preview{padding:12px;min-height:0;background:linear-gradient(180deg,#fff9ef,#f5ecda);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px}
 .cover-preview-canvas{width:100%;aspect-ratio:9/16;max-height:85dvh;background:#eee;border-radius:22px;box-shadow:0 10px 30px rgba(0,0,0,.12)}
 .cover-motion-preview-v611{background:#396f5e;color:white;border:0;border-radius:12px;padding:11px 16px;font-size:14px;font-weight:700;cursor:pointer;flex-shrink:0}
 .cover-design-form{padding:15px 15px 12px;overflow:auto;display:flex;flex-direction:column;gap:8px;min-height:0}
 .cover-design-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
 .cover-design-head b{font-size:1.12rem}.cover-design-head small{display:block;color:#7d6e5b;margin-top:4px}
 .cover-close-btn,.cover-done-btn{border:none;border-radius:14px;padding:.75rem 1rem;font-weight:700;cursor:pointer}
 .cover-close-btn{background:#f0e8db;color:#5e4c32}.cover-done-btn{background:#866ef1;color:white}
 .cover-field{display:flex;flex-direction:column;gap:4px}
 .cover-field label,.cover-font-block label{font-weight:700;color:#5b4932;font-size:.95rem}
 .cover-field input[type="text"],.cover-font-block select{width:100%;padding:.48rem .65rem;border-radius:10px;border:1px solid #d9ccb7;background:#fff;font-size:1rem}
 .cover-range-row{display:grid;grid-template-columns:1fr auto;gap:6px;align-items:center;height:27px}
 .cover-range-row input[type="range"]{width:100%}
 .cover-range-row output{min-width:48px;text-align:right;color:#7a6248;font-weight:700}
 .cover-note{margin-top:0;padding:.5rem .65rem;border-radius:10px;background:#fff3d8;color:#7b5b1f;font-size:.92rem;line-height:1.5}
 .cover-picked{font-size:.78rem;color:#7d6e5b}.cover-preview-canvas{touch-action:none;cursor:grab}.cover-preview-canvas.is-dragging{cursor:grabbing}.cover-done-btn{position:sticky;bottom:0;flex-shrink:0;min-height:43px;box-shadow:0 -4px 12px #fffaf2}
 @media (max-width: 860px){
   .cover-design-wrap{grid-template-columns:1fr;height:92dvh;max-height:92dvh;overflow:auto;grid-template-rows:minmax(0,46%) minmax(0,54%)}
   .cover-design-preview{padding:14px}
   .cover-preview-canvas{max-height:42dvh;width:auto;max-width:100%;height:auto;object-fit:contain}
   .cover-design-form{padding:10px 15px;overflow:auto}.cover-done-btn{position:sticky;bottom:0;min-height:52px;z-index:2}
 }
 `;
 document.head.append(style);
}
function buildDialog(){
 if(dialog) return;
 injectFonts();injectStyle();
 document.fonts?.load('700 54px "Noto Serif TC"','拾光旅行雲林時間').catch(()=>{});
 dialog=document.createElement('dialog');
 dialog.id='coverDesignDialogV568';
 dialog.className='cover-design-dialog';
 dialog.innerHTML=`<div class="cover-design-wrap">
   <div class="cover-design-preview">
     <canvas id="coverPreviewCanvasV568" class="cover-preview-canvas" width="900" height="1600"></canvas>
     <button type="button" id="coverMotionPreviewV611" class="cover-motion-preview-v611">▶ 播放 2 秒封面動畫</button>
   </div>
   <div class="cover-design-form">
     <div class="cover-design-head">
       <div><b>封面設計</b><small>封面會在影片前 2 秒顯示（片長維持原設定）</small></div>
       <button type="button" class="cover-close-btn" id="coverCloseBtnV568">✕ 關閉</button>
     </div>
     <div class="cover-field"><label>封面樣板（六款）</label><div id="coverTemplatesV610" class="cover-templates-v610" role="group" aria-label="選擇封面樣板"></div></div>
     <div class="cover-picked" id="coverPickedNameV568">尚未選擇封面照片</div>
     <div class="cover-font-block cover-field">
       <label for="coverFontSelectV568">藝術字體</label>
       <select id="coverFontSelectV568">${FONT_OPTIONS.map(f=>`<option value="${f.value}">${f.label}</option>`).join('')}</select>
     </div>
     <div class="cover-field">
       <label for="coverTitleInputV568">標題</label>
       <input id="coverTitleInputV568" type="text" maxlength="26" placeholder="例如：雲林親子小旅行">
       <div class="cover-range-row"><input id="coverTitleSizeV568" type="range" min="28" max="88" value="54"><output id="coverTitleSizeTextV568">54</output></div>
     </div>
     <div class="cover-field">
       <label for="coverPlaceInputV568">地點</label>
       <input id="coverPlaceInputV568" type="text" maxlength="28" placeholder="例如：虎尾・雲林">
       <div class="cover-range-row"><input id="coverPlaceSizeV568" type="range" min="18" max="56" value="28"><output id="coverPlaceSizeTextV568">28</output></div>
     </div>
     <div class="cover-field">
       <label for="coverTimeInputV568">時間</label>
       <input id="coverTimeInputV568" type="text" maxlength="28" placeholder="例如：2026.10.22">
       <div class="cover-range-row"><input id="coverTimeSizeV568" type="range" min="18" max="52" value="24"><output id="coverTimeSizeTextV568">24</output></div>
     </div>
     <div class="cover-note">從照片旁邊點擊「設為封面照片」即可切換封面圖片。在左側圖片上拖曳標題、地點、時間可自由移動位置。</div>
     <button type="button" class="cover-done-btn" id="coverDoneBtnV568">完成</button>
   </div>
 </div>`;
 document.body.append(dialog);
 preview=$('#coverPreviewCanvasV568');setupDrag();fitCoverRatio();$('#coverMotionPreviewV611').addEventListener('click',playCoverPreviewV611);
 const templates=['經典故事','底片日記','清新手繪','電影海報','旅行明信片','極簡留白'];
 const templateBox=$('#coverTemplatesV610');
 templates.forEach((name,i)=>{const b=document.createElement('button');b.type='button';b.textContent=name;b.dataset.template=String(i);b.setAttribute('aria-pressed',String(i===state.template));b.addEventListener('click',()=>{state.template=i;templateBox.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));state.positions=(({0:{title:{x:.10,y:.66},place:{x:.10,y:.75},time:{x:.10,y:.81}},1:{title:{x:.10,y:.15},place:{x:.10,y:.79},time:{x:.10,y:.85}},2:{title:{x:.12,y:.65},place:{x:.12,y:.77},time:{x:.12,y:.84}},3:{title:{x:.09,y:.32},place:{x:.09,y:.77},time:{x:.09,y:.84}},4:{title:{x:.11,y:.12},place:{x:.11,y:.75},time:{x:.11,y:.82}},5:{title:{x:.10,y:.71},place:{x:.10,y:.80},time:{x:.10,y:.86}}})[i]);coverCacheKey='';renderPreview();updatePoster();});templateBox.append(b)});
 const bind=(id,key,outId)=>{
   const el=$(id),out=$(outId);
   const sync=()=>{state[key]=id.includes('Size')?Number(el.value):el.value;if(out)out.textContent=String(el.value);renderPreview();updatePoster();if(key==='font'){loadSelectedFont();}};
   el.addEventListener('input',sync);
   el.addEventListener('change',sync);
 };
 bind('#coverFontSelectV568','font');
 bind('#coverTitleInputV568','title');
 bind('#coverPlaceInputV568','place');
 bind('#coverTimeInputV568','time');
 bind('#coverTitleSizeV568','titleSize','#coverTitleSizeTextV568');
 bind('#coverPlaceSizeV568','placeSize','#coverPlaceSizeTextV568');
 bind('#coverTimeSizeV568','timeSize','#coverTimeSizeTextV568');
 $('#coverCloseBtnV568').onclick=()=>dialog.close();
 $('#coverDoneBtnV568').onclick=()=>dialog.close();
 dialog.addEventListener('close',()=>{cancelAnimationFrame(motionPreviewFrameV611);$('#coverMotionPreviewV611').disabled=false;updatePoster()});
}
let fontLoadGeneration=0;
async function loadSelectedFont(){
 const chosen=state.font, generation=++fontLoadGeneration;
 // Canvas must repaint when the real glyphs become available (first selection included).
 renderPreview();updatePoster();
 if(!document.fonts?.load)return;
 const specimen=[state.title,state.place,state.time].filter(Boolean).join('')||'拾光旅行';
 try{
  await Promise.all([400,500,600,700].map(weight=>document.fonts.load(`${weight} 54px "${chosen}"`,specimen)));
 }catch(err){console.warn('[Cover] Typeface could not load',chosen,err)}
 if(generation!==fontLoadGeneration)return;
 coverCacheKey='';renderPreview();updatePoster();
 // Some mobile browser font renderers settle glyph layout one frame later.
 requestAnimationFrame(()=>{if(generation===fontLoadGeneration){coverCacheKey='';renderPreview();updatePoster()}});
}
if(document.fonts){document.fonts.addEventListener?.('loadingdone',()=>{coverCacheKey='';renderPreview();updatePoster()});}
function wrapText(ctx,text,maxWidth){
 const chars=[...(text||'')]; const lines=[]; let line='';
 chars.forEach(ch=>{const next=line+ch; if(line && ctx.measureText(next).width>maxWidth){lines.push(line); line=ch;} else line=next;});
 if(line)lines.push(line);
 return lines.slice(0,3);
}
function fitCoverRatio(){
 if(!preview)return;
 const ratio=document.querySelector('#ratio')?.value||'portrait';
 const dims={portrait:[900,1600],landscape:[1600,900],square:[1200,1200]};
 const [w,h]=dims[ratio]||dims.portrait;
 if(preview.width!==w||preview.height!==h){preview.width=w;preview.height=h;}
 preview.style.aspectRatio=w+'/'+h;
 preview.style.maxWidth=ratio==='portrait'?'min(100%,470px)':'100%';
 renderPreview();
 coverCacheKey='';
}
function textLayout(ctx,w,h,field){
 const label=state[field];if(!label)return null;
 const scale=w/900;
 const size=Math.round(state[field+'Size']*scale);
 const stack="'"+state.font+"','Noto Serif TC','Noto Sans TC','PingFang TC',serif";
 ctx.font=(['Noto Serif TC','Noto Sans TC'].includes(state.font)?700:400)+' '+size+'px '+stack;
 const maxWidth=w*.84;
 const lines=wrapText(ctx,label,maxWidth);
 const width=Math.min(maxWidth,Math.max(...lines.map(v=>ctx.measureText(v).width),24));
 const height=Math.max(1,lines.length)*size*1.16;
 const pos=state.positions[field];
 const x=Math.min(Math.max(w*.03,pos.x*w),Math.max(w*.03,w*.97-width));
 const y=Math.min(Math.max(h*.03,pos.y*h),Math.max(h*.03,h*.97-height));
 return {lines,x,y,size,width,height};
}
const easeV611=p=>{p=clamp01(p);return p*p*(3-2*p)};
const appearV611=(sec,start,duration=.3)=>easeV611((sec-start)/duration);
let motionPreviewFrameV611=0;
function drawScene(ctx,w,h,sec=null){
 // sec=null is the still image used for the sharing poster / manual text dragging.
 const animated=Number.isFinite(sec),t=animated?Math.max(0,Math.min(2,sec)):1.2;
 const intro=appearV611(t,0,.38),finish=animated?1-appearV611(t,1.76,.24):1;
 ctx.save();ctx.clearRect(0,0,w,h);
 if(state.template===5){ctx.fillStyle='#f6f1e6';ctx.fillRect(0,0,w,h)}
 else {ctx.fillStyle=state.template===1?'#332c27':'#fff1dc';ctx.fillRect(0,0,w,h)}
 ctx.save();
 // Every style has its own camera choreography but uses the same user selected photo.
 if(animated){
  if(state.template===0){const z=1.05-.05*intro+.025*t/2;ctx.translate(w/2,h/2);ctx.scale(z,z);ctx.translate(-w/2,-h/2);ctx.globalAlpha=intro}
  if(state.template===1){const z=.78+.22*appearV611(t,.02,.45);ctx.translate(w/2,h/2);ctx.rotate((1-intro)*-.055);ctx.scale(z,z);ctx.translate(-w/2,-h/2);ctx.globalAlpha=appearV611(t,.15,.45)}
  if(state.template===2){ctx.globalAlpha=appearV611(t,.1,.38)}
  if(state.template===3){const z=1.075-.065*appearV611(t,0,.65);ctx.translate(w/2,h/2);ctx.scale(z,z);ctx.translate(-w/2,-h/2);ctx.globalAlpha=appearV611(t,.05,.35)}
  if(state.template===4){ctx.translate(w*(1-appearV611(t,.05,.43))*.34,h*(1-appearV611(t,.05,.43))*.13);ctx.rotate((1-intro)*.085);ctx.globalAlpha=appearV611(t,.06,.4)}
  if(state.template===5){ctx.globalAlpha=appearV611(t,0,.60);const z=1.025-.025*intro;ctx.translate(w/2,h/2);ctx.scale(z,z);ctx.translate(-w/2,-h/2)}
 }
 if(state.image&&state.image.complete&&state.image.naturalWidth){
  const img=state.image,scale=Math.max(w/img.naturalWidth,h/img.naturalHeight);
  const dw=img.naturalWidth*scale,dh=img.naturalHeight*scale;
  ctx.drawImage(img,(w-dw)/2,(h-dh)/2,dw,dh);
 }else {const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,'#f8e9c8');g.addColorStop(1,'#d7c0ff');ctx.fillStyle=g;ctx.fillRect(0,0,w,h)}
 ctx.restore();
 const overlay=ctx.createLinearGradient(0,0,0,h);
 overlay.addColorStop(0,state.template===4?'rgba(250,225,190,.18)':'rgba(14,18,28,.08)');
 overlay.addColorStop(.62,'rgba(14,18,28,.08)');
 overlay.addColorStop(1,state.template===5?'rgba(14,18,28,.30)':'rgba(14,18,28,.72)');
 ctx.fillStyle=overlay;ctx.fillRect(0,0,w,h);
 const dec=animated?appearV611(t,.38,.42):1;
 ctx.save();ctx.globalAlpha=dec;
 if(state.template===0){
  ctx.strokeStyle='#f5e9d6';ctx.lineWidth=w*.006;ctx.strokeRect(w*.065,h*.055,w*.87,h*.89);
  for(let i=0;i<5;i++){const x=w*(.11+i*.19),y=h*(.13+Math.sin(i*2.5+t*1.7)*.014);ctx.beginPath();ctx.arc(x,y,w*.006,0,7);ctx.fillStyle='#fff1b9';ctx.fill()}
 }
 if(state.template===1){
  ctx.strokeStyle='#fff8e6';ctx.lineWidth=w*.018;ctx.strokeRect(w*.05,h*.04,w*.9,h*.92);
  for(let i=0;i<8;i++){const x=w*(.07+i*.115);ctx.fillStyle='#fdf1d8';ctx.fillRect(x,h*.052,w*.044,h*.02);ctx.fillRect(x,h*.928,w*.044,h*.02)}
  ctx.save();ctx.globalAlpha=.13+Math.max(0,1-t*2)*.55;ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.restore();
 }
 if(state.template===2){
  ctx.strokeStyle='#fff9e8';ctx.lineWidth=w*.012;ctx.setLineDash([w*.018,w*.023]);ctx.lineDashOffset=-t*w*.24;
  ctx.strokeRect(w*.06,h*.05,w*.88,h*.90);ctx.setLineDash([]);
  for(let i=0;i<7;i++){const x=w*(.12+i*.12),y=h*(.12+Math.sin(t*2+i)*.014);ctx.fillStyle=i%2?'#fce8a3':'#ffe1e9';ctx.beginPath();ctx.arc(x,y,w*.009,0,7);ctx.fill()}
 }
 if(state.template===3){
  ctx.fillStyle='rgba(0,0,0,.46)';ctx.fillRect(0,h*.25,w,h*.26);
  const x=w*(t*.9-0.2);const shine=ctx.createLinearGradient(x-w*.15,0,x+w*.15,0);shine.addColorStop(0,'#fff0');shine.addColorStop(.5,'#fffb');shine.addColorStop(1,'#fff0');ctx.globalAlpha=.16*appearV611(t,.6,.3);ctx.fillStyle=shine;ctx.fillRect(0,0,w,h);ctx.globalAlpha=dec;
 }
 if(state.template===4){
  ctx.fillStyle='rgba(255,246,217,.76)';ctx.fillRect(w*.055,h*.055,w*.89,h*.14);
  ctx.strokeStyle='#f8ede1';ctx.lineWidth=w*.007;ctx.setLineDash([w*.012,w*.016]);ctx.lineDashOffset=t*w*.11;ctx.beginPath();ctx.moveTo(w*.16,h*.92);ctx.quadraticCurveTo(w*.4,h*.74,w*.80,h*.87);ctx.stroke();ctx.setLineDash([]);
  const stamp=appearV611(t,.43,.25);ctx.save();ctx.globalAlpha=stamp;ctx.translate(w*.8,h*.22);ctx.rotate(-.15);ctx.strokeStyle='#fff3d4';ctx.lineWidth=w*.008;ctx.strokeRect(-w*.08,-w*.08,w*.16,w*.16);ctx.restore();
 }
 if(state.template===5){ctx.fillStyle='rgba(255,255,255,.87)';ctx.fillRect(0,h*.67,w,h*.33);ctx.strokeStyle='#a88e78';ctx.lineWidth=w*.002;ctx.beginPath();ctx.moveTo(w*.10,h*.685);ctx.lineTo(w*(.10+.80*appearV611(t,.75,.60)),h*.685);ctx.stroke()}
 ctx.restore();
 ctx.textAlign='left';ctx.textBaseline='top';ctx.fillStyle=state.template===5?'#22362c':'#fff';
 ctx.shadowColor='rgba(0,0,0,.42)';ctx.shadowBlur=Math.max(9,w*.018);
 for(const [index,field] of ['title','place','time'].entries()){
  const layout=textLayout(ctx,w,h,field);if(!layout)continue;
  // Stagger title, place, and date; film diary reveals text progressively.
  const start=[.48,.76,.95][index]+(state.template===1?.14:0);
  const alpha=animated?appearV611(t,start,state.template===1?.23:.29):1;
  ctx.save();ctx.globalAlpha=alpha;
  const rise=animated?(1-alpha)*h*.014:0;
  layout.lines.forEach((line,i)=>{
    const shown=state.template===1&&animated?Array.from(line).slice(0,Math.floor(Array.from(line).length*appearV611(t,start,.35))).join(''):line;
    ctx.fillText(shown,layout.x,layout.y+i*layout.size*1.16+rise,w*.84)
  });ctx.restore();
 }
 ctx.shadowBlur=0;
 // Dissolve the cover gracefully into the first content frame.
 if(animated&&finish<1){ctx.globalAlpha=1-finish;ctx.fillStyle=state.template===5?'#fffdf6':'#151b22';ctx.fillRect(0,0,w,h)}
 ctx.restore();
}
function playCoverPreviewV611(){
 if(!preview)return;
 cancelAnimationFrame(motionPreviewFrameV611);
 const button=$('#coverMotionPreviewV611');button.disabled=true;
 const started=performance.now();
 const frame=now=>{
  const sec=Math.min(2,(now-started)/1000);
  drawScene(preview.getContext('2d'),preview.width,preview.height,sec);
  if(sec<2&&dialog?.open)motionPreviewFrameV611=requestAnimationFrame(frame);
  else {button.disabled=false;renderPreview()}
 };
 motionPreviewFrameV611=requestAnimationFrame(frame);
}
function renderPreview(){ if(!preview) return; const ctx=preview.getContext('2d'); drawScene(ctx,preview.width,preview.height); }
function setupDrag(){
 let dragging=null,offsetX=0,offsetY=0;
 const pointerCoord=e=>{const r=preview.getBoundingClientRect();return {x:(e.clientX-r.left)*preview.width/r.width,y:(e.clientY-r.top)*preview.height/r.height};};
 const getHit=(x,y)=>{
  const ctx=preview.getContext('2d');
  for(const key of ['time','place','title']){
   const b=textLayout(ctx,preview.width,preview.height,key);if(!b)continue;
   if(x>=b.x-22&&x<=b.x+b.width+22&&y>=b.y-22&&y<=b.y+b.height+22)return key;
  }
  return null;
 };
 preview.addEventListener('pointerdown',e=>{
   const pt=pointerCoord(e);const hit=getHit(pt.x,pt.y);if(!hit)return;
   dragging=hit;const b=textLayout(preview.getContext('2d'),preview.width,preview.height,hit);offsetX=pt.x-b.x;offsetY=pt.y-b.y;
   preview.classList.add('is-dragging');preview.setPointerCapture(e.pointerId);e.preventDefault();
 });
 preview.addEventListener('pointermove',e=>{
   if(!dragging)return;const pt=pointerCoord(e);
   const b=textLayout(preview.getContext('2d'),preview.width,preview.height,dragging);
   state.positions[dragging].x=Math.max(.03,Math.min(.97-b.width/preview.width,(pt.x-offsetX)/preview.width));
   state.positions[dragging].y=Math.max(.03,Math.min(.97-b.height/preview.height,(pt.y-offsetY)/preview.height));
   renderPreview();updatePoster();e.preventDefault();
 });
 for(const event of ['pointerup','pointercancel','lostpointercapture'])preview.addEventListener(event,()=>{dragging=null;preview.classList.remove('is-dragging');});
}
function syncInputs(){
 $('#coverFontSelectV568').value=state.font;
 $('#coverTitleInputV568').value=state.title;
 $('#coverPlaceInputV568').value=state.place;
 $('#coverTimeInputV568').value=state.time;
 $('#coverTitleSizeV568').value=state.titleSize; $('#coverTitleSizeTextV568').textContent=String(state.titleSize);
 $('#coverPlaceSizeV568').value=state.placeSize; $('#coverPlaceSizeTextV568').textContent=String(state.placeSize);
 $('#coverTimeSizeV568').value=state.timeSize; $('#coverTimeSizeTextV568').textContent=String(state.timeSize);
}
function setCover(item){
 buildDialog();
 if(!item||item.video)return;
 window.__momentCoverSelectedUrl=item.url;
 state.imageUrl=item.url;
 const img=new Image();
 img.onload=()=>{state.image=img; renderPreview(); updatePoster();};
 img.src=item.url;
 if(!state.title) state.title=($('#title')?.value||'').trim();
 if(!state.time) state.time=new Date().toISOString().slice(0,10).replace(/-/g,'.');
 $('#coverPickedNameV568').textContent='目前封面照片：'+(item.name||'未命名照片');
 syncInputs();fitCoverRatio(); renderPreview(); updatePoster();loadSelectedFont(); window.__momentRefreshMediaList?.();
 try{dialog.showModal();}catch{dialog.show();}
}
let coverCache=null,coverCacheKey='';
// V5.75: 24 deterministic transition recipes — one tailored to each story theme.
// No random state: preview, seek and recording generate the same frame at each time.
const COVER_TRANSITIONS=[
 'album','crayon','leaves','cloud','map','wave','petals','party',
 'window','time','romance','snapshot','film','cinema','neon','gallery',
 'magazine','plate','paw','sport','orbit','ink','lantern','farm'
];
const clamp01=v=>Math.min(1,Math.max(0,v));
function coverTransition(ctx,w,h,progress,themeId){
 const p=clamp01(progress),e=p*p*(3-2*p),type=COVER_TRANSITIONS[((Number(themeId)||0)%24+24)%24];
 const leave=(x,y)=>{ctx.translate(x,y)};
 const path=(points)=>{ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.clip()};
 const shrink=(factor,dx=0,dy=0)=>{ctx.translate(w/2+dx,h/2+dy);ctx.scale(factor,factor);ctx.translate(-w/2,-h/2)};
 // Retain exactly full-cover visibility at 1.25s and zero-cover at 2.0s.
 switch(type){
 case 'album': leave(-w*e*.6,-h*e*.12);ctx.rotate(-e*.08);ctx.globalAlpha=1-e;break;
 case 'crayon':{const stripe=w/8;ctx.beginPath();for(let i=0;i<8;i++){const remain=Math.max(0,(1-e*1.33+(i%3)*.11))*stripe;ctx.rect(i*stripe,0,remain,h)}ctx.clip();break;}
 case 'leaves':ctx.globalAlpha=1-e;shrink(1+e*.10,w*e*.06,-h*e*.08);break;
 case 'cloud':leave(0,-h*e*.7);ctx.globalAlpha=1-e*.35;break;
 case 'map':leave(w*e,0);shrink(1-e*.10);break;
 case 'wave':{ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,0);for(let x=w;x>=0;x-=w/24){const y=h*(1-e)+Math.sin(x/w*12*Math.PI+e*10)*h*.025;ctx.lineTo(x,y)}ctx.closePath();ctx.clip();break;}
 case 'petals':ctx.globalAlpha=1-e;leave(w*e*.16,-h*e*.24);ctx.rotate(e*.04);break;
 case 'party':shrink(1+e*.24);ctx.globalAlpha=1-e;break;
 case 'window':{const margin=e*w*.5;path([[margin,0],[w-margin,0],[w-margin,h],[margin,h]]);break;}
 case 'time':leave(-w*e,0);ctx.globalAlpha=1-e*.15;break;
 case 'romance':ctx.globalAlpha=1-e;shrink(1+e*.07);break;
 case 'snapshot':leave(w*e*.35,-h*e*.36);ctx.rotate(e*.16);ctx.globalAlpha=1-e;break;
 case 'film':leave(-w*e,0);break;
 case 'cinema':{const band=h*.5*e;path([[0,band],[w,band],[w,h-band],[0,h-band]]);break;}
 case 'neon':{const x=w*(1-e);path([[0,0],[x,0],[Math.max(0,x-w*.12),h],[0,h]]);break;}
 case 'gallery':shrink(1-e*.3);ctx.globalAlpha=1-e;break;
 case 'magazine':leave(-w*e*.8,0);ctx.rotate(-e*.03);break;
 case 'plate':{ctx.beginPath();ctx.rect(0,0,w,h);ctx.arc(w/2,h/2,Math.hypot(w,h)*e*.51,0,Math.PI*2,true);ctx.clip('evenodd');break;}
 case 'paw':shrink(1+e*.15,-w*e*.07,-h*e*.07);ctx.globalAlpha=1-e;break;
 case 'sport':{const x=w*(1-e);path([[0,0],[x,0],[Math.max(0,x-w*.25),h],[0,h]]);break;}
 case 'orbit':shrink(1+e*.3);ctx.rotate(e*.06);ctx.globalAlpha=1-e;break;
 case 'ink':{ctx.globalAlpha=1-e;ctx.filter=`blur(${Math.round(e*14)}px)`;break;}
 case 'lantern':leave(0,-h*e);ctx.globalAlpha=1-e*.14;break;
 case 'farm':{const segments=5;ctx.beginPath();for(let i=0;i<segments;i++){const y=i*h/segments;ctx.rect(0,y,w*Math.max(0,1-e+(i%2)*.045),h/segments+.5)}ctx.clip();break;}
 }
 // Guard against the final cover frame lingering as the first content frame.
 if(p>=.999)ctx.globalAlpha=0;
}
function paintIntoVideo(ctx,w,h,sec=0,themeId=0){
 if(!state.image||sec<0||sec>=2)return;
 ctx.save();
 drawScene(ctx,w,h,sec);
 // A brief, deterministic fade out at the end. Does not depend on FPS.
 if(sec>1.78){ctx.globalAlpha=easeV611((sec-1.78)/.22);ctx.fillStyle=state.template===5?'#fffdf6':'#141824';ctx.fillRect(0,0,w,h)}
 ctx.restore();
}

function getPosterDataUrl(){
 buildDialog(); renderPreview();
 try{return preview.toDataURL('image/png')}catch{return ''}
}
function updatePoster(){
 if(!state.image)return;
 const url=getPosterDataUrl(); if(!url)return;
 const video=$('#resultVideo'); if(video) video.poster=url;
 const result=$('#result');if(!result)return;
 let card=$('#coverResultCardV569');
 if(!card){card=document.createElement('div');card.id='coverResultCardV569';card.className='cover-result-card-v569';card.innerHTML='<img alt="影片分享封面"><div><strong>影片分享封面</strong><small>此封面顯示於影片開頭 2 秒；接收平台是否顯示封面依平台處理方式而定。</small></div>';result.insertBefore(card,result.firstChild)}
 card.querySelector('img').src=url;
}

function createShare(){
 const result=$('#result'); if(!result||$('#nativeShareVideo')) return;
 const btn=document.createElement('button'); btn.id='nativeShareVideo'; btn.type='button'; btn.className='primary'; btn.textContent='↗ 分享影片到 LINE／其他 App';
 const help=document.createElement('div'); help.id='shareHelp'; help.className='cover-help'; help.textContent='透過手機系統分享影片檔。LINE 接收者通常可直接點擊播放；Facebook 是否接受影片檔由 App 決定。';
 result.append(btn,help);
 btn.onclick=async()=>{
   const video=$('#resultVideo'); const src=video?.currentSrc||video?.src;
   if(!src){help.textContent='請先匯出完成再分享。';return}
   btn.disabled=true;
   try{
     const response=await fetch(src); if(!response.ok) throw Error('讀取匯出檔失敗');
     const blob=await response.blob(); const ext=blob.type.includes('mp4')?'mp4':'webm';
     const f=new File([blob],'拾光-'+new Date().toISOString().slice(0,10)+'.'+ext,{type:blob.type||'video/'+ext});
     if(navigator.canShare&&navigator.canShare({files:[f]})&&navigator.share){
       await navigator.share({files:[f],title:state.title||'拾光影片'});
       help.textContent='已開啟系統分享選單；請在 LINE 或其他 App 完成傳送。';
     }else{
       help.textContent='目前裝置或瀏覽器不支援直接分享此影片格式。請先下載影片，再從 LINE 的照片／影片入口傳送。';
       const u=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=u; a.download=f.name; document.body.append(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(u),6e4);
     }
   }catch(e){ if(e.name!=='AbortError') help.textContent='分享失敗：'+e.message+'。可改用下載影片。'; }
   finally{btn.disabled=false;}
 };
}
function watchResult(){
 const resultVideo=$('#resultVideo'); if(!resultVideo) return;
 resultVideo.addEventListener('ended',()=>{resultVideo.pause();resultVideo.currentTime=0;resultVideo.load();});
 new MutationObserver(()=>updatePoster()).observe(resultVideo,{attributes:true,attributeFilter:['src']});
}
function init(){
 buildDialog(); createShare(); watchResult();
 document.querySelector('#ratio')?.addEventListener('change',()=>{fitCoverRatio();updatePoster()});
 window.addEventListener('moment:cover-photo-removed',e=>{
  if(e.detail?.url!==state.imageUrl)return;
  state.image=null;state.imageUrl='';window.__momentCoverSelectedUrl=null;
  $('#resultVideo')?.removeAttribute('poster');$('#coverResultCardV569')?.remove();
  window.__momentRefreshMediaList?.();
 });
 window.addEventListener('moment:set-cover-photo',e=>setCover(e.detail?.item));
 window.MomentCover={setCover,renderPreview,getPosterDataUrl,paintIntoVideo,state,openDesigner:()=>{buildDialog();syncInputs();fitCoverRatio();renderPreview();if(!dialog.open)dialog.showModal()}};
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
