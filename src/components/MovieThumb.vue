<template>
    <img :src="posterImg" :alt="movie.title">
</template>

<script>
  const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

  export default {
    name: "MovieThumb",
    props: ['movie'],
    computed: {
      posterImg: function () {
        return `${POSTER_PATH}${this.movie.poster_path}`;
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
    img {
        box-shadow: 0 0 35px black;
    }
</style>