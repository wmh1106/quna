<template>
  <div class="banner">
    <div class="bannerImgWrap">
      <img :src="bannerImg" alt="">
    </div>
    <div class="bannerInfo">
      <div class="title">{{ sightName }}</div>
      <svg class="icon"  aria-hidden="true">
        <use xlink:href="#i-img"></use>
      </svg>
      <span>{{gallaryImgs.length}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailsBanner',
  props: {
    sightName: {
      type: String
    },
    bannerImg: {
      type: String
    },
    gallaryImgs: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/varibles.scss";
.banner{
  position: relative;
  width: 100%;
  height: px(176);
  .bannerImgWrap{
    height: px(176);
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .bannerInfo{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px(44);
    color: #fff;
    padding:0 px(20);
    display: flex;
    align-items: center;
    &::after{
      content: " ";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      min-height: px(30);
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
    }
    .title{
      flex: 1;
      @include ellipsis();
    }
    svg{
      flex-shrink: 1;
    }
    span{
      flex-shrink: 1;
      padding-left: px(4)
    }
  }
}
</style>
