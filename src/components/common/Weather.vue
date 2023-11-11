<template>
  <a-popover placement="left">
    <template #content>
      <img class="weather" src="https://api.vvhan.com/api/ip" alt="">
    </template>
    <i class="ifishfont ifish-weather"></i>
  </a-popover>
</template>

<script setup>
</script>

<style lang="less" scoped>
.weather {
  width: 300px;
}
</style>
