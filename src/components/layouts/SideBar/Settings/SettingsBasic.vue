<template>
  <div>
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item>
        <template #label>
          <a-tooltip placement="topLeft">
            <template #title>
              <span>自定义本站的浏览器标题-摸鱼更安全</span>
            </template>
            网站标题
          </a-tooltip>
        </template>
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