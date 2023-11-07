<template>
  <div class="nav bf" v-if="true">
    开发中...
  </div>
  <div class="navs bf" v-else>
    <div class="nav-box">
      <div v-for="leftNavs in lists" :key="leftNavs.title" style="border-bottom:1px solid red;">
        {{ leftNavs.title }} - 
        <div v-for="topNavs in leftNavs.nav" :key="topNavs.title" style="margin-bottom:40px;">
          {{ leftNavs.title }} - {{ topNavs.title }}
          <div v-for="navs in topNavs.nav" :key="navs.title" style="margin-bottom:10px;">
            {{ leftNavs.title }} - {{ topNavs.title }} - {{ navs.title }}
            <div style="display:flex;flex-wrap:wrap;align-items:center;">
              <a :href="nav.url" target="_blank" v-for="nav in navs.nav" :key="nav.title" style="display:flex;flex-wrap:wrap;align-items:center;">
                <!-- <img v-lazyload="renderIcon(nav.url)" style="height:20px;" alt=""> -->
                {{ nav.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-box">
      <div v-for="leftNavs in navs" :key="leftNavs.title" style="border-bottom:1px solid red;">
        <br />
        {{ leftNavs.title }} - <br /><br />
        <div v-for="navs in leftNavs.nav" :key="navs.title" style="margin-bottom:20px;">
          {{ leftNavs.title }} - {{ navs.title }}
          <div style="display:flex;flex-wrap:wrap;align-items:center;">
            <a :href="nav.url" target="_blank" v-for="nav in navs.nav" :key="nav.title" style="display:flex;flex-wrap:wrap;align-items:center;">
              <!-- <img v-lazyload="renderIcon(nav.url)" style="height:20px;" alt=""> -->
              {{ nav.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useStore from "@/store";
const { useNavStore } = useStore();
console.log('useNavStore: ', useNavStore.lists);

import lists from "@/mock/nav";
import navs from "@/mock/navs";

const renderIcon = computed(() => (url) => {
  // https://api.vvhan.com/api/ico?url=www.vvhan.com
  const apiUrl = "https://api.vvhan.com/api/ico?url=";
  return apiUrl + url.replace(/^https?:\/\//i, '');
})
</script>

<style lang="less">
.nav {
  background-color: var(--theme-bg-color-a8);
  height: 74vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
.navs {
  background-color: var(--theme-bg-color-a8);
  // height: 78vh;
  display: flex;
  // align-items: center;
  // justify-content: center;
  border-radius: 12px;
  padding: 12px;
  .nav-box {
    width: 50%;
  }
  a {
    color: var(--theme-text-color);
    margin-right: 20px;
    text-decoration: none;
    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }
}
</style>
