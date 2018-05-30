import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Register from '@/components/account/register'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueAxios,axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    }
  ]
})
