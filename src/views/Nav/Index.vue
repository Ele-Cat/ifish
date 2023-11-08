<template>
  <div class="navs bf">
    <div class="nav-left">
      <ul>
        <li v-for="(item, index) in navsLeft" :class="{active: activeLeft === index}" :key="index" @click="handleClickNavLeft(index)">{{ item }}</li>
      </ul>
    </div>
    <div class="nav-box">
      <div class="nav-top">
        <perfect-scrollbar>
          <ul>
            <li v-for="(item, index) in navsTop" :class="{active: activeTop === index}" :key="index" @click="handleClickNavTop(index)">{{ item }}</li>
          </ul>
        </perfect-scrollbar>
      </div>
      <perfect-scrollbar class="scroll-bar">
        <div class="nav-box" v-for="(navs, index) in activeNavs" :key="index">
          <p class="nav-title">{{ navs.title }}</p>
          <ul class="nav-list">
            <li v-for="(nav, sIndex) in navs.nav" :key="sIndex" @click="handleJump(nav)">
              <a-tooltip :title="`${nav.name}：${nav.desc}`" placement="topLeft">
                <img v-lazyload="renderIcon(nav.url)" alt="">
                <p>{{ nav.name }}</p>
              </a-tooltip>
            </li>
          </ul>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { renderIco } from "@/utils/utils";
import nav from "@/mock/nav";

const renderIcon = computed(() => (url) => {
  return renderIco(url);
})

const navsLeft = nav.map(nav => nav.title);
const navsTop = computed(() => {
  return nav[activeLeft.value]["nav"].map(nav => nav.title);
})
const activeLeft = ref(0);
const activeTop = ref(0);
const activeNavs = computed(() => {
  return nav[activeLeft.value]["nav"][activeTop.value]["nav"];
})
const handleClickNavLeft = (idx) => {
  activeLeft.value = idx;
  activeTop.value = 0;
}
const handleClickNavTop = (idx) => {
  activeTop.value = idx;
}
const handleJump = nav => {
  window.open(nav.url, "_blank");
}
</script>

<style lang="less">
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.navs {
  background-color: var(--theme-bg-color-a8);
  display: flex;
  // flex-wrap: wrap;
  border-radius: 12px;
  padding: 12px;
  .nav-left {
    width: 120px;
    min-width: 120px;
    margin-right: 20px;
    text-align: right;
    border-right: 1px solid var(--theme-bg-color-a8);
    li {
      position: relative;
      line-height: 2;
      padding-right: 10px;
      cursor: pointer;
      transition: all .3s;
      &.active, &:hover {
        color: var(--primary-color);
        &:after {
          content: "";
          position: absolute;
          top: 4px;
          right: -2px;
          width: 3px;
          height: 25px;
          background-color: var(--primary-color);
        }
      }
    }
  }
  .nav-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    // height: 70vh;
    .nav-top {
      padding-bottom: 12px;
      ul {
        border-bottom: 1px solid var(--theme-bg-color-a8);
        display: flex;
        li {
          margin-right: 12px;
          position: relative;
          line-height: 2.2;
          cursor: pointer;
          white-space: nowrap;
          transition: all .3s;
          &.active, &:hover {
            color: var(--primary-color);
            &:after {
              content: "";
              position: absolute;
              bottom: -1px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: var(--primary-color);
            }
          }
        }
      }
    }
    .scroll-bar {
      height: calc(100vh - 272px);
      .nav-title {
        margin: 10px 0 6px 0;
      }
      .nav-list {
        list-style: none;
        padding: 12px 8px 8px;
        margin: 0;
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
        li {
          margin: 0 18px 10px 0;
          transition: all .3s;
          span {
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
              height: 20px;
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
  }
}
</style>
