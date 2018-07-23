<template>
    <router-link class="link" :to="moviePath" @click.native="closeSearch">
        <transition name="flipX">
            <img :src="posterImg" :alt="movie.title" @load="imgLoaded" v-show="loaded" :style="styles">
        </transition>
    </router-link>
</template>

<script>
    const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

    // Import Component Binding Helpers
    import {mapState, mapActions} from 'vuex';

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
            ...mapState({
                openSearch: state => state.search.open
            }),
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
            ...mapActions({
                closeSearch: 'closeSearch'
            }),
            imgLoaded: function () {
                this.loaded = true;
            }
        }
    }
</script>

<style scoped>
    .link {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 100%;
        height: auto;
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