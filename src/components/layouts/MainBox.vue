<template>
  <div class="main-box">
    <ITime class="sys-time" />
    <!-- <img src="https://api.vvhan.com/api/moyu" alt=""> -->
    <!-- https://www.sojson.com/other/relax.html -->
    <!-- <video src=""></video> -->

    <!-- useSystemStore.activeMenu -->
    <div class="comp-box">
      <Suspense>
        <template #default>
          <Home v-if="useSystemStore.activeMenu === 'home'" />
        </template>
        <template #fallback>
          <div class="default-loading">
            <a-spin tip="加载中..."></a-spin>
          </div>
        </template>
      </Suspense>
      <Suspense>
        <template #default>
          <News v-if="useSystemStore.activeMenu === 'news'" />
        </template>
        <template #fallback>
          <div class="default-loading">
            <a-spin tip="加载中..."></a-spin>
          </div>
        </template>
      </Suspense>
      <Suspense>
        <template #default>
          <Nav v-if="useSystemStore.activeMenu === 'nav'" />
        </template>
        <template #fallback>
          <div class="default-loading">
            <a-spin tip="加载中..."></a-spin>
          </div>
        </template>
      </Suspense>
      <Suspense>
        <template #default>
          <About v-if="useSystemStore.activeMenu === 'about'" />
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
import useStore from "@/store";
const { useSystemStore } = useStore();
const Home = defineAsyncComponent(() => import('@/components/views/Home.vue'));
const News = defineAsyncComponent(() => import('@/components/views/News.vue'));
const Nav = defineAsyncComponent(() => import('@/components/views/Nav.vue'));
const About = defineAsyncComponent(() => import('@/components/views/About.vue'));
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