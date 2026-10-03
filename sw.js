const V = 'vibras-motor-v4';
const BASE = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(BASE))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Fotos y miniaturas: guardar para ver sin internet
  if (u.hostname === 'upload.wikimedia.org' || u.hostname === 'i.ytimg.com' || u.hostname === 'images.ctfassets.net' || u.hostname.endsWith('suzuki.com.co') || u.hostname.endsWith('incolmotos-yamaha.com.co') || u.hostname.endsWith('elcarrocolombiano.com') || u.hostname.endsWith('gstatic.com') || u.hostname === 'fonts.googleapis.com') {
    e.respondWith(caches.open(V).then(async c => {
      const hit = await c.match(e.request);
      const red = fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; }).catch(() => hit);
      return hit || red;
    }));
    return;
  }
  // App: primero la red (para ver precios nuevos), si no hay red, la copia guardada
  if (u.origin === location.origin) {
    e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
  }
});
