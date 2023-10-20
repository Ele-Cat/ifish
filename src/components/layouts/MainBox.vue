<template>
  <div class="main-box">
    <ITime class="sys-time" />
    <!-- <div class="tip">这是爱摸鱼的第一版，还有很多东西不太完善，更多精彩正在路上，感谢您的支持</div>  -->
    <!-- <img src="https://api.vvhan.com/api/moyu" alt=""> -->
    <!-- https://www.sojson.com/other/relax.html -->
    <!-- <video src=""></video> -->

    <!-- useSystemStore.activeMenu -->
    <div class="comp-box">
      <Suspense>
        <template #default>
          <Home />
        </template>
        <template #fallback>
          <div class="default-loading">
            <a-spin tip="加载中..."></a-spin>
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import ITime from '@/components/libs/ITime.vue';
import { useFetch } from '@vueuse/core'
import useStore from "@/store";
const { useSystemStore } = useStore();
const Home = defineAsyncComponent(() => import('@/components/views/Home.vue'));

const { data, error, isDone, isLoading, get } = useFetch('https://api.moyuduck.com/hot/all')
// console.log('data: ', data);
</script>

<style lang="less" scoped>
.main-box {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .sys-time {
    padding-top: 24px;
  }
  .comp-box {
    flex: 1;
    padding: 20px 82px;
    word-wrap: break-word;
  }
}
@media screen and (max-width: 640px) {
  .main-box {
    .comp-box {
      padding: 20px 56px;
    }
  }
}
</style>