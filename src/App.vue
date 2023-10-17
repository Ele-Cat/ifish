<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  >
    <div class="layout" @contextmenu="e => e.preventDefault()">
      <MainBg />
      <MainHeader />
      <MainBox />
      <MainFooter />
    </div>
  </a-config-provider>
</template>

<script setup>
import MainHeader from '@/components/layouts/MainHeader.vue';
import MainFooter from '@/components/layouts/MainFooter.vue';
import MainBox from '@/components/layouts/MainBox.vue';
import MainBg from '@/components/common/MainBg.vue';

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
@import url(//at.alicdn.com/t/c/font_4284553_mm24x29cksj.css);
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
