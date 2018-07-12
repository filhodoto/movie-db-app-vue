<template>
    <transition name="animate-thumb">
        <router-link :to="moviePath">
            <img :src="posterImg" :alt="movie.title">
        </router-link>
    </transition>
</template>

<script>
    const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

    export default {
        name: "MovieThumb",
        props: ['movie', 'index'],
        computed: {
            posterImg: function () {
                return `${POSTER_PATH}${this.movie.poster_path}`;
            },
            moviePath: function () {
                return `/movie/${this.movie.id}`
            },
            styles: () => {
                return {
                    "animation-delay": `calc(${this.index}/2)s`
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    img {
        box-shadow: 0 0 35px black;
    }

    .animate-thumb-enter-active,
    .animate-thumb-leave-active {
        transition: all 2s;
    }

    .animate-thumb-enter,
    .animate-thumb-leave-to {
        opacity: 0;
    }
</style>