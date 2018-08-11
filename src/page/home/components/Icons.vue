<template>
  <nav class="navIcon">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(childItem, index) of slidePage" :key="index">
        <div class="itemLink" v-for="item of childItem" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <span>{{ item.desc }}</span>
        </div>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </nav>
</template>
<script>

export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  props: {
    iconList: {
      type: Array
    }
  },
  computed: {
    slidePage () {
      let pages = []
      this.iconList.forEach((element, index) => {
        let idx = Math.floor(index / 8)
        if (!pages[idx])pages[idx] = []
        pages[idx].push(element)
      })
      return pages
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~style/varibles.scss";
  .navIcon {
    /deep/ .swiper-container{
      overflow: inherit;
    }
    /deep/ .swiper-pagination-bullet-active{
      background: $bgColor;
    }
  }

  .navIcon{
    height: 58vw;
    padding-top:px(5);
    background: #fff;
    .itemLink{
      float: left;
      display: flex;
      flex-direction: column;
      justify-content:space-around;
      align-items: center;
      width: 25vw;
      height: 25vw;
      text-align: center;
      img{
        width: px(55);
        height: px(55);
      }
      span{
        display: block;
        text-align: center;
        font-size: px(14);
      }
    }
    .swiper-pagination{
      bottom:-12%;
    }
  }
</style>
