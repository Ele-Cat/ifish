<template>
  <div class="fake-box">
    <div class="inner">
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <a>Configuring Windows updates</a>
      <br />
      <a>{{ percent }}%</a> <span>complete.</span><br />
      <span>Do not turn off your computer.</span>
    </div>
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
  background: #07466c;
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 70px;
    width: 400px;
    margin: -5% 0 0 -200px;
    font-family: Segoe UI Light, Segoe UI, Arial;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 1.4;
    .loader {
      width: 40px;
      margin: auto;
      vertical-align: middle;
      padding-top: 32px;
      float: left;
      .circle {
        position: absolute;
        width: 32px;
        height: 32px;
        opacity: 0;
        transform: rotate(225deg);
        animation-iteration-count: infinite;
        animation-name: orbit;
        animation-duration: 5.5s;
        &:after {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 5px;
          background: #fff;
        }
        &:nth-child(2) {
          animation-delay: 240ms;
        }
        &:nth-child(3) {
          animation-delay: 480ms;
        }
        &:nth-child(4) {
          animation-delay: 720ms;
        }
        &:nth-child(5) {
          animation-delay: 960ms;
        }
      }
    }
  }
}

@keyframes orbit {
  0% {
    transform: rotate(225deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }

  7% {
    transform: rotate(345deg);
    animation-timing-function: linear;
  }
  30% {
    transform: rotate(455deg);
    animation-timing-function: ease-in-out;
  }
  39% {
    transform: rotate(690deg);
    animation-timing-function: linear;
  }
  70% {
    transform: rotate(815deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  75% {
    transform: rotate(945deg);
    animation-timing-function: ease-out;
  }
  76% {
    transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    transform: rotate(945deg);
    opacity: 0;
  }
}
</style>
