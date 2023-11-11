<template>
  <div class="wallpaper-setting">
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="遮罩">
        <a-slider :min="0" :max="100" v-model:value="useSystemStore.settings.wallpaper.mask"></a-slider>
      </a-form-item>
      <a-form-item label="模糊">
        <a-slider :min="0" :max="100" v-model:value="useSystemStore.settings.wallpaper.blur"></a-slider>
      </a-form-item>
      <a-form-item label="随机背景源">
        <a-select v-model:value="formState.wallpaper.action" @change="handleWallpaperAction">
          <a-select-option v-for="action in formState.wallpaper.actionList" :key="action.value" :value="action.value">{{action.label}}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useStore from "@/store";
const { useSystemStore } = useStore();
import { toast } from "@/utils/feedback";

const formState = ref({...useSystemStore.settings});
const labelCol = {
  style: {
    width: '88px',
  },
};

const handleWallpaperAction = () => {
  toast({
    content: "修改源成功"
  })
}
</script>

<style lang="less" scoped>
.wallpaper-setting {
  width: 460px;
}
</style>