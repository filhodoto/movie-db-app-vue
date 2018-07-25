/**
 * Vue config file
 * This is where we can add webpack options or define plugin options
 * https://cli.vuejs.org/config/#vue-config-js
 */
module.exports = {
    pwa: {
        name: 'Vue Movie Database',
        themeColor: '#42b883',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            importWorkboxFrom: 'cdn', // define how we call workbox (no need to use importScripts in sw.js)
            swSrc: './src/service_workers/sw.js', // define where our sw file is
            swDest: './sw.js', // define where final sw.js file will be insisde /dist, and it's name
        }
    }
}