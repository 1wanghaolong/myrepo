import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
import * as vant from './components/vant.js'
//ES6 编译器识别问题 改为import * as vant from './utils/vant'
import axios from 'axios'
Vue.prototype.axios=axios
import 'lib-flexible'
Vue.prototype.Vant = vant;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
