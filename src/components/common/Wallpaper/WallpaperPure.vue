<template>
  <div class="wallpaper-pure">
    <div class="pure-top">
      <div
        class="pure-top-item"
        v-for="(item, index) in colorList"
        @click="handleChangeTop(index)"
        :class="{ active: activeTop === index }"
        :key="index"
        :style="{ backgroundColor: `${item.bgColor}` }"
      ></div>
    </div>
    <div class="pure-main">
      <div class="pure-box">
        <div
          class="pure-item"
          v-for="(item, index) in colorList[activeTop]['list']"
          :key="index"
          :style="{
            backgroundImage: `linear-gradient(${useSystemStore.settings.wallpaper.angle}deg, ${item[0]} 15%, ${item[1]} 150%)`,
          }"
          @click="handleSelectPure(item)"
        ></div>
      </div>
      <div class="pure-radius">
        <a-form :model="formState" :label-col="labelCol">
          <a-form-item label="角度">
            <a-slider
              v-model:value="useSystemStore.settings.wallpaper.angle"
              :min="0"
              :max="360"
            />
          </a-form-item>
          <a-form-item label="预览">
            <div
              class="pure-preview"
              v-if="useSystemStore.settings.wallpaper.type === 'pure'"
              :style="{
                backgroundImage: `linear-gradient(${useSystemStore.settings.wallpaper.angle}deg, ${useSystemStore.settings.wallpaper.pure[0]} 15%, ${useSystemStore.settings.wallpaper.pure[1]} 150%)`,
              }"
            ></div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import useStore from "@/store";
const { useSystemStore } = useStore();

const formState = reactive({});
const labelCol = {
  style: {
    width: "48px",
  },
};

const activeTop = ref(0);
const handleChangeTop = (idx) => {
  activeTop.value = idx;
};

const handleSelectPure = (pure) => {
  useSystemStore.settings.wallpaper.pure = pure;
  useSystemStore.settings.wallpaper.type = "pure";
};

const colorList = reactive([
  {
    bgColor: "#FF0000",
    list: [
      ["#e06363", "#3cc761"],
      ["#c73838", "#14b36b"],
      ["#fab6b6", "#daccff"],
      ["#e8a0a0", "#e88994"],
      ["#b82e2e", "#f7e692"],
      ["#870505", "#96fff6"],
      ["#d93b3b", "#aefca7"],
      ["#941515", "#8bba14"],
      ["#f08d8d", "#f0a962"],
    ],
  },
  {
    bgColor: "#FF7D00",
    list: [
      ["#f5cba2", "#fa9025"],
      ["#fcad62", "#69e05a"],
      ["#f5d1b0", "#c9d6ff"],
      ["#ed994a", "#fff4bf"],
      ["#eda45f", "#d62daf"],
      ["#f0c69c", "#ad3717"],
      ["#e8a561", "#cc435c"],
      ["#f5b371", "#ebac8a"],
      ["#ffd5ad", "#f7b7b7"],
    ],
  },
  {
    bgColor: "#FFFF00",
    list: [
      ["#f0f03e", "#b0ffde"],
      ["#fafa1b", "#db078d"],
      ["#c9c910", "#b2fc95"],
      ["#d1d11f", "#b34036"],
      ["#f5f57d", "#216c85"],
      ["#ffff66", "#370773"],
      ["#e8e85d", "#89e8b1"],
      ["#f0f078", "#912211"],
      ["#fcfc8d", "#d45b15"],
    ],
  },
  {
    bgColor: "#00FF00",
    list: [
      ["#5de35d", "#fcecc5"],
      ["#4deb4d", "#d952e3"],
      ["#42d642", "#133470"],
      ["#41d141", "#bf414c"],
      ["#a7faa7", "#df61f2"],
      ["#0b9e0b", "#563cab"],
      ["#3de33d", "#42dbb0"],
      ["#73de73", "#adc229"],
      ["#20e620", "#1fb804"],
    ],
  },
  {
    bgColor: "#0000FF",
    list: [
      ["#8787e0", "#63db83"],
      ["#a9a9e8", "#357a04"],
      ["#4646b3", "#f2d0aa"],
      ["#6e6edb", "#64fac5"],
      ["#1b1bfa", "#a4b825"],
      ["#5d5df0", "#0cfa64"],
      ["#2f2fc2", "#73ffd3"],
      ["#1010b5", "#61d4b3"],
      ["#0b0b75", "#8adb67"],
    ],
  },
  {
    bgColor: "#00FFFF",
    list: [
      ["#4cc7c7", "#7cc924"],
      ["#89e8e8", "#e38874"],
      ["#33a6a6", "#c7b6fc"],
      ["#07dbdb", "#5ff580"],
      ["#02c7c7", "#eb94e6"],
      ["#0dffff", "#a4d435"],
      ["#1bd1d1", "#f0c189"],
      ["#036363", "#e3d356"],
      ["#30cfcf", "#eeb5ff"],
    ],
  },
  {
    bgColor: "#FF00FF",
    list: [
      ["#e342e3", "#bf2bcc"],
      ["#f70af7", "#1c9c93"],
      ["#d606d6", "#7ea9e6"],
      ["#fa82fa", "#22e61c"],
      ["#ffb8ff", "#048f4c"],
      ["#e089e0", "#cafaa0"],
      ["#f08bf0", "#a30d3f"],
      ["#d941d9", "#8c1407"],
      ["#f25af2", "#229c09"],
    ],
  },
]);
</script>

<style lang="less" scoped>
.wallpaper-pure {
  .pure-top {
    display: flex;
    .pure-top-item {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      border-radius: 6px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 1px solid var(--theme-text-color);
      }
    }
  }
  .pure-main {
    display: flex;
    margin-top: 20px;
    .pure-box {
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .pure-item {
        width: 32%;
        height: 80px;
        margin-bottom: 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          box-shadow: 0 6px 10px #666;
        }
      }
    }
    .pure-radius {
      width: 40%;
      margin-left: 20px;
      .pure-preview {
        height: 140px;
        border-radius: 8px;
      }
    }
  }
}
</style>
