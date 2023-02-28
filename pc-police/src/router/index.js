import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'
import cluetrue from '@/components/cluetrue.vue'
import cluefalse from '@/components/cluefalse.vue'

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
      path: '/cluetrue',
      name: 'cluetrue',
      component: cluetrue,
    },
    {
      path: '/cluefalse',
      name: 'cluefalse',
      component: cluefalse,
    }]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
