<template>
  <canvas ref="matrix" id="matrix" @click="changeMode"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from "vue";

let strs = [
  "01",
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわゐうゑをん",
];
let strIndex = 0;
let timer = null;

onMounted(() => {
  matrixRender();
})

const matrixRender = () => {
  let canvas = document.getElementById("matrix");
  let context = canvas.getContext("2d");
  let W = window.outerWidth;
  let H = window.outerHeight;
  canvas.width = W;
  canvas.height = H;
  let fontSize = 16;
  let colunms = Math.floor(W / fontSize);
  let drops = [];
  for (let i = 0; i < colunms; i++) {
    drops.push(0);
  }
  let str = strs[strIndex];
  function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.font = fontSize + "px 微软雅黑";
    context.fillStyle = "#0f0";
    for (let i = 0; i < colunms; i++) {
      let index = Math.floor(Math.random() * str.length);
      let x = i * fontSize;
      let y = drops[i] * fontSize;
      context.fillText(str[index], x, y);
      if (y >= canvas.height && Math.random() > 0.92) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  draw();
  timer = setInterval(draw, 33);
}

const changeMode = () => {
  clearInterval(timer);
  strIndex++;
  if (strIndex >= strs.length) {
    strIndex = 0;
  }
  matrixRender();
}
</script>

<style lang="less" scoped>
#matrix {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999;
  cursor: url(https://hellokit.com.cn/fakeupdate/assets/img/gQyFbtU.png), auto;
  background: #000000;
}
</style>