'use strict';
const RAW=[
['時光拾光旅程','生活與陪伴','#f1e9d7','#506e54','paper','立體相簿・溫暖日常','紙膠帶、日期卡、手繪葉片','散落相片、一大兩小、相片接管','紙張滑動與柔光；細線串起回憶','木吉他、鋼琴、輕打擊','打開相簿|走進現場|拼出故事|精彩互動|收藏回憶'],
['蠟筆童趣樂園','親子與成長','#fff2cc','#dd8051','crayon','畫紙上的小小冒險','蠟筆太陽、彩虹、星星','積木拼貼、畫框展開、輕彈入場','彩色筆觸揭露、手繪弧線','木琴、烏克麗麗、拍手','畫出標題|認識主角|一起遊戲|展示作品|揮手再見'],
['森林微光童話','旅行與自然','#dfe6cf','#3e624d','forest','穿過樹葉，遇見微光','蕨葉、枝條、微光粒子','葉片前景、錯落相框、慢速推近','葉影與林間柔光，霧色溶接','木笛、木吉他、柔和弦樂','走進森林|發現環境|展開探索|溫柔互動|微光散開'],
['夢幻雲端氣球','親子與成長','#e4edf5','#a881a2','cloud','把回憶輕輕放上雲端','雲朵、氣球、緞帶','漂浮卡片、高低錯落、主圖展開','雲層揭露、曲線飄移、柔亮天空','鋼片琴、鋼琴、弦樂','氣球升起|人物登場|雲端相簿|珍貴片刻|天空紀念牆'],
['旅行手帳地圖','旅行與自然','#eee7d7','#426577','map','每一站，都值得留下','路線、郵戳、車票、標籤','手帳雙頁、全景與細節並列','折頁滑動、路線延伸','輕快民謠、輕鼓','準備出發|第一站|沿途風景|旅途精華|回看旅程'],
['海風夏日假期','旅行與自然','#d6edf0','#388e9e','sea','讓照片帶著海風流動','浪花、太陽、海岸線','寬幅海景、雙欄明信片','水平波浪、水線擦拭、陽光','熱帶打擊、木吉他、貝斯','浪花開場|抵達海邊|夏日活動|慢看風景|夕陽合照'],
['四季花語','旅行與自然','#efebdc','#b57a65','flower','一張照片，一季風景','花瓣、枝葉、植物邊框','枝條展開、雙圖與四格季節窗','花瓣飄落、枝條延伸、斜陽','鋼琴、木吉他、弦樂','枝葉生長|環境細節|季節活動|情緒畫面|花語留白'],
['生日驚喜派對','親子與成長','#fff0dd','#cb755e','party','把最開心的瞬間放大','氣球、緞帶、紙花','禮物展開、照片牆、高潮滿版','圓形開場、紙花與慶祝光點','歡樂流行、拍手、鈴聲','打開禮物|主角登場|派對準備|許願時刻|留下祝福'],
['家的溫暖日常','生活與陪伴','#eae2d7','#92715a','home','平凡的日子，也閃閃發光','窗框、織紋、生活短線','完整畫面、雙畫面慢速交換','窗光移動、柔和交叉淡化','低音量鋼琴、木吉他','生活細節|日常活動|親密互動|安靜片刻|記住今天'],
['成長時光盒','親子與成長','#f0e9dd','#a58c5f','time','把每一段成長珍藏起來','時間刻度、節點、收藏卡','前後對照、相片堆疊','時間線延伸、日期卡滑入','漸進鋼琴與弦樂','打開盒子|早期回憶|成長片段|現在的你|前後對照'],
['浪漫花園誓言','情感與文化','#f4e7e5','#ac7e87','romance','讓溫柔的片刻慢慢盛開','花枝、花瓣、細緻金框','雙人主圖、細節三聯畫','柔光溶接、花瓣與紗帶曲線','鋼琴、弦樂、木吉他','花園開場|雙人回憶|重要互動|溫柔停留|紀念合照'],
['好友青春快拍','生活與陪伴','#efe9fa','#8f78b6','snap','一起笑，一起收藏青春','拍貼框、圈線、便條紙','四格拍貼、連拍序列','拍貼滑出、撕紙、手繪圈線','輕快流行、獨立搖滾','快拍開始|朋友登場|一起活動|歡笑片刻|合照定格'],
['復古膠卷日記','情感與文化','#ddd1b9','#796447','film','讓光陰停在底片裡','底片孔、沖印框、暖色顆粒','底片橫移、接觸印相表','膠卷滑動、淡淡漏光','爵士吉他、鼓刷、鍵盤','裝載底片|人物環境|回憶片段|主要畫面|最後一格'],
['電影預告片','節奏與想像','#222e35','#d7b379','cinema','生活，也有自己的電影感','大字標題、章節線、光束','全景與細節交替、重點滿版','短黑場、方向切換、光束','電影弦樂、低鼓、漸進配樂','精彩預告|交代環境|逐漸升溫|情緒高潮|片名落幕'],
['城市霓虹節奏','節奏與想像','#172534','#76d8c6','neon','沿著城市的光，找到節奏','霓虹線框、幾何節拍','直式分欄、斜切版面','發光線掃動、方向滑切','電子、Synthwave、節奏純音樂','霓虹亮起|走進城市|街頭節奏|夜色高潮|燈光收尾'],
['極簡質感畫廊','質感與紀錄','#efeee9','#515d57','gallery','用留白，讓作品說話','細框、編號、格線','單圖、雙聯、三聯畫','矩形遮罩、格線展開','簡約鋼琴、環境音樂','作品名稱|第一組作品|第二組作品|主作品|資訊停留'],
['潮流雜誌封面','質感與紀錄','#e9e2d5','#b85542','magazine','你的生活，就是封面故事','大字排版、頁碼、色塊','動態封面、跨頁、細節側欄','版面滑移、色塊擦拭','時尚節拍、輕浩室','封面登場|主題介紹|細節專頁|主要作品|封底短句'],
['美食風味日記','質感與紀錄','#f5e9d7','#ac654a','food','記錄每一口生活的滋味','菜單、餐具線稿、桌布格紋','主菜大圖、配料小格','圓盤開窗、菜單滑動','輕爵士、Bossa Nova、木吉他','成品亮相|食材環境|製作上桌|風味細節|共享餐桌'],
['寵物萌趣日記','生活與陪伴','#eeeada','#9a855b','pet','每個小表情，都值得重播','腳印、玩具、動態弧線','表情三連拍、主要動作滿版','腳印引路、圓角卡片滑動','撥弦、木琴、輕鼓','可愛登場|寵物日常|盡情玩耍|安靜陪伴|代表表情'],
['運動熱血時刻','節奏與想像','#242d2a','#d4e36c','sport','把努力，剪成高光時刻','斜切色塊、速度線、數字','三連拍、重點停格、動作滿版','方向切換、斜線擦拭','搖滾、電子、強鼓點','高光預告|準備出發|動作累積|完成瞬間|成果回看'],
['星際探索任務','節奏與想像','#1c2846','#99b7e6','space','出發，探索自己的小宇宙','星圖、軌道、任務介面','艙窗照片、軌道卡片','艙門開啟、軌道與星點','合成器、電子脈衝、弦樂','任務啟動|開始探索|主要活動|發現成果|任務完成'],
['東方水墨詩境','情感與文化','#e9e5db','#666e61','ink','一筆一景，留住詩意','竹葉、墨點、印章、紙紋','長卷展開、留白雙圖','筆觸擦拭、淡墨線條','古箏、笛、簫、輕打擊','落筆開場|環境細節|主題展開|作品停留|印章落款'],
['節慶燈火團圓','情感與文化','#eee1cf','#b44c41','festival','有燈火的地方，就有團圓','燈籠、暖光點、紀念卡','燈串相片牆、聚會滿版','圓形開窗、暖光串場','溫暖節慶配樂、輕打擊','燈火亮起|佈置準備|團聚活動|送上祝福|全體合照'],
['田野職人紀錄','質感與紀錄','#e7e6d3','#687851','farm','把每一步努力，清楚留下','工作標籤、細格線、田野線條','全景與細節、前後對照','格線展開、簡潔方向擦拭','穩定木吉他、鋼琴、低強度節奏','場域日期|工作之前|實際過程|成果比較|工作摘要']
];
const FUSION_THEME_ICONS=["crayon_594/crayon_20.webp","crayon_594/crayon_05.webp","crayon_594/crayon_01.webp","crayon_594/crayon_12.webp","crayon_594/crayon_14.webp","crayon_594/crayon_02.webp","crayon_594/crayon_03.webp","crayon_594/crayon_19.webp","crayon_594/crayon_16.webp","crayon_594/crayon_23.webp","crayon_594/crayon_06.webp","crayon_594/crayon_07.webp","crayon_594/crayon_13.webp","crayon_594/crayon_18.webp","crayon_594/crayon_24.webp","crayon_594/crayon_04.webp","crayon_594/crayon_11.webp","crayon_594/crayon_17.webp","crayon_594/crayon_09.webp","crayon_594/crayon_10.webp","crayon_594/crayon_22.webp","crayon_594/crayon_21.webp","crayon_594/crayon_15.webp","crayon_594/crayon_08.webp"];
// V5.95: the same local artwork powers the theme picker and the actual video canvas.
// Cache images once: never initiate a network request per animation frame.
const THEME_ART_IMAGES=FUSION_THEME_ICONS.map(rel=>{const im=new Image();im.decoding='async';im.src='assets/themes/'+rel;return im});
// V5.96: deterministic, theme-specific accents shared by preview and export.
// Each of 24 theme ids has a different motion signature; no frame-based randomness.
const THEME_MOTION_596=[
 ['album',.16,1],['confetti',.38,2],['leaves',.22,3],['balloons',.18,4],
 ['route',.25,5],['waves',.20,6],['petals',.21,7],['celebrate',.36,8],
 ['window',.10,9],['timeline',.14,10],['blossom',.19,11],['stickers',.40,12],
 ['filmstrip',.17,13],['spotlight',.13,14],['neon',.32,15],['gallery',.10,16],
 ['magazine',.28,17],['steam',.12,18],['pawprints',.27,19],['speedlines',.42,20],
 ['orbit',.25,21],['ink',.12,22],['lanterns',.22,23],['fields',.15,24]
];
function themeArtworkLayer(c,w,h,t,sec,duration,scene){
 const im=THEME_ART_IMAGES[t.id];if(!im||!im.complete||!im.naturalWidth)return;
 const reduced=!!document.querySelector('#reduced')?.checked;
 const opening=Math.max(0,1-sec/Math.max(.01,Math.min(2.2,duration*.16)));
 const ending=Math.max(0,1-(duration-sec)/Math.max(.01,Math.min(2.2,duration*.16)));
 const emphasis=Math.max(opening,ending);
 const [motion,speed,signature]=THEME_MOTION_596[t.id]||THEME_MOTION_596[0];
 const phase=reduced?0:sec*speed;
 c.save();
 // Restrained edge palette. Never paint a solid overlay over the whole photograph.
 const wash=c.createLinearGradient(0,0,w,h);
 wash.addColorStop(0,t.accent+'00');wash.addColorStop(.72,t.accent+'05');wash.addColorStop(1,t.accent+'16');
 c.fillStyle=wash;c.fillRect(0,0,w,h);
 const edge=Math.min(w,h),r=edge*.015;
 const n=reduced?3:8;
 for(let i=0;i<n;i++){
  const u=(i+.5)/n, drift=Math.sin(phase*2+i*2.4), fall=((sec*speed*.18+i/n)%1);
  let x=w*(.04+u*.92),y=h*(.08+.82*(i%2));
  const left=i%2===0; x=left?w*(.04+u*.18):w*(.80+u*.16);
  c.save();c.globalAlpha=reduced?.17:.17+emphasis*.12;c.strokeStyle=t.accent;c.fillStyle=t.accent;
  c.lineWidth=Math.max(1,edge*.003);c.lineCap='round';
  switch(motion){
   case 'waves': case 'route': case 'timeline': case 'orbit': case 'ink': case 'fields':{
    c.beginPath();
    const base=motion==='waves'?.86:motion==='orbit'?.15:motion==='fields'?.91:.12;
    const yy=h*base+(i%3)*r*2;
    for(let j=0;j<=24;j++){const xx=w*j/24,dy=Math.sin(j*.44+phase+i*.6)*r*(motion==='waves'?1.5:.45); j?c.lineTo(xx,yy+dy):c.moveTo(xx,yy+dy)}
    c.stroke();break;
   }
   case 'spotlight':case 'window':case 'gallery':case 'magazine':case 'filmstrip':{
    c.strokeRect(x,y, r*(motion==='magazine'?3:2),r*(motion==='filmstrip'?3:2));
    if(motion==='filmstrip')c.fillRect(x+r*.4,y+r*.4,r*.35,r*.35);
    break;
   }
   case 'neon':case 'speedlines':{
    c.beginPath();c.moveTo(x-r*2,y);c.lineTo(x+r*(2+Math.abs(drift)),y-r*(motion==='speedlines'?.8:.1));c.stroke();break;
   }
   case 'leaves':case 'petals':case 'blossom':case 'confetti':case 'celebrate':case 'stickers':{
    y=h*((fall+.08*(i%2))%1);x+=drift*r*2;
    c.translate(x,y);c.rotate(i+phase);c.beginPath();
    if(['leaves','petals','blossom'].includes(motion))c.ellipse(0,0,r*.65,r*1.25,0,0,Math.PI*2);
    else c.rect(-r*.5,-r*.5,r,r);
    c.fill();break;
   }
   case 'balloons':case 'lanterns':case 'steam':{
    y=h*(1-fall);x+=drift*r*2;
    c.beginPath();c.ellipse(x,y,r*.8,r*1.2,0,0,Math.PI*2);c.stroke();
    c.beginPath();c.moveTo(x,y+r);c.lineTo(x+drift*r,y+r*3);c.stroke();break;
   }
   case 'pawprints':{
    c.beginPath();c.arc(x,y,r*.45,0,Math.PI*2);c.fill();
    for(let k=0;k<3;k++){c.beginPath();c.arc(x+(k-1)*r*.6,y-r*.8,r*.2,0,Math.PI*2);c.fill()}break;
   }
   default:{ // album: subtle hand-drawn corner markers
    c.beginPath();c.moveTo(x,y+r*2);c.lineTo(x,y);c.lineTo(x+r*2,y);c.stroke();
   }
  }
  c.restore();
 }
 // Distinct per-theme postcard choreography at beginning/end, not all footage.
 if(emphasis>.06){
  c.save();c.globalAlpha=Math.min(.64,emphasis*(reduced?.24:.50));
  const pw=w*(w<h?.29:.21),ph=pw*.68,m=w*.045;
  const slide=reduced?0:(1-emphasis)*w*.07;
  const x=signature%2?w-pw-m+slide:m-slide;
  const y=h*(.07+(signature%3)*.025)+(reduced?0:Math.sin(phase*1.7)*r*.25);
  c.fillStyle='#fff9ec';c.shadowColor='#0003';c.shadowBlur=w*.012;
  c.fillRect(x-w*.008,y-w*.008,pw+w*.016,ph+w*.016);
  c.shadowBlur=0;c.drawImage(im,x,y,pw,ph);c.restore();
 }
 c.restore();
}

