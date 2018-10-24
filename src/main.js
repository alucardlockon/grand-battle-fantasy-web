import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import lodash from 'lodash'

// Object.defineProperty(Vue.prototype, '$request', { value: axios.create({ baseURL: process.env.VUE_APP_API_URL }) })
Object.defineProperty(Vue.prototype, '$_', { value: lodash })
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
