<template>
    <v-app dark id="app">
        <Header :title="headerTitle" :isOffline="isOffline"/>
        <router-view/>
    </v-app>
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
                isOffline: this.updateOfflineState()
            }
        },
        updated() {
            this.updateOfflineState()
        },
        methods: {
            updateOfflineState() {
                this.isOffline = !navigator.onLine;
            }
        },
        components: {
            Header
        },
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
