<template>
<div id="collab">
  <main class="layout">
    <div class="inline-texte"><h1 class="inline-title">{{ content.form.titre }}</h1>
      <p class="inline-paragraph">{{ content.form.txt1 }}</p>
    </div>

    <form @submit.prevent="creer">
      <img class="preview img-fluid" :src="imageData" style="display: block; margin: 0 auto; max-width: 400px"/>

      <input type="file" ref="file" id="file" @change="previewImage" value="Choisissez une image">
      <input type="text" placeholder="Titre de l'oeuvre" v-model="oeuvres.titre">
      <input type="text" placeholder="Année de réalisation" v-model="oeuvres.annee">
      <input type="text" placeholder="Type de collection" v-model="oeuvres.collection">
      <input type="text" placeholder="Support" v-model="oeuvres.support">
      <input type="text" placeholder="Dimensions" v-model="oeuvres.dimension">

      <div class="form-control">
        <button><router-link to="oeuvres">< Annuler</router-link></button>
        <button type="submit" class="confirmer">> Confirmer</button>
      </div>
    </form>
  </main>
</div>
</template>

<script>
import param from '@/param/param'

export default {
  name: "OeuvresAdd",
  data () {
    return {
      imageData: param.imageDefault,
      content: {
        form: {
          titre: ''
        }
      },
      oeuvres: {
        id: 0,
        titre: null,
        annee: null,
        collection: null,
        support: null,
        dimension: null
      },
      file: null,
    }
  },

  created() {
    this.oeuvres.id = this.$route.params.id;
    console.log("id oeuvres", this.oeuvres);

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
  },

  methods : {
    previewImage: function(event) {
      this.file = this.$refs.file.files[0];
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },

    creer: function(){
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append("titre", this.oeuvres.titre);
      formData.append("annee", this.oeuvres.annee);
      formData.append("collection", this.oeuvres.collection);
      formData.append("support", this.oeuvres.support);
      formData.append("dimension", this.oeuvres.dimension);
      axios.post('https://video.jmfino.fr/test.php', formData)
        .then(response =>{
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
