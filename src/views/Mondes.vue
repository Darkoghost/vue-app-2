<template>
  <div>
    <h1 class="text-light">Voici les planètes</h1>
    <b-button v-on:click="pageMoins">Précédant</b-button>
    <b-button v-on:click="pagePlus">Suivant</b-button>
    <b-button v-on:click="getResident">Test</b-button>
    <b-table class="text-light" striped  :items="Mondes" :fields="fields"></b-table>
  </div>
</template>


<script>
export default {
  name: "Mondes",
  components: {},
  data() {
    return {
      fields: ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'population', 'residents'],
      Mondes: [],
      item: [],
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
          .get(this.$root.api + "planets/?page="+ this.page)
          .then((response) => {
            console.log(response.data.results);
            this.Mondes = response.data.results;
            this.displayContent = true;
          })
          .catch((e) => {
            this.error = "Nous ne parvenons pas à récupérer les différentes planètes.";
          });
      this.getResident();
    },
    getResident() {

      var i;
      this.Mondes.forEach(function(item){


        var residents = item.residents
        i=0
        residents.forEach(function (item){
          this.item = console.log(item)
          /*var test = this.getFiltre()
          console.log(test)*/
          //i++

        })
      });

    },
    getFiltre(){
      this.axios
          .get(this.item)
          .then((response) => {
            console.log(response.data);
            return response.data.name;
          })
          .catch((e) => {
            this.error =
                "Nous ne parvenons pas à récupérer la liste des personnages.";
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