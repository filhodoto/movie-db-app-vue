import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from '@/router/router';
import store from '@/store/store';
import './assets/styles.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import './service_workers/registerServiceWorker';

Vue.config.productionTip = false;

/**
 * Tell Vue to use Vuetify
 */
Vue.use(Vuetify, {
    theme: {
        primary: '#42b883'
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-origin');
