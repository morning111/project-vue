<template>
  <div>
    <div class="append-div">
      <div class="download">
        <div style="width: 1.2rem;text-align: center;position: absolute;">
          <img style="width: .8rem;height: .8rem" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png" alt="">
        </div>
        <div style="position: absolute;left: 1.2rem">
          <div style="font-size: .44rem;color: #25A4BB;font-weight: 900;line-height: .44rem">去哪旅行</div>
          <div style="color: #c4c4c4;line-height: .4rem">
            超过
            <span style="font-size: .28rem;color: #fab400;font-weight: 900">4.6亿</span>
            人的聪明选择
          </div>
        </div>
        <div style="padding: .1rem .2rem 0 0;font-size: 0;position: relative;">
          <div class="content">
            <div class="downloadHTML">下载客户端</div>
          </div>
        </div>
        <div class="closeDiv">
          <img style="width: .4rem;height: .4rem" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png" alt="">
        </div>
      </div>
    </div>
    <header class="header">
      <a href="#" class="header-back" id="msgoback">
        <span class="back iconfont">&#xe624;</span>
      </a>
      <h1 class="title">冬日1元票</h1>
      <a href="#" class="header-bar header-logo">
        <span class="iconfont-head"></span>
        首页
      </a>
    </header>
    <div class="country-outer">
      <ul class="flexbox">
        <li class="flexbox-layout country-actived">国内场</li>
        <li class="flexbox-layout">海外场</li>
      </ul>
    </div>
    <div class="banner img-container">
      <img data-img="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/banner.jpg" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/banner.jpg" alt="冬日1元票" class="topic-img">
    </div>
    <div class="city-outer">
      <div class="city-container">
        <ul class="city-list flexbox">
          <li v-for='item in cityInfo' :key='item.title' class="city-item flexbox-layout city-actived">
            <span class="city-inner">{{item.regain[0]}}</span>
          </li>
        </ul>
      </div>
      <div class="city-expand"  slot="pagination">
      </div>
    </div>
    <div class="anchor-outer">
      <div class="anchor-container">
        <ul class="anchor-list"  :options="anchorOption">
          <li v-for='item in anchorInfo' :key='item.id' class="anchor-item anchor-actived">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="modules-outer">
        <div class="modules-caption img-container">
          <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_1.jpg" alt="" class="topic-img">
        </div>
        <div class="modules-content">
          <div class="grab-outer">
            <ul class="grid-list clrfix">
              <li v-for='item in modulesInfo' :key='item.id' class="grid-item" style="float:left">
                <a href="#" class="grid-link">
                  <div class="grid-show img-container defaultimg-small">
                    <img class="topic-img" :src="item.imgUrl" alt="">
                    <span class="grid-note"></span>
                  </div>
                  <div class="grid-title">
                    <div class="ellipsis2">{{item.desc}}</div>
                  </div>
                  <div class="grid-price">
                    <strong class="grid-sale">
                      <span class="price">
                        "¥"
                        <span class="price-num">{{item.price}}</span>
                      </span>
                    </strong>
                  </div>
                  <div class="grid-btn">{{item.btn}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Oneyuan',
  data () {
    return {
      anchorInfo: [],
      modulesInfo: [],
      cityInfo: [],
      anchorOption: {
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  methods: {
    getDataOneYuan () {
      this.$http.get('./static/oneyuan.json')
      .then(this.handleDataSucc.bind(this))
    },
    handleDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.anchor) {
        this.anchorInfo = body.data.anchor
        this.modulesInfo = body.data.modules
      }
    },
    getDataCity () {
      this.$http.get('./static/city.json')
      .then(this.handleDataCitySucc.bind(this))
    },
    handleDataCitySucc (res) {
      const body = res.body
      if (body && body.data && body.data.chinaHotCity) {
        this.cityInfo = body.data.chinaHotCity
      }
    }
  },
  created () {
    this.getDataOneYuan()
    this.getDataCity()
  }
}
</script>

<style scoped>
  .append-div {
    display: flex;
    height: 1.2rem;
    font-size: 0;
    background-color: #000;
  }
  .download {
    -webkit-backdrop-filter: blur(.2rem);
    position: fixed;
    top: 0;
    z-index: 5;
    height: 1.2rem;
    width: 100%;
    background-color: rgba(0, 0, 0, .6);
    font-size: .24rem;
    padding: .24rem 0;
    box-sizing: border-box;
  }
  .content {
    border-bottom: .06rem solid #e58700;
    border-radius: .1rem;
    background-color: #e58700;
    top: .04rem;
    right: .9rem;
    position: absolute;
  }
  .downloadHTML {
    width: 1.6rem;
    height: .66rem;
    background-color: #f4b000;
    font-size: .28rem;
    text-align: center;
    border-radius: .1rem;
    color: #fff;
    line-height: .66rem;
    font-weight: 900;
  }
  .closeDiv {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .4rem;
    height: .4rem;
  }
  .header {
    display: flex;
    background: #05bad5;
    border-bottom: #1b7a8b .02rem solid;
  }
  .back {
    width: .64rem;
    line-height: .88rem;
    text-align: center;
    color: #fff;
    font-size: 0.36rem;
    padding:0 0.15rem;
  }
  .title {
    flex: 1;
    margin: .14rem .18rem;
    border-radius: .1rem;
    font-size: 0.36rem;
    text-align: center;
    color: #fff;
    line-height: 0.6rem;
  }
  .header-bar {
    margin-right: 0.2rem;
    line-height: .88rem;
    text-align: left;
    font-size: 0.32rem;
    color: #fff;
  }
  .country-outer {
    height: .96rem;
  }
  .flexbox {
    display: flex;
    width: 100%;
  }
  .flexbox-layout {
    flex: 1;
    width: .02rem;
    background-color: #86b0ff;
    color: #fff;
    font-size: .32rem;
    line-height: .96rem;
    text-align: center;
  }
  .country-actived {
    background-color: #4482f6;
  }
  .banner {
    position: relative;
    padding-bottom: 64.4%;
    background-color: #1ab7fa;
  }
  .img-container {
    overflow: hidden;
    width: 100%;
    height: 0;
  }
  .topic-img {
    width: 100%;
    vertical-align: top;
  }
  .city-outer {
    position: relative;
    height: .76rem;
  }
  .city-container {
    margin-right: 14.6%;
    background: #4482f6;
  }
  .city-list {
    min-height: .76rem;
    background: #4482f6;
  }
  .city-actived {
    position: relative;
  }
  .city-item {
    text-align: center;
    height: .76rem;
  }
  .city-inner {
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    color: #fff;
    font-size: .32rem;
    line-height: .76rem;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .city-expand {
    height: .76rem;
    position: relative;
    bottom: .76rem;
    left: 85.4%;
    width: 14.6%;
    background: #86b0ff;
  }
  .city-expand::before {
    content: '\0020';
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -.1rem 0 0 -.1rem;
    width: .16rem;
    height: .16rem;
    border-bottom: .04rem solid #fff;
    border-left: .04rem solid #fff;
    transform: rotate(-45deg);
  }
  .anchor-outer {
    margin-top: .1rem;
    height: 1.22rem;
  }
  .anchor-container {
    overflow: hidden;
    overflow-x: auto;
    width: 100%;
    height: .9rem;
    padding: .16rem 0;
  }
  .anchor-list {
    font-size: 0;
    line-height: 0;
    text-align: center;
    white-space: nowrap;
  }
  .anchor-item:nth-child(odd) {
    background-image: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/anchor_even.png);
  }
  .anchor-actived {
    font-weight: 900;
  }
  .anchor-item {
    display: inline-block;
    position: relative;
    margin: 0 .12rem;
    padding-top: .12rem;
    width: 1.7rem;
    height: .78rem;
    background-image: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/anchor_odd.png) center bottom/contain no-repeat;
    color: #05857e;
    font-size: .34rem;
    line-height: .78rem;
    text-align: center;
  }
  .modules-caption {
    padding-bottom: 22.6%;
  }
  .topic img{
    transition: all .5s;
  }
  .modules-content {
    min-height: 2.36rem;
    background-position: center 0;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .grab-outer {
    height: 4.22rem;
    overflow: hidden;
    overflow-x: auto;
    width: 100%;
  }
  .grid-list {
    margin: 0 .12rem;
  }
  .grab-outer .grid-item{
    width: 2.92rem;
  }
  .grid-item {
    float: left;
    margin-bottom: .16rem;
  }
  .grid-link {
    display: block;
    margin: 0 .08rem;
    padding-bottom: .15rem;
    background: #fff;
  }
  a {
    color: #333;
    text-decoration: none;
    outline: 0 none;
  }
  .defaultimg-small {
    background: #cfcfcf url(//s.qunarzz.com/piao_topic/image/common/default/288x288.png) 0 bottom no-repeat;
    background-size: 100% auto;
  }
  .grid-show {
    position: relative;
    padding-bottom: 61.76%;
  }
  .grid-not {
    display: none;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 0;
    width: 100%;
    color: #fff;
    font-size: .24rem;
    line-height: .3rem;
    text-align: center;
    transform: translateY(-50%);
  }
  .grid-title {
    margin: .12rem .15rem 0;
  }
  .grid-title .ellipsis2 {
    height: .72rem;
    color: #222;
    font-size: .28rem;
    line-height: .36rem;
  }
  .ellipsis2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .grid-price {
    overflow: hidden;
    height: .76rem;
    text-indent: .15rem;
  }
  .grid-sale .price {
    color: #ff5a00;
    font-size: .28rem;
  }
  .grid-price .price {
    line-height: .8rem;
  }
  .price {
    font: .24rem "Microsoft yahel", "Hiragino sansgb", Arial, sans-serif;
  }
  .grid-sale .price-num {
    font-size: .4rem;
  }
  .grid-price .price-num {
    line-height: .8rem;
  }
  .price-num {
    font: .28rem Tahoma, Helvetica, sans-serif;
  }
  .grid-btn {
    font-size: .24rem;
    line-height: .5rem;
    margin: 0 .15rem;
    background: #f50;
    color: #fff;
    text-align: center;
  }
</style>
