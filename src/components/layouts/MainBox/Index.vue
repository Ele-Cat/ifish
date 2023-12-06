<template>
  <div class="main-box">
    <Time class="sys-time" />

    <div class="comp-box">
      <perfect-scrollbar class="scroll-bar">
        <keep-alive>
          <component
            class="animated fadeIn"
            :is="mainComponents[useSystemStore.activeMenu]"
          />
        </keep-alive>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { shallowRef, defineAsyncComponent } from "vue";
import useStore from "@/store";
const { useSystemStore } = useStore();
const Time = defineAsyncComponent(() => import("./Time.vue"));
const Home = defineAsyncComponent(() => import("@/views/Home/Index.vue"));
const News = defineAsyncComponent(() => import("@/views/News/Index.vue"));
const Nav = defineAsyncComponent(() => import("@/views/Nav/Index.vue"));
const About = defineAsyncComponent(() => import("@/views/About/Index.vue"));

const mainComponents = shallowRef({
  home: Home,
  news: News,
  nav: Nav,
  about: About,
});
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave,
.fade-enter-to {
  height: auto;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
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
    word-wrap: break-word;
  }
  .scroll-bar {
    height: calc(100vh - 180px);
    padding: 10px 102px 0;
  }
}
@media screen and (max-width: 640px) {
  .main-box {
    .scroll-bar {
      padding: 10px 58px 0;
    }
  }
}
</style>
