<template>
  <div class="layout" @contextmenu="e => e.preventDefault()">
    <FMainBg />
    <div class="num">2012</div>
    <img src="https://api.vvhan.com/api/moyu" alt="">
    https://www.sojson.com/other/relax.html
    <!-- <video src=""></video> -->
  </div>
</template>

<script setup>
import FMainBg from './components/common/FMainBg.vue';

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
  font-family: DS-DIGI;
}
</style>
