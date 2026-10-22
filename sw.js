const CACHE='shiguang-shell-v592';
const CORE=['./','./index.html','./style.css','./mobile-v557.css','./mobile-studio-v588.css','./mobile-v592.css','./mobile-v592.js','./engine.js','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event=>{event.waitUntil(caches.open(CACHE).then(async cache=>{for(const url of CORE){try{await cache.add(url)}catch(e){console.warn('PWA precache skipped',url,e)}}}));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('shiguang-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 const path=url.pathname.toLowerCase();if(/\.(mp3|m4a|mp4|wav|ogg|webm|flac)$/.test(path))return;
 if(req.mode==='navigate'||/\.(js|css|html|json|webmanifest)$/.test(path)){event.respondWith(fetch(req).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(cache=>cache.put(req,copy))}return resp}).catch(()=>caches.match(req).then(hit=>hit||caches.match('./index.html'))));return}
 event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(resp=>{if(resp.ok&&resp.type==='basic'){const copy=resp.clone();caches.open(CACHE).then(cache=>cache.put(req,copy))}return resp})))
});