import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Nav from '../views/nav3.vue'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/about',
      name: 'About',
      component: About
  },
  {
      path: '/nav',
      name: 'nav',
      component: Nav
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
