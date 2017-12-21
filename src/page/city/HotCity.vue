<template>
	<div>
	  <div class="c-your-position">热门城市</div>
	  <div class="c-hot-city-all-box" v-for = "item in HotCity" :key="item.id" >
		<div class="c-hot-city mpg-ellipsis">{{item.name}}</div>
	  </div>
  </div>
</template>
<script>
  export default {
    props: ['HotCity']
  }
</script>
<style>
	.c-your-position{
	padding-left: .3rem;
	line-height: .54rem;
	background: #f5f5f5;
	font-size: .26rem;
	color: #616161;
}
.c-hot-city {
	float: left;
	width: 20%;
	height: 0.7rem;
	margin-top: 0.15rem;
	border-radius: 0.05rem;
	text-align: center;
	line-height: 0.7rem;
	color: #212121;
	margin-left: 0.5rem;
	border: 0.01rem solid #ccc;
}
</style>