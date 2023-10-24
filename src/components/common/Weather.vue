<template>
  <a-popover placement="left">
    <template #content>
      <img class="weather" src="https://api.vvhan.com/api/ip" alt="">
    </template>
    <i class="ifishfont ifish-weather"></i>
  </a-popover>
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
.weather {
  width: 300px;
}
</style>
