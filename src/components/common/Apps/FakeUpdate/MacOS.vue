<template>
  <div class="fake-box">
    <img class="image_block" src="https://fakeupdate.net/apple/apple.png" />
    <br />
    <br />
    <br />
    <img class="image_block" src="https://fakeupdate.net/apple/load.gif" />
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
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
