<template>
<div id="accueil">
  <main class="layout">
    <div class="accueil-flex-row">
      <img src="static/img/logo_large.png" alt="logo architech" class="accueil-logo-desktop">
      <div class="border-mobile-right">
        <div class="image-border accueil-img1"></div>
      </div>
    </div>
    <div class="accueil-flex-row">
      <div class="border-mobile-left">
        <div class="image-border accueil-img2"></div>
      </div>
      <div class="inline-texte accueil-bloc-text1">
        <h1 class="inline-title">{{ content.accueil.titre }}</h1>
        <p class="inline-paragraph">{{ content.accueil.txt1 }}</p>
      </div>
    </div>
    <p class="accueil-bloc-text2">{{ content.accueil.txt2 }}</p>
    <button ><router-link to="ugarte">> Découvrez Ugarte</router-link></button>
  </main>
</div>
</template>

<script>
export default {
  name: "Accueil",
  data () {
    return {
      content: {
        accueil: {
          titre: ''
        }
      }
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
  }
}
</script>

<style scoped>

</style>
