<template>
  <div id="app">
    <header class="accueil-header">
      <div class="nav-toggle" onclick='document.documentElement.classList.toggle("menu-open")'>
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
        <ul>
          <li class="menu-lien-principal"><router-link to="/" onclick="document.documentElement.classList.toggle('menu-open')">Accueil</router-link></li>
          <li class="menu-lien-principal"><router-link to="/ugarte" onclick="document.documentElement.classList.toggle('menu-open')">Ugarte</router-link></li>
          <li class="menu-lien-principal"><router-link to="/oeuvres" onclick="document.documentElement.classList.toggle('menu-open')">Oeuvres</router-link></li>
          <li class="menu-lien-principal"><router-link to="/createOeuvres" onclick="document.documentElement.classList.toggle('menu-open')">Collaboration</router-link></li>
          <li class="menu-lien-principal"><router-link to="/artistes" onclick="document.documentElement.classList.toggle('menu-open')">Artistes similaires</router-link></li>
        </ul>
        <img src="static/img/logo_large.png" alt="logo architech">
      </nav>
    </header>

    <router-view/>

    <footer>
      <p>Charles Mangin, étudiant MMI Montbéliard</p>
      <p>Projet réalisé dans le cadre d’un exercice pédagogique au département MMi de Montbéliard.</p>
      <p>Tous droits de reproduction et de diffusion réservés © {{ anneeFooter }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      anneeFooter: 0
    }
  },
  created() {
    const d = new Date();
    this.anneeFooter = d.getFullYear()
  }
}
</script>

<style>
</style>
