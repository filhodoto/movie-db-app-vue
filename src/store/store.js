import Vuex from 'vuex'
import Vue from 'vue'

/**
 * Tell Vue to use Vuex
 */
Vue.use(Vuex);

/**
 * Export Store
 */
export default new Vuex.Store({
    state: { // = data
        movies: {
            filtered: [],
            all: [],
            favorites: []
        },
        search: {
            open: false,
            text: ''
        }
    },
    mutations: {
        setAllMovies (state, movies) {
            state.movies.all = movies
        },
        setFilteredMovies (state, movies) {
            state.movies.filtered = movies
        },
        addToFavorite (state, movie) {
            state.movies.favorites.push(movie);
        },
        toggleSearch (state) {
            state.search.open = !state.search.open;
        },
        setSearchText (state, value) {
            state.search.text = value;
        }
    },
    actions: { // = methods
        async fetchMovies (context) {
            try {
                const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b01d116084668e4b15d36351e4941996&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
                const movies = await res.json();

                context.commit('setAllMovies', movies.results);
            } catch (e) {
                console.log(e); // eslint-disable-line no-console
            }
        },
        async searchMovies(context) {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b01d116084668e4b15d36351e4941996&&query=${context.state.search.text}`);
                const movies = await res.json();
                console.log(movies);
                context.commit('setFilteredMovies', movies.results);
            } catch (e) {
                console.log(e); // eslint-disable-line no-console
            }
        },
        addToFavorite (context, movieId) {
            context.commit('addToFavorite', movieId);
        }
    },
    getters: { // = computed
        isFavorite(state) {
            return movieId => {
                // See if this movie is in favorites array by returning filtered array
                const response = state.movies.favorites.filter(movie => {
                    return movie.id === movieId.id;
                });
                // If response array as length, the it means movie is in favorites
                return response.length > 0 ? true : false
            }
        }
    }
})