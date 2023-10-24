<template>
  <a-tooltip :title="`切换为${useSystemStore.settings.darkMode ? '日间' : '夜间'}模式`" placement="left">
    <i class="ifishfont mode-switch-icon" :class="[!useSystemStore.settings.darkMode ? 'ifish-light' : 'ifish-dark']" @click="changeMode"></i>
  </a-tooltip>
</template>

<script setup>
import useStore from "@/store";
import { watch } from "vue";
const { useSystemStore } = useStore();
let html = document.documentElement;

watch(() => useSystemStore.settings.darkMode, (newVal) => {
  if (newVal) {
    html.setAttribute("theme", "dark");
  }
}, {
  immediate: true,
})

const changeMode = () => {
  useSystemStore.changeMode();
}
</script>

<style lang="less" scoped>
.mode-switch-icon {
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
  }
}
</style>
