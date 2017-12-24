<template>
  <div class="video-banner" id="banner">
      <div class="banner-video" ref="bannerBox">
        <video src="https://vr.qunarzz.com/videos/zhuhuichang.mp4" controls="controls" class="banner-video-true"></video>
      </div>
      <div class="mp-banner-container" ref="bannerContainer"> 
        <img class="mp-banner-pic-a" alt="皮肤" src="//img1.qunarzz.com/piao/fusion/1712/6f/be15ad6f1dd78c02.jpg_750x450_a9386d54.jpg">
        <img class="mp-video-pic" alt="皮肤" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2549huaxue/videoBtn.png" @click="handleVideo">
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleVideo () {
      console.log(123)
      this.$refs.bannerBox.style.display = 'block'
      this.$refs.bannerContainer.style.display = 'none'
    }
  }
}
</script>
<style scoped>
.video-banner{
  position: relative;
  top:-1px;
  width:100%;
  height:4.5rem;
}
.mp-banner-container{
  position: relative;
  width:100%;
  height:100%;
}
.mp-banner-pic{
  width:100%;
  height:100%;
}
.mp-banner-pic-a{
  position: absolute;
  width:100%;
  height:100%;
}
.mp-video-pic{
  width: 1.33rem;
  height: 1.33rem;
  position: absolute;
  z-index:100;
  top: 1.59rem;
  left:2.8rem;
}
.banner-video {
  z-index: 8;
  position: absolute;
  top:0rem;
  width:100%;
  height:4.5rem;
  overflow: hidden;
  display: none;
}
.banner-video-true{
  object-fit: cover;
  width:100%;
  height:4.5rem;
}
</style>