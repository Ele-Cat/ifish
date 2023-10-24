<template>
  <div class="layout">
  <!-- <div class="layout" @contextmenu="e => e.preventDefault()"> -->
    <MainBg />
    <SideBar />
    <MainBox />
    <MainFooter />
  </div>
</template>

<script setup>
import MainBg from '@/components/common/MainBg.vue';
import SideBar from '@/components/layouts/SideBar/Index.vue';
import MainBox from '@/components/layouts/MainBox/Index.vue';
import MainFooter from '@/components/layouts/MainFooter/Index.vue';
</script>

<style lang="less" scoped></style>