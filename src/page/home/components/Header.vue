<template>
    <div class="homeHeader">
        <div class="back">
            <svg class="icon"  aria-hidden="true">
                <use xlink:href="#i-back"></use>
            </svg>
        </div>
        <div class="search">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-search"></use>
            </svg>
            <input type="text" placeholder="输入城市/景点/游玩主题" />
        </div>
        <router-link to="/city" class="city">
            <span>{{this.$store.state.currentCity}}</span>
            <svg class="icon"  aria-hidden="true">
                <use xlink:href="#i-down"></use>
            </svg>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="scss">
@import "~style/varibles.scss";
.homeHeader {
  background: $bgColor;
  display: flex;
  align-items: center;
  height: px(44);

  .back {
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: px(40);
    height: 100%;
    color: #fff;
    svg{
      width: px(20);
      height: px(20);
    }
  }

  .search{
    flex: 1;
    display: flex;
    align-items: center;
    height: px(34);
    background: #fff;
    border-radius: 5px;
    padding: 0 px(15);
    svg{
      width: px(22);
      height: px(22);
      color: #ccc;
    }
    input{
      width: 100%;
      padding-right:1em;
      padding-left:0.5em;
      color:#666;
      font-size: px(14)
    }
  }

  .city{
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    min-width: px(64);
    color: #fff;
    span{
      padding-right:4px;
      font-size: px(14)
    }
    svg{
      color:#fff;
    }
  }
}
</style>
