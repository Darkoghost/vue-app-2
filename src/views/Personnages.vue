<template>
  <div >
    <h1 class="text-light">Voici les personnages</h1>
    <b-button v-on:click="pageMoins">Précédant</b-button>
    <b-button v-on:click="pagePlus">Suivant</b-button>
    <b-table class="text-light" striped  :items="Personnages" :fields="fields">

    </b-table>
  </div>
</template>


<script>
export default {
  name: "Personnages",
  components: {},
  data() {
    return {
      fields: ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'homeworld', 'species', 'vehicles', 'starships'],
      Personnages: [],
      displayContent: false,
      error: '',
      page: 1
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.axios
          .get(this.$root.api + 'people/?page='+ this.page)
          .then((response) => {
            console.log(response.data.results);
            this.Personnages = response.data.results;
            this.displayContent = true;
          })
          .catch((e) => {
            this.error = "Nous ne parvenons pas à récupérer les détails de ce personnage.";
          });
    },
    pageMoins(){
      this.page=this.page-1
      this.getDetail();
    },
    pagePlus(){
      this.page=this.page+1
      this.getDetail();
    },
  },
};
</script>

<style scoped>

</style>
