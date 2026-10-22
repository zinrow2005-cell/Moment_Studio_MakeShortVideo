/* V5.78: share synchronously from a pre-created export blob, preserving user activation. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
let busy=false;
const mk=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e};
function init(){
 const result=$('result');if(!result||$('shareV555'))return;
 $('nativeShareVideo')?.remove();$('shareHelp')?.remove();
 const wrap=mk('section','mobile-share-v555');wrap.id='shareV555';
 const heading=mk('strong','share-headline','📲 分享完成的影片');
 const tip=mk('p','share-format','先匯出影片並確認可正常播放。');tip.id='shareFormatV555';
 const controls=mk('div','share-actions');
 const share=mk('button','primary','↗ 分享到 LINE／其他 App');share.id='shareFileV555';share.type='button';
 const save=mk('button','','⬇ 儲存影片檔');save.id='downloadFileV555';save.type='button';
 const status=mk('p','share-info','分享需要瀏覽器與作業系統支援；不會產生公開影片網址。');status.id='shareStatusV555';status.setAttribute('role','status');
 controls.append(share,save);wrap.append(heading,tip,controls,status);result.append(wrap);
 const fileFromBlob=blob=>{
  if(!blob || blob.size<1024)throw Error('尚未取得有效影片，請重新匯出。');
  const isMp4=(blob.type||'').toLowerCase().includes('mp4');
  const ext=isMp4?'mp4':'webm';
  return {file:new File([blob],'拾光-'+new Date().toISOString().slice(0,10)+'.'+ext,{type:blob.type||'video/'+ext}),isMp4};
 };
 function refresh(){const blob=window.__momentLastExportBlob;
  if(!blob){tip.textContent='請先完成影片匯出。';share.disabled=true;return}share.disabled=false;
  const ext=blob.type?.includes('mp4')?'MP4':'WebM';
  tip.textContent=ext+' · '+(blob.size/1048576).toFixed(1)+' MB · '+(ext==='MP4'?'請播放檢查後再分享':'部分 LINE／FB 接收端不支援 WebM');
 }
 share.addEventListener('click',()=>{
  if(busy)return;
  // No await, fetch, decoding, or timeout before calling navigator.share:
  // these can consume the transient user activation and cause Permission denied.
  let payload;
  try{payload=fileFromBlob(window.__momentLastExportBlob);}catch(e){status.textContent=e.message;return}
  if(!navigator.share){status.textContent='此瀏覽器沒有原生檔案分享功能；請使用「儲存影片檔」。';return}
  let supported=true;
  if(typeof navigator.canShare==='function'){
   try{supported=navigator.canShare({files:[payload.file]})}catch{supported=false}
  }
  if(!supported){status.textContent='此裝置不支援分享這個影片檔或檔案太大；請儲存影片後從 LINE／Facebook 選取。';return}
  busy=true;share.disabled=true;
  status.textContent=payload.isMp4?'正在開啟系統分享選單…':'正在開啟分享選單；WebM 可能無法在 LINE／Facebook 播放。';
  let promise;
  try{promise=navigator.share({files:[payload.file],title:'拾光影片'});}catch(e){promise=Promise.reject(e)}
  Promise.resolve(promise).then(()=>{status.textContent='分享選單已完成操作，請到接收端確認影片是否能播放。';}).catch(e=>{
   const name=e?.name||'',message=e?.message||'';
   if(name==='AbortError'){status.textContent='已取消分享。';return}
   if(name==='NotAllowedError'||/permission denied|not allowed|permission/i.test(message)){
    status.textContent='分享權限被拒絕。請由 HTTPS 網址直接在 Safari／Chrome 開啟，不要使用 App 內建瀏覽器；仍可儲存影片再從 LINE 傳送。';
   }else{status.textContent='分享未完成：'+message+'。可以儲存影片檔再傳送。'}
  }).finally(()=>{busy=false;share.disabled=false});
 });
 save.addEventListener('click',()=>{const a=$('resultDownload');if(a?.href)a.click();else status.textContent='請先完成影片匯出。'});
 new MutationObserver(()=>{if(!result.hidden)refresh()}).observe(result,{attributes:true,attributeFilter:['hidden']});refresh();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
