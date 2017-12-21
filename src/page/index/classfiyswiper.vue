<template>
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
</template>

<script>
export default {
  props: ['pages']
}
</script>

<style scoped>
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
</style>