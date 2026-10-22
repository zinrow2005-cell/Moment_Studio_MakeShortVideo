/* V5.56 format preference + explicit export capability; no fake MP4 conversion. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
function init(){const exportBtn=$('export');if(!exportBtn||$('exportFormatV556'))return;
const panel=document.createElement('div');panel.id='exportFormatV556';panel.className='export-format-v556';panel.innerHTML='<label for="formatChoiceV556"><strong>分享影片格式</strong></label><select id="formatChoiceV556" aria-label="輸出影片格式"><option value="auto">自動：優先 MP4</option><option value="mp4">只輸出 MP4（較適合 LINE／FB）</option><option value="webm">輸出 WebM</option></select><p id="formatCapabilityV556" role="status"></p>';
exportBtn.parentElement?.insertAdjacentElement('beforebegin',panel);
const settings=document.createElement('div');settings.className='export-quality-v581';settings.innerHTML=`<label for="qualityV581"><strong>輸出畫質</strong></label>
<select id="qualityV581"><option value="720">流暢 720p（手機建議）</option><option value="1080">高畫質 1080p</option><option value="540">省空間 540p</option></select>
<p id="qualityNoteV581">720p・30fps；影片畫質會受瀏覽器編碼器與裝置效能影響。</p>`;
panel.after(settings);
const quality=settings.querySelector('#qualityV581');
quality.addEventListener('change',()=>{settings.querySelector('#qualityNoteV581').textContent=quality.value+'p・30fps；高畫質可能提高記憶體及匯出時間。';});
window.momentOutputSettings=()=>{const size=Number(quality.value)||720;return {longEdge:size===1080?1920:size===540?960:1280,bitrate:size===1080?6500000:size===540?2000000:3500000,fps:30}};
const select=$('formatChoiceV556'),note=$('formatCapabilityV556');
window.momentExportFormatPreference=()=>select.value;
const mp4=['video/mp4;codecs="avc1.42E01E,mp4a.40.2"','video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4'];
const webm=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'];
window.momentPickRecorderMime=function(hasAudio){const can=(v)=>{try{return !!window.MediaRecorder?.isTypeSupported(v)}catch{return false}};
const mp4choices=hasAudio?mp4: ['video/mp4;codecs=avc1.42E01E','video/mp4'];
const webmchoices=hasAudio?webm:['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'];
const group=select.value==='mp4'?[...mp4choices]:select.value==='webm'?[...webmchoices]:[...mp4choices,...webmchoices];
const mime=group.find(can);
if(!mime)throw Error(select.value==='mp4'?'此瀏覽器不支援錄製 MP4（含目前的音訊設定）；請改用自動格式或其他支援的裝置。':'此瀏覽器沒有可用的影片錄製格式');
return mime;
};
function update(){const can=(s)=>{try{return !!window.MediaRecorder?.isTypeSupported(s)}catch{return false}};
const isMp4=mp4.some(can);const isWebm=webm.some(can);
note.textContent=isMp4?'✓ 此裝置宣告支援 MP4 錄製；匯出後將驗證影片可否解碼，仍需檢查聲音與收件端相容性。':isWebm?'⚠ 此裝置目前僅宣告支援 WebM；無法在本機直接轉為 MP4。分享至 LINE／FB 前請確認收件端可播放。':'⚠ 此瀏覽器沒有可用的錄製格式。';
if(select.value==='mp4'&&!isMp4)note.textContent+=' 目前選擇「只輸出 MP4」，匯出將提示不支援，不會偷偷改成 WebM。';}
select.addEventListener('change',update);update();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
