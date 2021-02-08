import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueAxios from "vue-axios";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      api: 'https://swapi.dev/api/'
    }
  },
  render: h => h(App)
}).$mount('#app')
