import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'

import HomeMain from '@/components/home_main.vue'
import Report from '@/components/report.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: '/home',
        redirect: '/homemain',
      },
      {
      path: '/homemain',
      name: 'homemain',
      component: HomeMain,
    },
    {
      path: '/report',
      name: 'report',
      component: Report,
    }]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
