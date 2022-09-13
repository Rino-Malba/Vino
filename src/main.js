import {createApp} from 'vue'
import App from  './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Croppa from "vue-croppa";
import 'vue-croppa/dist/vue-croppa.css'


createApp(App).use(router).mount('#app')

Vue.config.productionTip = false
Vue.use(Croppa)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')