<template>
  <div class="footer">
    <p>&copy; 2023 <a :href="bLink" target="_blank">可樂加冰c</a>. All rights reserved.</p>
    <p class="cursor">免责声明</p>
    <Disclaimers />
  </div>
</template>

<script setup>
import Disclaimers from '@/components/common/Disclaimers.vue';

const bLink = "https://space.bilibili.com/376288070"
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 28px;
  // background-color: rgba(255, 255, 255, 0.6);
  background-color: var(--theme-color);
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  color: var(--theme-text-color);
  a {
    color: var(--theme-text-color);
  }
  .cursor {
    margin-left: 10px;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>