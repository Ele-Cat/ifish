<template>
  <img class="app-img" :src="app.icon" alt="" @click.stop="dialogVisible = true" />

  <IDialog
    title="聚合GPT"
    :width="1680"
    :visible="dialogVisible"
    :zIndex="10010"
    centered
    wrapClassName="game-dialog"
    @cancel="dialogVisible = false"
  >
    <a-spin :spinning="false" tip="加载中，请耐心等待...">
      <iframe
        ref="iframeRef"
        src="https://ele-cat.gitee.io/comp-gpt/"
        :style="{
          height: 'calc(100vh - 60px)',
        }"
        frameborder="0"
      ></iframe>
    </a-spin>
  </IDialog>
</template>

<script setup>
import { ref } from "vue";

const dialogVisible = ref(false);
const props = defineProps({
  type: {
    type: String,
    default: "use",
  },
  app: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="less" scoped></style>
