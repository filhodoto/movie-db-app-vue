/**
 * Vue config file
 * This is where we can add webpack options or define plugin options
 * https://cli.vuejs.org/config/#vue-config-js
 */
module.exports = {
    pwa: {
        name: 'Vue Movie Database',
        themeColor: '#42b883',
        msTileColor: '#F3357E',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            importWorkboxFrom: 'cdn', // note: 1
            swSrc: './src/service_workers/sw.js', // note: 2
            swDest: './sw.js', // note: 3
        },
    }
}

/*
Notes:

1 - define how we call workbox (no need to use importScripts in sw.js)
2 - define where our sw file is
3 - define where final sw.js file will be insisde /dist, and it's name
*/


