<template>
  <img class="app-img" :src="app.icon" alt="" @click.stop="handleClick">
  <a-image :preview="{
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

</style>