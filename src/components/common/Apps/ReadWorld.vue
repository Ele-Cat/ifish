<template>
  <img class="app-img" :src="app.icon" alt="" @click.stop="handleClick" />
  <a-image
    :preview="{
      visible: appImageVisible,
      onVisibleChange: setImagePreviewVisible,
    }"
    :src="imgUrl"
  />
  <img :src="imgUrl" v-show="false" alt="" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';

const props = defineProps({
  app: {
    type: Object,
    default: () => {},
  },
});

const imgUrl = ref("");
const appImageVisible = ref(false);
onMounted(() => {
  axios.get('http://dwz.2xb.cn/zaob').then(res => {
    const { imageUrl } = res.data;
    imgUrl.value = imageUrl;
  })
})
const handleClick = () => {
  setImagePreviewVisible(true);
};

const setImagePreviewVisible = (value) => {
  appImageVisible.value = value;
};
</script>

<style lang="less" scoped></style>
