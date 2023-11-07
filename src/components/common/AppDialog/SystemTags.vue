<template>
  <div class="system-tags">
    <div class="system-tag" v-for="(nav, idx) in navList" :key="idx" @click="addSystemTag(nav)">
      <a-tooltip :title="nav.desc" placement="topLeft">
        <img v-lazyload="renderIcon(nav.url)" :alt="nav.name">
        <p>{{ nav.name }}</p>
      </a-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import useStore from "@/store";
const { useAppStore } = useStore();
import navs from "@/mock/navs";
import { toast } from "@/utils/feedback";
import { renderIco, uuid } from "@/utils/utils";

const navList = ref([]);
navs.map(nav1 => {
  nav1.nav.map(nav2 => {
    nav2.nav.map(nav3 => {
      navList.value.push(nav3);
    })
  })
})

const renderIcon = computed(() => (url) => {
  return renderIco(url);
})

const addSystemTag = (nav) => {
  useAppStore.lists.push({
    id: uuid(21),
    type: "bookmark",
    title: nav.name,
    url: nav.url,
    icon: renderIco(nav.url),
    description: nav.desc,
    gridSize: [1, 1],
  })
  toast({
    content: "添加成功",
  });
}
</script>

<style lang="less" scoped>
.system-tags {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  .system-tag {
    width: 88px;
    padding: 8px;
    margin: 0 12px 12px 0;
    overflow: hidden;
    border-radius: 12px;
    transition: all .3s ease-in-out;
    cursor: pointer;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        display: block;
        margin: 0 auto;
        width: 66px;
        height: 66px;
        border-radius: 6px;
      }
      p {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px, rgba(255, 255, 255, 0.4) 0px 0px 3px;
      color: var(--primary-color);
    }
  }
}
</style>