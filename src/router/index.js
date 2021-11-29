import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Episode from '../views/Episode'
import Character from '../views/Character'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: () => import('../views/Characters')
  },
  {
    path: '/Characters/:id',
    name: "idChars",
    component: Character,
    props: true,
  },
  {
    path: '/Episodes',
    name: 'Episodes',
    component: () => import('../views/Episodes')
  },
  {
    path: '/Episodes/:id',
    name: "idEpisodes",
    component: Episode,
    props: true,
  },
  {
    path: '/Locations',
    name: 'Locations',
    component: () => import('../views/Locations.vue')
  },
  {
    path: "*",
    redirect: "/",
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
