<template>
  <div class="music-shortkey">
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="播放/暂停"> <span>Space</span> </a-form-item>
      <a-form-item label="上一首">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span>←</span>
      </a-form-item>
      <a-form-item label="下一首">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span>→</span>
      </a-form-item>
      <a-form-item label="增加音量">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span>↑</span>
      </a-form-item>
      <a-form-item label="降低音量">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span>↓</span>
      </a-form-item>
      <a-form-item label="打开搜索">
        <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span>K</span>
      </a-form-item>
      <a-form-item label="关闭歌词"> <span>Esc</span> </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import useStore from "@/store";
const { useSystemStore } = useStore();

const formState = reactive({});
const labelCol = {
  style: {
    width: "100px",
  },
};
</script>

<style lang="less" scoped>
.music-shortkey {
  padding: 20px 0 0;
  color: red;
  .ant-form-item {
    color: var(--theme-text-color);
    margin-bottom: 8px;
    span {
      // background-color: var(--bg);
      border: 1px solid var(--theme-text-color);
      padding: 0 6px;
      height: 20px;
      border-radius: 3px;
      box-shadow: 0 1px var(--theme-text-color);
    }
  }
}
</style>
