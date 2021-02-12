<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/personnages">Personnages</router-link> |
      <router-link to="/planetes">Planètes</router-link> |
      <router-link to="/vaisseaux">Vaisseaux</router-link> |
      <router-link to="/a_propos">A propos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>


</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
body{
  background-image: url("assets/background2.jpg");
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
