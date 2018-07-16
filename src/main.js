import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import './assets/styles.css';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app-origin');
