<template>
  <img :src="app.icon" alt="" @click.stop="handleClick">
  <a-image :width="200" style="width:0;height:0" :preview="{
    visible: appImageVisible,
    onVisibleChange: setImagePreviewVisible,
  }" :src="app.url" />
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "use",
  },
  app: {
    type: Object,
    default: () => {},
  }
})

const appImageVisible = ref(false);
const handleClick = () => {
  setImagePreviewVisible(true);
}

const setImagePreviewVisible = value => {
  appImageVisible.value = value;
};
</script>

<style lang="less" scoped>
img {
  max-height: 100%;
}
</style>