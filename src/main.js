import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/store"
import router from "./router/router";
import dateFilter from '@/filters/date.filters'
import './assets/styles/styles.scss'

Vue.config.productionTip = false
Vue.filter('date', dateFilter)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')