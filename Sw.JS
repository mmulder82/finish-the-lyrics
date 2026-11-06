// Minimale service worker: maakt de pagina installeerbaar als app. Er wordt niets in de cache gezet.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
