<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#FD6585',
      },
    }"
    :locale="zhCN"
  >
    <Layouts />
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import Layouts from '@/components/layouts/Index.vue';

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
