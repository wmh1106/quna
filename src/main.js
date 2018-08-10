import Vue from 'vue'
import App from './App'
import router from './router'

// 重置样式
import '@/assets/style/reset.css'
// 1像素边框样式
import '@/assets/style/border.css'
// 移动端300毫秒延迟
import fastClick from 'fastclick'

fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
