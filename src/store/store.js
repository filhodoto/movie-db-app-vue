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
        },
        pagination: {
            page: 1,
            total_pages: 0
        }

    },
    mutations: {
        setAllMovies (state, movies) {
            state.movies.all = movies
        },
        setFilteredMovies (state, movies) {
            // Set filtered movies
            state.movies.filtered = movies;

            //TODO:: Maybe we can use only one list (filtered or all)
            // Update all movies (the state moviesList renders) to be equal to filtered
            state.movies.all = state.movies.filtered;
        },
        addToFavorite (state, movie) {
            state.movies.favorites.push(movie);
        },
        toggleSearch (state) {
            state.search.open = !state.search.open;

            // Clean text
            state.search.text = '';

        },
        setSearchText (state, value) {
            state.search.text = value;
        },
        setPage (state, value) {
            state.pagination.page = value;
        },
        setTotalPages (state, value) {
            state.pagination.total_pages = value;
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
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b01d116084668e4b15d36351e4941996&&query=${context.state.search.text}&page=${context.state.pagination.page}`);
                const movies = await res.json();

                // Set new movies results
                context.commit('setFilteredMovies', movies.results);

                // Update pages total for pagination
                context.commit('setTotalPages', movies.total_pages);
            } catch (e) {
                console.log(e); // eslint-disable-line no-console
            }
        },
        addToFavorite (context, movieId) {
            context.commit('addToFavorite', movieId);
        },
        closeSearch: function (context) {
            context.state.search.open ? context.commit('toggleSearch') : null
        },
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