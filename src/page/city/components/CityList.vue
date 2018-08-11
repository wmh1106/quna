<template>
  <div class="warp" ref="wrapper">
    <div>
      <div class="cityWarp">
        <h2 class="title border-bottom">当前城市</h2>
        <ul class="city border-bottom">
          <li><span>{{this.$store.state.currentCity}}</span></li>
        </ul>
      </div>

      <div class="cityWarp">
        <h2 class="title border-bottom">热门城市</h2>
        <ul class="city  border-bottom">
          <li v-for="item of hotCities" @click="selectCity(item.name)" :key="item.id" :spell="item.spell"><span>{{ item.name }}</span></li>
        </ul>
      </div>

      <div class="cityIndexList" v-for="(value, key) of cities" :key="key">
        <h2 class="title border-bottom" :ref="key"> {{key}}</h2>
        <ul class="city">
          <li class="border-bottom" @click="selectCity(item.name)" v-for="item of value" :spell="item.spell" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    hotCities: {
      type: Array
    },
    cities: {
      type: Object
    },
    letter: {
      type: String
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    selectCity (cityName) {
      this.$store.commit('changeCity', {cityName: cityName})
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~style/varibles.scss";
.warp{
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
  top:px(84);
  overflow: hidden;
}

.cityWarp{
  background: #fff;
  .title{
    line-height: px(30);
    padding-left: px(20);
    font-size: px(14);
  }
  .city{
    display: flex;
    flex-wrap: wrap;
    padding-right:px(30);
    li{
      width:33%;
      flex-shrink: 1;
      text-align: center;
      padding:0 px(10);
      margin:px(8) 0;
      min-width: 0;
      span{
        display: block;
        border: 1px solid #ddd;
        color:#999;
        padding: px(5) 0;
        border-radius: px(5);
        @include ellipsis()
      }
    }
  }
}
.cityIndexList{
  background: #fff;
  .title{
    line-height: px(30);
    padding-left: px(20);
    font-size: px(14);
    background: #f5f5f5;
  }
  .city{
    li{
      color: #999;
      padding: px(8) px(10);
      font-size: px(12);
    }
  }
}
</style>
