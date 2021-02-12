import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Personnages from '../views/Personnages.vue'
import Mondes from '../views/Mondes.vue'
import Vaisseaux from "@/views/Vaisseaux";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/personnages',
    name: 'Personnages',
    component: Personnages
  },
  {
    path: '/planetes',
    name: 'Mondes',
    component: Mondes
  },
  {
    path: '/vaisseaux',
    name: 'Vaisseaux',
    component: Vaisseaux
  },
  {
    path: '/a_propos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Apropos.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
