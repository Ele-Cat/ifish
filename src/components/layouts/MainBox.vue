<template>
  <div class="main-box">
    <ITime class="sys-time" />

    <div class="comp-box">
      <perfect-scrollbar class="scroll-bar">
        <keep-alive>
          <component class="animated fadeIn" :is="mainComponents[useSystemStore.activeMenu]" />
        </keep-alive>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { shallowRef, defineAsyncComponent } from 'vue';
import ITime from '@/components/libs/ITime.vue';
import useStore from "@/store";
const { useSystemStore } = useStore();
const Home = defineAsyncComponent(() => import('@/components/views/Home.vue'));
const News = defineAsyncComponent(() => import('@/components/views/News.vue'));
const Nav = defineAsyncComponent(() => import('@/components/views/Nav.vue'));
const About = defineAsyncComponent(() => import('@/components/views/About.vue'));

const mainComponents = shallowRef({
  home: Home,
  news: News,
  nav: Nav,
  about: About,
});
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave, .fade-enter-to {
  height: auto;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  height: 0;
  opacity: 0;
}
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
    height: calc(100vh - 130px - 28px);
    padding: 0 20px;
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