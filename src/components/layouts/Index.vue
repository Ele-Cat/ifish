<template>
  <div class="layout" @contextmenu="e => e.preventDefault()">
    <MainBg />
    <SideBar />
    <MainBox />
    <MainFooter />
  </div>
</template>

<script setup>
import MainBg from '@/components/common/MainBg.vue';
import SideBar from '@/components/common/SideBar.vue';
import MainBox from '@/components/layouts/MainBox.vue';
import MainFooter from '@/components/layouts/MainFooter.vue';
</script>

<style lang="less" scoped></style>