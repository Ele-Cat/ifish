<template>
  <div>
    <a-form :label-col="labelCol">
      <a-form-item label="网站标题" extra="自定义本站的浏览器标题-摸鱼更安全">
        <a-input v-model:value="useSystemStore.settings.title" placeholder="例如：学习网站" />
      </a-form-item>
      <a-card title="时间控件" size="small" style="margin-top: 12px">
        <a-form-item label="显示时间" class="bottom-0" extra="是否显示主页时间控件">
          <a-switch v-model:checked="useSystemStore.settings.showTime" />
        </a-form-item>
        <a-form-item label="显示日期" class="bottom-0" extra="是否显示时间控件中的日期">
          <a-switch v-model:checked="useSystemStore.settings.showDate" />
        </a-form-item>
        <a-form-item label="显示秒读数" class="bottom-0" extra="是否显示时间控件中的秒读数">
          <a-switch v-model:checked="useSystemStore.settings.showSeconds" />
        </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>

<script setup>
import useStore from "@/store";
const { useSystemStore } = useStore();

const labelCol = {
  style: {
    width: '88px',
  },
};
</script>

<style lang="less" scoped>
.ant-form-item {
  margin-bottom: 12px;
  &.bottom-0 {
    margin-bottom: 0;
  }
}
</style>