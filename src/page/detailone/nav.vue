<template>
   <nav class="nav">
    <ul class="nav-box">
      <li class="mp-navigation mp-a">
        <span class="mp-link mp-linka">
          <h3 class="mp-title mp-titlea">产品推荐</h3> 
        </span> 
      </li>
       <li class="mp-navigation mp-b">
        <span class="mp-link mp-linkb">
          <h3 class="mp-title mp-titleb">全新酒店</h3> 
        </span> 
      </li>
       <li class="mp-navigation mp-c">
        <span class="mp-link mp-linkc">
          <h3 class="mp-title mp-titlec">漫威主题</h3> 
        </span> 
      </li>
       <li class="mp-navigation mp-b">
        <span class="mp-link mp-linkb">
          <h3 class="mp-title mp-titleb">奇妙体验</h3> 
        </span> 
      </li>
       <li class="mp-navigation mp-a">
        <span class="mp-link  mp-linka">
          <h3 class="mp-title mp-titlea">无忧行程</h3> 
        </span> 
      </li>
    </ul>
  </nav>  
</template>
<script>
export default {
}
</script>
<style scoped>
.nav {
  width: 100%;
  margin-top: -0.35rem;
}
.nav-box {
  width: 100%;
  z-index: 10; 
  display: flex;  
  overflow: hidden;
  padding: 0 .08rem;
  position: relative;
  box-sizing: border-box; 
  background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2245hongkongdisney05/navigation.png)
    no-repeat;
  background-size: 100% 100%;
}
.mp-navigation{
  position: relative;
  float:left;
  flex: 1;
}
.mp-link{
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 88%;
    height:1.2rem;
}
.mp-linka{
  margin-top:17.6%;
}
.mp-linkb{
  margin-top:8.8%;
}
.mp-linkc{
  margin-top:-1%;
}
.mp-titlea{
  position: absolute;
  bottom:23%;
  left:27%;
}
.mp-titleb{
  position: absolute;
  bottom:31%;
  left:27%;
}
.mp-titlec{
  position: absolute;
  bottom:37%;
  left:27%;
}
.mp-title{
  
    width: .6rem;
    height: .64rem;
    font-size: .3rem;
    color:#fff;
    line-height: .32rem;
    overflow: hidden;
}
</style>

