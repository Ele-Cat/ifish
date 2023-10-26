<template>
  <a-drawer width="80vw" title="播放列表" placement="right" :open="open" @close="close" rootClassName="disclaimers-root">
    <div class="music-list">
      播放列表
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
.music-list {
}
</style>

<style lang="less">
.disclaimers-root {
  .ant-drawer-content-wrapper {
    max-width: 500px;
  }
}
</style>