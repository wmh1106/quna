<template>
  <div class="weekWrap">
    <div class="title">周末去哪</div>
    <ul class="weekList">
      <li v-for="item of list" :key="item.id">
        <div class="imgWrap"><img :src="item.imgUrl" alt=""></div>
        <div class="info">
          <h3>{{item.title}}</h3>
          <span>{{item.desc}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeek',
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
@import "~style/varibles.scss";
.weekWrap{
  .title{
    display: flex;
    align-items: center;
    height: px(40);
    padding-left: px(13);
    font-size: px(14);
    color: #333;
  }
  .weekList{
    li{
      padding-bottom:px(5);
      &:nth-last-child(1){
        padding-bottom: 0;
      }
      .imgWrap{
        overflow: hidden;
        height: 36.875vw;
        img{
          width: 100%;
        }
      }
      .info{
        background: #fff;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: px(62);
        padding:px(7) px(10) px(10);
        h3{
          font-size: px(14)
        }
        span{
          font-size: px(12);
          color: #999;
        }
      }
    }
  }
}
</style>
