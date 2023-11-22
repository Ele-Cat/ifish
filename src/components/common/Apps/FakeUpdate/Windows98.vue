<template>
  <div class="fake-box">
    <img
      class="image_block"
      src="https://hellokit.com.cn/fakeupdate/windows98/windows98.gif"
    />
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.fake-box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999;
  cursor: url(https://hellokit.com.cn/fakeupdate/assets/img/gQyFbtU.png), auto;
  background: #5a7edc;
  .image_block {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
