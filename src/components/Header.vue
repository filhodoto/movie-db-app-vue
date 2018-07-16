<template>
    <header>
        <section class="wrapper">
            <router-link to="/">
                <img src="./../assets/logo.png"/>
                <h1>{{title}}</h1>
            </router-link>
            <ul class="icons-list">
                <li><router-link to="/">home</router-link></li>
                <li><button @click="toggleSearch">search</button></li>
            </ul>
        </section>
        <Search />
    </header>
</template>

<script>
    import Search from './ui/Search';

    export default {
        name: "Header",
        props: {
            title: String
        },
        components: {
            Search
        },
        methods: {
            toggleSearch () {
                this.$store.commit('toggleSearch');
            }
        }
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