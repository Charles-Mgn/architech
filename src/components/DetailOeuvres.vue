<template>
  <div id="detail">
    <main class="layout">
      <div class="detail-content">
        <img :src="content.image"
              :alt="content.titre" class="image-border">
        <div class="oeuvre-desc">
          <h2 class="oeuvre-titre">{{ content.titre }}</h2>
          <p class="oeuvre-detail">{{ content.annee }}</p>
          <p class="oeuvre-detail">{{ content.collection }}</p>
          <p class="oeuvre-detail">{{ content.support }}</p>
          <p class="oeuvre-detail">{{ content.dimension }}</p>
        </div>
      </div>
      <button><router-link to="/oeuvres">Retour</router-link></button>
    </main>
  </div>
</template>

<script>
export default {
  name: "DetailOeuvres",
  data () {
    return {
      content: [],
      id : 0
    }
  },

  created() {
    this.id = this.$route.params.id;
    axios.get('static/content.json').then(function (response) {
      console.log(response.data);
      this.content = response.data.oeuvres[(this.id)];
      console.log("test", this.content);
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<style scoped>

</style>
