<template>
  <div class="">
    <div class="list" v-for="(item,index) of categoryList" :key="index">
      <div class="title"><span class="icon"></span>{{item.title}}</div>
      <div v-if="item.children" class="children">
        <details-list :categoryList="item.children"></details-list>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailsList',
  props: {
    categoryList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/varibles.scss";
.list{
  background: #fff;
  .title{
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem;
    @include ellipsis();
    .icon{
      position: relative;
      left: .06rem;
      top: .06rem;
      display: inline-block;
      width: .36rem;
      height: .36rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
    }
  }
  .children{
    padding: 0 px(30);
  }
}
</style>
