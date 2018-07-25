/* eslint-disable no-console */

import {register} from 'register-service-worker'

/**
 * Register service workers using "register-service-worker", this fiel will be called in main.js
 *
 * https://github.com/yyx990803/register-service-worker#readme
 *
 * Alternative to using this in DOM:
 *
 * if ('serviceWorker' in navigator) {
 *   navigator.serviceWorker.register('/service-worker.js');
 * }
 *
 */

if (process.env.NODE_ENV === 'production') {

    register(`${process.env.BASE_URL}sw.js`, {
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                'For more details, visit https://goo.gl/AFskqB'
            );
        },
        cached() {
            console.log('Content has been cached for offline use.')
        },
        updated() {
            console.log('New content is available; please refresh.')
        },
        offline() {
            console.log('No internet connection found. App is running in offline mode.')
        },
        error(error) {
            console.error('Error during service worker registration:', error)
        }
    })
}
