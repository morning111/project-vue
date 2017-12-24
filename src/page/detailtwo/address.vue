<template>
<div class="mp-tab"> 
     <div class="mp-anchor-outer"> 
      <div class="mp-anchor-container"> 
       <div class="mp-tab-list">
        <div class="mp-tab-pic-wrap"> 
         <div class="mp-tab-pic-container"> 
          <img src="//img1.qunarzz.com/piao/fusion/1711/d6/c88b2a7cc6dcea02.jpg_307x100_54fc4142.jpg" > 
          <div class="mp-tab-item-decoration"> 
          <img class="mp-tab-item-decoration-pic" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/tab-decoration1.png"> 
          </div> 
          <div class="mp-tab-item-info"> 
           <p class="mp-tab-item-title">华北地区</p> 
           <p class="mp-tab-item-describe">华北区人气雪场</p> 
          </div> 
         </div> 
        </div>
        <div class="mp-tab-pic-wrap"> 
         <div class="mp-tab-pic-container"> 
          <img src="//img1.qunarzz.com/piao/fusion/1711/f9/6a64fa025b1c8002.jpg_307x100_3e11a768.jpg" style="opacity: 1;"> 
          <div class="mp-tab-item-decoration"> 
           <img class="mp-tab-item-decoration-pic" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/tab-decoration_v3.png" style="opacity: 1;"> 
          </div> 
          <div class="mp-tab-item-info"> 
           <p class="mp-tab-item-title">东北地区</p> 
           <p class="mp-tab-item-describe">东北人去哪滑雪</p> 
          </div> 
         </div> 
        </div>
       </div> 
      </div> 
     </div> 
     <div class="mp-product">   
      <div> 
       <div class="mp-goto-title"> 
        <span class="mp-slider-title-text">华北地区 
         <div class="mp-slider-title-decoration-left"> 
          <img class="mp-slider-title-decoration-pic" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/ganhuo-left_v3.jpg"> 
         </div> 
         <div class="mp-slider-title-decoration-right"> 
          <img class="mp-slider-title-decoration-pic" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/ganhuo_v3.jpg"> 
         </div> 
        </span> 
        <div class="mp-goto-img">
          <img src="//img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_690x379_bf06f9e9.jpg" alt="" class="mp-big-img">
          <div class="mp-single-product-decoration">
            <img class="mp-product-top-one" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/top1.png" style="opacity: 1;">
            <div class="mp-address">南山滑雪场</div>
            <div class="mp-desc">华北第一</div>
            <div class="mp-number">&yen;<span class="mp-num">138</span>起</div>
          </div>
        </div>
        <div>
          <div class="mp-goto-img mp-goto-img-small" v-for='item in snowInfo' :key='item.id'>
          <img :src='item.imgUrl' alt="" class="mp-big-img">
          <div class="mp-single-product-decoration mp-single-product-decorationa">
            <img class="mp-product-top-one" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/top2.png">
            <div class="mp-address mp-addressa">{{item.address}}</div>
            <div class="mp-desc mp-desca">{{item.desc}}</div>
            <div class="mp-number mp-numbera">&yen;<span class="mp-num">{{item.num}}</span>起</div>
          </div>
        </div>
        </div>
       </div> 
      </div>     
     </div>
     <div class="mp-more"> 
        <a class="mp-more-link" href="//touch.piao.qunar.com/touch/list.htm?keyword=华北_滑雪&amp;cat=from_value%3DTOPIC-2017%25E6%25BB%2591%25E9%259B%25AA%25E5%25AD%25A3%26from_area%3Dts_topic%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC%26from_index%3D1%26from_other%3Dt_2579">查看更多</a> 
     </div> 
</div>
  
</template>
<script>
export default {
  props: ['snowInfo']
}
</script>
<style scoped>
.mp-tab {
  background-color: #e1f3fe;
}
.mp-anchor-container {
  height: 1.76rem;
}
.mp-tab-list {
  margin: 0 0.46rem 0 0.59rem;
  padding: 0.3rem 0 0.5rem 0;
  white-space: nowrap;
}
.mp-tab-pic-wrap {
  width: 47.5%;
  position: relative;
  display: inline-block;
  padding-right: 0.13rem;
}
.mp-tab-pic-container {
  width: 100%;
  height: 0.96rem;
  position: relative;
}
.mp-tab-pic-container img {
  width: 100%;
  height: 100%;
}
.mp-tab-item-decoration {
  width: 50%;
  height: 100%;
  position: absolute;
  top: -11%;
  left: 50%;
}
.mp-tab-item-info {
  position: absolute;
  top: 25%;
  left: 25%;
}
.mp-tab-item-title {
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 0.28rem;
  padding-bottom: 0.08rem;
}
.mp-tab-item-describe {
  color: #ffffff;
  text-align: center;
  font-size: 0.22rem;
  white-space: nowrap;
  font-weight: 100;
}
.mp-product {
  margin: 0 0.27rem;
  padding-bottom: 0.05rem;
}
.mp-goto-title {
  background-color: #e1f3fe;
  padding-bottom: 0.2rem;
  position: relative;
  text-align: center;
  padding-top: 0.15rem;
}
.mp-slider-title-text {
  font-weight: bold;
  font-size: 0.4rem;
  color: #20bef5;
  text-align: center;
  position: relative;
}
.mp-slider-title-decoration-left {
  width: 0.76rem;
  height: 0.26rem;
  position: absolute;
  left: -1.8rem;
  bottom: 0.2rem;
}
.mp-slider-title-decoration-right {
  width: 0.76rem;
  height: 0.26rem;
  position: absolute;
  right: -0.9rem;
  bottom: 0.2rem;
}
.mp-goto-img {
  position: relative;
  margin:0 2%;
  margin-top:.3rem;
  width:96%;
  height: 3.76rem;
}
.mp-goto-img-small{
display: inline-block;
width:46%;
}
.mp-goto-img .mp-big-img{
  width:100%;
  height: 100%;
}
.mp-single-product-decoration {
    width: 100%;
    height: 0.8rem;
    position: absolute;
    bottom: 0;
    background: rgba(255,255,255,1);
}
.mp-single-product-decorationa {
    height: 1.2rem;
    }
.mp-product-top-one{
position: absolute;
top:-.5rem;
left:.1rem;
width:.62rem;
height:.6rem;
}
.mp-desc{
margin-top:.3rem;
margin-left:1%;
width:25%;
height:0.3rem;
color:#05bad5;
border-radius: 10px;
line-height:0.3rem;
font-size:.28rem;
float:left;
border:1px solid #05bad5;
}
.mp-desca{
  width:48%;
  margin-top:.1rem;
}
.mp-address{
width:49%;
height:0.4rem;
margin-top:.3rem;
line-height:0.4rem;
font-size:.28rem;
float:left;
}
.mp-addressa{
  width:100%;
  margin: .1rem 0;
}
.mp-number{
color:orange;
width:20%;
height:0.4rem;
margin-top:.3rem;
line-height:0.4rem;
font-size:.24rem;
float:right;
}
.mp-numbera{
  width:48%;
  margin-top:.1rem;
}
.mp-num{
  font-size:.32rem;
}
.mp-more {
    width: 1.89rem;
    height: .63rem;
    color: #fff;
    font-size: .32rem;
    line-height: .63rem;
    margin: .15rem auto .3rem auto;
    text-align: center;
    border-radius: .1rem;
    background: -webkit-gradient(linear,0 100%,100% 0,from(#00e3fe),to(#05c7ff));
    box-shadow: 0px 0px 16px 6px rgba(176,224,255,0.7);
}
.mp-more-link {
    color: #ffffff;
}
</style>