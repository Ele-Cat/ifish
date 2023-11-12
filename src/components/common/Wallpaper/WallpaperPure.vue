<template>
  <div class="wallpaper-pure">
    <div class="pure-top">
      <div class="pure-top-item" v-for="(item, index) in colorList" @click="handleChangeTop(index)" :class="{active: activeTop === index}" :key="index" :style="{backgroundColor: `${item.bgColor}`}"></div>
    </div>
    <div class="pure-main">
      <div class="pure-box">
        <div v-for="(item, index) in colorList[activeTop]['list']" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="pure-radius">
        预览
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const activeTop = ref(0);
const handleChangeTop = (idx) => {
  activeTop.value = idx;
}

const colorList = reactive([
  {
    bgColor: "rgb(255, 0, 0)",
    list: [
      ["#ed7e7e", "#1c889c"],
      ["#e84848", "#e87b8a"],
      ["#ffbfbf", "#bf7632"],
      ["#ffbfbf", "#5054bf"],
      ["#ed6868", "#cf5b68"],
      ["#f50f0f", "#38c230"],
      ["#ed6666", "#038f67"],
      ["#ffc2c2", "#bb63e0"],
      ["#f57676", "#c0de68"],
    ]
  },
  {
    bgColor: "rgb(255, 125, 0)",
    list: [],
  },
  {
    bgColor: "rgb(255, 255, 0)",
    list: [],
  },
  {
    bgColor: "rgb(0, 255, 0)",
    list: [],
  },
  {
    bgColor: "rgb(0, 0, 255)",
    list: [],
  },
  {
    bgColor: "rgb(0, 255, 255)",
    list: [],
  },
  {
    bgColor: "rgb(255, 0, 255)",
    list: [],
  },
])
</script>

<style lang="less" scoped>
.wallpaper-pure {
  .pure-top {
    display: flex;
    .pure-top-item {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      border-radius: 8px;
      cursor: pointer;
      &:hover, &.active {
        border: 1px solid #FFF;
      }
    }
  }
  .pure-main {
    display: flex;
    margin-top: 20px;
    .pure-box {
      flex: 1;
    }
  }
}
</style>