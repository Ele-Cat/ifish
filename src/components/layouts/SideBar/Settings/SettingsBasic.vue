<template>
  <div>
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="网站标题" extra="自定义本站的浏览器标题-摸鱼更安全">
        <a-input v-model:value="formState.title" placeholder="例如：学习网站" @change="handleTitleChange" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useStore from "@/store";
const { useSystemStore } = useStore();

const formState = ref({...useSystemStore.settings});
const labelCol = {
  style: {
    width: '80px',
  },
};

const handleTitleChange = (e) => {
  useSystemStore.changeTitle(e.target.value);
}
</script>

<style lang="less" scoped>

</style>