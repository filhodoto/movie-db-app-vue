<template>
    <div>
        <Loader class="loader"
                :animation-duration="1500"
                :size="spinnerSize"
                :color="'#42b883'"/>

        <transition name="animate-detail">
            <div v-if="show" class="movie-wrapper" :style="movieWrapperStyles">
                <div class="movie-info">
                    <h1>{{ movie.title }}</h1>
                    <h3>Release Date: {{ movie.release_date }}</h3>
                    <p>{{ movie.overview }}</p>
                    <div>
                        <v-btn v-if="isFavorite" class="favorite" icon><v-icon>favorite</v-icon></v-btn>
                        <v-btn v-else icon @click="addToFavorite(movie)"><v-icon>favorite</v-icon></v-btn>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import styled from 'vue-styled-components';
    import { mapActions } from 'vuex';
    import { TrinityRingsSpinner } from 'epic-spinners';

    const BAKCDROP_PATH = 'https://image.tmdb.org/t/p/w1280';
    const spinnerSize = 150;

    /**
     * Styled components
     */
    const Loader = styled(TrinityRingsSpinner)`
      top: calc(50% - ${spinnerSize / 2}px);
      left: calc(50% - ${spinnerSize / 2}px);
    `;

    /**
     * Component
     */
    export default {
        name: "MovieDetail",
        data() {
            return {
                movie: {},
                spinnerSize: spinnerSize,
                show: false
            }
        },
        created: function () {
            this.fetchData();
        },
        computed: {
            // Styles
            movieWrapperStyles() {
                if (this.movie.backdrop_path) {
                    return {
                        backgroundImage: `url(${BAKCDROP_PATH}/${this.movie.backdrop_path})`
                    }
                }
            },
            isFavorite() {
                // Use getters without mapGetters binding helper
                return this.$store.getters.isFavorite(this.movie)
            }
        },
        methods: {
            async fetchData() {
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=b01d116084668e4b15d36351e4941996`);
                    const movie = await res.json();

                    // Add api response to our component data
                    this.movie = movie;

                    // gice small delay to test loader
                    setTimeout(() => {
                        this.show = true;
                    }, 800);

                } catch (e) {
                    console.log('error ', e); // eslint-disable-line no-console
                }
            },
            ...mapActions({
                addToFavorite: 'addToFavorite'
            }),
        },
        components: {
            TrinityRingsSpinner,
            Loader
        }
    }

</script>

<style scoped>
    .movie-wrapper {
        position: relative;
        padding-top: 50vh;
        background-size: cover;
        background-position: center;
    }

    .movie-info {
        background: white;
        color: #222;
        padding: 2rem 10%;
    }

    .loader {
        position: absolute;
    }

    .favorite {
        color: #FF5252;
    }

    .animate-detail-enter-active,
    .animate-detail-leave-active {
        transition: all .5s ease;
    }

    .animate-detail-enter,
    .animate-detail-leave-to {
        transition: all .5s ease;
        opacity: 0;
    }

</style>