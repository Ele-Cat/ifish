<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: !useSystemStore.settings.darkMode ? '#FD6585' : '#FF8FA3',
      },
    }"
    :locale="zhCN"
  >
    <Layouts @click="handleAppClick" @contextmenu.stop="handleAppContextMenu" />
  </a-config-provider>
  <ContextMenu />
</template>

<script setup>
import { onMounted, watch, defineAsyncComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
import { listenGlobalKeyDown } from "@/utils/shortcutKey";
import useStore from "@/store";
const { useSystemStore, useContextMenuStore } = useStore();

const Layouts = defineAsyncComponent(() => import("@/components/layouts/Index.vue"));
const ContextMenu = defineAsyncComponent(() => import("@/components/common/ContextMenu.vue"));

// 监听全局键盘事件
onMounted(() => {
  listenGlobalKeyDown();
  useSystemStore.getPlatform();
});

document.addEventListener("visibilitychange", handleVisibilityChange, false);
function handleVisibilityChange() {
  if (document.hidden) {
    document.title = "ε=(´ο｀*)))快回来摸鱼";
  } else {
    document.title = "摸鱼，是一种态度";
  }
  if (useSystemStore.settings.title) {
    document.title = useSystemStore.settings.title;
  }
}

watch(
  () => useSystemStore.settings.title,
  (newVal) => {
    document.title = newVal || "摸鱼，是一种态度";
  },
  {
    immediate: true,
  }
);

const handleAppClick = () => {
  useContextMenuStore.hideContextMenu();
  useContextMenuStore.activeApp = {};
};
const handleAppContextMenu = (e) => {
  e.preventDefault();
  useContextMenuStore.showContextMenu(e.clientX, e.clientY);
  useContextMenuStore.activeApp = {
    type: "page",
  };
};
</script>

<style lang="less" scoped>
@import url(//at.alicdn.com/t/c/font_4284553_hsd7d71rdmr.css);
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
