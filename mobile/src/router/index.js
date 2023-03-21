import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'


import Report from '@/components/report.vue'
import lostitem from '@/components/lostitems.vue'

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
  ,
  {
    path: '/lostitem',
    name: 'lostitem',
    component: lostitem,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
