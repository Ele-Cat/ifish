<template>
  <div>
    <img class="cover" :src="coverUrl" alt="">
    <img class="cover animate__fadeOut" :src="coverUrl" alt="">
  </div>
</template>

<script setup>
const coverUrl = "https://imgse.com/content/images/system/home_cover_1601010270144_8921bc.jpg";
</script>

<style lang="less" scoped>
.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -99;
  transition: all .3s;
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
</style>