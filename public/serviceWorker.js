const CACHE_NAME = "mycloud-cache";

const deleteCache = () => {
    return caches.keys().then(function (cacheNames) {
        return Promise.all(
            cacheNames
                .filter((c) => c === CACHE_NAME)
                .map(function (cacheName) {
                    console.log("Deleting cache...");
                    return caches.delete(cacheName);
                })
        );
    });
};

// ===========================================================
// ================ Web Push Notification ====================
// ===========================================================

// Reference:
// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#display_a_notification
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification

// Show web push notification on the device

// Event listener for notification close

// Event listener for notification click

// ============================================================
// ================ Service Worker Listeners ==================
// ============================================================

// Event listener, triggers when app is installed on the system.
// For now I am doing nothing, but I have added a template code
// to manage cache.
self.addEventListener("install", function (event) {
    console.log("Service worker installed!");
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([]);
        })
    );
});

// Event listener, triggers when service worker gets registered
self.addEventListener("activate", async (event) => {
    console.log("Service worker activated!");
    try {
        event.waitUntil(deleteCache());
    } catch (err) {
        console.log(err);
    }
});

// const CACHE_THESE = ["/private/expenses/?action=get-suggestions"];
self.addEventListener("fetch", (event) => {
    // let _ = CACHE_THESE.filter((_) => event.request.url.includes(_));
    // if (_.length === 0) return;
    if (event.request.method !== "GET") return;
    // if (event.request.url.startsWith()) return;
    event.respondWith(
        // On Get fetch request try to serve it from out cache
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                // Check if there is a match for our fetch request
                return cache.match(event.request).then((response) => {
                    // If there is a match return response else fetch from network
                    if (event.request.cache === "no-cache") response = false;
                    return (
                        response ||
                        fetch(event.request).then((response) => {
                            // Cache the response received from network and return
                            cache.put(event.request, response.clone());
                            return response;
                        })
                    );
                });
            })
            .catch((err) => {
                console.log(err);
            })
    );
});

// Event listener, triggers when we get push notification from the server
