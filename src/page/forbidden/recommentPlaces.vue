<template>
  <div>
    <div class="recommend">
      <i class="iconfont like">&#xe71a;</i>
      <h2 class="recommend-go">去哪儿推荐</h2>
    </div>
    <div class="state-recom">
      <div class="recommend-list" v-for="item in golist" :key="item.id">
        <div style=" width: 77%;border-right: .01rem solid #ccc;padding-right: .1rem;float:left;">
          <h6 class="title">{{item.title}}</h6>
          <ul class="ul-list">
            <li>{{item.tomorrow}}</li>
            <li>{{item.noshop}}</li>
            <li>{{item.nopaying}}</li>
          </ul>
        </div>
        <div class="price">
          <span class="area-price">{{item.price}}</span>
          <span class="mp-hotlist-pric-start" style="font-size:.2rem;">起</span>
          <div class="area-check">{{item.check}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['golist']
}
</script>
<style scoped>
  .recommend {
    width: 100%;
    height: 0.8rem;
    line-height: .8rem;
    padding: 0 .2rem;
    border-bottom: .02rem solid #ccc;
  }
  .like {
    font-size: .35rem;
    color: #ff6e6e;
    margin-right: .5rem;
    float: left;
  }
  .recommend-go {
    font-size: .34rem;
    color: #212121;
    float: left;
  }
  .state-recom {
    width: 100%;
  }
  .recommend-list {
    height: 1.7rem;
    margin: .2rem;
    border-bottom: .01rem solid #eee;
  }
  .title {
    line-height: .52rem;
    font-size: .3rem; 
  }
  .ul-list li {
    font-size: .24rem;
    color: #333;
    margin: .2rem;
    float: left;
  }
  .price {
    margin-top: .2rem;
    width: 21%;
    float: right;
    text-align: center;
  }
  .area-price {
    color: #ff9800;
  }
  .area-check {
    height: .6rem;
    background: #ff9800;
    color: #fff;
    font-size: .28rem;
    line-height: .6rem;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
    margin-left:.1rem;
  }
</style>
