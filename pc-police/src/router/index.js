import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'
import clue from '@/components/clue.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [{
      path: '/clue',
      name: 'clue',
      component: clue,
    }]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
