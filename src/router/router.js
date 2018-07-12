import Vue from 'vue';
import Router from 'vue-router';
import MoviesList from './components/MoviesList'

/**
 * Tell Vue to use Router
 */
Vue.use(Router);


/**
 * Export Router
 */
export default new Router({
  mode: 'history', // So it doesn't use # in the url path
  routes: [
      {
        path: '/',
        name: 'Movies List',
        component: MoviesList
      }
  ]
})