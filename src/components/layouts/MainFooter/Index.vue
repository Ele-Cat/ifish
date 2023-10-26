<template>
  <div class="footer bf">
    <p>&copy; 2023 <a :href="bLink" target="_blank">可樂加冰c</a>. All rights reserved.</p>
    <p class="disclaimers" @click="disclaimersVisible = true">免责声明</p>
    <Disclaimers @close="disclaimersVisible = false" :open="disclaimersVisible" />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
const Disclaimers = defineAsyncComponent(() => import('@/components/common/Disclaimers.vue'));

const bLink = "https://space.bilibili.com/376288070";

const disclaimersVisible = ref(false);
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 32px;
  background-color: var(--theme-bg-color-a8);
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  color: var(--theme-text-color);
  a {
    color: var(--theme-text-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .disclaimers {
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>