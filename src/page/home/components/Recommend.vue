<template>
    <div class="recommendWrap">
      <div class="title">热销推荐</div>
      <ul class="recommendList">
        <router-link tag="li" :to="'/detail/'+item.id" class="border-bottom" v-for="item of list" :key="item.id">
          <img :src="item.imgUrl" />
          <div class="infoWrap">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
            <div><button class="button">查看详情</button></div>
          </div>
        </router-link>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
@import "~style/varibles.scss";
.recommendWrap{
  & > .title{
    display: flex;
    align-items: center;
    height: px(40);
    padding-left: px(13);
    font-size: px(14);
    color: #333;
  }
  .recommendList{
    li{
      display: flex;
      padding:px(10) px(13);
      background: #fff;
      img{
        display: block;
        flex-shrink:1;
        width: px(80);
        height: px(80);
        border-radius: px(5);
        margin-right: px(10);
      }
      .infoWrap{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-width: 0;
        .title{
          @include ellipsis;
          font-size: px(16);
        }
        .desc{
          @include ellipsis;
          font-size: px(12);
          color: #999;
        }
        .button{
          background: $bgColor;
          color:#fff;
          font-size: px(12);
          border-radius: px(3);
          padding: px(2) px(5);
        }
      }
    }
  }
}
</style>