const themes=RAW.map((r,i)=>({id:i,name:r[0],cat:r[1],bg:r[2],accent:r[3],kind:r[4],desc:r[5],decor:r[6],layout:r[7],transition:r[8],music:r[9],story:r[10].split('|')}));
const $=s=>document.querySelector(s), canvas=$('#canvas'),ctx=canvas.getContext('2d');let current=0,category='全部',media=[],playing=true,time=0,last=performance.now(),orderSeed=0,exporting=false,exportSession=null;const demos=[];window.MomentMediaItems=()=>media;
function round(c,x,y,w,h,r=12){c.beginPath();c.roundRect?c.roundRect(x,y,w,h,r):c.rect(x,y,w,h)}
function ellipse(c,x,y,rx,ry,color){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill()}
function path(c,points,color,width=2){c.strokeStyle=color;c.lineWidth=width;c.beginPath();points.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.stroke()}
function demo(i){let a=document.createElement('canvas');a.width=800;a.height=1000;let c=a.getContext('2d');let skies=['#d8e5dc','#eadbc3','#c6dce6','#e6d6d0'];c.fillStyle=skies[i%4];c.fillRect(0,0,800,1000);ellipse(c,590,190,95,95,'#f4e6b3');for(let j=0;j<3;j++){c.fillStyle=['#afc1a2','#829f89','#4e786a'][j];c.beginPath();c.moveTo(0,550+j*130);c.bezierCurveTo(240,200+j*180,580,850-j*80,800,460+j*130);c.lineTo(800,1000);c.lineTo(0,1000);c.fill()}c.fillStyle='#e9d6ac';c.beginPath();c.moveTo(370,1000);c.bezierCurveTo(700,720,170,660,490,560);c.bezierCurveTo(210,720,800,730,650,1000);c.fill();for(let j=0;j<9;j++){let x=(j*137+i*47)%800,y=400+(j*79)%400;path(c,[[x,y],[x,y+150]],'#466758',9);ellipse(c,x,y,36,70,j%2?'#688969':'#7c986d')}let px=340+i*40,py=735;c.fillStyle=i%2?'#d28e6a':'#c8a350';round(c,px-32,py,64,95,25);c.fill();ellipse(c,px,py-17,25,28,'#ebc6a2');ellipse(c,px,py-35,40,10,'#f0deb3');path(c,[[px-17,py+90],[px-23,py+145]],'#344f4a',14);path(c,[[px+17,py+90],[px+25,py+145]],'#344f4a',14);return a}
for(let i=0;i<4;i++)demos.push(demo(i));
function imgAt(i){return media.length?media[((i+orderSeed)%media.length+media.length)%media.length].el:demos[((i+orderSeed)%4+4)%4]}
function drawPhoto(c,img,x,y,w,h,rot=0,zoom=1,frame=true){c.save();c.translate(x+w/2,y+h/2);c.rotate(rot);if(frame){c.shadowColor='#182d3926';c.shadowBlur=16;c.shadowOffsetY=7;c.fillStyle='#fffcf3';c.fillRect(-w/2-8,-h/2-8,w+16,h+24);c.shadowColor='transparent'}c.beginPath();c.rect(-w/2,-h/2,w,h);c.clip();let iw=img.videoWidth||img.naturalWidth||img.width,ih=img.videoHeight||img.naturalHeight||img.height;if(iw&&ih){let scale=Math.min(w/iw,h/ih);c.fillStyle='#dce2d6';c.fillRect(-w/2,-h/2,w,h);let dw=iw*scale*zoom,dh=ih*scale*zoom;c.drawImage(img,-dw/2,-dh/2,dw,dh)}c.restore()}
function decorations(c,t,w,h,s,density){let k=t.kind,a=t.accent;c.save();c.strokeStyle=a;c.fillStyle=a;c.lineWidth=2;let count=Math.floor(12*density);for(let i=0;i<count;i++){let x=((i*79+25)%100)/100*w,y=((i*43+8)%100)/100*h,phase=s*.4+i;
if(['forest','flower','romance','ink','farm'].includes(k)){c.globalAlpha=.22;c.save();c.translate(x,y);c.rotate(i+Math.sin(phase)*.12);path(c,[[0,0],[0,65]],a,2);for(let j=0;j<3;j++){ellipse(c,-8,j*18,11,5,a);ellipse(c,8,j*18+8,11,5,a)}c.restore();if(k==='romance'||k==='flower'){c.globalAlpha=.4;ellipse(c,x,y+Math.sin(phase)*15,5,9,a)}}
else if(['cloud','sea'].includes(k)){c.globalAlpha=.25;if(k==='cloud'){ellipse(c,x,y+Math.sin(phase)*8,35,16,'#ffffff');ellipse(c,x-12,y-12+Math.sin(phase)*8,15,18,'#ffffff')}else{c.beginPath();for(let j=0;j<12;j++){let xx=j*w/11,yy=y+Math.sin(j*.9+phase)*12;j?c.lineTo(xx,yy):c.moveTo(xx,yy)}c.stroke()}}
else if(['party','snap','crayon'].includes(k)){c.globalAlpha=.5;c.save();c.translate(x,y+Math.sin(phase)*12);c.rotate(phase*.2);c.fillStyle=['#de9c67','#d2b66e','#90b6a1','#a39ac3'][i%4];if(i%3===0){c.fillRect(-3,-6,6,12)}else{c.beginPath();for(let j=0;j<10;j++){let r=j%2?4:10,ang=j*Math.PI/5; j?c.lineTo(Math.cos(ang)*r,Math.sin(ang)*r):c.moveTo(r,0)}c.closePath();c.fill()}c.restore()}
else if(['space','neon','sport','cinema'].includes(k)){c.globalAlpha=.35;if(k==='space'){ellipse(c,x,y,1.5+Math.sin(phase),1.5,'#fff');c.beginPath();c.ellipse(w/2,h/2,w*.46,h*.34,phase*.05,0,Math.PI*2);c.stroke()}else{path(c,[[x-w*.1,y],[x+w*.12,y-(k==='sport'?45:0)]],a,1+i%3)}}
else if(k==='pet'){c.globalAlpha=.25;ellipse(c,x,y,8,7,a);for(let j=0;j<3;j++)ellipse(c,x-8+j*8,y-12,3,4,a)}
else if(k==='festival'){c.globalAlpha=.45;let yy=45+Math.sin(i)*20;path(c,[[x,0],[x,yy]],a);ellipse(c,x,yy+14,14,18,a);path(c,[[x,yy+32],[x,yy+42]],a)}
else if(k==='film'){c.globalAlpha=.5;c.fillRect(5,i*h/count,9,16);c.fillRect(w-14,i*h/count,9,16)}
else if(['gallery','magazine','food','map','time','home','paper'].includes(k)){c.globalAlpha=.14;path(c,[[0,i*h/count],[w,i*h/count]],a,1);if(k==='food'||k==='farm')path(c,[[i*w/count,0],[i*w/count,h]],a,1)}
}
c.globalAlpha=.45;if(['map','time','paper'].includes(k)){c.setLineDash([5,7]);c.beginPath();c.moveTo(w*.08,h*.15);c.bezierCurveTo(w*.9,h*.2,w*.1,h*.7,w*.85,h*.9);c.stroke()}if(k==='home'){c.globalAlpha=.08;c.fillStyle='#fff';c.save();c.translate(Math.sin(s*.1)*25,0);c.rotate(-.25);c.fillRect(w*.1,0,w*.2,h*1.5);c.fillRect(w*.4,0,w*.2,h*1.5);c.restore()}c.restore()}
const CHOREO=[[4,8,5,0,2],[6,10,8,2,0],[0,9,8,7,0],[4,9,10,8,0],[5,8,6,3,0],[0,10,8,5,0],[9,2,8,1,0],[6,8,10,2,0],[0,8,9,2,0],[1,5,8,4,0],[0,9,8,4,0],[2,10,8,5,0],[5,0,8,5,0],[0,3,8,1,0],[3,10,8,5,0],[7,8,2,9,0],[6,9,10,8,0],[0,2,8,7,0],[4,10,8,1,0],[3,0,10,8,0],[9,4,3,8,0],[7,0,8,5,0],[4,2,9,8,0],[0,8,2,7,0]];
const LAYOUT_NAMES=['滿版推拉','雙欄推拉','四格匯聚','斜角分割','相片疊放','底片滑動','上下拼貼','雜誌留白','三格變形','畫廊開展','橫帶交錯'];
const PROFILES=themes.map(t=>{let energetic=['party','snap','crayon','neon','sport'].includes(t.kind),cinematic=['cinema','film','space','magazine'].includes(t.kind);return {curve:energetic?'snappy':cinematic?'cinema':'gentle',text:energetic?'pop':['map','time','ink','farm'].includes(t.kind)?'type':'reveal',transitions:energetic?[1,3,4,5]:cinematic?[0,5,1,2]:[0,2,0,1]}});
let planKey='',plan=null,lastShot=-1,beatRevision=0;
/* V5.2 deterministic storyboard director: no server-side recognition. */
function visualMetric(m){
 if(m.metric)return m.metric;
 try{const ca=document.createElement('canvas');ca.width=64;ca.height=64;const c=ca.getContext('2d',{willReadFrequently:true});c.drawImage(m.el,0,0,64,64);const a=c.getImageData(0,0,64,64).data;let light=0,contrast=0,color=0,prev=0;
 for(let i=0;i<a.length;i+=16){let lum=a[i]*.2126+a[i+1]*.7152+a[i+2]*.0722;light+=lum;contrast+=Math.abs(lum-prev);color+=Math.max(a[i],a[i+1],a[i+2])-Math.min(a[i],a[i+1],a[i+2]);prev=lum}
 const n=a.length/16; const brightness=light/n,edges=contrast/n,chromatic=color/n;
 return m.metric={brightness,edges,chromatic,score:Math.max(0,100-Math.abs(brightness-130)*.3)+Math.min(40,edges*.5)+Math.min(15,chromatic*.15)};
 }catch{return m.metric={brightness:125,edges:25,chromatic:25,score:80}}
}
/* V5.5: local saliency estimation. No face recognition or cloud upload. */
function framingAnalysis(m){
 if(m.framing)return m.framing;
 const el=m.el, iw=el.videoWidth||el.naturalWidth||el.width||1, ih=el.videoHeight||el.naturalHeight||el.height||1;
 const fallback={x:.5,y:.5,confidence:0,wide:iw/ih>1.5,portrait:ih/iw>1.3};
 try{
  const cv=document.createElement('canvas');cv.width=48;cv.height=48;
  const cx=cv.getContext('2d',{willReadFrequently:true});cx.drawImage(el,0,0,48,48);
  const pix=cx.getImageData(0,0,48,48).data;let sum=0,xx=0,yy=0,energy=0;
  const lum=(x,y)=>{const i=(y*48+x)*4;return .2126*pix[i]+.7152*pix[i+1]+.0722*pix[i+2]};
  for(let y=3;y<45;y+=2)for(let x=3;x<45;x+=2){
   const gradient=Math.abs(lum(x+1,y)-lum(x-1,y))+Math.abs(lum(x,y+1)-lum(x,y-1));
   const centerBias=Math.max(.32,1-Math.hypot((x-24)/35,(y-24)/35)*.7);
   const weight=Math.max(0,gradient-16)*centerBias;sum+=weight;xx+=weight*x;yy+=weight*y;energy+=gradient;
  }
  if(sum<100)return m.framing=fallback;
  const confidence=Math.min(1,sum/18000);
  return m.framing={...fallback,x:.5+(xx/sum/48-.5)*confidence*.65,y:.5+(yy/sum/48-.5)*confidence*.65,confidence};
 }catch{return m.framing=fallback}
}
/* V5.7: optional browser-native face detection. Never sends photos to a server. */
let faceDetectorInstance=null;
async function scanFaces(m){
 if(m.video){m.faceState='影片未掃描';return}
 if(!('FaceDetector' in window)){m.faceState='瀏覽器不支援人臉偵測';return}
 try{
  if(!faceDetectorInstance)faceDetectorInstance=new FaceDetector({fastMode:true,maxDetectedFaces:10});
  const faces=await faceDetectorInstance.detect(m.el);
  const iw=m.el.naturalWidth||1,ih=m.el.naturalHeight||1;
  const boxes=faces.map(f=>f.boundingBox).filter(Boolean);
  if(boxes.length){
   const minX=Math.min(...boxes.map(b=>b.x)),minY=Math.min(...boxes.map(b=>b.y));
   const maxX=Math.max(...boxes.map(b=>b.x+b.width)),maxY=Math.max(...boxes.map(b=>b.y+b.height));
   const midX=(minX+maxX)/2/iw,midY=(minY+maxY)/2/ih;
   const f=framingAnalysis(m);
   m.framing={...f,x:Math.max(.08,Math.min(.92,midX)),y:Math.max(.08,Math.min(.92,midY)),confidence:1,faceCount:boxes.length,faceBox:{x:minX/iw,y:minY/ih,w:(maxX-minX)/iw,h:(maxY-minY)/ih}};
   m.profile=null;m.faceState=boxes.length+' 張人臉 · 優先置中';
  }else m.faceState='未偵測到人臉 · 使用畫面特徵';
 }catch(e){m.faceState='人臉偵測無法使用 · 使用畫面特徵'}
}
/* V5.6 local feature labels: heuristic image properties, NOT semantic image recognition. */
function materialProfile(m){
 if(m.profile)return m.profile;
 const el=m.el,iw=el.videoWidth||el.naturalWidth||el.width||1,ih=el.videoHeight||el.naturalHeight||el.height||1;
 const metric=visualMetric(m),focus=framingAnalysis(m),ratio=iw/ih;
 const shape=ratio>1.55?'橫幅':ratio<.75?'直幅':'標準比例';
 const lighting=metric.brightness<88?'低光':metric.brightness>180?'明亮':'一般光線';
 const color=metric.chromatic>62?'鮮豔':'柔和色彩';
 const detail=metric.edges>46?'高細節':'低至中細節';
 const motion=m.video?'影片':'照片';
 return m.profile={shape,lighting,color,detail,motion,wide:ratio>1.55,portrait:ratio<.75,dark:metric.brightness<88,busy:metric.edges>46,highColor:metric.chromatic>62,focus};
}
function chooseMaterialMode(mode,index){
 if(!media.length)return mode;
 const m=media[(index+orderSeed)%media.length],p=materialProfile(m);
 // Wide scenes benefit from an unbroken frame; vertical photographs can use split layouts.
 if(p.wide&&[2,3,8,10].includes(mode))return index%2?7:0;
 if(p.portrait&&mode===0&&media.length>=2)return index%2?1:6;
 if(p.dark&&mode===3)return 4;
 if(p.busy&&mode===2)return 9;
 return mode;
}
/* V5.8: explainable on-device shot selection. No semantic classification or server AI. */
function qualitySignals(m){
 const f=materialProfile(m),v=visualMetric(m),face=framingAnalysis(m);
 const exposure=Math.max(0,1-Math.abs(v.brightness-132)/135);
 const sharpness=Math.min(1,v.edges/58),color=Math.min(1,v.chromatic/76);
 const score=Math.round(100*(.43*exposure+.29*sharpness+.16*color+.12*Math.min(1,face.confidence||0)));
 return {score,exposure,sharpness,color,orientation:f.shape};
}
function arrangeStoryMaterials(items){
 const ranked=items.map((m,i)=>({m,i,q:qualitySignals(m)})).sort((a,b)=>b.q.score-a.q.score||a.i-b.i);
 if(ranked.length<3)return items.slice();
 // Strongest images open and close; alternate orientations within the middle chapters.
 const first=ranked.shift(),last=ranked.shift(),result=[first];
 while(ranked.length){
  const previous=result[result.length-1];let index=0,best=-Infinity;
  for(let i=0;i<ranked.length;i++){
   const candidate=ranked[i];const score=candidate.q.score*.55+(candidate.q.orientation!==previous.q.orientation?19:0)+Math.min(8,Math.abs(candidate.q.color-previous.q.color)*12);
   if(score>best){best=score;index=i}
  }
  result.push(ranked.splice(index,1)[0]);
 }
 result.push(last);return result.map(x=>x.m);
}
function frameCropOffset(excess,focus){return Math.max(-excess/2,Math.min(excess/2,(.5-focus)*excess));}
function storyboardModes(count, themeId, cuts, beats=[]){
 const base=CHOREO[themeId], energetic=PROFILES[themeId].curve==='snappy';
 const dynamic=count>=5?[0,1,8,4,2,6,9,10,3,5,7]:count>=3?[0,1,8,4,6,9,7]:count===2?[0,1,6,4,7,5]:[0,4,5,7,9];
 const n=cuts.length-1,output=[];
 for(let i=0;i<n;i++){
  const phase=n<4?(i===0?'opening':i===n-1?'ending':'middle'):i===0?'opening':i===n-1?'ending':i>=Math.floor(n*.58)&&i<Math.ceil(n*.87)?'highlight':'middle';
  let choices=phase==='opening'?[0,7,9,4]:phase==='ending'?[0,4,5,9]:phase==='highlight'?[8,2,10,3,1,6]:dynamic;
  choices=choices.filter(x=>dynamic.includes(x)); if(!choices.length)choices=dynamic;
  const local=beats.filter(b=>b.time>=cuts[i]&&b.time<cuts[i+1]).length;
  const offset=(themeId*3+orderSeed+i*7+local*(energetic?2:1))%choices.length;
  let mode=choices[offset];
  if(i&&mode===output[i-1])mode=choices[(offset+1)%choices.length]||mode;
  if(i===0&&n>2)mode=base[0]===0?0:choices[0];
  output.push(chooseMaterialMode(mode,i));
 }
 return output;
}

