<template>
  <div>
  	<header class="header">
  	  <div class="back iconfont">&#xe624;</div>
  	  <div class="search">
  	  	<div class="search-box">
  	  		输入城市/景点/游戏主题
  	  	</div>
  	  </div>
  	  <div class="city">北京<i class="iconfont">&#xe600;</i> </div>
  	</header>
  	
    <swiper :options="swiperOption">
      <swiper-slide v-for='item in swiperInfo' :key='item.id'>
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
     <swiper>
      <swiper-slide v-for='(pageInfo, index) in pages' :key='index'>
          <div v-for="item in pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
              <img  class="icon-img" :src="item.imgUrl"/>
            </div>
           <div class="spotNme" >{{item.name}}</div>
          </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <ul class="postionNspring_ul">
    	<li><span class="iconfont position1">&#xe611;</span>定位失败</li>
    	<li><a><span class="iconfont position">&#xe613;</span>五折泡温泉</a></li>
    </ul>
    <div class="blank_"></div>
    <ul class="mp-activity-con">
    	<li><a></a></li>
    	<li><a></a></li>
    </ul>
    <div class="lazy-load">
    	<h2 class="hotSal">热销推荐</h2>
    	<ul class="hotSal_list">
    		<li class="mp-hot-li" v-for="(item, index) in hotlist" :key="index">
    			<a href="javascript:;">
    				<div class="hot-li-img">
    					<img :src="item.imgUrl" />
    				</div>
    				<div class="mp-hotlist-infos">
    					<div class="mp-hotlist-title">{{item.title}}</div>
    					<div class="mp-hotlist-desc overflowOmit">{{item.desc}}</div>
    				</div>
    				<div class="mp-hotlist-pric">
    					￥ 
    					<em class="mp-hotlist-pric-num">{{item.pric}}</em>
    					<span class="mp-hotlist-pric-start">起</span>
    				</div>
    			</a>
    		</li>
    	</ul>
    	<div class="lookMorePro">
    		<a href="javascript:;">查看更多产品</a>
    	</div>
    </div>
    
    <!--周末去哪儿-->
    
    <div class="lazy-load" id="weekGoWhere">
    	<h2 class="hotSal">周末去哪儿</h2>
    	<div class="weekGoWhere_list" v-for="(item, index) in weeklist" :key="index">
    		<div class="mp-week-item">
    			<a href="javascript:;">
    				<div class="mp-week-item-img">
    					<img :src="item.imgUrl" />
    				</div>
    				<div class="mp-week-item-titleDesc">
    					<p class="mp-week-item-title">{{item.title}}</p>
    					<p class="mp-week-item-desc overflowOmit">{{item.desc}}</p>
    				</div>
    			</a>
    		</div>
    	</div>
    	
    </div>
    
    <div class="price-desc">
    	<div class="price-ticket-box">
    		<span class="price-desc-ticket">票面价</span>
    		<span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
    	</div>
    </div>
    
    <!--footer-->
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
    	
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperInfo: [], /* 建立空数组，将图片放进去，然后循环出来 */
      iconInfo: [],
      hotlist: [],
      weeklist: [],
      swiperOption: {
        autoplay: 1000,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
     /* 计算页数 */
    pages () {
      const pages = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / 8)    /* 总页数 */
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },
  methods: {
    getDataIndex () {
      this.$http.get('./static/index.json')
      .then(this.handleDataSucc.bind(this))
    },
    handleDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.swiper) {
        this.swiperInfo = body.data.swiper
        this.iconInfo = body.data.icons
        this.hotlist = body.data.hotlist
        this.weeklist = body.data.weeklist
      }
    }
  },
  created () {
    this.getDataIndex()
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
    line-height: .86rem;
    text-align: center;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
  }
  .icon-shuaxin {
    color: #ccc;font-size: 0.26rem;padding:0 0.15rem;
  }
  .prompt {
    font-size: 0.26rem;color: #ccc;line-height: 0.6rem;
  }
  .city {
  	margin-right: 0.1rem;
    line-height: .86rem;
    text-align: left;
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
    float: left;
    width: 25%;
    height: 1.3rem;
    padding-top: .3rem;
    text-align: center;
  }
 .icon-img {
    width: .66rem;
    height: .66rem;
  }
	.spotNme{
		width: 100%;
		height: .5rem;
		margin-top: 0.2rem;
		font-size: 0.28rem;
		text-align: center;
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
		border-right: .01rem solid #f5f5f5;
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
	.lazy-load{
		width: 100%;
	}
	.hotSal{
		height: .8rem;
		background: #f5f5f5;
		line-height: .8rem;
		padding-left: .5rem;
	}
	.hotSal_list{
		width: 100%;
	}
	.mp-hot-li{
		overflow: hidden;
		height: 1.4rem;
		width: 100%;
		position: relative;
		padding: .24rem;
		border-bottom: .01rem solid #f5f5f5;
	}
	.hot-li-img{
		position: absolute;
		top: .24rem;
		left: .24rem;
		width: 1.4rem;
		height: 1.4rem;
	}
	.hot-li-img img{
		width: 1.4rem;
		height: 1.4rem;
	}
	.mp-hotlist-infos{
		margin-left: 1.6rem;
	}
	.mp-hotlist-title{
		margin-top: 0.1rem;
		color: #212121;
	}
	.mp-hotlist-desc{
		margin-top: 0.15rem;
		color: #9e9e9e;
	}
	.mp-hotlist-pric{
		margin-left: 1.6rem;
		margin-top: 0.31rem;
		color: #ef8a33;
		font-size: .24rem;
	}
	.mp-hotlist-pric-num{
		font-size: .34rem;
		color: #ef8a33;
	}
	.mp-hotlist-pric-start{
		font-size: .24rem;
		color: #9e9e9e;
	}
	.lookMorePro{
		width: 100%;
		height: .88rem;
		text-align: center;
		line-height: .88rem;
		color: #00afc7;
	}
	
	.weekGoWhere_list{
		width: 100%;
	}
	.mp-week-item{
		border-bottom: .1rem solid #f5f5f5;
	}
	.mp-week-item-img{
		overflow: hidden;
		height: 0;
		padding-bottom: 35%
	}
	.mp-week-item-img img{
		width: 100%;
	}
	.mp-week-item-titleDesc{
		width: 100%;
		color: #212121;
	}
	.mp-week-item-title{
		margin-left: .2rem;
		margin-top: .3rem;
	}
	.mp-week-item-desc{
		margin-left: .2rem;
		margin-top: .2rem;
		color: #9e9e9e;
		font-size: .24rem;
		margin-bottom: .3rem;
	}
	.price-desc{
		margin-top: .1rem;
    padding: .14rem .1rem;
    font-size: .24rem;
    line-height: .32rem;
    color: #616161;
	}
	.price-desc-ticket{
		display: inline-block;
		font-weight: 700;
	}
	.price-ticket-box{
		margin-left: 0.1rem;
	}
	.footer-box{
		width: 100%;
		background: #f0f5f8;
		overflow: hidden;
	}
	.kind-product{
		width: 100%;
	}
	.kind-nav{
		position: relative;
		width: 4rem;
		margin: 0 auto;
		height: .2rem;
		padding: .1rem;
		overflow: hidden;
	}
	.fly{
		float: left;
		color: #9e9e9e;
		font-size: 0.22rem;
	}
	.fly a{
		color: #9e9e9e;
	}
	.fly_{
		margin-left: 0.1rem;
	}
	.shuxian{
		width: 0.01rem;
		height: 0.2rem;
		float: left;
		margin-left: 0.2rem;
		border: 0.01rem solid #9e9e9e;
	}
	.more{
		float: left;
		margin-left: 0.3rem;
		font-size: .22rem;
	}
	.more a{
		color: #ccc;
	}
	.footer-nav{
		width: 100%;
		height: .39rem;
		margin-top: 0.2rem;
		padding-bottom: 0.1rem;
		border-bottom: 0.01rem solid #ccc;
		display: flex;
		/*justify-content: center;*/
		justify-content: space-around;
	}
	.footer-nav li{
		float: left;
	}
	.footer-nav li a{
		font-size: .34rem;
		line-height: 0.39rem;
	}
	.version-ul{
		width: 100%;
		overflow: hidden;
		padding: 0.1rem;
		display: flex;
		justify-content: center;
	}
	.version-ul li{
		float: left;
	}
	.version-ul li:nth-child(1){
		margin-right: 0.1rem;
	}
	.footer-content{
		width: 100%;
		text-align: center;
		font-size: 0.12rem;
	}
	.overflowOmit{
		overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
	}
	.search-box{
		line-height: .58rem;
		margin-left: 0.2rem;
		color: #ccc;
	}
</style>
