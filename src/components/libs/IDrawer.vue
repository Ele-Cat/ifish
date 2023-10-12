<template>
  <div class="i-drawer">
    <div class="i-drawer-mask"></div>
    <div class="i-drawer-content-wrapper" :style="{width: '40vw'}">
      <div class="i-drawer-header">
        <div class="i-drawer-title">标题</div>
      </div>
      <div class="i-drawer-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.i-drawer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  .i-drawer-mask {
    position: absolute;
    inset: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.45);
    pointer-events: auto;
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
    .i-drawer-header {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      font-size: 16px;
      line-height: 1.5;
      border-bottom: 1px solid rgba(5, 5, 5, 0.06);
    }
    .i-drawer-body {
      flex: 1;
      padding: 24px;
      overflow: auto;
      font-size: 14px;
    }
  }
}
</style>