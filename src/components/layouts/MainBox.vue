<template>
  <div class="main-box">
    <ITime class="sys-time" />
    <!-- <img src="https://api.vvhan.com/api/moyu" alt=""> -->
    <!-- https://www.sojson.com/other/relax.html -->
    <!-- <video src=""></video> -->

    <!-- useSystemStore.activeMenu -->
    <div class="comp-box">
      <perfect-scrollbar class="scroll-bar">
        <Home class="animated fadeIn" v-if="useSystemStore.activeMenu === 'home'" />
        <News class="animated fadeIn" v-if="useSystemStore.activeMenu === 'news'" />
        <Nav class="animated fadeIn" v-if="useSystemStore.activeMenu === 'nav'" />
        <About class="animated zoomIn" v-if="useSystemStore.activeMenu === 'about'" />
      </perfect-scrollbar>
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
  .scroll-bar {
    height: 80vh;
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