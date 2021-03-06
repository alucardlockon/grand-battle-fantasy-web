import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account/login',
      name: 'login',
      component: () => import('@/views/account/Login.vue')
    },
    {
      path: '/account/register',
      name: 'register',
      component: () => import('@/views/account/Register.vue')
    },
    {
      path: '/battle/battle',
      name: 'battle',
      component: () => import('@/views/battle/core/battle.vue')
    }
  ]
})
