/* V5.2 music center bridge and guide */
'use strict';
(()=>{
const $=s=>document.querySelector(s);
const dialog=$('#musicLibrary');
$('#openMusicLibrary')?.addEventListener('click',()=>dialog.showModal());
$('#closeMusicLibrary')?.addEventListener('click',()=>dialog.close());
// V5.31: a single bridge reads the existing downloaded audio, never sends users outside.
// Cached audio is stored as a Blob in IndexedDB, not a device filesystem path.
// The track ID is the stable local locator and is resolved by the parent editor.
function getCached(dbName,storeName,key){return new Promise((resolve,reject)=>{
 const req=indexedDB.open(dbName);
 req.onerror=()=>reject(req.error||Error('無法開啟音樂快取'));
 req.onsuccess=()=>{const db=req.result;if(!db.objectStoreNames.contains(storeName)){db.close();resolve(null);return;}
 const tx=db.transaction(storeName,'readonly');const read=tx.objectStore(storeName).get(key);
 read.onsuccess=()=>resolve(read.result||null);read.onerror=()=>reject(read.error);
 tx.oncomplete=()=>db.close();tx.onerror=()=>db.close();};
});}
async function resolveCachedAudio(meta){
 const key=String(meta.provider||'')+':'+String(meta.id||'');
 if(!meta.id)throw Error('歌曲沒有可用的快取識別碼');
 const stores=[['music-center-offline-v21','audio'],['moment-crayon-audio-v59','tracks']];
 for(const [db,store] of stores){try{const item=await getCached(db,store,key);const blob=item?.blob||item?.file;if(blob&&typeof blob.arrayBuffer==='function'&&Number(blob.size)>0)return blob;}catch(err){console.warn('[Music cache]',db,err)}}
 throw Error('找不到已下載歌曲的本機檔案：'+key+'。請確認是同一個網站網址及瀏覽器。');
}
const timeout=(promise,ms,message)=>Promise.race([promise,new Promise((_,reject)=>setTimeout(()=>reject(new Error(message)),ms))]);
// V5.42: direct same-origin handoff of the already cached Blob, avoiding
// a second IndexedDB lookup and a large structured-clone postMessage.
window.momentReceiveDownloadedTrack=async function(meta,blob){
 if(!blob||typeof blob.arrayBuffer!=='function'||!(Number(blob.size)>0))throw new Error('音樂庫的已下載檔案沒有可讀取的音訊');
 if(typeof window.momentImportAudioDirect!=='function')throw new Error('主剪輯器尚未完成初始化');
 const name=String(meta?.title||'背景音樂').replace(/[\/:*?"<>|]/g,'_')+'.'+((blob.type||'').includes('wav')?'wav':(blob.type||'').includes('ogg')?'ogg':(blob.type||'').includes('mp4')?'m4a':'mp3');
 const output=await window.momentImportAudioDirect(blob,name);
 if(!output?.duration||document.querySelector('#musicRemove')?.disabled)throw new Error('音樂軸未建立完成');
 return output;
};
window.addEventListener('message',async event=>{
 const frame=$('#musicLibraryFrame');
 if(event.source!==frame?.contentWindow||event.data?.type!=='moment:music-selection')return;
 const meta=event.data.data?.track||{},requestId=event.data.requestId||null;console.info('[V5.41 music request]',meta.title, 'blob',event.data.audioBlob?.size||0);
 const status=$('#status'),key=String(meta.provider||'')+':'+String(meta.id||'');
 const ack=(ok,message,duration=0)=>{try{frame.contentWindow.postMessage({type:'moment:music-import-result',requestId,key,ok,message,duration},'*')}catch{}};
 if(window.__momentMusicImportBusy){ack(false,'正在加入上一首歌曲，請稍候');return;}
 window.__momentMusicImportBusy=true;
 try{
  status.textContent='正在讀取已下載的音樂：'+(meta.title||'歌曲');
  const forwarded=event.data.audioBlob;
  const blob=forwarded&&typeof forwarded.arrayBuffer==='function'&&Number(forwarded.size)>0 ? forwarded : await timeout(resolveCachedAudio(meta),6500,'已下載歌曲未能從本機快取讀取，請重開音樂庫再試。');
  if(!blob||typeof blob.arrayBuffer!=='function'||!(Number(blob.size)>0))throw Error('已下載資料沒有音檔內容');
  if(blob.size>60*1024*1024)throw Error('音檔大於 60MB，請使用本機匯入');
  if(typeof window.momentImportAudioDirect!=='function')throw Error('主剪輯器沒有載入成功，請重新整理頁面');
  status.textContent='正在解碼並放進音樂軸：'+(meta.title||'歌曲');
  const ext=(blob.type||'').includes('wav')?'wav':(blob.type||'').includes('ogg')?'ogg':(blob.type||'').includes('mp4')?'m4a':'mp3';
  const name=String(meta.title||'背景音樂').replace(/[\/:*?"<>|]/g,'_')+'.'+ext;
  const result=await timeout(window.momentImportAudioDirect(blob,name),52000,'音檔解碼逾時：可能格式不支援，請使用本機匯入。');
  if(!result?.duration||$('#musicRemove')?.disabled)throw Error('主音樂軌沒有接收到音訊');
  const message='✓ 已從已下載音檔加入中央音樂軸：'+name;console.info('[V5.41 music success]',result);
  status.textContent=message;ack(true,message,result.duration);$('#musicLibrary')?.close();
 }catch(err){const message='加入剪輯失敗：'+(err?.message||String(err));status.textContent=message;ack(false,message);console.error('[Music import]',err)}
 finally{window.__momentMusicImportBusy=false;}
});
})();
