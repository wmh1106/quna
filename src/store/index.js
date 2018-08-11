import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentCity: '上海'
  },
  mutations: {
    changeCity (state, option) {
      console.log(state, option)
      state.currentCity = option.cityName
    }
  }
})

export default store
