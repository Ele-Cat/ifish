<template>
  <div class="search">
    <a-space>
      <a-input v-model:value="searchText" @pressEnter="e => handleSearch(e.target.value)" placeholder="输入歌曲、歌手" allowClear>
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
      <a-button type="primary" @click="handleSearch(searchText)">搜索</a-button>
    </a-space>
    <div class="search-history" v-if="useMusicStore.searchHistory.length">
      <p class="title">搜索历史：</p>
      <a-tag closable @click="handleSearchRes(item)" @close="handleSearchDel(item)" v-for="(item, index) in useMusicStore.searchHistory" :key="index">{{item}}</a-tag>
    </div>
    <div class="search-list">
      <p class="title">搜索结果：</p>
      <a-spin :spinning="searchLoading" tip="加载中...">
        <perfect-scrollbar class="scroll-bar">
          <ul>
            <li v-for="(item, index) in searchResult" :key="index" @click="handleAddMusic(item, index)">
              <p>
                {{ item.name }} - {{ item.singer }}
              </p>
              <a-dropdown placement="bottomLeft" arrow>
                <EllipsisOutlined />
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a href="javascript:;" @click="handleAddToList">添加到播放列表</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;" @click="handlePlayNow">立即播放</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;" @click="handlePlayNext">下一首播放</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;" @click="handleDownload">下载</a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </li>
          </ul>
        </perfect-scrollbar>
      </a-spin>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SearchOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import axios from "axios";
import useStore from '@/store';
const { useMusicStore } = useStore();

const searchText = ref("");
const searchResult = ref([]);
const searchLoading = ref(false);

const handleSearch = (searchTextValue) => {
  // if (useMusicStore.searchHistory.indexOf(searchTextValue) < 0) {
  //   useMusicStore.searchHistory.unshift(searchTextValue);
  // }
  handleSearchRes(searchTextValue)
}

const handleSearchRes = (item) => {
  searchLoading.value = true;
  axios.get(`https://xiaoapi.cn/API/yy_sq.php?msg=${item}`).then(res => {
    searchResult.value = res.data.list || [];
    searchLoading.value = false;
  })
}

const handleSearchDel = (item) => {
  useMusicStore.searchHistory.splice(useMusicStore.searchHistory.indexOf(item), 1)
}

const handleAddMusic = (item, idx) => {
  console.log(item, idx);
}
</script>

<style lang="less" scoped>
.search {
  margin-top: 12px;
  .search-history, .search-list {
    margin-top: 12px;
    padding: 2px;
    .title {
      margin-bottom: 4px;
    }
    ul, li {
      list-style: none;
      padding: 0;
    }
    li {
      display: flex;
      transition: all .3s;
      p {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        padding: 8px 6px;
      }
      .anticon {
        margin-left: 20px;
        padding: 8px 6px;
      }
      &:nth-of-type(2n) {
        background-color: var(--theme-bg-color-a8);
      }
      &:hover {
        background-color: var(--theme-bg-color);
        color: var(--primary-color);
      }
    }
  }
  .scroll-bar {
    max-height: 50vh;
    padding: 0 8px;
  }
}
</style>