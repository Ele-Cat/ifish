<template>
  <div>
    <a-modal
      ref="modalRef"
      v-model:open="open"
      :wrap-style="{overflow: 'hidden'}"
      :footer="null"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <template #title>
        <div ref="modalTitleRef" style="width: 100%; cursor: move">
          {{ title }}
        </div>
      </template>
      <template #modalRender="{ originVNode }">
        <div :style="transformStyle">
          <component :is="originVNode" />
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from "vue";
import { useDraggable } from "@vueuse/core";

const props = defineProps({
  visible: { type: Boolean, default: false },
  title: { type: String, default: "标题" },
})
const emit = defineEmits(["ok", "cancel"])

const open = ref(false);
watch(() => props.visible, newVal => {
  console.log('newVal: ', newVal);
  if (newVal) {
    open.value = true;
  }
})
const modalTitleRef = ref(null);
const { x, y, isDragging } = useDraggable(modalTitleRef);
const handleOk = (e) => {
  open.value = false;
  emit("ok");
};
const handleCancel = () => {
  console.log(123);
  open.value = false;
  emit("cancel");
};

const startX = ref(0);
const startY = ref(0);
const startedDrag = ref(false);
const transformX = ref(0);
const transformY = ref(0);
const preTransformX = ref(0);
const preTransformY = ref(0);
const dragRect = ref({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
});
watch([x, y], () => {
  if (!startedDrag.value) {
    startX.value = x.value;
    startY.value = y.value;
    const bodyRect = document.body.getBoundingClientRect();
    const titleRect = modalTitleRef.value.getBoundingClientRect();
    dragRect.value.right = bodyRect.width - titleRect.width;
    dragRect.value.bottom = bodyRect.height - titleRect.height;
    preTransformX.value = transformX.value;
    preTransformY.value = transformY.value;
  }
  startedDrag.value = true;
});
watch(isDragging, () => {
  if (!isDragging) {
    startedDrag.value = false;
  }
});
watchEffect(() => {
  if (startedDrag.value) {
    transformX.value =
      preTransformX.value +
      Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) -
      startX.value;
    transformY.value =
      preTransformY.value +
      Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) -
      startY.value;
  }
});
const transformStyle = computed(() => {
  return {
    transform: `translate(${transformX.value}px, ${transformY.value}px)`,
  };
});
</script>

<style lang="less">
.ant-modal {
  .ant-modal-content {
    background-color: var(--theme-bg-color-a8);
    color: var(--theme-text-color);
  }
  .ant-modal-header {
    background-color: transparent;
  }
  .ant-modal-title {
    color: var(--theme-text-color);
  }
  .ant-modal-close {
    color: var(--theme-text-color);
    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
