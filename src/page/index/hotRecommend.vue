<template>

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

</template>
	
<script>
  export default {
    props: ['hotlist']
  }
</script>

<style scoped>
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
	
</style>