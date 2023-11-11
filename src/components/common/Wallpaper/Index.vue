<template>
  <div class="wallpaper">
    <a-tabs
      v-model:activeKey="activeKey"
      tab-position="left"
      :style="{ minHeight: '360px' }"
    >
      <a-tab-pane v-for="item in settingsNavs" :key="item.value" :tab="item.label">
        <keep-alive>
          <component :is="item.component" />
        </keep-alive>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
const WallpaperBasic = defineAsyncComponent(() => import('./WallpaperBasic.vue'));
const WallpaperDynamics = defineAsyncComponent(() => import('./WallpaperDynamics.vue'));
const WallpaperPure = defineAsyncComponent(() => import('./WallpaperPure.vue'));
const WallpaperSetting = defineAsyncComponent(() => import('./WallpaperSetting.vue'));

const activeKey = ref("basic");
const settingsNavs = ref([
  {
    label: "精选壁纸",
    value: "basic",
    component: WallpaperBasic,
  },
  {
    label: "动态壁纸",
    value: "dynamics",
    component: WallpaperDynamics,
  },
  {
    label: "纯色壁纸",
    value: "pure",
    component: WallpaperPure,
  },
  {
    label: "壁纸设置",
    value: "setting",
    component: WallpaperSetting,
  },
]);
</script>

<style lang="less" scoped>
.wallpaper {
  padding-top: 20px;
}
</style>