<template>
  <div class="sidebar bf" :style="{bottom: useMusicStore.visible ? '120px' : '80px'}">
    <div class="logo">
      <img v-if="!useSystemStore.settings.darkMode" src="/images/logo.png" alt="">
      <img v-else src="/images/logo_white.png" alt="">
    </div>
    <div class="menu">
      <ul>
        <a-tooltip :title="item.tooltip" v-for="item in menuList" :key="item.value" placement="left">
          <li :class="{active: useSystemStore.activeMenu === item.value}" @click="handleMenuClick(item.value)">{{item.label}}</li>
        </a-tooltip>
        <a-tooltip title="意见反馈" placement="left">
          <li @click="feedback">反馈</li>
        </a-tooltip>
      </ul>
    </div>
    <div class="setting-box">
      <Weather />
      <ModeSwitch />
      <a-tooltip title="系统设置" placement="left">
        <i class="ifishfont ifish-setting" title="设置" @click="settingsVisible = true"></i>
      </a-tooltip>
      <Settings @close="settingsVisible = false" :open="settingsVisible" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineAsyncComponent } from 'vue';
import useStore from "@/store";
const { useSystemStore, useMusicStore } = useStore();
const Weather = defineAsyncComponent(() => import('@/components/common/Weather.vue'));
const ModeSwitch = defineAsyncComponent(() => import('@/components/common/ModeSwitch.vue'));
const Settings = defineAsyncComponent(() => import('./Settings/Index.vue'));
import eventBus from '@/utils/eventBus';

const menuList = reactive([
  {
    value: "home",
    label: "主页",
    tooltip: "摸鱼主页",
  },
  {
    value: "news",
    label: "资讯",
    tooltip: "新闻资讯",
  },
  // {
  //   value: "nav",
  //   label: "导航",
  //   tooltip: "快捷导航",
  // },
  {
    value: "about",
    label: "关于",
    tooltip: "关于本程序",
  }
]);
const handleMenuClick = (activeMenu) => {
  useSystemStore.activeMenu = activeMenu;
}
const feedback = () => {
  window.open("https://support.qq.com/product/611809", "_blank");
}

const settingsVisible = ref(false);

eventBus.on("openSettings", () => {
  settingsVisible.value = true;
})
</script>

<style lang="less" scoped>
.sidebar {
  width: 56px;
  background-color: var(--theme-bg-color-a8);
  position: fixed;
  z-index: 2;
  top: 80px;
  // bottom: 80px;
  right: 20px;
  transition: all .3s;
  border-radius: 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  .logo {
    img {
      width: 32px;
      height: 32px;
      filter: brightness(1);
    }
  }
  .menu {
    flex: 1;
    padding-top: 24px;
    ul, li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      line-height: 2.4;
      cursor: pointer;
      font-size: 14px;
      transition: all .3s;
      &:hover, &.active {
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .sidebar {
    width: 42px;
    right: 10px;
    .menu {
      li {
        font-size: 12px;
      }
    }
  }
}
</style>

<style lang="less">
.sidebar {
  .setting-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .ifishfont {
      cursor: pointer;
      font-size: 28px;
      margin-top: 12px;
      transition: color .3s ease-in-out;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .sidebar {
    .setting-box {
      .ifishfont {
        font-size: 22px;
        margin-top: 10px;
      }
    }
  }
}
</style>