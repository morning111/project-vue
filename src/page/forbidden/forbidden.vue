<template>
  <div>
    <div class="main-header" style="position:relative;">
      <div class="header">
        <img class="header-img" src="./forbidden.jpg" alt="故宫">
        <div class="img-float">
          <div class="imgfigure-title">故宫(AAAAA景区)</div>
          <div class="imgswipeicon">
            <i class="iconfont number"></i>
            <div class="imgswipeicon-number" style="position:relative;margin-left: .6rem;margin-top: -.4rem;">10</div>
          </div>
        </div>
      </div>
    </div>
    <div class="baseinfo">
      <div class="baseinfo-address">
        <i class="iconfont address-icon" style="margin-right: .2rem;color: #9e9e9e;">&#xe62d;</i>
        <span class="address-txt">北京市东城区景山前街4号</span>
        <span class="address-arrow">&#xe62d;</span>
      </div>
      <div style="height: .88rem; line-height: .88rem;position:relative;">
        <i class="icon-intro" style="margin-right: .2rem;color: #9e9e9e;"></i>
        <span class="baseinfo-intro"><a href="javascript:;" class="baseinfo-intro-link">查看景点简介及开放时间</a></span>
        <span class="address-arrow-bottom">&#xe62d;</span>
      </div>      
    </div>
    <div class="commentsinfo-evaluate">
      <div class="commentsinfo-evaluate-con">
        <span class="starlevel-total">&#xe696;&#xe696;&#xe696;&#xe696;&#xe696;</span>
        <span class="comments-tagscore" style="color:#ffb436;">5.0分</span>
        <span><a href="javascript:;" class="evaluate-num">171437评论&nbsp;</a></span>
        <i class="iconfont comments-rightarrow" style="color:#b9b9b9;position:absolute;top:.24rem;right:.2rem;">></i>
      </div>    
    </div>
    <div class="accounce-con">
      <i class="iconfont-address-inner" style="margin-right: .2rem;color: #9e9e9e;">&#xe65d;</i>
      <span class="iconfont-address-icon">除法定节假日，故宫博物院实行周一闭馆。</span>
      <span class="address-arrow-right">&#xe62d;</span>
    </div>
    <recomment-places :golist='golist'></recomment-places>
    <on-day  :ondaylist='ondaylist' :evaluateList='evaluateList'></on-day>
    <div class="check-all"><p style=" font-size: .3rem;text-align: center;">查看全部评论</p></div>
    <link-list :linklist='linklist'></link-list>
  </div>
</template>
<script>
import RecommentPlaces from './recommentPlaces'
import OnDay from './onDayPiao'
import LinkList from './link'
export default {
  name: 'Forbidden',
  components: {
    RecommentPlaces,
    OnDay,
    LinkList
  },
  data () {
    return {
      golist: [],
      ondaylist: [],
      evaluateList: [],
      linklist: []
    }
  },

  methods: {
    getIndexData () {
      this.$http.get('./static/recommend.json')
        .then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.golist) {
        this.golist = body.data.golist
        this.ondaylist = body.data.ondaylist
        this.evaluateList = body.data.evaluateList
        this.linklist = body.data.linklist
      }
    }
  },

  created () {
    this.getIndexData()
  }
}
</script>
<style scoped>
  .header {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
  }
  .header-img {
    width: 100%;
    vertical-align: top;
  }
  .img-float {
    position: absolute;
    right: .2rem;
    bottom: .26rem;
    left: .2rem;
    min-height: .4rem;
  }
  .imgfigure-title {
    position: relative;
    z-index: 1;
    margin-right: 1.4rem;
    line-height: .4rem;
    color: #fff;
    font-size: .32rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
  }
  .imgswipeicon {
    position: absolute;
    right: 0;
    top: 0;
    width: 1.2rem;
    height: .4rem;
    background: rgba(0,0,0,.5);
    border-radius: .2rem;
    font-size: .24rem;
    color: #fff;
    line-height: .4rem;
  }
  .number {
    position: relative;
    top: .02rem;
    left:.3rem;
    line-height: 1;
  }
  .baseinfo {
    width: 100%;
    padding: .1rem .2rem 0 .2rem;
  }
  .baseinfo-address {
    position:relative;
    height: .88rem;
    line-height: .88rem;
  }
  .address-txt,.baseinfo-intro {
    overflow: hidden;
    margin-right: .56rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .baseinfo-intro-link {
    overflow: hidden;
    margin-right: .56rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#212121;
  }
  .address-arrow {
    position: absolute;
    right: .4rem;
    top: 0;
    color: #b9b9b9;
  }
  .address-arrow-bottom {
    position: absolute;
    right: .4rem;
    top: 0;
    color: #b9b9b9;
  }
  .commentsinfo-evaluate {
    width: 100%;
    height: .8rem;
    background: #eee;
    padding:.2rem 0;
  }
  .commentsinfo-evaluate-con {
    position:relative;
    height: .8rem;
    background: #fff;
  }
  .starlevel-total {
    margin-left: .6rem;
    margin-right: .7rem;
    color: #ffb436;
    line-height: .8rem;
  }
  .evaluate-num {
    color:#b9b9b9;
    margin-left:2rem;
    position:absolute;
    top:.24rem;
    right:.8rem;
  }
  .accounce-con {
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    padding: .2rem;
    background: #fdeede;
    position: relative;
    border-bottom: .2rem solid #eee;
  }
  .iconfont-address-icon {
    color: #f67353;
  }
  .address-arrow-right {
    position: absolute;
    right: .66rem;
    top: .2rem;
    color: #b9b9b9;
  }
  .check-all {
    width: 100%;
    line-height: .8rem;
  }
</style>
