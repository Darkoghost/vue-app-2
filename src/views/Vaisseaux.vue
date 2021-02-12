<template>
  <div >
    <h1 class="text-light">Voici les vaisseaux</h1>
    <b-button v-on:click="pageMoins">Précédant</b-button>
    <b-button v-on:click="pagePlus">Suivant</b-button>
    <b-table class="text-light" striped  :items="Vaisseaux" :fields="fields">

    </b-table>
  </div>
</template>


<script>
export default {
  name: "Vaisseaux",
  components: {},
  data() {
    return {
      fields: ['name', 'model', 'manufacturer', 'cost_in_credits', 'lenght', 'max_atmosphering_speed', 'crew', 'passengers', 'cargo_capacity', 'consumables', 'hyperdrive_rating', 'starship_class', 'pilots'],
      Vaisseaux: [],
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
          .get(this.$root.api + 'starships/?page='+ this.page)
          .then((response) => {
            console.log(response.data.results);
            this.Vaisseaux = response.data.results;
            this.displayContent = true;
          })
          .catch((e) => {
            this.error = "Nous ne parvenons pas à récupérer les détails de ces vaiseaux.";
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
