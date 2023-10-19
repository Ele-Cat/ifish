<template>
  <div class="sidebar">
    <div class="logo">
      <img v-if="!useSystemStore.darkMode" src="@/assets/images/logo.png" alt="">
      <img v-else src="@/assets/images/logo_white.png" alt="">
    </div>
    <div class="menu">
      <ul>
        <li>主页</li>
        <li>导航</li>
        <li>关于</li>
      </ul>
    </div>
    <div class="setting-box">
      <ModeSwitch />
      <i class="ifishfont ifish-setting" title="设置" @click="settingVisible = true"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ModeSwitch from '@/components/common/ModeSwitch.vue';
import useStore from "@/store";
const { useSystemStore } = useStore();

const settingVisible = ref(false);
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
    }
  }
  .menu {
    flex: 1;
    padding-top: 12px;
    ul, li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      line-height: 2;
      cursor: pointer;
      &:hover {
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
</style>