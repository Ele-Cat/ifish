<template>
  <div class="nav bf">
    <!-- https://api.vvhan.com/api/ico?url=www.vvhan.com -->
    <div v-for="leftNavs in useNavStore.lists" :key="leftNavs.title">
      {{ leftNavs.title }} - 
      <div v-for="topNavs in leftNavs.nav" :key="topNavs.title">
        {{ topNavs.title }}
        <div v-for="navs in topNavs.nav" :key="navs.title">
          {{ navs.title }}
          <div style="display:flex;">
            <div v-for="nav in navs.nav" :key="nav.title">
              {{ nav.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useStore from "@/store";
const { useNavStore } = useStore();
console.log('useNavStore: ', useNavStore.lists);

</script>

<style lang="less">
.nav {
  background-color: var(--theme-bg-color-a8);
  height: 78vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  border-radius: 12px;
  padding: 12px;
}
</style>
