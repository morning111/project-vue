<template>
	<div>
		<header class="c-header">
			<router-link to="/">
				<div class="c-header-back iconfont">&#xe624;</div>
			</router-link>
			<div class="c-header-right">
				<div class="c-header-country-box">
					<span class="c-inland" v-bind:class="{ active: isActive }" @click="handleInland">国内</span>
					<span class="c-foreign" v-bind:class="{ active: noActive }" @click="handleForeign">国外</span>
				</div>
			</div>
		</header>
		<div class="c-main">
			<div class="c-search">
				<input class="c-search-input" placeholder="输入城市名或拼音" ref="focusVlue"/>
			</div>
			<div class="c-position-box">
				<div class="c-your-position">您的位置</div>
				<div class="c-your-position-city-box">
					<div class="c-your-position-city mpg-ellipsis">北京</div>
				</div>
				<hot-city :HotCity='HotCity'></hot-city>
			</div>
	<div class="c-hot-city-box">
		
		<div class="c-hot-classify" v-for="item in Hotclassify" :key="item.id">
			<div class="c-hot-classify-leter"  ref = "GetItemScroll">{{item.title}}</div>
			<router-link to='/'>
				<div class="c-hot-classify-item" @click="changeCity(item)" v-for="item in item.name">{{item}}</div>
			</router-link>
		</div>
	</div>
		</div>
		<ul class="c-slid-leter">
			<li  v-for="item in Hotclassify" @click="handleGetItemClick">{{item.title}}</li>
		</ul>
	</div>
</template>
<script>
	import HotCity from './HotCity'
	import {mapActions} from 'vuex'
export default {
  name: 'City',
  components: {
    HotCity
  },
  data () {
    return {
      HotCity: [],
      Hotclassify: [],
      leter: [],
      isActive: true,
      noActive: false
    }
  },
  methods: {
    handleInland: function () {
      this.isActive = true
      this.noActive = false
    },
    handleForeign: function () {
      this.isActive = false
      this.noActive = true
    },
    ...mapActions({
      changeCity: 'setCityAfterFiveSecond'
    }),
    getDataIndex () {
      this.$http.get('./static/adress.json')
        .then(this.handleDataSucc.bind(this))
    },
    handleDataSucc (res) {
      const body = res.body
      this.HotCity = body.data.hotCity
      this.Hotclassify = body.data.chinaHotCity
    },
    handleGetItemClick (e) {
      var el = event.currentTarget.innerHTML
      this.GetItemScroll(el)
    },
    GetItemScroll (el) {
      var clasfilyItem = this.$refs.GetItemScroll
      for (var i = 0; i < clasfilyItem.length; i++) {
        var clasfilyOnlyItem = clasfilyItem[i].innerHTML
        if (clasfilyOnlyItem === el) {
          window.scrollTo(0, clasfilyItem[i].offsetTop - 46)
        }
      }
    }
  },
  mounted: function () {
    this.$refs.focusVlue.onfocus = function () {
      this.value = ' '
      this.style.textAlign = 'left'
    }
  },
  created () {
    this.getDataIndex()
  }
}
</script>
<style scoped>
.c-header {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: .88rem;
	background: #00afc7;
}
.c-header-back {
	width: .4rem;
	height: .88rem;
	margin: 0rem .2rem;
	color: #fff;
	line-height: .88rem;
	text-align: center;
	font-size: .36rem;
	font-weight: 600;
}
.c-header-right {
	flex: 1;
	height: .88rem;
	display: flex;
	justify-content: center;
}
.c-header-country-box {
	display: flex;
	width: 4rem;
	height: .7rem;
	margin-top: .1rem;
	justify-content: center;
	align-items: center;
	border: .01rem solid #fff;
}
.c-inland {
	width: 50%;
	height: .68rem;
	text-align: center;
	font-size: .28rem;
	color: #fff;
	line-height: .68rem;
}
.c-foreign {
	width: 49%;
	height: .68rem;
	text-align: center;
	font-size: .28rem;
	line-height: .68rem;
	color: #fff;
}
.active{
	background: #fff;
	color: #00afc7;
}
.c-main {
	width: 100%;
	margin-top: 0.88rem;
	background: #fff;
}
.c-search {
	width: 100%;
	height: .7rem;
	background: #00afc7;
    padding: 0.1rem 0rem .1rem .1rem;
}
.c-search-input{
	border: none;
	outline: none;
	color: #9e9e9e;
	display: block;
    width: 90%;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    padding: .16rem 0.26rem .18rem 0.2rem;
}
.c-your-position-city-box {
	height: 1rem;
	overflow: hidden;
	border-bottom: 0.01rem solid #ccc;
	border-top: 0.01rem solid #ccc;
}
.c-your-position-city {
	width: 28%;
	height: 0.7rem;
	margin-left: 0.3rem;
	margin-top: 0.15rem;
	border-radius: 0.05rem;
	text-align: center;
	line-height: 0.7rem;
	color: #212121;
	border: 0.01rem solid #ccc;
}
.mpg-ellipsis {
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.c-hot-city-box {
	width: 100%;
	overflow: hidden;
}
.c-hot-classify {
	width: 100%;
	float: left;
}
.c-hot-classify-leter {
	width: 100%;
	float: left;
	height: 0.6rem;
	background: #ccc;
	line-height: 0.6rem;
	padding-left: 0.3rem;
}
.c-hot-classify-item{
	width: 100%;
	float: left;
	height: .9rem;
	border-top: 0.01rem solid #616161;
	line-height: .9rem;
	padding-left: 0.2rem;
}
.c-slid-leter {
	position: fixed;
	width: 0.3rem;
	top: 3rem;
	right: 0;
	text-align: center;
}
.c-slid-leter li {
	margin-top: 0.1rem;
	color: #00afc7
}
</style>