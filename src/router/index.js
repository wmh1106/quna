import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Details from '@/page/details/Details'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Details',
    component: Details
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
