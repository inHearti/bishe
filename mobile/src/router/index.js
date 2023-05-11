import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'


import Report from '@/components/report.vue'
import lostitem from '@/components/lostitems.vue'
import caselist from '@/components/caselist.vue'
import cluelist from '@/components/cluelist.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'

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
  ,
  {
    path: '/caselist',
    name: 'caselist',
    component: caselist,
  }
  ,
  {
    path: '/cluelist',
    name: 'cluelist',
    component: cluelist,
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: login,
  }
  ,
  {
    path: '/register',
    name: 'register',
    component: register,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
