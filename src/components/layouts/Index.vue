<template>
  <!-- <div class="layout"> -->
  <div class="layout">
    <MainBg />
    <SideBar />
    <MainBox />
    <MainFooter v-show="!useMusicStore.visible" />
    <!-- <Music /> -->
    <Wallpaper />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import useStore from "@/store";
const { useMusicStore } = useStore();

import MainBg from '@/components/common/MainBg.vue';
import Music from '@/components/common/Music/Index.vue';
import SideBar from '@/components/layouts/SideBar/Index.vue';
import MainBox from '@/components/layouts/MainBox/Index.vue';
import MainFooter from '@/components/layouts/MainFooter/Index.vue';
const Wallpaper = defineAsyncComponent(() => import('@/components/common/Wallpaper/Index.vue'));
</script>

<style lang="less" scoped></style>