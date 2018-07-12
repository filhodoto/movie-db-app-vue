<template>
    <ul>
        <li v-for="(movie, key) in movies">
            <MovieThumb :key="movie.id" :movie="movie"/>
        </li>
    </ul>
</template>

<script>
  import MovieThumb from './MovieThumb';

  export default {
    name: "MoviesList",
    data() {
      return {
        movies: {}
      }
    },
    // LifeCycle method (when component is created)
    created: function () {
      this.fetchData();
    },
    methods: {
      fetchData: async function () {
        try {
          const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b01d116084668e4b15d36351e4941996&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
          const movies = await res.json();
          console.log(movies);
          this.movies = movies.results;
        } catch(e) {
          console.log(e);
        }
      }
    },
    components: {
      MovieThumb
    }
  }
</script>

<style scoped>
    ul {
        display: grid;
        list-style: none;
        padding: 1rem;
        margin: 0;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(6, 1fr);
    }

</style>