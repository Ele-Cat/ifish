<template>
  <div class="home">
    <SearchBox />

    <div class="app-box">
      <img src="https://api.vvhan.com/api/moyu" alt="">
      <!-- https://www.sojson.com/other/relax.html -->
      <!-- <video src=""></video> -->
    </div>
  </div>
</template>

<script setup>
import SearchBox from '@/components/common/SearchBox.vue';

</script>

<style lang="less" scoped>
.home {
  .app-box {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 68vh;
    }
  }
}
</style>