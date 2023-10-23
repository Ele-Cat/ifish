<template>
  <div class="home">
    <SearchBox />

    <div class="app-box">
      <img src="https://api.vvhan.com/api/moyu" alt="">
      <!-- https://www.sojson.com/other/relax.html -->
      <!-- <video src=""></video> -->

      <!-- 60s读懂世界 -->
      <!-- 图片 https://api.vvhan.com/api/60s -->
      <!-- 简报 https://api.qqsuu.cn/api/dm-60s?type=json -->
      <!-- 详细 https://www.zhihu.com/api/v4/columns/c_1261258401923026944/items -->
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