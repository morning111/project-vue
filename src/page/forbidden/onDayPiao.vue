<template>
<div>
  <div class="on-day">
      <div class="on-day-piao" v-for="item in ondaylist" :key="item.id">
        <h3 class="piao-title">{{item.title}}</h3>
        <div class="piao">
          <div class="piao-top">
            <span class="piao-top-left">{{item.adult}}<span class="piao-top-center">{{item.evidence}}</span></span>
            <span class="piao-top-right"><i style="color:#ff9800;font-size:.2rem;">&yen;</i>{{item.price}}<span style="color: #212121;font-size:.2rem;">起</span></span>
          </div>
          <div class="piao-bottom">
            <span class="piao-bottom-left">{{item.student}}<span class="piao-bottom-center">{{item.proof}}</span></span>            
            <span class="piao-bottom-right">&yen;{{item.cost}}<span style="color: #212121;font-size:.2rem;">起</span></span>
          </div>
          <div clss="piao-check" style="height:.8rem;font-size: .3rem;color: #616161;text-align: center;line-height: .8rem;">{{item.check}}</div>
        </div>
      </div>
    </div>
    <div class="user-evaluate">
      <h3 class="evaluate">用户评论</h3>
      <div class="evaluate-particular" v-for="item in evaluateList" :key="item.id">
        <p class="user-name">{{item.name}}</p>
        <span class="evaluate-date">{{item.date}}</span>
        <p class="user-words">{{item.words}}</p>
        <div class="imgs">
          <img :src="item.imgUrl1" alt="" class="imgs-img">
          <img :src="item.imgUrl2" alt="" class="imgs-img">
          <img :src="item.imgUrl3" alt="" class="imgs-img">
          <img :src="item.imgUrl4" alt="" class="imgs-img">
          <img :src="item.imgUrl5" alt="" class="imgs-img">
          <img :src="item.imgUrl6" alt="" class="imgs-img">
          <img :src="item.imgUrl7" alt="" class="imgs-img">
          <img :src="item.imgUrl8" alt="" class="imgs-img">
          <img :src="item.imgUrl9" alt="" class="imgs-img">
        </div>
        <div class="img-total">{{item.total}}</div>        
      </div>     
    </div> 
</div>
    
</template>
<script>
export default {
  props: ['ondaylist', 'evaluateList']
}
</script>
<style scoped>
  .on-day {
    width: 100%;
    background: #ccc;
  }
  .piao-title {
    display: block;
    width: 100%;
    margin-top:.1rem;
    overflow: hidden;
    font-size: .32rem;
    line-height: .8rem;
    padding-left: .8rem;
    border-bottom: .01rem solid #ccc;
    background: #fff;
  }
  .piao {
    width: 100%;
    
    background: #fff;
  }
  .piao-top,.piao-bottom {
    padding: .24rem .2rem;
    line-height: .7rem;
    border-bottom: .01rem solid #ccc;
  }
  .piao-top-left,.piao-bottom-left {
    display: block;
    width:  70%;
    word-wrap: wrap;
    color: #333;
    font-size: .28rem;
    line-height: .48rem;
  }
  .piao-top-center,.piao-bottom-center {
    font-size: .24rem;
    color: #888;
    line-height: .32rem;
    margin: .1rem 0 .14rem .1rem;
    margin-right: 1rem;
    }
  .piao-top-right,.piao-bottom-right {
    float: right;
    margin-top: -.6rem;
    color: #ff9800;
    font-size: .36rem;
    line-height: .6rem;
  }
  .piao-check {
    width: 100%;
    height: .8rem;    
    text-align: center;
    font-size: .3rem;
    color: #616161;
  }
  .user-evaluate {
    width: 100%;
    min-height:16rem;
  }
  .evaluate {
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .3rem;
    line-height: .88rem;
    text-indent: .2rem;
    border-top: .2rem solid #ccc;
    border-bottom: .01rem solid #ccc;
  }
  .evaluate-particular {
    margin: 0 .2rem;
    background:url("2.png")no-repeat 4rem 0;
    position: relative;
  }
  .user-name {
    font-size: .26rem;
    line-height: .4rem;
    color: #ff9800;
    margin-top: .2rem;
    float: left;
  }
  .evaluate-date {
    font-size: .2rem;
    color: #212121;
    margin-right: .1rem;
    margin-top: .2rem;
    float: right;
  }
  .user-words {
    margin-top: .06rem;
    word-break: break-all;
    word-wrap: break-word;
    line-height: .42rem;
    font-size: .26rem;
    color: #616161;
    float: left;
  }
  .imgs {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    float: left;
    padding-bottom: .3rem;
    border-bottom: .01rem solid #ccc;
  }
  .imgs-img {
    width: 22%;
    height:22%;
    margin: .08rem;
  }
  .img-total {
    width:.94rem;
    height:.4rem;
    position: absolute;
    top: 7rem;
    right: .01rem;
    font-size: .24rem;
    color: #fff;
    text-align:  right;
    line-height: .4rem;
    padding-right: .05rem;
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;
    background: #666;
  }
</style>
