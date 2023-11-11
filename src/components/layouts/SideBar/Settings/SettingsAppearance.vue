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
        <a-button type="primary" @click="dialogVisible = true">设定壁纸</a-button>
        <a-image class="wallpaper" :src="useSystemStore.settings.wallpaper.url" alt="" />
      </a-form-item>
    </a-form>
  </div>
  <IDialog title="桌面壁纸设置" :width="800" :visible="dialogVisible" @ok="dialogVisible = false" @cancel="dialogVisible = false">
    <Wallpaper />
  </IDialog>
</template>

<script setup>
import { ref, watch, defineAsyncComponent } from 'vue';
import useStore from "@/store";
const { useSystemStore } = useStore();
const Wallpaper = defineAsyncComponent(() => import('@/components/common/Wallpaper/Index.vue'));

const formState = ref({...useSystemStore.settings});
const labelCol = {
  style: {
    width: '80px',
  },
};
const dialogVisible = ref(false);

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

<style lang="less">
.settings-appearance {
  .ant-image {
    margin-top: 12px;
  }
  .wallpaper {
    border-radius: 8px;
  }
}
</style>