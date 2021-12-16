import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  }
  ,
  {
    path: '/view',
    name: 'View',
    component: () => import('../views/View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
