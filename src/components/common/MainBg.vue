<template>
  <!-- <img class="cover" src="http://www.dmoe.cc/random.php" alt=""> -->
  <img class="cover" src="https://tucdn.wpon.cn/2023/10/12/05f24414c474e.jpg" alt="">
  <img class="cover animate__fadeOut" src="https://tucdn.wpon.cn/2023/10/12/05f24414c474e.jpg" alt="">
  <div class="mask"></div>
</template>

<script setup>
// 背景图片随机 API
// 岁月小筑 https://img.xjh.me
// 保罗 API https://api.paugram.com/help/wallpaper
// 墨天逸 http://api.mtyqx.cn
// 听风过畔 https://api.osgz.com
// 如诗 API https://api.likepoems.com
// Unsplash https://source.unsplash.com/
// 小歪 API https://api.ixiaowai.cn
// 樱花 API http://www.dmoe.cc/
// 樱道 https://img.r10086.com/
// EEEDOG https://www.eee.dog/tech/rand-pic-api.html
// 东方 Project https://img.paulzzh.tech/
// 动漫星空 https://api.dongmanxingkong.com/suijitupian.html
// 随机生成图片大全：https://www.fang1688.cn/study-code/103.html
// 随机美图 API：https://cdn.seovx.com/
// 二次元：http://www.dmoe.cc/random.php
</script>

<style lang="less" scoped>
.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -99;
  transition: all .3s;
}

.animate__fadeOut {
  animation-name: fadeOut;
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.mask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -98;
  // backdrop-filter: blur(2px);
  // backdrop-filter: saturate(200%) blur(1px);
}</style>