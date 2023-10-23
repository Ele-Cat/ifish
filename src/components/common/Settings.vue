<template>
  <a-drawer width="80vw" title="系统设置" placement="right" :open="open" @close="close" rootClassName="settings-root">
    <div class="settings-drawer">
    </div>
  </a-drawer>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['close']);

const close = () => {
  emit("close");
}
</script>

<style lang="less" scoped>
.settings-drawer {
}
</style>

<style lang="less">
.settings-root {
  .ant-drawer-content-wrapper {
    max-width: 500px;
  }
}
</style>