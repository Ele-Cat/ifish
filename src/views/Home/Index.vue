<template>
  <div class="home">
    <SearchBox />

    <Apps />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const SearchBox = defineAsyncComponent(() => import("./SearchBox.vue"));
const Apps = defineAsyncComponent(() => import("./Apps.vue"));
</script>

<style lang="less" scoped>
</style>