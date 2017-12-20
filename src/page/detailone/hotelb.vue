<template>
  <div style="background-color: #ffdb5c;padding-top: .26rem;">
    <div class="mp-caption">
      <img class="mp-topic-img" src="//img1.qunarzz.com/piao/fusion/1705/1b/3ecc7df173c43d02.png" style="opacity: 1;">
    </div>
   <div class='hotel-Bigbox' v-for='item in hotelInfob' :key='item.id'>
      <div class='mp-item'> 
        <div class='mp-img-containerobb'> 
          <img  class='mp-item-img' :src='item.imgUrl'/>
        </div> 
        <h3 class='mp-item-titleobb'>{{item.title}}</h3>
      </div> 
      <ul class='mp-product-listobb'>
        <li class='mp-product-item'> 
          <a href='#'> <h4 class='topic'>{{item.topicone}}</h4> 
           <div class='mp-product-price'> 
            <span class='mp-price mp-priceobb'>&yen;<span class='mp-price-num'>{{item.priceone}}</span><span class='mp-price-text'>起</span></span> 
            <span class='mp-product-btn mp-btnobb'>预订</span> 
           </div> 
          </a> 
        </li>
       <li class='mp-product-item'> 
          <a href='#'> <h4 class='topic'>{{item.topictwo}}</h4> 
           <div class='mp-product-price'> 
            <span class='mp-price mp-priceobb'>&yen;<span class='mp-price-num'>{{item.pricetwo}}</span><span class='mp-price-text'>起</span></span> 
            <span class='mp-product-btn mp-btnobb'>预订</span> 
           </div> 
          </a> 
        </li>
        <li class='mp-product-item'> 
          <a href='#'> <h4 class='topic'>{{item.topicthree}}</h4> 
           <div class='mp-product-price'> 
            <span class='mp-price mp-priceobb'>&yen;<span class='mp-price-num'>{{item.pricethree}}</span><span class='mp-price-text'>起</span></span> 
            <span class='mp-product-btn mp-btnobb'>预订</span> 
           </div> 
          </a> 
        </li>
      </ul> 
    </div>
    <div class="mp-footer">
     <p class="mp-footer-item"> 适用于迪士尼设计、标志及产物： </p>
     <p class="mp-footer-item"> ©Disney/Pixar ©Mattel, Inc. ©Hasbro, Inc. </p>
     <p class="mp-footer-item"> ©Disney/Lucasfilm Ltd. © &amp; TM Lucasfilm Ltd. </p>
     <p class="mp-footer-item"> ©2017 MARVEL </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['hotelInfob']
}
</script>
<style scoped>
.hotel-Bigbox{
  width:98%;
  padding:1%;
}
.mp-img-container{
  width:96%;
  margin:0.5% 2% 0% 2%;
}
.mp-item-img{
  width:100%;
}
.mp-item-title{
    width: 96%; 
    color: #fff;  
    height: .42rem;
    margin: 0 2%;
    overflow: hidden;
    font-size: .28rem; 
    text-align: center;
    line-height: .42rem;  
    white-space: nowrap;
    background: #fe8a71;
    text-overflow: ellipsis;
}
.mp-product-item{
    color: #000;
    font-size: .26rem;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
 .mp-price-num{
  color:red;
  font-size:.28rem;
}
.mp-price,.mp-product-btn{
  color:red;
  font-size:.24rem;
}
.mp-product-price{
  width:94%;
  margin:0 3% 0;
  float:right;
}
.topic{
    height: .3rem;
    color: #000;
    font-size: .28rem;
    line-height: .32rem;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-product-btn{
  display: inline-block;
  border-radius: 0.03rem;
  height: 0.3rem;
  margin-bottom:0.03rem 0;
  line-height:.32rem;
  text-align:center;
  font-size: .24rem;
  background: red;
  color:#fff;
}
.mp-price-text{
  font-size:0.24rem;
  color:#666;
}
.advertising {
  width: 100%;
  height: 1.36rem;
}
.advertising-img {
  width: 100%;
  height: 100%;
}
.mp-product-list{
  width:96%;
  margin:0 2% 2%;
  background:#fff;
}
.mp-img-containerobb{
    padding-bottom: 44.205%;
    overflow: hidden;
    width: 100%;
    height: 0;
}
.mp-item-titleobb{
    width: 100%; 
    color: #fff;  
    height: .42rem;
    overflow: hidden;
    font-size: .28rem; 
    text-align: center;
    line-height: .42rem;  
    white-space: nowrap;
    background: #fe8a71;
    text-overflow: ellipsis;
}
.mp-product-listobb{
  width:100%;
  margin:0 0% 2%;
  background:#fff;
}
.mp-priceobb{
  float: left;
  width:50%;
}
.mp-btnobb{
   float: right;
}
.mp-caption {
  height: 1rem;
  position: relative;
  z-index: 12;
}
.mp-topic-img {
  position: absolute;
  top: 0.05rem;
  width: 100%;
}
.mp-footer{
      padding: .28rem .18rem .44rem;
}
.mp-footer-item{
    min-height: .3rem;
    color: #5d390b;
    text-align: center;
}
</style>

