<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/accueil.jpg">
    <Bienvenue msg="Bienvenue sur le répertoire de l'univers Star Wars"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Bienvenue from '@/components/Accueil.vue'

export default {
  name: 'Home',
  components: {
    Bienvenue
  }
}
</script>
