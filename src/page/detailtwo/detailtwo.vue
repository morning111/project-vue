<template>
<div>
  <div class="download"  ref="close" >
    <div class="top-download" style="background: rgba(0 , 0, 0, .7);">
      <div class="top-logo">
        <img style="width:40px;height:40px" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png">
      </div>
      <div class="top-tour">
        <div class="top-topic">去哪儿旅行</div>
        <div class="top-tip">超过<span class="top-num">4.6亿</span>人的聪明选择</div>
      </div>
      <div class="top-down">
          <div class="top-downtext">下载客户端</div>
      </div>
    </div>
    <div  class="top-close">
      <img @click="handleClose" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png" style="width:100%;height:100%" >
    </div>
  </div>

  <header class="header">
    <div class="back iconfont" @click="handelIndexb">&#xe624;</div>
    <div class="header-center">
      初冬滑雪季
    </div>
    <div class="header-right">
      <i class="iconfont icon-index">&#xe602;</i>
      <div class="index-page" @click="handelIndex">首页 </div>
    </div>
  </header>
<detail-banner></detail-banner>
<detail-recommend></detail-recommend>
<div class="address">
  <detail-address :snowInfo="snowInfo"></detail-address>
  <detail-addressa :snowInfoa="snowInfoa"></detail-addressa>
</div>
</div>

</template>
<script>
import DetailBanner from './banner'
import DetailRecommend from './recommend'
import DetailAddress from './address'
import DetailAddressa from './addressa'
export default {
  name: 'detailtwo',
  components: {
    DetailBanner,
    DetailRecommend,
    DetailAddress,
    DetailAddressa
  },
  data () {
    return {
      snowInfo: [],
      snowInfoa: []
    }
  },
  methods: {
    handelIndex () {
      this.$router.push({path: '/'})
    },
    handelIndexb () {
      this.$router.push({path: '/'})
    },
    handleClose () {
      this.$refs.close.style.display = 'none'
    },
    getDataIndex () {
      this.$http
        .get('./static/detailtwo.json')
        .then(this.handleDataSucc.bind(this))
    },
    handleDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.snow) {
        this.snowInfo = body.data.snow
        this.snowInfoa = body.data.snowa
      }
    }
  },
  created () {
    this.getDataIndex()
  }
}
</script>
<style scoped>
.address{
  background: #e1f3fe;
  height:30rem;
  position: relative;
  top:-.17rem;
}
.header {
  display: flex;
  color: #fff;
  background: #05bad5;
}
.back {
  width: 0.64rem;
  text-align: center;
  line-height: 0.88rem;
  
}
.header-center {
  flex: 1;
  height: 0.88rem;
  text-align: center;
  line-height: 0.88rem;
}
.header-right {
  width: 0.88rem;
  height: 0.88rem;
}
.icon-index { 
  color: #ccc;
  display: block;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  padding: 0 0.15rem;
  font-size: 0.26rem;
}
.index-page {
  width: 100%;  
  text-align: center;
  margin-right: 0.1rem;
}
.mp-navigation {
  width: 20%;
  height: 100%;
}
.mp-topic-img {
  position: absolute;
  top: -0.4rem;
  width: 100%;
}
.download{
    width:100%;
    height: 1.2rem;
    font-size: 0;  
    z-index: 10000;
    background-color: #000;
  
}
.top-download{
    position: fixed;
    top: 0;
    z-index: 12000;
    height:1.2rem;
    width: 100%;
    font-size: 12px;
    padding: 10px 0;
    box-sizing: border-box;
}
.top-logo{
  width: 1.2rem;
  text-align: center;
  position: absolute;
}
.top-tour{
  position: absolute;
  left:1.2rem;
}
.top-down{
    border-bottom: 3px solid #e58700;
    border-radius: 5px;
    background-color: #e58700;
    top: .2rem;
    right: .9rem;
    position: absolute;
}
.top-close{
    position: fixed;
    z-index: 13000;
    top: 0.01rem;
    right: 0.01rem;
    width: .4rem;
    height: .4rem;
}
.top-topic{
    font-size: .44rem;
    color: #25A4BB;
    font-weight: bold;
    line-height: .44rem;
}
.top-tip{
    color: #c4c4c4;
    line-height: 20px;
}
.top-num{
  font-size: 14px;
  color: #fab400;
  font-weight: bold;
  line-height: 20px;
}
.top-downtext{
    width: 80px;
    height: 33px;
    background-color: #f4b000;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    line-height: 33px;
    font-weight: bold;
}
</style>