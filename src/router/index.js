import { createRouter, createWebHistory } from 'vue-router'
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
  },
  {
    path: '/loginhome',
    name: 'Loginhome',
    component: () => import('../views/LoginHome.vue')
  }
]

// component: () => import('../views/LoginHome.vue')

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
