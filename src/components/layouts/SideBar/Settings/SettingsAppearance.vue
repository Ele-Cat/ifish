<template>
  <div>
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="暗黑模式">
        <a-switch v-model:checked="formState.darkMode" @change="handleModeChange" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useStore from "@/store";
const { useSystemStore } = useStore();

const formState = ref({...useSystemStore.settings});
const labelCol = {
  style: {
    width: '80px',
  },
};

watch(() => useSystemStore.settings.darkMode, (newVal) => {
  formState.value.darkMode = newVal;
}, {
  immediate: true,
  deep: true,
})
const handleModeChange = () => {
  useSystemStore.changeMode();
}
</script>

<style lang="less" scoped>

</style>