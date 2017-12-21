<template>
<<<<<<< HEAD
	<div>
		<header class="header">
			<div class="back iconfont">&#xe624;</div>
			<div class="search"><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
			<div class="city">北京<i class="iconfont">&#xe600;</i></div>
		</header>

		<swiper :options="swiperOption">
			<swiper-slide v-for="item in swiperInfo" :key="item.id">
				<div class="swiper-img-con">
					<img class="swiper-img" :src="item.imgUrl">
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>

    <swiper :options="lazyOption">
			<swiper-slide v-for="(pageInfo, index) in pages" :key="index">
        <div class="icon-wrapper">
          <div v-for="item in pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
              <img class="icon-img" :src="item.imgUrl" />
              <a href="#" class="icon-word">{{item.title}}</a>
            </div>
          </div>
        </div>		
			</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
		</swiper>

    <div class="message">
      <div class="location-msg">
        <div class="location-icon iconfont">&#xe611;</div>
        <div class="location">定位失败</div>
      </div>
      <div class="hot-spring-msg">
        <div class="hot-spring-icon iconfont">&#xe613;</div>
        <div class="hot-spring">5折泡温泉</div>
      </div>
    </div>

    <div class="blank"></div>
    <div class="activity-item" style="background:url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;background-size:auto 100%; height:1rem;"></div>
   
    <div class="lazy-load" :options="lazyOption">
      <h2 class="hot-recommend">热销推荐</h2>
        <div class="hot-list" v-for="item in hotInfo" :key="item.id">
          <img :src="item.imgUrl" :alt="item.alt" class="hot-img" />
          <div class="hot-message">
            <h3 class="hot-areaName">{{item.name}}</h3>
            <p class="hot-state">{{item.state}}</p>
            <div><p class="hot-price">{{item.price}}</p><span class="hot-price-cheapest">起</span></div>
          </div>
        </div>
        <div class="goods-select"><a href="#" class="all-goods">查看所有产品</a></div>
=======
  <div>
  	<header class="header">
  	  <div class="back iconfont">&#xe624;</div>
  	  <div class="search">
  	  	<div class="search-box">
  	  		输入城市/景点/游戏主题
  	  	</div>
  	  </div>
  	  <div class="city" router-link to="/city"><router-link to="city" class="city">{{city}}</router-link><i class="iconfont">&#xe600;</i> </div>
  	</header>
  	
  	<index-swiper :swiperInfo='swiperInfo'></index-swiper>
  	<classfiy-swiper :pages='pages'></classfiy-swiper>
    
    
    <ul class="postionNspring_ul">
    	<li><span class="iconfont position1">&#xe611;</span>定位失败</li>
    	<li><a><span class="iconfont position">&#xe613;</span>五折泡温泉</a></li>
    </ul>
    <div class="blank_"></div>
    <ul class="mp-activity-con">
    	<li><a></a></li>
    	<li><a></a></li>
    </ul>
   
   <hot-recommend :hotlist='hotlist'></hot-recommend>
    <!--周末去哪儿-->
   <week-where :weeklist='weeklist'></week-where>
   
    <!--footer-->
    <div class="price-desc">
    	<div class="price-ticket-box">
    		<span class="price-desc-ticket">票面价</span>
    		<span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
    	</div>
    </div>
    <div class="footer-box">
    	<div class="kind-product">
    		<ul class="kind-nav">
    			<li class="fly fly_">
    				<a href="javascript:;">
    					<i class="iconfont fly">&#xe601;&nbsp;</i>
    					<span>飞机</span>
    				</a>
    			</li>
    			<li class="fly fly_">
    				<a href="javascript:;">
    					<i class="iconfont fly">&#xe692;&nbsp;</i>
    					<span>公寓</span>
    				</a>
    			</li>
    			<li class="fly fly_">
    				<a href="javascript:;">
    					<i class="iconfont fly">&#xe69f;&nbsp;</i>
    					<span>酒店</span>
    				</a>
    			</li>
    			<li class="shuxian"></li>
    			<li class="more"><a href="javascript:;">更多>></a> </li>
    		</ul>
    		
    	</div>
    	<ul class="footer-nav">
    		<li>
    			<a href="javascript:;">登录</a>
    		</li>
    		<li>
    			<a href="javascript:;">我的订单</a>
    		</li>
    		<li>
    			<a href="javascript:;">最近浏览</a>
    		</li>
    		<li>
    			<a href="javascript:;">关于我们</a>
    		</li>
    	</ul>
    	<ul class="version-ul">
    		<li><a href="javascript:;">触摸版</a></li>
    		<li><a href="javascript:;">电脑版</a></li>
    	</ul>
    	<div class="footer-content">Qunar 京ICP备05021087意见反馈</div>
    	
>>>>>>> eadc78d3dede00a0e512d41cfd162895d608fb38
    </div>
    <div class="where-to-go">
      <h2 class="hot-recommend">周末去哪儿</h2>
      <div class="where-togo" v-for="item in goInfo" :key="item.id">      
        <div class="site">
          <img :src="item.imgUrl" :alt="item.alt" class="go-img" />
          <p class="places">{{item.name}}</p>
          <p class="explain">{{item.state}}</p>
        </div>
      </div>
    </div>   
	</div>
</template>

<script>
	import IndexSwiper from './swiper'
	import ClassfiySwiper from './classfiyswiper'
	import HotRecommend from './hotRecommend'
	import WeekWhere from './weekWhere'
	import { mapState } from 'vuex'