function getPlan(){let duration=Number($('#duration').value),start=Number($('#musicStart').value)||0,loop=false,key=[duration,media.length,$('#pace').value,$('#beatSync').checked,start,loop,beatRevision,current,orderSeed,media.map(m=>m.name).join(',')].join('|');if(plan&&key===planKey)return plan;let beats=music&&$('#beatSync').checked?MomentEngine.projectOnsets(music.onsets||[],start,music.buffer.duration,loop,duration):[];let cuts=MomentEngine.makeCuts(duration,media.length,Number($('#pace').value),beats);const manual=window.__momentManualCuts;if(manual&&manual.sceneCount===cuts.length-1&&manual.points?.length===cuts.length-2){const minStep=.5;let candidate=[0,...manual.points.map(x=>Math.round(x*duration*10)/10),duration];if(candidate.every((v,i)=>i===0||v-candidate[i-1]>=minStep)){cuts=candidate;}}plan={beats,cuts,modes:storyboardModes(media.length,current,cuts,beats)};planKey=key;return plan}
function activeScene(sec=time,t=current){let o=MomentEngine.plannedScene(sec,getPlan().cuts);o.mode=(t===current&&getPlan().modes[o.index]!==undefined)?getPlan().modes[o.index]:CHOREO[t][o.index%5];o.slots=[1,2,4,2,3,3,3,2,3,3,3][o.mode];return o}
function selectedCurve(t){return $('#curve').value==='auto'||!$('#curve').value?PROFILES[t.id].curve:$('#curve').value}
function drawShots(){let p=getPlan();$('#shots').replaceChildren();p.cuts.slice(0,-1).forEach((start,i)=>{let b=document.createElement('button');b.innerHTML=(i+1)+' · '+LAYOUT_NAMES[p.modes[i]]+'<span>'+start.toFixed(1)+'–'+p.cuts[i+1].toFixed(1)+' 秒</span>';b.onclick=()=>{time=start+.001;startMusic();syncVideos(true)};b.disabled=exporting;$('#shots').append(b)});let shifted=p.cuts.slice(1,-1).filter(t=>p.beats.some(b=>Math.abs(b.time-t)<.001)).length;$('#shotInfo').textContent=(p.cuts.length-1)+' 段分鏡 · 開場／敘事／高潮／結尾'+(shifted?' · '+shifted+' 個切換貼近估計重拍':' · 原編排節奏');lastShot=-1}
function refreshPlan(){planKey='';drawShots();wave();syncVideos(true)}
function composition(c,w,h,t,scene,thumb=false){let u=Math.min(1,scene.local/scene.length),quiet=$('#reduced').checked,move=quiet?0:Number($('#motion').value),ease=x=>MomentEngine.curve(x,selectedCurve(t)),v=ease(u),mode=scene.mode,n=scene.index;let margin=w*.045;
function tile(i,x,y,tw,th,rotation=0){let im=thumb?demos[(i+n)%4]:imgAt(n+i),iw=im.videoWidth||im.naturalWidth||im.width,ih=im.videoHeight||im.naturalHeight||im.height;c.save();
// V5.4: independently stagger multi-photo entrances; avoid clipping important content in contain mode.
let multi=mode!==0 && !quiet && !thumb, entry=multi?Math.max(0,Math.min(1,(u-i*.075)/.32)):1;
let eased=entry*entry*(3-2*entry), drift=(1-eased)*Math.min(tw*.13,w*.075);
c.globalAlpha*=multi?(.35+.65*eased):1;
c.translate(x+tw/2+(i%2?drift:-drift),y+th/2+(1-eased)*h*.025);
c.rotate(rotation+(multi?(1-eased)*(i%2?-.025:.025):0));c.beginPath();c.rect(-tw/2,-th/2,tw,th);c.clip();c.fillStyle=t.bg;c.fillRect(-tw/2,-th/2,tw,th);if(iw&&ih){let cover=thumb||!media.length||$('#fit').value==='cover',scale=(cover?Math.max:Math.min)(tw/iw,th/ih);
 const m=thumb||!media.length?null:media[((n+i+orderSeed)%media.length+media.length)%media.length];
 const focus=m?framingAnalysis(m):{x:.5,y:.5,wide:false,confidence:0};
 // Conservative movement for panoramic images: fewer edge losses.
 const safeMotion=focus.wide?.52:1;
 const z=cover?1+move*.075*safeMotion*(i%2?v:1-v):1;
 let dw=iw*scale*z,dh=ih*scale*z;
 let dx=cover?frameCropOffset(Math.max(0,dw-tw),focus.x):0;
 let dy=cover?frameCropOffset(Math.max(0,dh-th),focus.y):0;
 if(cover){
  const pan=Math.sin(u*Math.PI*2)*(Math.max(0,dw-tw)*.035)*Math.min(move,1);
  dx=Math.max(-(dw-tw)/2,Math.min((dw-tw)/2,dx+pan));
 }else{dw=Math.min(dw,tw);dh=Math.min(dh,th)}
 c.drawImage(im,-dw/2+dx,-dh/2+dy,dw,dh)}c.restore()}
c.fillStyle=t.bg;c.fillRect(0,0,w,h);
if(mode===0){tile(0,0,0,w,h)}
if(mode===1){let split=w*(.35+.3*(quiet?.5:v)),gap=w*.009;tile(0,0,0,split-gap,h);tile(1,split+gap,0,w-split-gap,h)}
if(mode===2){let grow=quiet?0:ease(Math.max(0,(u-.65)/.35));let gw=w/2,gh=h/2;for(let i=3;i>=0;i--){let x=(i%2)*gw,y=Math.floor(i/2)*gh;tile(i,x*(1-grow),y*(1-grow),gw+(w-gw)*grow-3,gh+(h-gh)*grow-3)}}
if(mode===3){let edge=w*(.4+.2*v),tilt=w*.18;c.save();c.beginPath();c.moveTo(0,0);c.lineTo(edge+tilt,0);c.lineTo(edge-tilt,h);c.lineTo(0,h);c.clip();tile(0,0,0,w,h);c.restore();c.save();c.beginPath();c.moveTo(edge+tilt,0);c.lineTo(w,0);c.lineTo(w,h);c.lineTo(edge-tilt,h);c.clip();tile(1,0,0,w,h);c.restore();path(c,[[edge+tilt,0],[edge-tilt,h]],t.accent,4)}
if(mode===4){decorations(c,t,w,h,scene.local,1);for(let i=2;i>=0;i--){let shift=(i-1)*w*.13,drift=quiet?0:Math.sin(u*3+i)*w*.018;let x=w*.15+shift+drift,y=h*.14+i*h*.055,tw=w*.7,th=h*.62;c.save();c.translate(x+tw/2,y+th/2);c.rotate((i-1)*.09);c.fillStyle='#fff9ee';c.shadowColor='#0003';c.shadowBlur=15;c.fillRect(-tw/2-7,-th/2-7,tw+14,th+25);c.restore();tile(i,x,y,tw,th,(i-1)*.09)}}
if(mode===5){let slide=quiet?.3:v;for(let i=0;i<3;i++){let x=w*.12+i*w*.86-slide*w*.82;tile(i,x,h*.12,w*.77,h*.72)}path(c,[[0,h*.1],[w,h*.1]],t.accent,2)}
if(mode===6){let g=8;tile(0,0,0,w,h*.5);tile(1,0,h*.5+g,w*.5-g,h*.5-g);tile(2,w*.5+g,h*.5+g,w*.5-g,h*.5-g);if(!quiet){c.globalAlpha=.13*(1-u);c.fillStyle=t.accent;c.fillRect(0,0,w,h);c.globalAlpha=1}}
if(mode===7){tile(0,w*.08,h*.09,w*.75,h*.61);tile(1,w*.58,h*.54,w*.34,h*.30);path(c,[[w*.1,h*.77],[w*.48,h*.77]],t.accent,2)}
if(mode===8){let f=quiet?.15:ease(Math.max(0,Math.min(1,(u-.18)/.45))),g=quiet?0:ease(Math.max(0,Math.min(1,(u-.7)/.3))),gap=5;
let initial=[[0,0,w/3-gap,h],[w/3+gap,0,w/3-gap*2,h],[w*2/3+gap,0,w/3-gap,h]],middle=[[0,0,w*.63-gap,h],[w*.63+gap,0,w*.37-gap,h*.5-gap],[w*.63+gap,h*.5+gap,w*.37-gap,h*.5-gap]];
for(let i=2;i>=0;i--){let r=initial[i].map((a,j)=>a+(middle[i][j]-a)*f);let end=i===0?[0,0,w,h]:[w,0,1,h];r=r.map((a,j)=>a+(end[j]-a)*g);if(r[2]>1)tile(i,...r)}}
if(mode===9){let f=quiet?.5:v,gap=w*.025;let rects=[[w*.14,h*.11,w*.72,h*.73],[w*.14,h*.11,w*.72,h*.73],[w*.14,h*.11,w*.72,h*.73]],ends=[[w*.06,h*.08,w*.56,h*.76],[w*.65,h*.08,w*.29,h*.36],[w*.65,h*.48,w*.29,h*.36]];for(let i=2;i>=0;i--){let r=rects[i].map((a,j)=>a+(ends[i][j]-a)*f);tile(i,...r,(1-f)*(i-1)*.055)}}
if(mode===10){for(let i=0;i<3;i++){let entry=quiet?1:ease(Math.min(1,Math.max(0,(u-i*.09)/.42))),x=(i%2?1:-1)*(1-entry)*w;tile(i,x,i*h/3,w,h/3-4)}let take=quiet?0:ease(Math.max(0,(u-.72)/.28));if(take>0){c.save();c.globalAlpha=take;tile(1,0,0,w,h);c.restore()}}
if(!thumb){c.save();c.globalAlpha=.65;decorations(c,t,w,h,quiet?0:scene.local,Number($('#density').value)*.5);c.restore()}
}
const previousLayer=document.createElement('canvas'),nextLayer=document.createElement('canvas');
function render(c,w,h,t,sec,thumb=false){let scene=activeScene(sec,t.id);if(thumb){scene={...scene,index:1,local:1,length:4,mode:CHOREO[t.id][0]};composition(c,w,h,t,scene,true);return}
for(let layer of [previousLayer,nextLayer])if(layer.width!==w||layer.height!==h){layer.width=w;layer.height=h}
let nc=nextLayer.getContext('2d');composition(nc,w,h,t,scene);let duration=Number($('#duration').value),reduced=$('#reduced').checked,transition=Math.min(.65,scene.length*.22),q=reduced?1:Math.min(1,scene.local/transition),e=q*q*(3-2*q),kind=PROFILES[t.id].transitions[scene.index%PROFILES[t.id].transitions.length];
c.save();if(scene.index>0&&q<1){let prev=activeScene(scene.start-.001,t.id);composition(previousLayer.getContext('2d'),w,h,t,prev);c.drawImage(previousLayer,0,0);c.save();if(kind===0)c.globalAlpha=e;if(kind===1)c.translate(w*(1-e),0);if(kind===2){c.beginPath();c.arc(w/2,h/2,Math.hypot(w,h)*e/2,0,Math.PI*2);c.clip()}if(kind===3){c.beginPath();for(let i=0;i<8;i++){let band=w/8;c.rect(i*band,(i%2?1:-1)*(1-e)*h,band+1,h)}c.clip()}if(kind===4){c.translate(w/2,h/2);c.rotate((1-e)*.12);c.scale(.75+.25*e,.75+.25*e);c.translate(-w/2,-h/2);c.globalAlpha=e}if(kind===5){c.beginPath();c.moveTo(-w,0);c.lineTo(-w+3*w*e,0);c.lineTo(-w+3*w*e-w*.3,h);c.lineTo(-w,h);c.clip()}c.drawImage(nextLayer,0,0);c.restore()}else c.drawImage(nextLayer,0,0);
// V5.4 music-reactive hand-drawn highlight (same frames during preview and export).
if(!reduced && music && $('#beatSync').checked){
 const beats=getPlan().beats;
 let nearest=Infinity;for(const b of beats){let d=Math.abs(sec-b.time);if(d<nearest)nearest=d;}
 const pulse=Math.max(0,1-nearest/.18);
 if(pulse>0){c.save();c.globalAlpha=pulse*.16;c.strokeStyle=t.accent;c.lineWidth=Math.max(2,w*.012);c.lineCap='round';
 const inset=w*.022;c.strokeRect(inset,inset,w-2*inset,h-2*inset);
 for(let k=0;k<5;k++){let x=w*(.12+k*.19),y=h*(.07+(k%2)*.025);c.beginPath();c.moveTo(x-5,y);c.lineTo(x+5,y);c.moveTo(x,y-5);c.lineTo(x,y+5);c.stroke()}
 c.restore();}
}
themeArtworkLayer(c,w,h,t,sec,duration,scene);
MomentAtmosphere.draw(c,w,h,t,sec,duration,{foreground:$('#foreground').checked,light:$('#light').checked,opening:$('#opening').checked,ending:$('#ending').checked,strength:Number($('#atmosphere').value)||1,reduced},(i,x,y,pw,ph)=>drawPhoto(c,imgAt(i),x,y,pw,ph,0,1,false),media.length);
let shade=c.createLinearGradient(0,h*.65,0,h);shade.addColorStop(0,'#10292100');shade.addColorStop(1,'#102921bb');c.fillStyle=shade;c.fillRect(0,h*.65,w,h*.35);
let style=$('#textMotion').value==='auto'||!$('#textMotion').value?PROFILES[t.id].text:$('#textMotion').value,scope=$('#textScope').value,first=scene.index===0,lastScene=scene.index===getPlan().cuts.length-2||($('#ending').checked&&sec>duration-Math.min(3.2,duration*.16));
if(scope==='ends'&&!first&&!lastScene){c.restore();return}
let main=$('#title').value.trim()||t.name,story=t.story[Math.min(4,Math.floor(sec/duration*5))],text=scope==='story'&&!first&&!lastScene?story:main;
let intro=reduced||style==='none'?1:MomentEngine.curve(Math.min(1,scene.local/Math.min(.7,scene.length*.28)),'gentle'),outro=reduced||style==='none'||($('#ending').checked&&lastScene)?1:Math.min(1,(scene.length-scene.local)/Math.min(.3,scene.length*.15));c.globalAlpha=Math.max(0,Math.min(intro,outro));let x=w*.075,y=h*.88,size=w*.062;c.fillStyle='#fffdf5';c.textAlign='left';c.font=`600 ${size}px sans-serif`;while(c.measureText(text).width>w*.85&&size>10){size--;c.font=`600 ${size}px sans-serif`}
c.save();if(style==='reveal'&&!reduced){c.beginPath();c.rect(x,h*.77,w*.87,h*.15);c.clip();y+=(1-intro)*h*.1}if(style==='pop'&&!reduced){c.translate(x,y);let z=.7+.3*intro;c.scale(z,z);x=0;y=0}let shown=style==='type'&&!reduced?Array.from(text).slice(0,Math.ceil(Array.from(text).length*intro)).join(''):text;c.fillText(shown,x,y);c.restore();c.font=`${w*.025}px sans-serif`;c.globalAlpha*=.8;c.fillText((scene.index+1).toString().padStart(2,'0')+' / '+(scope==='story'?t.name:story),w*.078,h*.93);c.restore()

}
function drawCards(){const q=$('#search').value.trim().toLowerCase(),list=themes.filter(t=>(category==='全部'||t.cat===category)&&[t.name,t.desc,t.cat,t.decor].join(' ').toLowerCase().includes(q));$('#cards').replaceChildren();$('#empty').hidden=!!list.length;list.forEach(t=>{let b=document.createElement('button');b.className='card'+(current===t.id?' active':'');b.setAttribute('aria-pressed',current===t.id);b.innerHTML=`<div class="card-visual"><canvas width="400" height="300" aria-hidden="true"></canvas><img class="crayon-icon" src="assets/themes/${FUSION_THEME_ICONS[t.id]}" alt="${t.name} 蠟筆插畫" loading="lazy" onerror="this.style.display='none'"><span class="selected-pill" aria-hidden="true">✓ 已選擇</span></div><div class="meta"><small>${String(t.id+1).padStart(2,'0')}</small><b>${t.name}</b><p>${t.desc}</p></div>`;render(b.querySelector('canvas').getContext('2d'),400,300,t,8,true);b.onclick=()=>{select(t.id);if(innerWidth<700 && !document.querySelector('#v608Themes, #v607Themes')?.open)$('.editor').scrollIntoView({behavior:'smooth',block:'start'})};$('#cards').append(b)})}
function select(id){current=id;time=0;if(typeof stopMusic==='function'){stopMusic();startMusic()}$('#selTitle').textContent=themes[id].name;$('#selDesc').textContent=themes[id].desc;$('#selNum').textContent=String(id+1).padStart(2,'0')+' / 24';let t=themes[id];$('#sceneDescription').textContent=MomentAtmosphere.descriptions[MomentAtmosphere.family(t.kind)];$('#specs').innerHTML=[['裝飾語彙',t.decor],['構圖與拼貼',t.layout],['光影與轉場',t.transition],['適合搭配的音樂',t.music]].map(x=>`<article><b>${x[0]}</b><p>${x[1]}</p></article>`).join('');$('#timeline').innerHTML=t.story.map((x,i)=>`<div><b>0${i+1}</b>${x}</div>`).join('');drawCards();drawShots();window.dispatchEvent(new CustomEvent('moment:theme-changed',{detail:{theme:themes[id],id}}));const wf=$('#workflowHint'); if(wf) wf.textContent='已選擇「'+t.name+'」。下一步：請選擇音樂，或直接開啟 Openverse 音樂庫。'; if(media.length){window.dispatchEvent(new CustomEvent('moment:theme-picked',{detail:{name:t.name}}))}}
['全部',...new Set(themes.map(t=>t.cat))].forEach(cat=>{let b=document.createElement('button');b.textContent=cat;b.className=cat==='全部'?'active':'';b.onclick=()=>{category=cat;$('#filters').querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));drawCards()};$('#filters').append(b)});
$('#search').oninput=drawCards;$('#help').onclick=()=>$('#dialog').showModal();$('#closeDialog').onclick=()=>$('#dialog').close();
function syncVideos(force=false){let scene=activeScene(),ids=new Set(Array.from({length:scene.slots},(_,i)=>media.length?(scene.index+i+orderSeed)%media.length:-1));media.forEach((m,i)=>{if(!m.video)return;if(!ids.has(i)){m.el.pause();m.activeScene=-1;return}let desired=Number.isFinite(m.el.duration)&&m.el.duration>0?scene.local%m.el.duration:0;if(!m.el.seeking&&(force||m.activeScene!==scene.index||Math.abs(m.el.currentTime-desired)>.35))m.el.currentTime=desired;m.activeScene=scene.index;if(playing&&m.el.paused&&!m.pending){m.pending=true;m.el.play().catch(()=>{}).finally(()=>m.pending=false)}else if(!playing)m.el.pause()})}
$('#play').onclick=async()=>{playing=!playing;last=performance.now();$('#play').textContent=playing?'❚❚':'▶';if(playing){try{await ensureAudio();startMusic()}catch{$('#status').textContent='音訊無法啟動，請再點一次播放。'}}else stopMusic();syncVideos(true)};
$('#seek').oninput=e=>{time=Number(e.target.value);syncVideos(true);startMusic()};
// V6.06: user-chosen duration always wins over automatic planning.
let durationWasManuallySelected=false;
function recommendedStorySeconds(items){
 if(!items.length)return 30;
 const estimated=items.reduce((sum,item)=>{
  if(!item.video)return sum+3.6;
  const len=Number(item.el?.duration);
  return sum+(Number.isFinite(len)&&len>0?Math.max(3,Math.min(9,len)):5);
 },2.5);
 const choices=[15,20,25,30,40,45,60,75,90,105,120];
 return choices.reduce((best,v)=>Math.abs(v-estimated)<Math.abs(best-estimated)?v:best,choices[0]);
}
function autoFitStoryDuration(){
 if(durationWasManuallySelected||window.__momentRestoring||!media.length)return false;
 const recommended=recommendedStorySeconds(media),control=$('#duration');
 if(Number(control.value)===recommended)return false;
 control.value=String(recommended);
 $('#seek').max=String(recommended);time=0;planKey='';
 if(window.__momentManualCuts)window.__momentManualCuts=null;
 refreshPlan();startMusic();syncVideos(true);
 document.dispatchEvent(new CustomEvent('moment:duration-auto',{detail:{seconds:recommended,count:media.length}}));
 return true;
}
$('#duration').onchange=()=>{durationWasManuallySelected=true;time=0;$('#seek').max=$('#duration').value;refreshPlan();startMusic();syncVideos(true)};
$('#pace').onchange=refreshPlan;$('#beatSync').onchange=refreshPlan;
$('#ratio').onchange=()=>{const sizes={portrait:[540,960],landscape:[960,540],square:[720,720]};[canvas.width,canvas.height]=sizes[$('#ratio').value]};
$('#shuffle').onclick=()=>{if(media.length>1){const scored=media.map((m,i)=>({m,i,s:visualMetric(m).score}));scored.sort((a,b)=>b.s-a.s);const ordered=[];while(scored.length){ordered.push(scored.shift().m);if(scored.length)ordered.push(scored.pop().m)}media=ordered;orderSeed++;drawMedia()}else orderSeed++;time=0;startMusic();syncVideos(true);$('#status').textContent='已依畫面品質調整素材順序；可長按右側握把拖曳修正。'};
function drawMedia(){
 const list=$('#mediaList');list.replaceChildren();
 media.forEach((m,i)=>{
  const row=document.createElement('div');row.className='media media-thumb-row';
  const thumb=document.createElement(m.video?'video':'img');
  thumb.className='media-thumb';thumb.src=m.url;thumb.setAttribute('aria-label',m.name+' 縮圖');
  if(m.video){thumb.muted=true;thumb.playsInline=true;thumb.preload='metadata';thumb.setAttribute('aria-hidden','true');thumb.addEventListener('loadedmetadata',()=>{if(Number.isFinite(thumb.duration)&&thumb.duration>.2)try{thumb.currentTime=Math.min(.2,thumb.duration/2)}catch{}},{once:true})}
  else{thumb.loading='lazy';thumb.alt=m.name;}
  const info=document.createElement('div');info.className='media-thumb-info';
  const seq=document.createElement('span');seq.className='media-thumb-index';seq.textContent=String(i+1).padStart(2,'0');
  const name=document.createElement('span');name.className='media-thumb-name';name.textContent=m.name;name.title=m.name;
  const meta=document.createElement('span');meta.className='media-thumb-meta';meta.textContent=(m.video?'影片 · ':'照片 · ')+materialProfile(m).shape;
  info.append(seq,name,meta);
  const actions=document.createElement('div');actions.className='media-thumb-actions';
  const del=document.createElement('button');del.type='button';del.className='media-delete-v570';
  del.textContent='刪除';del.setAttribute('aria-label','刪除 '+m.name);
  del.onclick=()=>{if(window.__momentCoverSelectedUrl===m.url)window.dispatchEvent(new CustomEvent('moment:cover-photo-removed',{detail:{url:m.url}}));if(m.video)m.el.pause();URL.revokeObjectURL(m.url);media.splice(i,1);time=0;planKey='';drawMedia();startMusic();syncVideos(true)};
  actions.append(del);
  if(!m.video){
   const coverBtn=document.createElement('button');
   coverBtn.type='button';
   coverBtn.className='media-cover-setter';
   coverBtn.textContent=(window.__momentCoverSelectedUrl===m.url?'封面照片 ✓':'設為封面照片');
   coverBtn.setAttribute('aria-label','將 '+m.name+' 設為封面照片');
   coverBtn.onclick=()=>{
    window.dispatchEvent(new CustomEvent('moment:set-cover-photo',{detail:{item:m,index:i}}));
   };
   actions.append(coverBtn);
  }
  // V5.70: immediate pointer drag from a dedicated handle with floating ghost,
  // edge autoscroll, and stable pointer capture. Page scrolling remains native elsewhere.
  const handle=document.createElement('button');handle.type='button';handle.className='media-grip-v560';
  handle.textContent='☰';handle.setAttribute('aria-label','拖曳 '+m.name+' 調整順序');handle.title='按住拖曳排序';
  let pointerId=null,originY=0,originX=0,targetIndex=i,dragging=false,ghost=null,frame=0,clientY=0;
  const scroller=()=>{let el=list;while(el&&el!==document.body){const style=getComputedStyle(el);if(el.scrollHeight>el.clientHeight+8&&['auto','scroll'].includes(style.overflowY))return el;el=el.parentElement}return null};
  const renderTarget=()=>{const rows=[...list.querySelectorAll('.media-thumb-row')];const others=rows.filter(r=>r!==row);let before=0;for(const r of others){const rect=r.getBoundingClientRect();if(clientY>rect.top+rect.height/2)before++}targetIndex=before;rows.forEach(r=>r.classList.remove('media-drop-target-v560'));(others[before]||null)?.classList.add('media-drop-target-v560');if(!others[before])row.classList.add('media-target-end-v570');else row.classList.remove('media-target-end-v570')};
  const follow=()=>{if(!dragging)return; if(ghost)ghost.style.transform=`translate3d(0,${clientY-originY}px,0)`;const sc=scroller();const box=sc?sc.getBoundingClientRect():{top:0,bottom:window.innerHeight};const edge=80;let delta=0;if(clientY>box.bottom-edge)delta=Math.min(20,(clientY-(box.bottom-edge))*.33);else if(clientY<box.top+edge)delta=-Math.min(20,((box.top+edge)-clientY)*.33);if(delta){if(sc)sc.scrollTop+=delta;else window.scrollBy(0,delta)}renderTarget();frame=requestAnimationFrame(follow)};
  const end=(commit)=>{if(pointerId===null)return;const wasDragging=dragging;dragging=false;cancelAnimationFrame(frame);frame=0;const id=pointerId;pointerId=null;try{if(handle.hasPointerCapture(id))handle.releasePointerCapture(id)}catch{};ghost?.remove();ghost=null;row.classList.remove('media-dragging-v560','media-target-end-v570');list.querySelectorAll('.media-drop-target-v560').forEach(r=>r.classList.remove('media-drop-target-v560'));document.body.classList.remove('is-sorting-v570');if(commit&&wasDragging&&targetIndex!==i){const[item]=media.splice(i,1);media.splice(targetIndex,0,item);time=0;planKey='';drawMedia();startMusic();syncVideos(true);$('#status').textContent='已將 '+item.name+' 移至第 '+(targetIndex+1)+' 個位置。'}};
  handle.addEventListener('pointerdown',e=>{if(pointerId!==null||exporting||(e.pointerType==='mouse'&&e.button!==0))return; e.preventDefault();pointerId=e.pointerId;originY=clientY=e.clientY;originX=e.clientX;targetIndex=i;handle.setPointerCapture(e.pointerId);dragging=true;const rect=row.getBoundingClientRect();ghost=row.cloneNode(true);ghost.classList.add('media-ghost-v570');ghost.removeAttribute('id');Object.assign(ghost.style,{position:'fixed',left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px',margin:'0',pointerEvents:'none',zIndex:'9999'});document.body.append(ghost);row.classList.add('media-dragging-v560');document.body.classList.add('is-sorting-v570');frame=requestAnimationFrame(follow)});
  handle.addEventListener('pointermove',e=>{if(e.pointerId!==pointerId)return;clientY=e.clientY;e.preventDefault()});
  handle.addEventListener('pointerup',e=>{if(e.pointerId===pointerId)end(true)});
  handle.addEventListener('pointercancel',()=>end(false));
  handle.addEventListener('lostpointercapture',()=>{if(pointerId!==null)end(false)});
  handle.addEventListener('click',e=>e.preventDefault());
  if(!m.video && window.__momentCoverSelectedUrl===m.url){
    row.classList.add('cover-selected-row-v569');
    const tag=document.createElement('span');tag.className='cover-selected-badge-v569';tag.textContent='★ 封面';info.prepend(tag);
  }
  row.append(thumb,info,actions,handle);list.append(row);
 });
 $('#sample').hidden=media.length>0;drawShots();
}

window.__momentRefreshMediaList=drawMedia;
/* V5.8 opt-in: rearranges actual media array so preview and export agree. */
let originalStoryOrder=null;
$('#storyOptimize').onclick=()=>{
 if(media.length<3){$('#status').textContent='請先加入至少 3 個素材再使用智慧排序。';return}
 originalStoryOrder=media.slice();media=arrangeStoryMaterials(media);orderSeed=0;time=0;
 $('#storyRestore').disabled=false;planKey='';drawMedia();startMusic();syncVideos(true);
 const lead=qualitySignals(media[0]);$('#storyReason').textContent='已將 '+media.length+' 個素材排成故事順序；開場素材品質估計 '+lead.score+'/100。可還原或手動上下移動。';
 $('#status').textContent='V5.8 已更新素材順序；預覽和匯出使用同一順序。此為畫面特徵啟發式排序，請自行檢查故事先後。';
};
$('#storyRestore').onclick=()=>{if(!originalStoryOrder)return;media=originalStoryOrder.filter(m=>media.includes(m)).concat(media.filter(m=>!originalStoryOrder.includes(m)));originalStoryOrder=null;orderSeed=0;time=0;$('#storyRestore').disabled=true;$('#storyReason').textContent='已還原排序；可手動調整順序。';planKey='';drawMedia();startMusic();syncVideos(true)};

function autoOptimizeStory(reason='素材已加入，已自動智慧排序。'){
 if(media.length<3){$('#storyReason').textContent='素材少於 3 個時不自動排序；可直接選擇主題與音樂。';return false}
 originalStoryOrder=media.slice();media=arrangeStoryMaterials(media);orderSeed=0;time=0;
 $('#storyRestore').disabled=false;planKey='';drawMedia();startMusic();syncVideos(true);
 const lead=qualitySignals(media[0]);$('#storyReason').textContent='已將 '+media.length+' 個素材排成故事順序；開場素材品質估計 '+lead.score+'/100。可還原或手動上下移動。';
 $('#status').textContent=reason+' 開場素材品質估計 '+lead.score+'/100。';window.dispatchEvent(new CustomEvent('moment:story-sorted',{detail:{count:media.length}}));
 return true;
}

$('#upload').onclick=()=>$('#files').click();$('#files').onchange=async e=>{let errors=[],files=[...e.target.files];$('#upload').disabled=true;$('#export').disabled=true;for(const f of files){if(media.length>=30){errors.push('本版每次最多 30 個素材');break}let video=f.type.startsWith('video/');if(!video&&!f.type.startsWith('image/')){errors.push(f.name);continue}let url=URL.createObjectURL(f),el=document.createElement(video?'video':'img');try{await new Promise((resolve,reject)=>{let timer=setTimeout(()=>reject(new Error('timeout')),12000);el[video?'onloadeddata':'onload']=()=>{clearTimeout(timer);resolve()};el.onerror=()=>{clearTimeout(timer);reject(new Error('unsupported'))};if(video){el.muted=true;el.loop=true;el.playsInline=true;el.preload='auto'}el.src=url});const item={name:f.name,url,el,video,metric:null,file:f};media.push(item);void scanFaces(item).then(()=>{drawMedia();refreshPlan()})}catch{URL.revokeObjectURL(url);errors.push(f.name)}}orderSeed=0;time=0;drawMedia();startMusic();syncVideos(true);drawCards();const autoSorted=window.__momentRestoring?false:autoOptimizeStory('素材已加入，並已自動智慧排序。');const durationAdjusted=autoFitStoryDuration();const wf=$('#workflowHint');if(wf) wf.textContent='照片已加入'+(autoSorted?'並完成智慧排序':'')+(durationAdjusted?'，自動建議片長 '+$('#duration').value+' 秒':'')+'。下一步：請選擇蠟筆主題，再選擇音樂。';$('#upload').disabled=false;$('#export').disabled=false;e.target.value='';document.dispatchEvent(new CustomEvent('moment:media-import-finished',{detail:{errors}}));if(errors.length){$('#status').textContent='部分素材無法讀取：'+errors.join('、')+'。其餘素材已加入。'}else if(!autoSorted){$('#status').textContent=`已加入 ${media.length} 個素材。素材少於 3 個時不自動排序，請直接選擇主題與音樂。`;window.dispatchEvent(new CustomEvent('moment:story-sorted',{detail:{count:media.length}}))} };
function download(blob,name){let u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),60000)}
$('#save').onclick=()=>download(new Blob([JSON.stringify({version:'5.8',theme:themes[current],title:$('#title').value,duration:Number($('#duration').value),ratio:$('#ratio').value,density:Number($('#density').value),pace:Number($('#pace').value),reducedMotion:$('#reduced').checked,materials:media.map(m=>({name:m.name,type:m.video?'video':'image',features:materialProfile(m),faceState:m.faceState||'尚未完成'})),music:music?{name:music.name,start:Number($('#musicStart').value),volume:Number($('#volume').value),loop:false,fade:$('#fadeMusic').checked}:null,atmosphere:{foreground:$('#foreground').checked,light:$('#light').checked,opening:$('#opening').checked,ending:$('#ending').checked,strength:Number($('#atmosphere').value)},curve:$('#curve').value,textMotion:$('#textMotion').value,textScope:$('#textScope').value,beatSync:$('#beatSync').checked,cuts:getPlan().cuts,motion:Number($('#motion').value),fit:$('#fit').value,note:'設定檔不含素材；本版不提供設定檔還原。'},null,2)],{type:'application/json'}),'moment-storyboard.json');
let audioCtx=null,audioGain=null,audioDest=null,music=null,musicSource=null,musicAnchor=null,resultURL=null;
async function ensureAudio(){if(!music)return;if(!audioCtx){let AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error('no audio');audioCtx=new AC();audioGain=audioCtx.createGain();audioDest=audioCtx.createMediaStreamDestination();audioGain.connect(audioCtx.destination);audioGain.connect(audioDest)}if(audioCtx.state!=='running')await audioCtx.resume()}
function stopMusic(){if(musicSource){try{musicSource.stop()}catch{}musicSource.disconnect();musicSource=null}musicAnchor=null}
function startMusic(){stopMusic();if(!music||!playing||!audioCtx||audioCtx.state!=='running')return;let offset=MomentEngine.audioOffset(time,Number($('#musicStart').value),music.buffer.duration,false);musicAnchor={audio:audioCtx.currentTime,timeline:time};if(offset===null)return;musicSource=audioCtx.createBufferSource();musicSource.buffer=music.buffer;musicSource.loop=false;musicSource.loopStart=Number($('#musicStart').value);musicSource.loopEnd=music.buffer.duration;musicSource.connect(audioGain);musicSource.start(0,offset);updateVolume()}
/* V5.77: use the same media-time envelope during preview and recording.
   The fade begins with the 2-second cover, and ends smoothly at the film end. */
function musicFadeEnvelope(t,duration){
 if(!$('#fadeMusic').checked)return 1;
 const start=Math.min(.85,duration*.12);
 const end=Math.min(1.8,duration*.18);
 const smooth=x=>{x=Math.min(1,Math.max(0,x));return x*x*(3-2*x)};
 return Math.min(smooth(t/Math.max(.01,start)),smooth((duration-t)/Math.max(.01,end)));
}
function updateVolume(){
 if(audioGain&&audioCtx){
   const target=Math.max(0,Math.min(1,Number($('#volume').value)/100))*musicFadeEnvelope(time,Number($('#duration').value));
   audioGain.gain.setTargetAtTime(target,audioCtx.currentTime,.018);
 }
 $('#volText').textContent=$('#volume').value+'%';
}
function wave(){let c=$('#wave').getContext('2d'),w=600,h=80;c.clearRect(0,0,w,h);if(!music)return;let data=music.buffer.getChannelData(0);c.strokeStyle='#567b5d';c.lineWidth=2;for(let x=0;x<w;x+=3){let start=Math.floor(x/w*data.length),end=Math.floor((x+3)/w*data.length),max=0;for(let j=start;j<end;j+=Math.max(1,Math.floor((end-start)/100)))max=Math.max(max,Math.abs(data[j]));c.beginPath();c.moveTo(x,h/2-max*h*.45);c.lineTo(x,h/2+max*h*.45);c.stroke()}c.strokeStyle='#c28a49';c.lineWidth=1;for(let mark of music.onsets||[]){let x=mark.time/music.buffer.duration*w;c.beginPath();c.moveTo(x,0);c.lineTo(x,12);c.stroke()}}
// V5.37: one authoritative importer shared by music library and local file picker.
window.momentImportAudioDirect=async function(blob,title){
 if(!blob || typeof blob.arrayBuffer!=='function' || !(Number(blob.size)>0))throw new Error('已下載音檔沒有可讀取的內容');
 // A Blob originating in a same-origin iframe may have a different realm constructor.
 // Re-wrap it in the editor realm instead of requiring cross-realm instanceof.
 blob=new Blob([blob],{type:blob.type||'audio/mpeg'});
 if(blob.size>60*1024*1024)throw new Error('音樂檔案超過 60 MB');
 const AC=window.AudioContext||window.webkitAudioContext;
 if(!AC)throw new Error('此瀏覽器不支援音訊解碼');
 if(!audioCtx){audioCtx=new AC();audioGain=audioCtx.createGain();audioDest=audioCtx.createMediaStreamDestination();audioGain.connect(audioCtx.destination);audioGain.connect(audioDest)}
 const decoded=await audioCtx.decodeAudioData(await blob.arrayBuffer());
 if(!decoded||!Number.isFinite(decoded.duration)||decoded.duration<.2)throw new Error('歌曲無法解碼');
 const name=String(title||'音樂').trim();
 stopMusic();music={name,buffer:decoded,onsets:[],file:blob};beatRevision++;
 $('#musicName').textContent=name+' · '+MomentEngine.formatTime(decoded.duration);
 $('#musicStart').value=0;$('#musicStart').disabled=true;$('#loopMusic').checked=false;
 $('#musicRemove').disabled=false;
 wave();
 if(window.MomentTimeline?.replaceClips)window.MomentTimeline.replaceClips([{name,buffer:decoded,at:0,offset:0,len:Math.min(Number($('#duration').value)||30,decoded.duration),vol:1}]);
 const song=document.querySelector('#fullsongName');if(song)song.textContent=name;
 const lane=document.querySelector('#audioLaneNameV525');if(lane)lane.textContent=name+' · '+MomentEngine.formatTime(decoded.duration);
 document.dispatchEvent(new Event('moment:music-import-finished'));
 document.dispatchEvent(new CustomEvent('moment:music-track-ready',{detail:{name,duration:decoded.duration}}));
 startMusic();showExportReadiness();
 $('#status').textContent='✓ 已加入中央音樂軸：'+name;
 return {name,duration:decoded.duration};
};
$('#musicAdd').onclick=()=>$('#musicFile').click();$('#musicFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;if(f.size>60*1024*1024){$('#status').textContent='請選擇小於 60 MB 的音檔，避免手機記憶體不足。';e.target.value='';return}$('#musicAdd').disabled=true;$('#export').disabled=true;try{let AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error('no audio');if(!audioCtx){audioCtx=new AC();audioGain=audioCtx.createGain();audioDest=audioCtx.createMediaStreamDestination();audioGain.connect(audioCtx.destination);audioGain.connect(audioDest)}/* Decode immediately even if this iframe-triggered import does not give the parent a playback gesture. */ if(audioCtx.state!=='running')void audioCtx.resume().catch(()=>{});let buffer=await audioCtx.decodeAudioData(await f.arrayBuffer());if(buffer.duration<.2)throw Error('short');stopMusic();music={name:f.name,buffer,onsets:[],file:f};beatRevision++;$('#beatStatus').textContent='分析音訊重拍中…';analyzeMusic(music);$('#musicName').textContent=f.name+' · '+MomentEngine.formatTime(buffer.duration);$('#musicStart').value=0;$('#musicStart').max=Math.max(0,buffer.duration-.1).toFixed(1);$('#musicStart').disabled=true;$('#loopMusic').checked=false;$('#musicRemove').disabled=false;wave();if(window.MomentTimeline){window.MomentTimeline.replaceClips([{name:f.name,buffer,at:0,offset:0,len:Math.min(Number($('#duration').value)||30,buffer.duration),vol:1}]);}startMusic();$('#status').textContent='✓ 已下載的整首歌曲加入中央音樂軸：'+f.name+'。影片結束時停止播放。'}catch(err){$('#status').textContent='音樂加入失敗：'+(err?.message||'請確認音檔格式與瀏覽器支援')+'。';console.error('[Moment Music]',err)}finally{$('#musicAdd').disabled=false;$('#export').disabled=false;e.target.value='';document.dispatchEvent(new Event('moment:music-import-finished'))}};
$('#volume').oninput=updateVolume;$('#musicStart').onchange=()=>{let max=music?Math.max(0,music.buffer.duration-.1):0;$('#musicStart').value=Math.max(0,Math.min(max,Number($('#musicStart').value)||0));refreshPlan();startMusic()};$('#loopMusic').onchange=()=>{refreshPlan();startMusic()};$('#fadeMusic').onchange=()=>{updateVolume();$('#status').textContent=$('#fadeMusic').checked?'已啟用柔和音樂起始與片尾淡出（預覽及匯出一致）。':'已關閉音樂淡入淡出。'};
$('#musicRemove').onclick=()=>{stopMusic();music=null;beatRevision++;refreshPlan();$('#beatStatus').textContent='加入配樂後，自動估計重拍。';$('#musicName').textContent='尚未加入音樂';$('#musicStart').value=0;$('#musicStart').disabled=true;$('#musicRemove').disabled=true;wave()};
$('#expand').onclick=()=>{let expanded=$('.editor').classList.toggle('expanded');document.body.classList.toggle('preview-open',expanded);$('#expand').textContent=expanded?'↙ 縮小':'⛶ 放大'};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('.editor').classList.contains('expanded'))$('#expand').click()});
let exportControlsSnapshot=null;
function setBusy(b){exporting=b;if(b){exportControlsSnapshot=new Map([...document.querySelectorAll('button,input,select')].map(el=>[el,el.disabled]));exportControlsSnapshot.forEach((_,el)=>el.disabled=true)}else if(exportControlsSnapshot){exportControlsSnapshot.forEach((wasDisabled,el)=>{if(el.isConnected)el.disabled=wasDisabled});exportControlsSnapshot=null}$('#cancelExport').disabled=!b;$('#exportProgress').hidden=!b;if(!b){if(music&&music.pendingOnsets){music.onsets=music.pendingOnsets;delete music.pendingOnsets;beatRevision++;$('#beatStatus').textContent='重拍分析完成，可重新預覽。';refreshPlan()}$('#musicStart').disabled=!music;$('#musicRemove').disabled=!music;drawMedia()}}
function stopPlayback(){playing=false;stopMusic();syncVideos();$('#play').textContent='▶'}
function closeResult(){window.__momentLastExportBlob=null;
$('#resultDownload').removeAttribute('href');$('#resultDownload').removeAttribute('download');
$('#resultVideo').pause();$('#resultVideo').removeAttribute('src');$('#resultVideo').load();if(resultURL)URL.revokeObjectURL(resultURL);resultURL=null;$('#result').hidden=true}
$('#closeResult').onclick=closeResult;
/* V5.82 export diagnostics: count main-thread frame stalls during recording. */
let exportFrameStats=null,exportValidationPending=false,exportClockStart=null,exportPreparationCancelled=false;
function finishExportValidation(){exportValidationPending=false;const btn=$('#export');if(btn)btn.disabled=false;}
function cancelExport(message){exportPreparationCancelled=true;if(exportSession){exportSession.cancelled=message;if(exportSession.state!=='inactive')exportSession.stop()}else if(exporting){$('#status').textContent='正在中止匯出準備…'}stopPlayback()}
$('#cancelExport').onclick=()=>cancelExport('已取消匯出，素材與設定保留。');
$('#export').onclick=async()=>{if(exportValidationPending||exporting)return;const check=checkExportReady();if(!check.ok){$('#status').textContent='匯出前檢查：'+check.message;return}if(!canvas.captureStream||!window.MediaRecorder){$('#status').textContent='此瀏覽器不支援影片匯出，請使用支援 Canvas captureStream 與 MediaRecorder 的瀏覽器。';return}exportPreparationCancelled=false;setBusy(true);$('#status').textContent='正在準備影片與音軌…';$('#progress').value=0;exportFrameStats={frames:0,slowFrames:0,maxGap:0};stopPlayback();closeResult();let stream=null,rec=null,restoreCanvas=()=>{};try{await ensureAudio();if(exportPreparationCancelled)throw Error('已取消匯出，素材與設定保留。');if(music&&audioCtx.state!=='running')throw Error('音訊未啟動，請先點播放試聽。');let choices=music?['video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/mp4','video/webm']:['video/mp4','video/webm;codecs=vp9','video/webm'];let mime=window.momentPickRecorderMime?window.momentPickRecorderMime(!!music):choices.find(m=>MediaRecorder.isTypeSupported(m));if(!mime)throw Error('找不到支援的影片編碼格式。');time=0;syncVideos(true);await Promise.all(media.filter(m=>m.video&&m.el.seeking).map(m=>new Promise((resolve,reject)=>{let timer=setTimeout(()=>{m.el.removeEventListener('seeked',done);reject(Error('影片定位逾時，請稍後重試。'))},5000);function done(){clearTimeout(timer);resolve()}m.el.addEventListener('seeked',done,{once:true})})));if(exportPreparationCancelled)throw Error('已取消匯出，素材與設定保留。');if(document.hidden)throw Error('請保持分頁開啟再匯出。');
const previewDimensions=[canvas.width,canvas.height];
const outputConfig=window.momentOutputSettings?.()||{longEdge:960,bitrate:4000000,fps:30};
const portrait=$('#ratio').value==='portrait',square=$('#ratio').value==='square';
const longEdge=outputConfig.longEdge;
const exportW=square?longEdge:portrait?Math.round(longEdge*9/16/2)*2:longEdge;
const exportH=square?longEdge:portrait?longEdge:Math.round(longEdge*9/16/2)*2;
canvas.width=exportW;canvas.height=exportH;
restoreCanvas=()=>{canvas.width=previewDimensions[0];canvas.height=previewDimensions[1];};
render(ctx,canvas.width,canvas.height,themes[current],0);if(window.MomentCover?.paintIntoVideo)window.MomentCover.paintIntoVideo(ctx,canvas.width,canvas.height,0,current);stream=canvas.captureStream(outputConfig.fps);if(music){const track=audioDest.stream.getAudioTracks()[0];if(!track)throw Error('無法建立配樂音軌。');stream.addTrack(track.clone())}if(exportPreparationCancelled)throw Error('已取消匯出，素材與設定保留。');rec=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:outputConfig.bitrate,audioBitsPerSecond:160000});let chunks=[],failed=false,recordedBytes=0;
rec.ondataavailable=e=>{if(e.data.size){chunks.push(e.data);recordedBytes+=e.data.size;
 if(recordedBytes>350*1048576&&!failed){failed=true;cancelExport('影片暫存超過 350 MB，已取消匯出。請降低解析度或縮短影片。')}}};rec.onerror=()=>{failed=true;cancelExport('錄製失敗，請減少素材後重試。')};rec.onstop=()=>{exportClockStart=null;exportValidationPending=true;stopPlayback();stream.getTracks().forEach(t=>t.stop());restoreCanvas();exportSession=null;setBusy(false);$('#export').disabled=true;if(rec.cancelled){$('#status').textContent=rec.cancelled;finishExportValidation();return}if(failed||!chunks.length){$('#status').textContent='沒有取得有效影片資料，請重試。';finishExportValidation();return}let type=rec.mimeType||chunks[0]?.type||mime,blob=new Blob(chunks,{type});if(blob.size<1024){$('#status').textContent='匯出結果過小，影片可能錄製失敗，請重新匯出。';finishExportValidation();return}
/* V5.80: do not expose a recorder output until media metadata can be parsed. */
const video=$('#resultVideo');const link=$('#resultDownload');
resultURL=URL.createObjectURL(blob);
video.src=resultURL;
video.preload='metadata';
$('#status').textContent='影片錄製完成，正在驗證檔案可否播放…';
const expected=Number($('#duration').value)||30;
const metadataCheck=new Promise((resolve,reject)=>{
 let done=false;
 const clean=()=>{video.removeEventListener('loadedmetadata',ok);video.removeEventListener('error',fail);clearTimeout(timer)};
 const settle=(err)=>{if(done)return;done=true;clean();err?reject(err):resolve()};
 const ok=()=>{if(video.videoWidth<1||video.videoHeight<1){settle(Error('影片沒有可解碼的影像軌'));return}
  const actual=video.duration;
  if(Number.isFinite(actual)&&actual>0&&(actual<Math.max(1,expected*.65)||actual>expected+8))settle(Error('影片片長異常：'+actual.toFixed(1)+' 秒'));else settle();};
 const fail=()=>settle(Error('此瀏覽器無法解碼錄製結果，請改用另一種格式'));
 const timer=setTimeout(()=>settle(Error('無法在合理時間內確認影片內容')),9500);
 video.addEventListener('loadedmetadata',ok);video.addEventListener('error',fail);
 if(video.readyState>=1)ok();
});
metadataCheck.then(()=>{
 window.__momentLastExportBlob=blob;
 link.href=resultURL;link.download='拾光-'+themes[current].name+(type.includes('mp4')?'.mp4':'.webm');
 $('#result').hidden=false;
 finishExportValidation();$('#status').textContent='✓ 已驗證可播放 · '+(type.includes('mp4')?'MP4':'WebM')+' · '+(blob.size/1048576).toFixed(1)+' MB'+(music?' · 含配樂':' · 無聲')+'。'+(exportFrameStats?.slowFrames?'錄製期間有 '+exportFrameStats.slowFrames+' 次影格間隔超過 100ms，建議檢查流暢度。':'錄製期間未偵測到明顯主執行緒卡頓。')+' 仍請確認封面、動態與聲音。';
}).catch(err=>{
 finishExportValidation();window.__momentLastExportBlob=null;link.removeAttribute('href');link.removeAttribute('download');$('#result').hidden=true;
 $('#status').textContent='錄製完成但檔案驗證失敗：'+err.message+'。請改用其他影片格式再試。';
 if(resultURL){URL.revokeObjectURL(resultURL);resultURL=null;}
 video.removeAttribute('src');video.load();
})};if(exportPreparationCancelled)throw Error('已取消匯出，素材與設定保留。');exportSession=rec;rec.start(250);playing=true;last=performance.now();exportClockStart=last;startMusic();syncVideos(true);$('#status').textContent='匯出中，請留在此頁，約需 '+$('#duration').value+' 秒。';}catch(err){if(stream)stream.getTracks().forEach(t=>t.stop());exportSession=null;exportClockStart=null;restoreCanvas();setBusy(false);exportValidationPending=false;finishExportValidation();stopPlayback();$('#status').textContent='無法匯出：'+err.message}};
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(exporting)cancelExport('離開分頁已取消匯出，請保持頁面開啟再試。');else stopPlayback()}});
function frame(now){let dt=(now-last)/1000;last=now;if(exportSession&&exportFrameStats){exportFrameStats.frames++;if(dt>.1)exportFrameStats.slowFrames++;exportFrameStats.maxGap=Math.max(exportFrameStats.maxGap,dt)}const dur=Number($('#duration').value);if(playing){if(exportSession&&dt>.8){cancelExport('裝置處理停頓，已取消這次匯出。請減少影片素材後重試。')}else{time=musicAnchor&&audioCtx?.state==='running'?musicAnchor.timeline+(audioCtx.currentTime-musicAnchor.audio):exportSession&&exportClockStart!==null?(now-exportClockStart)/1000:time+Math.min(dt,.2);if(time>=dur){if(exportSession){time=dur-.001;stopPlayback();if(exportSession?.state==='recording')exportSession.stop()}else{time=0;startMusic();syncVideos(true)}}}}syncVideos();updateVolume();render(ctx,canvas.width,canvas.height,themes[current],time);if(time<2&&window.MomentCover?.paintIntoVideo)window.MomentCover.paintIntoVideo(ctx,canvas.width,canvas.height,time,current);$('#seek').value=time;$('#clock').textContent=MomentEngine.formatTime(time)+' / '+MomentEngine.formatTime(dur);if(exporting&&exportSession){const percent=Math.min(100,Math.max(0,time/dur*100));$('#progress').value=percent;$('#exportProgress').setAttribute('aria-label','匯出進度 '+Math.floor(percent)+'%');}let shot=activeScene().index;if(shot!==lastShot){$('#shots').querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===shot));lastShot=shot}requestAnimationFrame(frame)}
function analyzeMusic(target){if(typeof Worker==='undefined'){$('#beatStatus').textContent='此瀏覽器無法分析重拍，保留原節奏。';return}let worker;try{worker=new Worker('beat-worker.js')}catch{$('#beatStatus').textContent='重拍分析無法啟動，保留原節奏。';return}let done=false;const timer=setTimeout(()=>finish(null),20000);function finish(result){if(done)return;done=true;clearTimeout(timer);worker.terminate();if(music!==target)return;if(exporting){target.pendingOnsets=result||[];return}target.onsets=result||[];beatRevision++;$('#beatStatus').textContent=result&&result.length>1?'已估計 '+result.length+' 個音訊重拍；切換會靠近重拍，並非逐拍辨識。':'沒有辨識到明顯重拍，保留原節奏。';refreshPlan();}
worker.onmessage=e=>finish(e.data.onsets);worker.onerror=()=>finish(null);const channels=Array.from({length:target.buffer.numberOfChannels},(_,i)=>new Float32Array(target.buffer.getChannelData(i)));worker.postMessage({sampleRate:target.buffer.sampleRate,channels},channels.map(x=>x.buffer));}
select(0);requestAnimationFrame(frame);

