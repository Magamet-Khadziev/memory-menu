// ========================================
// SERVICE WORKER - для работы офлайн
// ========================================

const CACHE_NAME = 'memory-menu-v1';
const urlsToCache = [
    'index.html',
    'css/style.css',
    'js/app.js',
    'js/navigation.js',
    'js/renderer.js',
    'js/data/breakfasts.js',
    'js/data/coffee.js',
    'js/data/teas.js',
    'js/data/lemonades.js',
    'js/data/cocktails.js',
    'js/data/main.js',
    'js/data/desserts.js',
    'manifest.json'
];

// Установка сервис-воркера - кешируем файлы
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache открыт');
                return cache.addAll(urlsToCache);
            })
    );
});

// Перехват запросов - отдаём из кеша
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Обновление кеша
self.addEventListener('activate', function(event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
