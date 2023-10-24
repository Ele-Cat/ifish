<template>
  <div class="home">
    <SearchBox />

    <Apps />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchBox from './SearchBox.vue';
import Apps from './Apps.vue';
</script>

<style lang="less" scoped>
.home {
  
}
</style>