export default {
  name: 'Index',
  components: {
    IndexSwiper,
    ClassfiySwiper,
    HotRecommend,
    WeekWhere
  },
  data () {
    return {
      swiperInfo: [],
      iconInfo: [],
<<<<<<< HEAD
      hotInfo: [],
      goInfo: [],
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      },
      lazyOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      }
=======
      hotlist: [],
      weeklist: []
>>>>>>> eadc78d3dede00a0e512d41cfd162895d608fb38
    }
  },

  computed: {
<<<<<<< HEAD
=======
    ...mapState(['city']),  //  ...mapState({city1:'city'}),
     /* 计算页数 */
>>>>>>> eadc78d3dede00a0e512d41cfd162895d608fb38
    pages () {
      const pages = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },

  methods: {
    getIndexData () {
      this.$http.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.swiper) {
        this.swiperInfo = body.data.swiper
        this.iconInfo = body.data.icons
        this.hotInfo = body.data.hotList
        this.goInfo = body.data.goInfo
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
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
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
    line-height: .86rem;
    text-align: left;
<<<<<<< HEAD
    overflow: hidden;  
    white-space: nowrap; 
    text-overflow: clip;
  }
  .city-linknear {
    width: 1rem;
    line-height: .86rem;
    text-align: left;
    display: block;    
  }
  
  .swiper-img-con {
    overflow: hidden;  
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
  }
  .swiper-img {
    width: 100%;
  }
  .icon-item {
    width:23%;
    float: left;
    box-sizing: border-box;
    padding: 0.4rem 0.4rem 0 0.5rem;
    margin-bottom: .6rem;
  }
  .icon-img-con {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .icon-img {
    width: 100%;
    cursor: pointer;
  }
  .icon-word {
    display: block;
    font-size: .2rem;
    margin-top: .2rem;
    text-align: center;
    cursor: pointer;
  }
  .message {
    width: 100%;
    height: 0.75rem;
    border-top: 1px solid #f5f5f5;
  }
  .location-msg {
    width: 50%;
    height: 0.75rem;
    float: left;
  }
  .location-icon {
    line-height:  0.75rem;
    margin-left: 1rem;
    margin-right: .1rem;
    float: left;
  }
  .location {
    height: 0.75rem;
    text-align: center;
    line-height: .75rem;
    float: left;
  }
  .hot-spring-msg {
    width: 50%;
    height: 0.75rem;
    float: left;
  }
  .hot-spring-icon {
    line-height:  0.75rem;
    margin-left: 1rem;
    margin-right: .1rem;
    float: left;
  }
  .hot-spring {
    height: 0.75rem;
    text-align: center;
    line-height: .75rem;
    float: left;
  }
  .blank {
    width: 100%;
    height: .16rem;
    background: #f5f5f5; 
  }
  .hot-recommend {
    display: block;
    height: .6rem;
    line-height: .6rem;
    font-size: .22rem;
    color: #000;
    background: #f5f5f5;
    padding-left: .2rem;
  }
  .hot-list {
    width: 100%;
    height: 1.9rem;
    border-bottom: 1px solid #f5f5f5;
  }
  
  .hot-img {
    width: 1.4rem;
    height: 1.4rem;
    margin: .18rem;
    float: left;
  } 
  .hot-message {
    width: 5.5rem;
    height: 1.9rem;
    float: left;
  }
  .hot-areaName {
    font-size: .22rem;
    color: #000;
    padding-top: .2rem;
  }
  .hot-state {
    font-size: .2rem;
    color: #9e9eb6;
    padding-top: .2rem; 
  }
  .hot-price {
    font-size: .2rem;
    color: #ff8300;
    padding-top: .3rem; 
    float: left; 
  }
  .hot-price-cheapest {
    font-size: .18rem;
    color: #9e9eb6;
    padding-top: .31rem; 
    float: left; 
  }
  .goods-select {
    width:100%;
    height: .65rem;
  }
  .all-goods {
    display: block;
    height: .65rem;
    text-align: center;
    line-height: .65rem;
    font-size: .2rem;
    color: #00afc7;
  }
  .site {
    width: 100%;
  }
  .go-img {
    width:100%;
    height: 2.8rem;
  }
  .places {
    font-size: .22rem;
    color: #212121;
    padding: .18rem .18rem 0 .18rem;
  }
  .explain {
    font-size: .2rem;
=======
    color: #fff;
  }
	.postionNspring_ul{
		display: flex;
		width: 100%;
		border-top: .01rem solid #f5f5f5;
		border-bottom: .01rem solid #f5f5f5;
	}
	.postionNspring_ul li{
		flex: 1;
		height: .98rem;
		text-align:center;
		line-height: .98rem;
	}
	.postionNspring_ul li span{
		font-size: .32rem;
	}
	.postionNspring_ul li:nth-child(1){
		border-r: .01rem solid #f5f5f5;
	}
	.postionNspring_ul li a{
		color: #212121;
	}
	.blank_{
		width: 100%;
		height: 0.2rem;
		background: #f5f5f5;
	}
	.mp-activity-con{
		display: flex;
		width: 100%;
		height: 1.4rem;
	}
	.mp-activity-con li:nth-child(1){
		flex: 1;
		background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
		background-size: auto 100% ; 
	}
	.mp-activity-con li:nth-child(2){
		flex: 1;
		background: url(http://img1.qunarzz.com/piao/fusion/1711/8a/4c62d1a89fc2d602.png) center center no-repeat;
		background-size: auto 100% ;
	}
	.mp-activity-con  li:nth-child(1){
		border-right: .01rem solid #f5f5f5;
	}
	.mp-activity-con li a{
		width: 100%;
		height: 100%;
	}
	.price-desc{
		margin-top: .1rem;
    padding: .14rem .1rem;
    font-size: .24rem;
    line-height: .32rem;
>>>>>>> eadc78d3dede00a0e512d41cfd162895d608fb38
    color: #616161;
    padding: 0.15rem .18rem .3rem .18rem;
  }
</style>