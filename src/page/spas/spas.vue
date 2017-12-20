<template>
  <div style="height:1.2rem;font-size:0;background-color:#000;position:absolute;">
    <div class="header-float" style="width:100%;height:1.2rem;background:rgba(0,0,0,.6);position:fixed;top:0;z-index:5;">
      <div class="header-float-fixed">
          <img style="width:.8rem;height:.8rem;" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png" />
      </div>
      <div class="travel">
        <h2 class="go-tour">去哪儿旅行</h2>
        <div class="total-data"  style="">超过<span style="font-size:.28rem;color:#fab400;font-weight:bold;">4.6亿</span>人的聪明选择</div>
      </div>
      <div class="header-right">
        <div class="download">下载客户端</div>
        <i class="iconfont close" ref="handleCloseClick">&#xe69a;</i>
      </div>    
    </div>
    <div id="main-page" style="width:100%;min-height:14rem;">
      <div class="main-header">
        <div class="back iconfont">&#xe624;</div>
        <h1 class="search">温泉5折起，精挑细选温泉清单</h1>
        <div class="city"><i class="iconfont" style="font-size:.4rem;">&#xe602;</i><p class="first-page" style="font-size:.26rem;color:#fff;padding-top:.1rem;" @click="handleIndex">首页</p></div>
      </div>
      <div class="main-body">
        <div id="mg-mask hide" style="position:fixed;top:6.4rem;right:0;z-index:7;">
          <img src="//img1.qunarzz.com/piao/fusion/1712/ef/1b3189747fad8602.png_70x70_7df25a05.png" alt="" />
        </div>
        <div class="container-img" style="position:relative">
          <img src="//img1.qunarzz.com/piao/fusion/1710/a5/30bea424f8862102.jpg_640x361_929a4c2a.jpg" alt="" style="width:100%;height:4.22rem;opacity:.8;">
          <div class="float-word">
            <p class="container-count">温泉5折起</p>
            <p class="container-list">精挑细选温泉清单</p>
            <div class="container-city"><p class="container-city-select">北京<i class="iconfont more" style="color:#fff;">&#xe6a6;</i></p></div>
          </div>
        </div>
        <div class="container-coupon" style="width:100%;height:1.92rem;">
          <div class="container-coupon-color" style="position:relative;top:.15rem;width:81.3%;height:1.6rem;margin:0 auto;background-image:linear-gradient(to right,#ffd033,#ff5d11);border-radius:.06rem;">
            <div class="container-coupon-left" style="float:left;">
              <i style="font-size:.4rem;color:#fff;margin-top:.8rem;margin-left:.6rem;float:left;">&yen;</i><div class="coupon-price">5</div>
              <div>
                <div class="coupon-name">先领券再泡汤</div>
                <div class="coupon-desc">-门票新客代金券-</div>   
              </div>                        
            </div>
            <div class="container-coupon-right">立即领取
              <div class="container-coupon-radius"></div>
            </div>
          </div>         
        </div>
        <div class="container-model-outer" style="width:100%;margin:.2rem 0;background:#fff;border-top:.5rem sold #000;">
          <div class="container-anchor-list" style="width:100%;height:1.68rem;">
            <div class="container-anchor-for" v-for='item in anchorInfo' :key="item.id" >
              <p class="anchor-list-item" style="font-size:.28rem;color:#000;margin:.1rem;margin-left:.4rem;">{{item.name}}</p>
            </div>
          </div> 
          <div class="module" style="width:100%;">
            <div class="caption-outer" style="width:100%;height:.5rem;">
              <div class="left-line"></div><div class="left-circle"></div>
              <h2 class="caption-value">超值温泉</h2>
              <div class="right-line"></div><div class="right-circle"></div>
            </div>
            <div class="module-desc">“
              近千家温泉逐一甄选。价格不高，格调很高；水质、水温、环境、路途、服务...想你所想，为你所选！”
            </div>
            <ul class="dataContainer" style="width:auto;">
              <li v-for="item in dataInfo" :key="item.id">
                <img :src="item.imgUrl" alt="" class="list-img" style="with:2rem;height:1.8rem;margin:.1rem;float:left;">
                <div class="list-name" style="float:left;">
                  <h3 class="list-explain">{{item.explain}}</h3>
                <div style="margin-top:.45rem;">
                  <span class="list-msg-left">{{item.places}}</span>
                  <span class="list-msg-right" style="min-width:.48rem;padding:0.1rem .14rem;font-size:.24rem;line-height:.34rem;">{{item.state}}</span>
                </div>
                <div style="width:4.5rem;margin-top:.01rem;">
                  <i style="color:#e58700;margin-left:.1rem;font-size:.2rem;">&yen;</i><span class="list-price" style="font-size:.28rem;color:#e58700;">{{item.price}}</span>
                  <span class="list-through" style="font-size:.26rem;color:#666;text-decoration:line-through;">{{item.piao}}</span>
                </div>
                
                <div class="right-now">{{item.now}}</div>
                </div>
              </li>
            </ul>
            </div>
            <div class="super-outer"  style="width:100%;min-height:22rem;">
              <div class="super-perfer" style="width:100%;height:.5rem;margin-top:6rem;">
                <div class="super-left-line"></div><div class="super-left-circle"></div>
                <h2 class="super-value">山水温泉</h2>
                <div class="super-right-line"></div><div class="super-right-circle"></div>
              </div>
              <div class="super-module-desc">
                “ 远离城市的喧嚣，在私密的山水温泉中恢复活力。泡汤同时还能享受美景和清新的空气，治愈一周疲惫的你。”
              </div>
              <ul style="margin-right:.2rem;float:left;">
                <li v-for="item in superInfo" :key="item.id" style="margin:0 .1rem;float:left;">
                  <img :src="item.imgUrl" alt="" style="width:100%;height:2.8rem;">
                  <div class="super-places">{{item.places}}</div>
                  <p class="super-state">{{item.state}}</p>
                  <div class="super-explain" style="margin-top:.06rem;width:70%;float:left;">
                    <span class="super-specification">{{item.specification}}</span>
                    <span class="super-beauty">{{item.beauty}}</span>
                    <span class="super-service">{{item.service}}</span>
                  </div> 
                  <div style="float:right"><i style="font-size:.18rem;color:#ff8300;float:left;">&yen;</i><p class="super-price">{{item.price}}</p></div>
                  <div class="super-evaluate">{{item.evaluate}}</div>
                </li>
              </ul>
            </div>
            <div class="caption-model-outer" style="width:100%;min-height:21rem;">
              <div class="caption-perfer" style="width:100%;height:.5rem;">
                <div class="caption-left-line"></div><div class="caption-left-circle"></div>
                <h2 class="super-value">养生温泉</h2>
                <div class="caption-right-line"></div><div class="caption-right-circle"></div>
              </div>
              <div class="caption-module-desc">
                “ 远离城市的喧嚣，在私密的山水温泉中恢复活力。泡汤同时还能享受美景和清新的空气，治愈一周疲惫的你。”
              </div>
              <ul style="margin-right:.2rem;float:left;">
                <li v-for="item in captionInfo" :key="item.id" style="margin:0 .1rem;float:left;">
                  <img :src="item.imgUrl" alt="" style="width:100%;height:2.8rem;">
                  <div class="super-places">{{item.places}}</div>
                  <p class="super-state">{{item.state}}</p>
                  <div class="super-explain" style="margin-top:.06rem;width:70%;float:left;">
                    <span class="super-specification">{{item.specification}}</span>
                    <span class="super-beauty">{{item.beauty}}</span>
                    <span class="super-service">{{item.service}}</span>
                  </div> 
                  <div style="float:right"><i style="font-size:.18rem;color:#ff8300;float:left;">&yen;</i><p class="super-price">{{item.price}}</p></div>
                  <div class="super-evaluate">{{item.evaluate}}</div>
                </li>
              </ul>
            </div>     
          </div>          
      </div>
    </div>
    <spas-note></spas-note>
  </div>
