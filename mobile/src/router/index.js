import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'

import HomeMain from '@/components/home_main.vue'

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
    }]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
