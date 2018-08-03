<template>
    <header>
        <section class="wrapper">
            <router-link to="/" @click.native="closeSearch">
                <img src="./../assets/logo.png"/>
                <h1>{{title}}</h1>
            </router-link>

            <v-spacer></v-spacer>

            <v-btn icon @click="toggleSearch">
                <v-icon v-if="!openSearch">search</v-icon>
                <v-icon v-else>close</v-icon>
            </v-btn>
            <v-btn icon to="/" @click.native="closeSearch"><v-icon>home</v-icon></v-btn>
        </section>
        <aside v-if="isOffline" class="feedback -offline">{{offlineText}}</aside>
        <Search />
    </header>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Search from './ui/Search';

    export default {
        name: "Header",
        data() {
            return {
                offlineText: "There's no internet connection. Some info might not be updated and some features might not work"
            }
        },
        props: {
            title: String
        },
        components: {
            Search
        },
        computed: {
            ...mapState({
                openSearch: state => state.search.open
            }),
            isOffline() {
                return !navigator.onLine
            }
        },
        methods: {
            ...mapActions({
                closeSearch: 'closeSearch'
            }),
            toggleSearch () {
                this.$store.commit('toggleSearch');
            },
        },
    }
</script>

<style scoped>
    .wrapper {
        background-color: #111;
        padding: 20px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .feedback {
        width: 100%;
        display: flex;
        padding: 20px;
        align-items: flex-start;
        background: #141221;
        color: white;
        font-size: 15px;
    }

    img {
        width: 50px;
        margin-right: 20px;
    }

    a {
        display: flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
    }

</style>