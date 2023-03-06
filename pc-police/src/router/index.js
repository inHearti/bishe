import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'
import cluetrue from '@/components/cluetrue.vue'
import cluefalse from '@/components/cluefalse.vue'
import policeCase from '@/components/policeCase.vue'
import dashboard from '@/components/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/home',
    name: 'home',
    redirect: 'dashboard',
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
    },
    {
      path: '/policeCase',
      name: 'policeCase',
      component: policeCase,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
