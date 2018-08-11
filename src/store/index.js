import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'

if (localStorage.defaultCity) {
  defaultCity = localStorage.defaultCity
}

const store = new Vuex.Store({
  state: {
    currentCity: defaultCity
  },
  mutations: {
    changeCity (state, option) {
      console.log(state, option)
      state.currentCity = option.cityName
      localStorage.defaultCity = option.cityName
    }
  }
})

export default store
