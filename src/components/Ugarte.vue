<template>
<div id="ugarte">
  <main class="layout">
    <div class="ugarte-content">
      <div class="image-border ugarte-img1"></div>
      <div class="ugarte-texte">
        <div class="inline-texte">
          <h1 class="inline-title">{{ content.ugarte.titre }}</h1>
          <p class="inline-paragraph">{{ content.ugarte.txt1 }}</p>
        </div>
        <p>{{ content.ugarte.txt2 }}</p>
        <p>{{ content.ugarte.txt3 }}</p>
        <p>{{ content.ugarte.txt4 }}</p>
        <p>{{ content.ugarte.txt5 }}</p>
      </div>
      <div class="image-border ugarte-img2"></div>
    </div>
    <button><router-link to="oeuvres">> Voir les oeuvres</router-link></button>
    <button><router-link to="createOeuvres">> Ajouter des oeuvres</router-link></button>
  </main>
</div>
</template>

<script>
export default {
  name: "Ugarte",
  data () {
    return {
      content: {
        ugarte: {
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
