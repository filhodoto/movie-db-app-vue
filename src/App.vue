<template>
    <div id="app">
        <Header :title="headerTitle"/>
        <router-view/>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    /**
     * Component
     */
    export default {
        name: 'app',
        data() {
            return {
                headerTitle: 'movie database',
            }
        },
        components: {
            Header
        }
    }
</script>

<style>
    #app {
        display: flex;
        flex-flow: column;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>
