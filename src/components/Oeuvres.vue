<template>
<div id="oeuvres">
  <main class="layout">
    <h1>Les oeuvres de Jean-Pierre Ugarte</h1>

    <div class="oeuvre" v-for="oeuvres in content.oeuvres" :key="oeuvres.id">
        <img :src="oeuvres.image"
              :alt="oeuvres.titre" class="image-border">
        <div class="oeuvre-desc">
          <h2 class="oeuvre-titre">{{ oeuvres.titre }}</h2>
          <p class="oeuvre-detail">{{ oeuvres.annee }}</p>
          <p class="oeuvre-detail">{{ oeuvres.collection }}</p>
          <p class="oeuvre-detail">{{ oeuvres.support }}</p>
          <p class="oeuvre-detail">{{ oeuvres.dimension }}</p>
          <button class="desc-button">
            <router-link :to="{ name: 'DetailOeuvres', params: { id: oeuvres.id} }" style="display: block" class="desc-router">Fiche
              d'information
            </router-link>
          </button>
          <button class="desc-button">
            <router-link :to="{ name: 'UpdateOeuvres', params: { id: oeuvres.id} }" class="desc-router">Mise à jour</router-link>
          </button>
        </div>
    </div>

    <button><router-link to="createOeuvres">> Ajouter des oeuvres</router-link></button>
    <button><router-link to="artistes">> Artistres similaires</router-link></button>
  </main>
</div>
</template>

<script>
export default {
  name: "Oeuvres",
  data () {
    return {
      content: []
    }
  },

  created() {
    axios.get('static/content.json').then(function (response) {
      console.log(response.data);
      this.content = response.data;
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },

  computed:{
    listeOrderByYear: function(){
      function compare(a, b) {
        if (a.oeuvres.annee < b.oeuvres.annee) return -1;
        if (a.oeuvres.annee > b.oeuvres.annee) return 1;
        return 0;
      }
      return this.content.sort(compare);
    }
  },
}
</script>

<style scoped>

</style>
