<template>
  <div class="swiperWrap">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="图片">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>

export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiperWrap{
    width: 100%;
    height: 31.2vw;
    img{
      width:100%;
    }
    .swiper-pagination{
      width: 100%;
      bottom: 0;
    }
  }
  .swiperWrap /deep/ .swiper-pagination-bullet-active{
    background: #fff;
  }
</style>
