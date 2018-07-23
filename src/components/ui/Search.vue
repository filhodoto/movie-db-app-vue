<template>
    <transition name="fade">
        <div v-if="openSearch" v-focus class="search-container">
            <input v-model="changeText"
                   class="search"
                   ref="search"
                   v-on:keyup.13="triggerSearch"
                   placeholder="Search movie..."/>
            <v-btn large
                   absolute
                   flat
                   depressed
                   right
                   class="action-button"
                   v-show="searchText"
                   @click="triggerSearch"
                   color="primary"
                   icon>
                <v-icon>search</v-icon>
            </v-btn>
        </div>
    </transition>
</template>

<script>
    // Import Component Binding Helpers
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Search',
        computed: {
            ...mapState({
                openSearch: state => state.search.open,
                searchText: state => state.search.text
            }),
            changeText: {
                get: function () {
                    // Get current search text value from store
                    return this.searchText
                },
                set: function (value) {
                    // Update store search text using a mutation
                    this.$store.commit('setSearchText', value);
                }
            }
        },
        methods: {
            ...mapActions({
                searchMovies: 'searchMovies',
            }),
            triggerSearch: function () {

                // If there's a query to be searched
                if (this.searchText) {

                    // If we're not in home page
                    if (this.$route.path !== '/') {

                        // Navigate to homepage
                        this.$router.push({ path: '/' });

                        // trigger search
                        this.searchMovies();
                    } else {
                        // trigger search
                        this.searchMovies();
                    }
                }
            }
        },
        // Creative a custom directive to focus input when it's parent is created
        // https://vuejs.org/v2/guide/custom-directive.html
        directives: {
            focus: {
                // directive definition
                inserted: function (el) {
                    el.querySelector('.search').focus();
                }
            }
        }

    }
</script>

<style scoped>
    .search-container {
        max-height: 90px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .search {
        width: 100%;
        height: 100%;
        padding: 20px;
        font-weight: 700;
        border: none;
        background: white;
        font-size: 1.5em;
        color: #42b883;
        text-transform: uppercase;
        border-bottom: 5px solid  #42b883;
    }

    .search:after {
        content: 'x';
        font-size: 80%;
    }

    .action-button .v-icon {
        font-size: 40px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease-in-out;
    }
    .fade-enter, .fade-leave-to {
        max-height: 0;
    }
</style>