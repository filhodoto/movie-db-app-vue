<template>
    <div>
        <ul>
            <li v-for="(movie, index) in movies" :key="movie.id">
                <MovieThumb :key="movie.id" :index="index" :movie="movie"/>
            </li>
        </ul>
        <Pagination />
    </div>
</template>

<script>
    // Import Component Binding Helpers
    import {mapState, mapActions} from 'vuex';

    import MovieThumb from './MovieThumb';
    import Pagination from './ui/Pagination';

    /**
     * Component
     */
    export default {
        name: "MoviesList",
        // LifeCycle method (when component is created)
        created: function () {
            // If we have empty movies, get random movies
            if (this.movies.length == 0) {
                this.fetchMovies;
            }
        },
        computed: {
            ...mapState({
                movies: state => state.movies.all
            }),
            ...mapActions({
                fetchMovies: 'fetchMovies'
            })
        },
        components: {
            MovieThumb,
            Pagination
        }
    }
</script>

<style scoped>
    ul {
        display: grid;
        list-style: none;
        padding: 1rem;
        margin: 0;
        grid-gap: 1rem;
        grid-template-columns: repeat(7, 1fr);
    }


    @media screen and (max-width: 1024px) {
        ul {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media screen and (max-width: 800px) {
        ul {
            grid-template-columns: repeat(4, 1fr);
        }
    }


    @media screen and (max-width: 600px) {
        ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }

</style>