<template>
    <transition name="fade">
        <div v-if="openSearch" class="search-container">
            <input v-model="changeText" class="search" name="search" placeholder="Search movie..."/>
        </div>
    </transition>
</template>

<script>
    // Import Component Binding Helpers
    import { mapState } from 'vuex';

    export default {
        name: "Search",
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
        }
    }
</script>

<style scoped>
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

    .search-container {
        max-height: 90px;
    }

    .search:after {
        content: 'x';
        font-size: 80%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease-in-out;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        max-height: 0;
    }
</style>