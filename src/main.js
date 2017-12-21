import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import './assets/style/iconfont/iconfont.css'
import VueSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
<<<<<<< HEAD
=======
import store from './store/'

>>>>>>> eadc78d3dede00a0e512d41cfd162895d608fb38
Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
