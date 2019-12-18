import Vue from "vue"
import App from "@/App.vue"
import ApiService from "@/common/api.service"
import store from "@/store"
import router from "@/router"
import "@/assets/css/base.css"

Vue.config.productionTip = false

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
