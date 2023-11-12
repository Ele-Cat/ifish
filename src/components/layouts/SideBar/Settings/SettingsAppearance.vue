<template>
  <div class="settings-appearance">
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="暗黑模式" extra="切换键：Ctrl + Q">
        <a-switch v-model:checked="formState.darkMode" @change="handleModeChange" />
      </a-form-item>
      <a-form-item label="主页圆角">
        <a-row :gutter="20">
          <a-col :span="18">
            <a-slider :min="0" :max="50" v-model:value="useSystemStore.settings.appRadius"></a-slider>
          </a-col>
          <a-col :span="6">
            <a-input-number v-model:value="useSystemStore.settings.appRadius" :min="1" :max="50" />
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="桌面壁纸">
        <a-button type="primary" @click="handleSetWallpaper">设定壁纸</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, watch, defineAsyncComponent } from 'vue';
import eventBus from '@/utils/eventBus';
import useStore from "@/store";
const { useSystemStore } = useStore();
const Wallpaper = defineAsyncComponent(() => import('@/components/common/Wallpaper/Index.vue'));

const formState = ref({...useSystemStore.settings});
const labelCol = {
  style: {
    width: '88px',
  },
};
const dialogVisible = ref(false);

watch(() => useSystemStore.settings.darkMode, (newVal) => {
  formState.value.darkMode = newVal;
}, {
  immediate: true,
})
const handleModeChange = () => {
  useSystemStore.changeMode();
}

const handleSetWallpaper = () => {
  eventBus.emit("closeSettings");
  eventBus.emit('openBgSettings');
}
</script>

<style lang="less">
.settings-appearance {
  .ant-image {
    margin-top: 12px;
  }
}
</style>