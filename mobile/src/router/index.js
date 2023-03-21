import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'


import Report from '@/components/report.vue'

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/report',
    name: 'report',
    component: Report,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
