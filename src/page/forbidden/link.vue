<template>
  <div>
    <div class="more">
      <h3 class="look-more">看了该景点的人还看了</h3>
      <div class="scenery" v-for="item in linklist" :key="item.id">
        <img :src="item.imgUrl" alt="" class="scenery-left">
        <div class="scenery-right">
          <h5 class="scenery-area">{{item.area}}</h5>
          <span class="scenery-price"><i class="icon-price" style="font-size:.2rem;">&yen;</i>{{item.price}}<span style="color: #212121;font-size:.2rem;">起</span></span>
          <span class="scenery-grade">{{item.grade}}</span>
          <span class="scenery-evalute">{{item.evalute}}</span>
          <p class="scenery-address">{{item.address}}</p>
        </div>
        
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  props: ['linklist']
}
</script>
<style scoped>
  .more {
    border-top: .3rem solid #ccc;
    width:100%;
  }
  .look-more {
    font-size: .3rem;
    color:#212121;
    line-height: .8rem;
    padding-left:.8rem;
    border-bottom: .01rem solid #ccc;
  }
  .scenery {
    width: 100%;
    height:2.3rem;
    margin:.2rem;
  }
  .scenery-left {
    width: 2rem;
    height: 2rem;
    margin-bottom: .3rem;
    float: left;
  }
  .scenery-right {
    width:72%;
    height: 2rem;
    margin:.1rem 0;
    position: relative;
    float: right;
  }
  .scenery-area {
    font-size: .3rem;
    color:#212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom:.2rem;
  }  
  .scenery-price {
    float: right;
    margin-right:.4rem;
    margin-top: -.5rem;
    color: #ff9800;
    font-size: .36rem;
    line-height: .6rem;
  }
  .scenery-grade {
    overflow: hidden;
    line-height: .8rem;
    color: #ff9800;
    float: left;
  }
  .scenery-evalute {
    overflow: hidden;
    line-height: .7rem;
    color: #ccc;
    margin-left:1rem;
    float: left;
  }
  .scenery-address {
    position: absolute;
    top: 1.5rem;
    overflow: hidden;
    color: #212121;
    float:left;
  }
</style>
