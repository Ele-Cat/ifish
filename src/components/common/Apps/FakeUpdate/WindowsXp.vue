<template>
  <div class="fake-box">
    <div class="inner">
      <img class="image_block" src="https://hellokit.com.cn/fakeupdate/assets/img/hPIlmru.png">
      <div class="font">
        <p>Windows 正在安装更新...<span>{{percent}}%</span></p>
        <p>不要关闭您的计算机或拔掉电源</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const percent = ref(0);
let timer = null;
onUnmounted(() => {
  percent.value = 0;
  timer && clearInterval(timer);
})

onMounted(() => {
  percent.value = 0;
  timer = setInterval(() => {
    percent.value++;
    if (percent.value >= 99) {
      percent.value = 50;
    }
  }, 5000);
})
</script>

<style lang="less" scoped>
.fake-box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999;
  cursor: url(https://hellokit.com.cn/fakeupdate/assets/img/gQyFbtU.png), auto;
  background: url('https://hellokit.com.cn/fakeupdate/assets/img/N9nbgDY.jpg') #5b7edc no-repeat 100% center / cover fixed;
  .inner {
    position: absolute;
    top: 55%;
    left: 50%;
    height: 70px;
    width: 520px;
    font-family: Tahoma, Arial;
    font-size: 20px;
    color: #fff;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: flex-end;
    .image_block {
      position: relative;
      left: 20px;
      width: 400px;
    }
    .font {
      line-height: 1.4;
      span {
        margin-left: 6px;
      }
    }
  }
}
</style>
