<template>
    <router-link class="link" :to="moviePath">
        <transition name="flipX">
            <img :src="posterImg" :alt="movie.title" @load="imgLoaded" v-show="loaded" :style="styles">
        </transition>
    </router-link>
</template>

<script>
    const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

    /**
     * Component
     */
    export default {
        name: "MovieThumb",
        props: ['movie', 'index'],
        data() {
            return {
                loaded: false
            }
        },
        computed: {
            posterImg: function () {
                return `${POSTER_PATH}${this.movie.poster_path}`;
            },
            moviePath: function () {
                return `/movie/${this.movie.id}`
            },
            styles: function () {
                return {
                    "animation-delay": `${this.index / 10}s`,
                    "transition-delay": `${this.index/ 10}s`,
                }
            }
        },
        methods: {
            imgLoaded: function () {
                this.loaded = true;
            },
        }
    }
</script>

<style scoped>
    img {
        box-shadow: 0 0 35px black;
    }

    .flipX-enter-active,
    .flipX-enter-active {
        backface-visibility: visible !important;
        transition: opacity .5s;
        animation: flipInX .5s;
    }
    .flipX-enter,
    .flipX-leave-to {
        transition: opacity .2s ease;
        opacity: 0;
        /*animation-delay: 2s;*/
    }

    @keyframes flipInX {
        from {
            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            animation-timing-function: ease-in;
            opacity: 0;
        }

        40% {
            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            animation-timing-function: ease-in;
        }

        60% {
            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
            opacity: 1;
        }

        80% {
            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }

        to {
            transform: perspective(400px);
        }
    }
</style>