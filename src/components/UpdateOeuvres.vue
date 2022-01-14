<template>
<div id="collab">
  <main class="layout">
    <div class="inline-texte">
      <h1>Modification d'une oeuvre</h1>
    </div>

    <form @submit.prevent="modification">
      <img class="preview img-fluid" :src="imageData" style="display: block; margin: 0 auto; max-width: 400px"/>

      <input type="file" ref="file" id="file" @change="previewImage" value="Choisissez une image">
      <input type="text" placeholder="Titre de l'oeuvre" v-model="content.titre">
      <input type="text" placeholder="Année de réalisation" v-model="content.annee">
      <input type="text" placeholder="Type de collection" v-model="content.collection">
      <input type="text" placeholder="Type de peinture" v-model="content.support">
      <input type="text" placeholder="Dimensions" v-model="content.dimension">

      <div class="form-control">
        <button><router-link to="/oeuvres">< Annuler</router-link></button>
        <button type="submit" class="confirmer">> Confirmer</button>
      </div>
    </form>
  </main>
</div>
</template>

<script>
import param from '@/param/param'

export default {
  name: "OeuvresModify",
  data () {
    return {
      content: [],
      oeuvres: {
        id: 0,
        titre: null,
        annee: null,
        collection: null,
        support: null,
        dimension: null
      },
      file: null,
      updateImage: false,
      idImage: 0,
      imageData: null
    }
  },

  created() {
    this.id = this.$route.params.id;
    axios.get('static/content.json').then(function (response) {
      console.log(response.data);
      this.content = response.data.oeuvres[(this.id)];
      this.imageData = this.content.image
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },

  methods : {
    previewImage: function(event) {
      this.file = this.$refs.file.files[0];
      this.updateImage = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },

    modification: function(){
      if (this.updateImage) {
        const formData = new FormData();
        let imagefile = document.querySelector('#file');
        formData.append('file', this.file);

        axios.post('https://video.jmfino.fr/test.php', formData)
          .then(response => {
            console.log("Mise à jour image");
            this.content.image = response.data;
            this.modificationOeuvre();
          })
          .catch(error => {
            console.log("Erreur création média");
            console.log(error)
          })
      } else {
        this.modificationOeuvre();
      }
    },

    modificationOeuvre: function () {
      const formData = new FormData();
      formData.append("titre", this.content.titre);
      formData.append("annee", this.content.annee);
      formData.append("collection", this.content.collection);
      formData.append("support", this.content.support);
      formData.append("dimension", this.content.dimension);
      formData.append('image', this.imageData);
      axios.post('https://video.jmfino.fr/test.php', formData)
        .then(response => {
          console.log(response.data);
          this.$router.push('/oeuvres');
        })
        .catch(error => {
          console.log("Erreur création");
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
