<template>
  <div class="main-box">
    <ITime class="sys-time" />
    <SideBar />
    <div class="tip">这是爱摸鱼的第一版，还有很多东西不太完善，更多精彩正在路上，感谢您的支持</div> 
    <!-- <img src="https://api.vvhan.com/api/moyu" alt=""> -->
    <!-- https://www.sojson.com/other/relax.html -->
    <!-- <video src=""></video> -->

    <!-- https://api.moyuduck.com/hot/all -->

    <!-- https://txc.qq.com/products/611809 -->
    <!-- https://support.qq.com/product/611809 -->
  </div>
</template>

<script setup>
import ITime from '@/components/libs/ITime.vue';
import SideBar from '@/components/common/SideBar.vue';
import { useFetch } from '@vueuse/core'

const { data, error, isDone, isLoading, get } = useFetch('https://api.moyuduck.com/hot/all')
// console.log('data: ', data);
</script>

<style lang="less" scoped>
.main-box {
  .sys-time {
    padding-top: 24px;
  }
  .tip {
    font-size: 12px;
    text-align: center;
    margin-top: 12px;
    color: #fff;
  }
}
</style>