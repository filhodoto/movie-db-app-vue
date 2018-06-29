<template>
  <div id="app">
    <Header :title="headerTitle" />
    <MoviesList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MoviesList from './components/MoviesList.vue';

export default {
  name: 'app',
  data() {
    return {
      headerTitle: 'movie database',
    }
  },
  components: {
    Header,
    MoviesList
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
