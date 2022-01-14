<template>
  <div id="app">
    <header class="accueil-header">
      <div class="nav-toggle" onclick='document.documentElement.classList.toggle("menu-open")'>
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
        <ul>
          <li class="menu-lien-principal"><router-link to="/">Accueil</router-link></li>
          <li class="menu-lien-principal"><router-link to="/ugarte">Ugarte</router-link></li>
          <li class="menu-lien-principal"><router-link to="/oeuvres">Oeuvres</router-link></li>
          <li class="menu-lien-principal"><router-link to="/createOeuvres">Collaboration</router-link></li>
          <li class="menu-lien-principal"><router-link to="/artistes">Artistes similaires</router-link></li>
        </ul>
        <img src="static/img/logo_large.png" alt="logo architech">
      </nav>
    </header>

    <router-view/>

    <footer>
      <p>Charles Mangin, étudiant MMI Montbéliard</p>
      <p>Projet réalisé dans le cadre d’un exercice pédagogique au département MMi de Montbéliard.</p>
      <p>Tous droits de reproduction et de diffusion réservés © 2022</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>

<style>
</style>
