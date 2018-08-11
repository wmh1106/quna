<template>
  <div>
    <div class="headerButton" v-if="isShow">
      <router-link tag="div" to="/" class="back">
        <svg class="icon"  aria-hidden="true">
          <use xlink:href="#i-back"></use>
        </svg>
      </router-link>
    </div>
    <div class="headerFixed" v-if="!isShow" :style="opacityObject">
      <router-link to="/" class="back">
        <svg class="icon"  aria-hidden="true">
          <use xlink:href="#i-back"></use>
        </svg>
      </router-link>
      <h2>城市选择</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailsHeader',
  data () {
    return {
      isShow: true,
      opacityObject: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityObject = {opacity}
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import "~style/varibles.scss";

.headerButton {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  height: px(44);
  .back{
    position: absolute;
    left: px(5);
    top:px(5);
    width: px(34);
    height: px(34);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgba(0,0,0,.3);
    svg{
      width: px(20);
      height: px(20);
      color: #fff;
    }
  }
}

.headerFixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: px(44);
  background: $bgColor;
  .back{
    position: absolute;
    left: 0;
    top:0;
    width: px(44);
    height: px(44);
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      width: px(20);
      height: px(20);
      color: #fff;
    }
  }
  h2{
    font-size: px(16);
    color: #fff;
  }
}
</style>
