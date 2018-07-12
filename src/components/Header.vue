<template>
    <header>
        <router-link to="/">
            <img src="./../assets/logo.png"/>
            <h1>{{title}}</h1>
        </router-link>
    </header>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: String
    },
  }
</script>

<style scoped>
    header {
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