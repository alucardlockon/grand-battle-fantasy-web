import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import lodash from 'lodash'
import axios from 'axios'

Object.defineProperty(Vue.prototype, '$request', { value: axios.create({ baseURL: process.env.VUE_APP_BASE_API }) })
Object.defineProperty(Vue.prototype, '$_', { value: lodash })
Vue.use(MintUI)
Object.defineProperty(Vue.prototype, '$msgbox', { value: MintUI.MessageBox })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
