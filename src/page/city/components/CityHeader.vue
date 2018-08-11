<template>
  <div class="header">
    <router-link to="/" class="back">
      <svg class="icon"  aria-hidden="true">
        <use xlink:href="#i-back"></use>
      </svg>
    </router-link>
    <h2>城市选择</h2>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="scss" scoped>
@import "~style/varibles.scss";
.header{
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: px(34);
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
