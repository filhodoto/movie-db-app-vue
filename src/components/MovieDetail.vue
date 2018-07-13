<template>
    <transition name="animate-detail">
        <div v-if="show" class="movie-wrapper" :style="styles">
            <div class="movie-info">
                <h1>{{ movie.title }}</h1>
                <h3>Release Date: {{ movie.release_date }}</h3>
                <p>
                    {{ movie.overview }}
                </p>
            </div>
        </div>
    </transition>
</template>

<script>
    const BAKCDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

    export default {
        name: "MovieDetail",
        data() {
            return {
                movie: {},
                show: false
            }
        },
        created: function () {
            this.fetchData();
        },
        computed: {
            styles() {
                if (this.movie.backdrop_path) {
                    return {
                        background: `url(${BAKCDROP_PATH}/${this.movie.backdrop_path}) no-repeat`
                    }
                }
            }
        },
        methods: {
            async fetchData() {
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=b01d116084668e4b15d36351e4941996`);
                    const movie = await res.json();

                    // Add api response to our component data
                    this.movie = movie;
                    this.show = true;
                } catch(e) {
                    console.log('error ', e); // eslint-disable-line no-console
                }
            }
        },
    }
</script>

<style scoped>
    .movie-wrapper {
        position: relative;
        padding-top: 50vh;
        background-size: cover;
    }
    .movie-info {
        background: white;
        color: #222;
        padding: 2rem 10%;
    }

    .animate-detail-enter-active,
    .animate-detail-leave-active {
        transition: all 0.3s ease;
    }
    .animate-detail-enter,
    .animate-detail-leave-to {
        opacity: 0;
    }
    
</style>