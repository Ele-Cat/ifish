<template>
  <Teleport to="body">
    <div class="i-drawer" :class="{show: open}">
      <div class="i-drawer-mask" @click="closeDrawer"></div>
      <div class="i-drawer-content-wrapper" :style="{width: '40vw'}">
        <div class="i-drawer-header">
          <div class="i-drawer-title">{{ title }}</div>
          <i class="ifishfont ifish-close" @click="closeDrawer"></i>
        </div>
        <perfect-scrollbar class="config-chat">
          <div class="i-drawer-body">
            <slot />
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  open: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(["close"]);
const closeDrawer = () => {
  emit("close");
}
</script>

<style lang="less" scoped>
.i-drawer {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: none;
  &.show {
    display: block;
  }
  .i-drawer-mask {
    position: absolute;
    inset: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.45);
    transition: all .3s;
  }
  .i-drawer-content-wrapper {
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: -6px 0 16px 0 rgb(0 0 0 / 8%), -3px 0 6px -4px rgb(0 0 0 / 12%), -9px 0 28px 8px rgb(0 0 0 / 5%);
    position: absolute;
    z-index: 1000;
    transition: all 0.3s;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    background-color: var(--theme-bg-color);
    color: var(--theme-text-color);
    transition: all .3s;
    .i-drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      font-size: 16px;
      line-height: 1.5;
      border-bottom: 1px solid var(--grey-4);
      .i-drawer-title {
        flex: 1;
        margin-right: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ifish-close {
        cursor: pointer;
        &:hover {
          color: var(--grey-9);
          transform: rotate(90deg);
        }
      }
    }
    .i-drawer-body {
      flex: 1;
      padding: 24px 16px 24px 24px;
      font-size: 14px;
    }
  }
}
</style>