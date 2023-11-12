<template>
  <div class="main-bg">
    <img v-if="useSystemStore.settings.wallpaper.type === 'basic'" class="cover" :src="useSystemStore.settings.wallpaper.url" alt="">
    <img v-if="useSystemStore.settings.wallpaper.type === 'basic'" class="cover animate__fadeOut" :src="useSystemStore.settings.wallpaper.url" alt="">
    <video v-if="useSystemStore.settings.wallpaper.type === 'dynamics'" class="video" :src="useSystemStore.settings.wallpaper.url" playsinline autoplay loop muted></video>
    <div v-if="useSystemStore.settings.wallpaper.type === 'pure'" class="pure" :style="{backgroundImage: `linear-gradient(${useSystemStore.settings.wallpaper.angle}deg, ${useSystemStore.settings.wallpaper.pure[0]} 15%, ${useSystemStore.settings.wallpaper.pure[1]} 150%)`}"></div>
    <div class="mask" :style="{backgroundColor: `rgba(0, 0, 0, ${useSystemStore.settings.wallpaper.mask / 100})`,backdropFilter: `blur(${useSystemStore.settings.wallpaper.blur}px)`}"></div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import useStore from "@/store";
const { useSystemStore } = useStore();

const type = ref(useSystemStore.settings.wallpaper.type);
const url = ref(useSystemStore.settings.wallpaper.url);
watch(() => useSystemStore.settings.wallpaper, newVal => {
  type.value = newVal.type;
  url.value = newVal.url;
}, {
  immediate: true,
  deep: true,
})

const coverUrl = "https://imgse.com/content/images/system/home_cover_1601010270144_8921bc.jpg";
// const videoUrl = "https://img2.picknewtab.com/wallpapers_video/648fb71175652244eaa103a0/435582351.mp4"
// const videoUrl = "./images/bg/disney.mp4"
</script>

<style lang="less" scoped>
.main-bg {
  position: relative;
  z-index: -10;
  .cover {
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transition: all .3s;
    background: linear-gradient(135deg,#75f0db,#75dbf0,#8a75f0,#f075c7);
    background-size: 200% 200%;
    animation: gradient-move 5s ease infinite alternate;
  }
  .animate__fadeOut {
    width: 200vw;
    max-width: 200vw;
    height: 200vh;
    left: -50vw;
    top: -50vh;
    animation: fadeOut ease-in-out 1s both;
  }
  .video {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .pure {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
  }
  .mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes gradient-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>