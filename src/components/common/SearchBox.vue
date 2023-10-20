<template>
  <div class="search-box">
    <div class="bg-blur" v-if="inputFocus"></div>
    <a-input class="search" v-model:value="searchContent" placeholder="请输入搜索内容" @focus="inputFocus = true" @blur="inputFocus = false" @pressEnter="handleSearch">
      <template #addonBefore>
        <a-tooltip title="点击切换搜索源" :color="useSystemStore.darkMode ? 'black' : 'white'">
          <img :src="searchType.icon" alt="" @click="handleShowSearchTypes">
        </a-tooltip>
      </template>
      <template #suffix>
        <SearchOutlined @click="handleSearch" :style="{fontSize:'18px'}" />
      </template>
    </a-input>
    <div ref="searchTypeRef" class="search-types bf" v-show="searchTypeVisible">
      <div class="search-type" :class="{active: searchType.value === item.value}" v-for="item in searchTypes" :key="item.value" @click="handleSelectSearchType(item)">
        <img :src="item.icon" alt="">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { SearchOutlined } from '@ant-design/icons-vue';
import useStore from "@/store";
const { useSystemStore } = useStore();

const searchTypes = reactive([
  {
    label: "百度",
    value: "https://www.baidu.com",
    icon: "/images/icons/baidu.png",
  },
  {
    label: "谷歌",
    value: "https://www.google.com",
    icon: "/images/icons/guge.png",
  },
  {
    label: "必应",
    value: "https://cn.bing.com",
    icon: "/images/icons/bing.png",
  },
  {
    label: "知乎",
    value: "https://www.zhihu.com",
    icon: "/images/icons/zhihu.png",
  },
  {
    label: "掘金",
    value: "https://juejin.cn",
    icon: "/images/icons/juejin.png",
  },
  {
    label: "博客园",
    value: "https://zzk.cnblogs.com",
    icon: "/images/icons/bokeyuan.png",
  },
  {
    label: "CSDN",
    value: "https://so.csdn.net/so",
    icon: "/images/icons/csdn.png",
  },
  {
    label: "GitHub",
    value: "https://github.com",
    icon: "/images/icons/github.png",
  },
  {
    label: "Gitee",
    value: "https://search.gitee.com",
    icon: "/images/icons/gitee.png",
  },
  {
    label: "Bilibili",
    value: "https://search.bilibili.com/all",
    icon: "/images/icons/bilibili.png",
  },
])
const searchTypeRef = ref(null)
const searchTypeVisible = ref(false);
const searchType = ref(useSystemStore.searchType || searchTypes[0]);
const searchContent = ref('');
const inputFocus = ref(false);
onClickOutside(searchTypeRef, () => {
  searchTypeVisible.value = false;
})
const handleShowSearchTypes = () => {
  searchTypeVisible.value = true;
}
const handleSelectSearchType = (item) => {
  searchType.value = item;
  searchTypeVisible.value = false;
  useSystemStore.searchType = item;
}

const handleSearch = () => {
  const searchUrl = searchType.value.value;
  if (!searchContent.value) {
    window.open(searchUrl, "_blank");
  } else {
    let searchQuery = "/s?wd=";
    if (["https://www.google.com", "https://www.zhihu.com", "https://so.csdn.net/so", "https://cn.bing.com", "https://github.com"].indexOf(searchUrl) >= 0) {
      searchQuery = "/search?q=";
    } else if (["https://juejin.cn"].indexOf(searchUrl) >= 0) {
      searchQuery = "/search?query=";
    } else if (["https://zzk.cnblogs.com"].indexOf(searchUrl) >= 0) {
      searchQuery = "/s?w=";
    } else if (["https://search.gitee.com"].indexOf(searchUrl) >= 0) {
      searchQuery = "/?q=";
    } else if (["https://search.bilibili.com/all"].indexOf(searchUrl) >= 0) {
      searchQuery = "/?keyword=";
    }
    window.open(`${searchUrl}${searchQuery}${searchContent.value}`, "_blank");
    searchContent.value = "";
  }
}
</script>

<style lang="less" scoped>
.search-box {
  position: relative;
  display: flex;
  justify-content: center;
  .bg-blur {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(6px);
    transition: all .6s;
  }
  .search {
    width: 60%;
    min-width: 320px;
    :deep(.ant-input-group) .ant-input-group-addon:first-child {
      height: 36px;
      border: none;
      background-color: var(--grey-1-a5);
      border-radius: 36px;
    }
    :deep(.ant-input-affix-wrapper) {
      border: none;
      height: 36px;
      border-radius: 32px;
      color: var(--theme-text-color);
      background-color: var(--grey-1-a5);
      .ant-input {
        background-color: transparent;
        color: var(--theme-text-color);
        &::placeholder {
          color: var(--grey-6);
        }
      }
    }
    img{
      width: 24px;
      border-radius: 50%;
      filter: brightness(1);
      cursor: pointer;
    }
  }
  .search-types {
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    position: absolute;
    width: 56%;
    min-width: 300px;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
    background-color: var(--theme-bg-color-a8);
    border-radius: 8px;
    padding: 12px;
    .search-type {
      display: flex;
      align-items: center;
      padding: 6px 8px;
      border-radius: 40px;
      margin: 2px 4px;
      background-color: var(--theme-bg-color);
      font-size: 14px;
      cursor: pointer;
      img {
        width: 18px;
        border-radius: 50%;
        margin-right: 4px;
        filter: brightness(120%);
        // background-color: var(--theme-text-color);
      }
      &:hover, &.active {
        color: var(--primary-color);
      }
    }
  }
}
</style>