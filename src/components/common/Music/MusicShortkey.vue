<template>
  <div class="music-shortkey">
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="播放、暂停"> Space </a-form-item>
      <a-form-item label="上一首"> {{ useSystemStore.ctrlOrCommand() }} + ← </a-form-item>
      <a-form-item label="下一首"> {{ useSystemStore.ctrlOrCommand() }} + → </a-form-item>
      <a-form-item label="关闭歌词"> Esc </a-form-item>
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
  }
}
</style>
