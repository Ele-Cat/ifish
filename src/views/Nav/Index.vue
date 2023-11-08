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
            <a-tooltip :title="nav.desc" placement="topLeft">
              <img v-lazyload="renderIcon(nav.url)" alt="">
              <p>{{ nav.name }}</p>
            </a-tooltip>
          </li>
        </ul>
      </div>
    </perfect-scrollbar>
  </div>
  <div class="dbs bf" v-else>
    <div class="db-left">
      <ul>
        <li v-for="(item, index) in dbsLeft" :class="{active: activeLeft === index}" :key="index" @click="handleClickDbLeft(index)">{{ item }}</li>
      </ul>
    </div>
    <div class="db-box">
      <div class="db-top">
        <ul>
          <li v-for="(item, index) in dbsTop" :class="{active: activeTop === index}" :key="index" @click="handleClickDbTop(index)">{{ item }}</li>
        </ul>
      </div>
      <perfect-scrollbar class="scroll-bar">
        <div class="nav-box" v-for="(navs, index) in activeDbs" :key="index">
          <p class="nav-title">{{ navs.title }}</p>
          <ul class="nav-list">
            <li v-for="(nav, sIndex) in navs.nav" :key="sIndex" @click="handleJump(nav)">
              <a-tooltip :title="nav.desc" placement="topLeft">
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

import db from "@/mock/db";
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

const dbsLeft = db.map(nav => nav.title);
const dbsTop = computed(() => {
  return db[activeLeft.value]["nav"].map(nav => nav.title);
})
const activeLeft = ref(0);
const activeTop = ref(0);
const activeDbs = computed(() => {
  console.log('activeLeft.value: ', activeLeft.value);
  return db[activeLeft.value]["nav"][activeTop.value]["nav"];
})
const handleClickDbLeft = (idx) => {
  activeLeft.value = idx;
  activeTop.value = 0;
}
const handleClickDbTop = (idx) => {
  activeTop.value = idx;
}
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
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dbs {
  background-color: var(--theme-bg-color-a8);
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  padding: 12px;
  .db-left {
    width: 120px;
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
  .db-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 70vh;
    .db-top {
      padding-bottom: 12px;
      ul {
        border-bottom: 1px solid var(--theme-bg-color-a8);
        display: flex;
        li {
          margin-right: 12px;
          position: relative;
          line-height: 2.2;
          cursor: pointer;
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
      flex: 1;
      height: 50vh;
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
}
</style>
