import {createApp} from 'vue'
import App from  './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"


createApp(App).use(router).mount('#app')

Vue.use(Croppa)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')