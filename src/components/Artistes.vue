<template>
<div id="artistes">
  <main class="layout">
    <div class="artistes-content">
      <div class="artiste-img1 image-border"></div>
      <div class="artiste-texte">
        <h1>{{ content.artistes.titre }}</h1>
        <p>{{ content.artistes.txt1 }}</p>
        <p>{{ content.artistes.txt2 }}</p>
        <p>{{ content.artistes.txt3 }}</p>
        <p>{{ content.artistes.txt4 }}</p>
      </div>
      <div class="artiste-img2 image-border"></div>
    </div>
    <button><router-link to="ugarte">< La vie de Ugarte</router-link></button>
    <button><router-link to="oeuvres">< Voir les oeuvres</router-link></button>
  </main>
</div>
</template>

<script>
export default {
  name: "Artistes",
  data () {
    return {
      content: {
        artiste: {
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
  },

  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>