function checkExportReady(){
 const duration=Number($('#duration').value);
 if(!Number.isFinite(duration)||duration<=0)return {ok:false,message:'影片長度無效'};
 if(!canvas.captureStream||!window.MediaRecorder)return {ok:false,message:'此瀏覽器不支援影片錄製，請使用最新版桌面 Chrome 或 Edge'};
 if(typeof MediaRecorder.isTypeSupported!=='function')return {ok:false,message:'無法確認影片編碼支援'};
 const supported=['video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'].filter(m=>MediaRecorder.isTypeSupported(m));
 if(!supported.length)return {ok:false,message:'找不到瀏覽器可錄製的影片格式'};
 if(document.hidden)return {ok:false,message:'請保持編輯分頁顯示在前景'};
 return {ok:true,message:(media.length?media.length+' 個素材':'示範畫面')+'、'+(music?'含配樂':'未加音樂')+'、支援 '+supported.map(x=>x.includes('mp4')?'MP4':'WebM').filter((v,i,a)=>a.indexOf(v)===i).join('／')};
}
function showExportReadiness(){const e=document.querySelector('#exportReadiness');if(!e)return;const p=checkExportReady();e.textContent='匯出檢查：'+(p.ok?'✓ ':'⚠ ')+p.message;if(e.dataset)e.dataset.ready=p.ok?'yes':'no';}
if(typeof setInterval === "function")setInterval(showExportReadiness,3000);
if(typeof document.querySelector === "function")showExportReadiness();
