<template>
  <div class="footer">
    <p>&copy; 2023 可樂加冰c. All rights reserved.</p>
    <p class="cursor">免责声明</p>
    <!-- <Disclaimers /> -->
  </div>
</template>

<script setup>
import Disclaimers from '@/components/common/Disclaimers.vue';
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 28px;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  .cursor {
    margin-left: 10px;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>