<template>
  <!-- <div class="layout"> -->
  <div class="layout">
    <MainBg />
    <SideBar />
    <MainBox />
    <MainFooter v-show="!useMusicStore.visible" />
    <Music />
    <Wallpaper />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import useStore from "@/store";
const { useMusicStore } = useStore();

const MainBg = defineAsyncComponent(() => import('@/components/common/MainBg.vue'));
const SideBar = defineAsyncComponent(() => import('@/components/layouts/SideBar/Index.vue'));
const MainBox = defineAsyncComponent(() => import('@/components/layouts/MainBox/Index.vue'));
const MainFooter = defineAsyncComponent(() => import('@/components/layouts/MainFooter/Index.vue'));
const Music = defineAsyncComponent(() => import('@/components/common/Music/Index.vue'));
const Wallpaper = defineAsyncComponent(() => import('@/components/common/Wallpaper/Index.vue'));
</script>

<style lang="less" scoped></style>