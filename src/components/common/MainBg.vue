<template>
  <div>
    <!-- <img class="cover" :src="coverUrl" alt="">
    <img class="cover animate__fadeOut" :src="coverUrl" alt=""> -->
    <video class="video" :src="videoUrl" playsinline autoplay loop muted></video>
  </div>
</template>

<script setup>
const coverUrl = "https://imgse.com/content/images/system/home_cover_1601010270144_8921bc.jpg";
const videoUrl = "https://img2.picknewtab.com/wallpapers_video/648fb71175652244eaa103a0/435582351.mp4"
// const videoUrl = "./images/bg/disney.mp4"
</script>

<style lang="less" scoped>
.video {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -99;
}
.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -99;
  transition: all .3s;

  background: linear-gradient(135deg,#75f0db,#75dbf0,#8a75f0,#f075c7);
  background-size: 200% 200%;
  animation: gradient-move 5s ease infinite alternate;
}

.animate__fadeOut {
  width: 200vw;
  height: 200vh;
  left: -50vw;
  top: -50vh;
  animation: fadeOut ease-in-out 1s both;
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