<template>
  <div class="layout" @contextmenu="e => e.preventDefault()">
    <MainBg />
    <MainHeader />
    <MainBox />
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from '@/components/layouts/MainHeader.vue';
import MainFooter from '@/components/layouts/MainFooter.vue';
import MainBox from '@/components/layouts/MainBox.vue';
import MainBg from '@/components/common/MainBg.vue';
</script>

<style lang="less" scoped></style>