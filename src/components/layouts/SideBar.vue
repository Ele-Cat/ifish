<template>
  <div class="sidebar">
    <div class="logo">
      <img v-if="!useSystemStore.darkMode" src="@/assets/images/logo.png" alt="">
      <img v-else src="@/assets/images/logo_white.png" alt="">
    </div>
    <div class="menu">
      <ul>
        <li v-for="item in menuList" :key="item.value" :class="{active: useSystemStore.activeMenu === item.value}" @click="handleMenuClick(item.value)">{{item.label}}</li>
        <li @click="feedback">反馈</li>
      </ul>
    </div>
    <div class="setting-box">
      <ModeSwitch />
      <i class="ifishfont ifish-setting" title="设置" @click="settingVisible = true"></i>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import ModeSwitch from '@/components/common/ModeSwitch.vue';
import useStore from "@/store";
const { useSystemStore } = useStore();

const settingVisible = ref(false);

const menuList = reactive([
  {
    value: "home",
    label: "主页",
  },
  {
    value: "nav",
    label: "导航",
  },
  {
    value: "about",
    label: "关于",
  }
]);
const handleMenuClick = (activeMenu) => {
  useSystemStore.activeMenu = activeMenu;
}
const feedback = () => {
  window.open("https://support.qq.com/product/611809", "_blank");
}
</script>

<style lang="less" scoped>
.sidebar {
  width: 56px;
  height: 88vh;
  background-color: var(--theme-bg-color-a6);
  backdrop-filter: saturate(200%) blur(15px);
  position: fixed;
  z-index: 2;
  bottom: 50px;
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
      &:hover, &.active {
        color: var(--primary-color);
      }
    }
  }
  .setting-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .ifish-setting {
      cursor: pointer;
      font-size: 24px;
      margin-top: 12px;
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