</template>

<script>
import SpasNote from './spasBottom'
export default {
  name: 'Spas',
  components: {
    SpasNote
  },
  data () {
    return {
      anchorInfo: [],
      dataInfo: [],
      superInfo: [],
      captionInfo: []
    }
  },

  methods: {
    getSpasData () {
      this.$http.get('./static/spas.json')
        .then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      console.log(res)
      const body = res.body
      if (body && body.data && body.data.anchorList) {
        this.anchorInfo = body.data.anchorList
        this.dataInfo = body.data.dataList
        this.superInfo = body.data.superList
        this.captionInfo = body.data.captionList
        this.routerInfo = body.data.routerList
      }
    },

    handleCloseClick () {
      this.$refs.close.style.display = 'none'
    },

    handleIndex () {
      this.$router.push({path: '/'})
    }
  },

  created () {
    this.getSpasData()
  }
}
</script>

<style scoped>
  .header-float-fixed {
    -webkit-backdrop-filter: blur(10px);
    height: 1.2rem;
    position: absolute;
    top: 0;
    z-index: 5;
    padding:.2rem;
    background: rgba(0,0,0,0.6);
    box-sizing: border-box;
    float: left;
  }
  .go-tour {
    font-size: .44rem;
    color: #25A4BB;
    font-weight: 800;
  }
  .total-data {
    font-size: .28rem;
    color: #c4c4c4;
    line-height: .4rem;
    padding-top:.05rem;
  }
  .travel {
    margin-left: 1.2rem;
    padding: .12rem .43rem .17rem .11rem;
    background: rgba(0,0,0,0.6);
    float: left;
  }
  .header-right {
    height: 1.19rem;
    background: rgba(0,0,0,0.6);
    float: right;
  }
  .download {
    height: .66rem;    
    background: #f4b000;
    border-radius: .1rem;
    font-size: 0.28rem;
    color: #fff;
    text-align: center;
    line-height: .66rem;
    font-weight: 800;
    margin: .21rem .35rem 0 0.5rem;
    border-bottom: .06rem solid #e58700;
    float: left;
  }
  .close {
    font-size: 0.6rem;
    color: #f5f5f5;
    float: right;
    padding-top: .1rem;
  }
  #main-page {
    margin-top: 1.2rem;
  }
  .main-header {
    display: flex;
    background: #05bad5;
    color: #fff;
  }
  .back {
    width: .64rem;
    line-height: 0.86rem;
    text-align: center;
  }
  .search {
    flex: 1;
    line-height: 0.86rem;
    font-size: .36rem;
    padding-left: .3rem;
    color: #fff;
  }
  .icon-shuaxin {
    color:#ccc;
    font-size:0.26rem;
    padding:0 0.15rem;
  }
  .prompt {
    color:#ccc;
    font-size:0.26rem;
    line-height: 0.6rem;
    padding-left: 0.2rem;
  }
  .city {
    margin-right: .1rem;
    text-align: left;
  }
  .city-linknear {
    width: 1rem;
    line-height: .86rem;
    text-align: left;
    display: block;    
  }
  .float-word {
    width: 4rem;
    height: 1.6rem;
    position: absolute;
    top: 1.5rem;
    left: 2rem;
  }
  .container-count {
    display: flex;
    max-width: 60%;
    min-width: 30%;
    overflow: hidden; 
    font-size: .36rem;
    color: #fff;
    padding-left: 1rem;
    padding-top: .2rem;
    line-height: .5rem;
    vertical-align: middle;
  }
  .container-list {
    width: 100%;    
    font-size: .44rem;
    color: #fff;
    padding: .12rem;
    line-height: .6rem;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis; 
  }
  .container-city {
    width:1rem;
    height:.5rem;
    position:absolute;
    top:2rem;
    left:4rem;
    border-radius: .2rem; 
    background: rgba(255,255,255,0.3);
  }
  .container-city-select {
    font-size: .28rem;
    color: #fff;
    font-weight: bolder;
    text-align: center;
    line-height: .5rem;
  }
  .coupon-price {    
    font: .28rem Tahoma,Helvetica,sans-serif;
    font-size: 1rem;
    color: #fff;
    margin-left: .3rem;
    margin-top: .2rem;
    float: left;
  }
  .coupon-name {
    font-size:.36rem;
    color: #fff;
    line-height: .5rem;
    padding-top: .36rem;
    padding-left: .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
  }
  .coupon-desc {
    font-size:.24rem;
    color: #fff;
    line-height: .34rem;
    padding-left: .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
  }
  .container-coupon-right {
    width: .28rem;
    padding: .02rem .4rem;
    border-left: .02rem dotted rgba(255,255,255,.5);
    font-size: .28rem;
    color: #fff;
    font-weight: bolder;
    padding-top: .3rem;
    line-height: .3rem;
    text-align: center;
    float: right;
  }
  .container-coupon-radius {
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: -.14rem;
    margin-top:-.14rem;
    background:  #fff;
  }
  .anchor-list-item {
    display: flex;
  }
  .container-anchor-for {
    width: 30%;
    border: .01rem solid #ccc;
    margin-bottom: .2rem;
    margin: .11rem;
    float: left;
  }
  .left-line,.super-left-line,.caption-left-line {
    width: 1rem;
    height: .01rem;
    background: #ffa305;
    position: relative;
    top: .25rem;
    left: 1.3rem;
  }
   .right-line,.super-right-line,.caption-right-line {
    width: 1rem;
    height: .01rem;
    background: #ffa305;
    position: relative;
    top: .25rem;
    right: 1.3rem;
  }
  .left-circle,.super-left-circle,.caption-left-circle {
    width: .1rem;
    height: .1rem;
    background: #ffa305;
    border-radius: 50%;
    margin-top: .2rem;
    margin-left: 2.5rem;
    float: left;
  }
  .right-circle,.super-right-circle,.caption-right-circle {
    width: .1rem;
    height: .1rem;
    background: #ffa305;
    position: relative;
    top: .2rem;
    left: 4.8rem;
    border-radius: 50%;
  }
  .caption-value,.super-value {
    font-size: .36rem;
    color: #ff431d;
    line-height: .5rem;
    padding-left: .4rem;
    float: left;
  }
  .module-desc,.super-module-desc{
    min-height:.4rem;
    font-size: .28rem;
    color: #616161;
    line-height: .4rem;
    text-align:justify;
    padding: .52rem;
  }
  .caption-module-desc  {
    font-size: .28rem;
    color: #616161;
    line-height: .4rem;
    text-align:justify;
    margin: .52rem;
  }
  .list-msg-left {
    min-width:.48rem;
    padding:0.1rem .14rem;
    font-size:.24rem;
    color:#e58700;
    line-height:.34rem;
    border-right:.01rem solid #999;
  }
  .list-name {
    font-size:.30rem;
    margin-right:.4rem;
    color:#212121;
    line-height:.38rem;
    width:4.5rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;    
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;   
  }
  .right-now {
    position: relative;
    right: -3rem;
    bottom: .6rem;
    width: 1.1rem;
    background: #ff8300;
    color: #fff;
    font-size: .28rem;
    line-height: .56rem;
    text-align: center;
    border-radius: .04rem;
  }
  .super-places {
    width: .68rem;
    height: .44rem;
    border-radius: 45%;
    font-size: .24rem;
    color: #fff;
    text-align: center;
    line-height: .44rem;
    position: relative;
    top: -2.5rem;
    left: .28rem;
    background:rgba(255,255,255,.6);
  }
  .super-state {
    font-size: .32rem;
    color: #000;
    padding-left: .2rem;
    margin-top: -.2rem;
  }
  .super-specification {
    font-size: .24rem;
    color: #dd0000;
    padding-left: .2rem;
  }
  .super-beauty {
    font-size: .24rem;
    color: #000;
    padding-left: .2rem;
  }
  .super-service {
    font-size: .24rem;
    color: #d00;
    padding-left: .2rem;
  }
  .super-price {
    font-size: .3rem;
    color: #d00;
    float: right;
  }
  .super-evaluate {
    width:100%;
    background:#eee;
    font-size: .26rem;
    line-height: .3rem;
    color: #000;
    margin: .2rem;
    margin-top: .5rem;
  }
</style>
