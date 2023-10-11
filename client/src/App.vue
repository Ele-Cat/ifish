<template>
  <div class="layout" @contextmenu="e => e.preventDefault()">
    <MainBg />
    <div class="num"><LTime /></div>
    <img src="https://api.vvhan.com/api/moyu" alt="">
    https://www.sojson.com/other/relax.html
    <!-- <video src=""></video> -->
    <MainFooter />
  </div>
</template>

<script setup>
import MainBg from './components/common/MainBg.vue';
import MainFooter from './components/common/MainFooter.vue';
import LTime from './components/libs/LTime.vue';

document.addEventListener("visibilitychange", handleVisibilityChange, false);
function handleVisibilityChange() {
  if (document.hidden) {
    document.title = "ε=(´ο｀*)))快回来摸鱼"
  } else {
    document.title = "摸鱼，是一种态度"
  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.num {
  // font-family: DS-DIGI;
}
</style>
