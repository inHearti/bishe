import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'
import aside from '@/components/aside.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
