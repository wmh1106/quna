<template>
  <div>
    <div class="searchWrap">
      <input type="text" placeholder="输入城市名或拼音" v-model="inputValue"/>
    </div>
    <div class="searchCityIndexList" v-show="inputValue !== ''" ref="searchCityIndexList">
      <ul class="city" v-show="searchCityList.length">
        <li class="border-bottom" @click="selectCity(item.name)" v-for="item of searchCityList" :spell="item.spell" :key="item.id">{{item.name}}</li>
      </ul>
      <ul class="city" v-show="!searchCityList.length">
        <li class="border-bottom" style="text-align:center">条件不符，没有数据</li>
      </ul>
    </div>
  </div>
</template>
<script>

import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data () {
    return {
      scroll: null,
      inputValue: ''
    }
  },
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    searchCityList () {
      const list = []

      if (!this.inputValue) return []

      for (let key in this.cities) {
        this.cities[key].forEach(element => {
          if (element.name.indexOf(this.inputValue) >= 0 || element.spell.indexOf(this.inputValue) >= 0) {
            list.push(element)
          }
        })
      }

      return list
    }
  },
  methods: {
    selectCity (cityName) {
      this.$store.commit('changeCity', {cityName: cityName})
      this.$router.push('/')
    }
  },
  mounted () {
    const element = this.$refs['searchCityIndexList']
    this.scroll = new BScroll(element)
  }
}
</script>
<style lang="scss" scoped>
@import "~style/varibles.scss";
.searchWrap{
  position: relative;
  z-index: 2;
  background: $bgColor;
  padding: px(10) px(20);
  input{
    width:100%;
    padding: px(4) px(8);
    border-radius: px(4);
    color: #666;
  }
}
.searchCityIndexList{
  position: fixed;
  left: 0;
  top: px(83);
  right: 0;
  bottom: 0;
  z-index: 1;
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
