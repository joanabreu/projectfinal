<template>
<!-- Navbar -->
    <div id="app">
      <appCard cor='black'>
      <div id="nav">
<!-- Rotas da Navbar -->
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/breeds">Breeds</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/venda">Venda</router-link> |
      </div>
      </appCard>
      <router-view/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import appCard from './components/app-card.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    appCard
  },

  data: () => ({

  }),
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #595b5e;
  background-size: cover;
  background-repeat: repeat !important;
  background-image: url(https://www.publicdomainpictures.net/pictures/40000/velka/paw-prints-background.jpg);
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  
}

#nav {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#nav a {
  font-weight: bold;
  color: #585c5f;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>