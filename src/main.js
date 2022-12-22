import Vue from 'vue'
import App from './App.vue'
import router from "./routes/routes"
import store from "./store/store"


Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')


