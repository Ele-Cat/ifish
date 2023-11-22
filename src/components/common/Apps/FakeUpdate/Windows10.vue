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
      <div>
        <a>Working on updates</a> <a>{{ percent }}%</a> <span>complete.</span><br />
        <span>Don't turn off your PC. This will take a while.</span>
      </div>
      <div id="bottom">Your PC will restart several times</div>
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
  background: #006dae;
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 70px;
    width: 500px;
    margin: 0 0 0 -250px;
    font-family: Segoe UI Light, Segoe UI, Arial;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 1.4;
    .loader {
      position: relative;
      width: 50px;
      margin: auto;
      vertical-align: middle;
      top: -66px;
      .circle {
        position: absolute;
        width: 48px;
        height: 48px;
        opacity: 0;
        transform: rotate(225deg);
        animation-iteration-count: infinite;
        animation-name: orbit;
        animation-duration: 5.5s;
        &:after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
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
    #bottom {
      position: fixed;
      bottom: 10%;
      width: 100%;
      left: 0;
      text-align: center;
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
