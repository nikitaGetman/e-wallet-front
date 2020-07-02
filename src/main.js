import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/icons'
import Buefy from '@/plugins/buefy'
import '@/assets/scss/index.scss'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
