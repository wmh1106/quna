<template>
    <div class="">
        <home-header></home-header>
        <swiper :list="swiperList"></swiper>
        <icons :iconList="iconList"></icons>
        <recommend :list="recommendList"></recommend>
        <week :list="weekendList"></week>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Week from './components/Week'
import Recommend from './components/Recommend'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Week,
    Recommend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/quna/dist/api/index.json')
        .then(res => (this.getUseData(res)))
    },
    getUseData (res) {
      const {ret, data} = res.data
      if (ret && data) {
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
