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
import { version } from "@/utils/utils";
import useStore from "@/store";
import { notify } from "@/utils/feedback";
const { useSystemStore, useContextMenuStore } = useStore();

const Layouts = defineAsyncComponent(() => import("@/components/layouts/Index.vue"));
const ContextMenu = defineAsyncComponent(() => import("@/components/common/ContextMenu.vue"));

// 随机一句一言API接口 https://api.vvhan.com/api/ian
// 随机笑话API接口 https://api.vvhan.com/api/joke
// 随机一句情话API接口 https://api.vvhan.com/api/love
// 随机一句骚话API接口 https://api.vvhan.com/api/sao
// 美图API接口 https://api.vvhan.com/api/mobil.girl?type=json
// https://api.vvhan.com/api/girl?type=json

// 美女视频 https://www.nihaowua.com/v/video.php?_t=0.6096279598934722
// 美女写真 https://api.moyuduck.com/random/xiezhen

// 摸鱼日报API https://dayu.qqsuu.cn/moyuribao/apis.php
// 摸鱼日历API https://dayu.qqsuu.cn/moyurili/apis.php
// 明星八卦API https://dayu.qqsuu.cn/mingxingbagua/apis.php
// 内涵段子API https://dayu.qqsuu.cn/neihanduanzi/apis.php
// 新闻简报API https://dayu.qqsuu.cn/weiyujianbao/apis.php
// 情感花园API https://dayu.qqsuu.cn/qingganhuayuan/apis.php
// 摸鱼日报美女视频版API https://dayu.qqsuu.cn/moyuribaoshipin/apis.php

// 监听全局键盘事件
onMounted(() => {
  listenGlobalKeyDown();
  useSystemStore.getPlatform();

  if (useSystemStore.version != version) {
    notify({
      type: "warning",
      title: "提示",
      content: "系统组件更新啦，快去组件商城看看吧~",
      duration: 0,
    })
    useSystemStore.version = version;
  }
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
