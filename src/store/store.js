import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: {}
    },
    mutations: {
        setMovies (state, movies) {
            state.movies = movies
        }
    },
    actions: {
        fetchMovies: async function (context) {
            try {
                const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b01d116084668e4b15d36351e4941996&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
                const movies = await res.json();

                context.commit('setMovies', movies.results);
            } catch (e) {
                console.log(e); // eslint-disable-line no-console
            }
        }
    },
    getters: {

    }
})