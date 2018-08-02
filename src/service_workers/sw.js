/* eslint-disable */
/**
 * Workbox options, where we define caching strategies to use in the app
 * This file will be compiled by webpack to the /dist folder, the path to it is defined in the vue.config.js
 * We can only test these values when serving the dist folder, for that we use:
 *
 * - SERVE - https://github.com/zeit/serve
 * ex: serve -s dist
 */

if (workbox) {

    /**
     * Set precache
     */
    workbox.precaching.precacheAndRoute([
        {url: 'index.html', revision: 'abcd'}
    ]);

    /**
    * Tell service workers to skip default lifecycle
    * We're using it to cache api calls after first load, but this will affect all caches
    * https://developers.google.com/web/tools/workbox/modules/workbox-sw#skip_waiting_and_clients_claim
    */
    workbox.skipWaiting();
    workbox.clientsClaim();

    /**
     * Icon cache
     */
    workbox.routing.registerRoute(
        /(img\/icons).*\.*$/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'icon-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 5
                })
            ]
        })
    );

    /**
     * Font cache
     */
    workbox.routing.registerRoute(
        /(fonts).*\.*$/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'font-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 5
                })
            ]
        })
    );

    /**
     * CSS cache
     */
    workbox.routing.registerRoute(
        // Cache CSS files
        /.*\.css/,
        // Use cache but update in the background ASAP
        workbox.strategies.staleWhileRevalidate({
            // Use a custom cache name
            cacheName: 'css-cache',
        })
    );

    /**
     * JS cache
     */
    workbox.routing.registerRoute(
        // Cache JS files
        /(js).*\.js$/,
        // Use cache but update in the background ASAP
        workbox.strategies.staleWhileRevalidate({
            // Use a custom cache name
            cacheName: 'js-cache',
        })
    );


    /**
     * Images cache
     */
    workbox.routing.registerRoute(
        // Cache image files
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        // Use the cache if it's available
        workbox.strategies.cacheFirst({
            // Use a custom cache name
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache only 20 images
                    maxEntries: 50,
                    // Cache for a maximum of a week
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );

    /**
     * Api calls cache
     */
    workbox.routing.registerRoute(
        new RegExp('^https://api.themoviedb.org/'),
        workbox.strategies.networkFirst({
            cacheName: 'api-cache',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                })
            ]
        }),
    );

} else {
    console.log('Workbox not working');
}