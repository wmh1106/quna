import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 移动端300毫秒延迟
import fastClick from 'fastclick'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 重置样式
import 'style/reset.css'
// 1像素边框样式
import 'style/border.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
