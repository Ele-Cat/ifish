<template>
  <div class="header">
    <div class="logo">
      <img v-if="!useSystemStore.darkMode" src="@/assets/images/logo.png" alt="">
      <img v-else src="@/assets/images/logo_white.png" alt="">
    </div>
    <div class="right-box">
      <ModeSwitch />
      <i class="ifishfont ifish-setting" title="设置" @click="settingVisible = true"></i>
    </div>
  </div>
</template>

<script setup>
import ModeSwitch from '@/components/common/ModeSwitch.vue';
import useStore from "@/store";
import { ref } from 'vue';
const { useSystemStore } = useStore();

const settingVisible = ref(false);
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--theme-bg-color-a6);
  color: var(--theme-text-color);
  height: 36px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    flex: 1;
    img {
      max-height: 32px;
    }
  }
  .right-box {
    display: flex;
    align-items: center;
    .ifish-setting {
      margin-left: 12px;
      cursor: pointer;
      font-size: 24px;
    }
  }
}
</style>