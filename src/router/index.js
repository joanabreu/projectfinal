import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Breed from '../views/breed.vue'
import Breeds from '../views/breeds.vue'
import Contact from '../views/Contact.vue'
import Venda from '../views/venda.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/venda',
    component: Venda
  },
  {
    path: '/Contact',
    component: Contact
  },
  {
    path: '/breeds',
    component: Breeds
  },
  {
    path: '/breeds/:id',
    component: Breed
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
