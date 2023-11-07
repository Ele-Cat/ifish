<template>
  <div class="nav bf" v-if="true">
    <div class="nav-left">
      <ul>
        <li v-for="(item, index) in navLeft" :class="{active: activeIndex === index}" :key="index" @click="handleClickNavLeft(index)">{{ item }}</li>
      </ul>
    </div>
    <perfect-scrollbar class="scroll-bar">
      <div class="nav-box" v-for="(navs, index) in activeNavs" :key="index">
        <p class="nav-title">{{ navs.title }}</p>
        <ul class="nav-list">
          <li v-for="(nav, sIndex) in navs.nav" :key="sIndex" @click="handleJump(nav)">
            <a-tooltip :title="nav.desc">
              <img v-lazyload="renderIcon(nav.url)" alt="">
              <p>{{ nav.name }}</p>
            </a-tooltip>
          </li>
        </ul>
      </div>
    </perfect-scrollbar>
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
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { renderIco } from "@/utils/utils";

import lists from "@/mock/nav";
import navs from "@/mock/navs";

const navLeft = navs.map(nav => nav.title);
const activeIndex = ref(0);
const activeNavs = computed(() => {
  return navs[activeIndex.value]["nav"];
})

const handleClickNavLeft = (idx) => {
  activeIndex.value = idx;
}

const handleJump = nav => {
  window.open(nav.url, "_blank");
}

const renderIcon = computed(() => (url) => {
  return renderIco(url);
})
</script>

<style lang="less">
.nav {
  background-color: var(--theme-bg-color-a8);
  height: 74vh;
  display: flex;
  // align-items: center;
  // justify-content: center;
  border-radius: 12px;
  padding: 12px;
  .nav-left {
    width: 120px;
    margin-right: 20px;
    text-align: right;
    border-right: 1px solid var(--theme-bg-color-a8);
    // flex: 1;
    ul, li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      position: relative;
      line-height: 2;
      padding-right: 6px;
      cursor: pointer;
      transition: all .3s;
      &.active, &:hover {
        color: var(--primary-color);
        &:after {
          content: "";
          position: absolute;
          top: 5px;
          right: -2px;
          width: 3px;
          height: 23px;
          background-color: var(--primary-color);
        }
      }
    }
  }
  .scroll-bar {
    flex: 1;
    .nav-title {
      margin-top: 10px;
    }
    .nav-list {
      list-style: none;
      padding: 12px 8px;
      margin: 0;
      font-size: 14px;
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0 18px 10px 0;
        transition: all .3s;
        span {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        img {
          height: 18px;
          margin-right: 4px;
          border-radius: 4px;
        }
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}
.navs {
  background-color: var(--theme-bg-color-a8);
  // height: 78vh;
  display: flex;
  // align-items: center;
  // justify-content: center;
  border-radius: 12px;
  padding: 12px;
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
