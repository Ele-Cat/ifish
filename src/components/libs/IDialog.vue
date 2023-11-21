<template>
  <div>
    <a-modal
      ref="modalRef"
      v-model:open="open"
      :width="width"
      :mask="mask"
      :zIndex="zIndex"
      :wrap-style="{overflow: 'hidden'}"
      :wrapClassName="wrapClassName"
      :footer="null"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <slot />
      <template #title>
        <div ref="modalTitleRef" class="modal-title">
          {{ title }}<slot name="titleLink"></slot>
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
  width: { type: [String, Number], default: 520 },
  mask: { type: Boolean, default: true },
  wrapClassName: { type: String, default: "" },
  zIndex: { type: Number, default: 1000 },
})
const emit = defineEmits(["ok", "cancel"])

const open = ref(false);
watch(() => props.visible, newVal => {
  if (newVal) {
    open.value = true;
  }
})
const modalTitleRef = ref(null);
const { x, y, isDragging } = useDraggable(modalTitleRef);
const handleOk = (e) => {
  emit("ok");
};
const handleCancel = () => {
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
.modal-title {
  display: flex;
  align-items: baseline;
  width: 100%; 
  cursor: move;
}
</style>
