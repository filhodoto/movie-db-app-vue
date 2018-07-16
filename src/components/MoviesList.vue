<template>
    <ul>
        <li v-for="(movie, index) in movies" :key="movie.id">
            <MovieThumb :key="movie.id" :index="index" :movie="movie"/>
        </li>
    </ul>
</template>

<script>
    // Import Component Binding Helpers
    import {mapState, mapActions} from 'vuex';

    import MovieThumb from './MovieThumb';

    /**
     * Component
     */
    export default {
        name: "MoviesList",
        // LifeCycle method (when component is created)
        created: function () {
            this.fetchMovies;
        },
        computed: {
            ...mapState({
                movies: state => state.movies
            }),
            ...mapActions({
                fetchMovies: 'fetchMovies'
            })
        },
        components: {
            MovieThumb
        }
    }
</script>

<style scoped>
    ul {
        display: grid;
        list-style: none;
        padding: 1rem;
        margin: 0;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(6, 1fr);
    }
</style>