<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/perso">Personnages</router-link> |
      <router-link to="/world">Mondes</router-link> |
      <router-link to="/about">A propos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
  data() {
    return {
      test: []
    }
  },
  beforeCreate() {
    axios
        .get('https://swapi.dev/api/people/1/')
    .then(res => {
      this.test = res.data
      console.log(res.data)
    })

  }
}


</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-image: url("images/background2.jpg");
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
