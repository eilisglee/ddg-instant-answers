import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseIcon from '@/components/BaseIcon.vue'
import Search from '@/components/Search.vue'

Vue.component('BaseIcon', BaseIcon)
Vue.component('Search', Search)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
