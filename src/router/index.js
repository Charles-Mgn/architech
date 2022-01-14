import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'

import Ugarte from '@/components/Ugarte'
import Oeuvres from '@/components/Oeuvres'
import DetailOeuvres from '@/components/DetailOeuvres'
import CreateOeuvres from '@/components/CreateOeuvres'
import UpdateOeuvres from '@/components/UpdateOeuvres'
import Artistes from '@/components/Artistes'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Accueil', component: Accueil } ,
    { path: '/ugarte', name: 'Ugarte', component: Ugarte },

    { path: '/oeuvres', name: 'Oeuvres', component: Oeuvres },
    { path: '/detailOeuvres/:id', name: 'DetailOeuvres', component: DetailOeuvres },
    { path: '/createOeuvres', name: 'CreateOeuvres', component: CreateOeuvres },
    { path: '/updateOeuvres/:id', name: 'UpdateOeuvres', component: UpdateOeuvres },

    { path: '/artistes',    name: 'Artistes',         component: Artistes },
  ]
})


