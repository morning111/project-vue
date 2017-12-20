<template>
	<div>
    <div class="lazy-load" id="weekGoWhere">
    	<h2 class="hotSal weekwhere">周末去哪儿</h2>
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
    
    </div>
</template>

<script>
  export default {
    props: ['weeklist']
  }
</script>

<style scoped>
	
.weekwhere{
	height: .8rem;
	background: #f5f5f5;
	line-height: .8rem;
	padding-left: .5rem;
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

	
</style>