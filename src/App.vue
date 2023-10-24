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
import { watch } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
import Layouts from '@/components/layouts/Index.vue';
import useStore from "@/store";
const { useSystemStore } = useStore();

document.addEventListener("visibilitychange", handleVisibilityChange, false);
function handleVisibilityChange() {
  if (document.hidden) {
    document.title = "ε=(´ο｀*)))快回来摸鱼"
  } else {
    document.title = "摸鱼，是一种态度"
  }
  if (useSystemStore.settings.title) {
    document.title = useSystemStore.settings.title;
  }
}

watch(() => useSystemStore.settings.title, newVal => {
  document.title = newVal || "摸鱼，是一种态度";
}, {
  immediate: true,
})
</script>

<style lang="less" scoped>
@import url(//at.alicdn.com/t/c/font_4284553_schd61qmwoo.css);
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
