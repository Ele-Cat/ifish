<template>
  <div class="fake-box">
    <div class="inner">
      <img
        src="https://hellokit.com.cn/fakeupdate/assets/img/eZQzDJL.gif"
        style="vertical-align: middle; padding-top: 25px; float: left"
        draggable="false"
        ondragstart="return false;"
      />
      <a>Configuring Windows updates</a>
      <br />
      <a>{{ percent }}%</a> <span>complete.</span><br />
      <span>Do not turn off your computer.</span>
    </div>
    <img
      class="image_block"
      src="https://hellokit.com.cn/fakeupdate/assets/img/dhaSKKq.png"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const percent = ref(0);
let timer = null;
let interval = 5000;

const doInterval = () => {
  timer = setInterval(() => {
    percent.value++;
    if (percent.value >= 99) {
      percent.value = 0;
    }
  }, interval);
};

const clear = () => {
  percent.value = 0;
  timer && clearInterval(timer);
};

watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      clear();
      doInterval();
    } else {
      clear();
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
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
  background: url("https://hellokit.com.cn/fakeupdate/assets/img/nxh0ygq.jpg") #054696
    no-repeat 100% center / cover fixed;
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 70px;
    width: 400px;
    margin: -5% 0 0 -200px;
    font-family: Segoe UI, Arial;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 1.4;
  }
  .image_block {
    position: absolute;
    bottom: 17px;
    left: 50%;
    height: 50px;
    transform: translate(-50%, 0);
  }
}
</style>
