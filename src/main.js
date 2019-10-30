import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/swiper/css/swiper.css'
// require styles


Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
Vue.use(VueAxios,axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
