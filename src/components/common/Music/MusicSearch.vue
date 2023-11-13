<template>
  <div class="search">
    <a-row :gutter="10">
      <a-col :span="21">
        <a-input
          v-model:value="searchText"
          @pressEnter="(e) => handleSearch(e.target.value)"
          placeholder="输入歌曲、歌手"
          allowClear
          style="border-radius: 16px"
        >
          <template #prefix>
            <SearchOutlined />
          </template>
        </a-input>
      </a-col>
      <a-col :span="3">
        <a-button type="primary" shape="round" @click="handleSearch(searchText)"
          >搜索</a-button
        >
      </a-col>
    </a-row>
    <div class="search-history" v-if="useMusicStore.searchHistory.length">
      <p class="title">搜索历史：</p>
      <div class="search-history-box">
        <p
          v-for="(item, index) in useMusicStore.searchHistory"
          :key="index"
          @click="handleSearchRes(item)"
        >
          {{ item }}<CloseOutlined @click.stop="handleSearchDel(item)" />
        </p>
      </div>
    </div>
    <div class="search-list">
      <p class="title">搜索结果：</p>
      <a-spin :spinning="searchLoading" tip="加载中...">
        <perfect-scrollbar class="scroll-bar">
          <a-empty v-if="searchResult.length === 0"></a-empty>
          <ul>
            <li
              v-for="(item, index) in searchResult"
              :key="index"
              @click="handlePlayNow(item, index)"
            >
              <p>{{ item.name }} - {{ item.singer }}</p>
              <div class="search-action">
                <a-dropdown placement="bottomLeft" arrow>
                  <EllipsisOutlined />
                  <template #overlay>
                    <a-menu>
                      <a-menu-item>
                        <a href="javascript:;" @click="handleAddToList(item, index)"
                          >添加到播放列表</a
                        >
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;" @click="handlePlayNow(item, index)"
                          >立即播放</a
                        >
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;" @click="handlePlayNext(item, index)"
                          >下一首播放</a
                        >
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;" @click="handleDownload(item, index)"
                          >下载</a
                        >
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
            </li>
          </ul>
        </perfect-scrollbar>
      </a-spin>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SearchOutlined, EllipsisOutlined, CloseOutlined } from "@ant-design/icons-vue";
import axios from "axios";
import useStore from "@/store";
const { useMusicStore } = useStore();
import { downloadFile } from "@/utils/utils";

const searchText = ref("");
const searchResult = ref([]);
const searchLoading = ref(false);

const handleSearch = (searchTextValue) => {
  if (useMusicStore.searchHistory.indexOf(searchTextValue) < 0) {
    useMusicStore.searchHistory.unshift(searchTextValue);
  }
  handleSearchRes(searchTextValue);
};

const handleSearchRes = (item) => {
  searchText.value = item;
  searchLoading.value = true;
  axios.get(`https://xiaoapi.cn/API/yy_sq.php?msg=${item}`).then((res) => {
    searchResult.value = res.data.list || [];
    searchLoading.value = false;
  });
};

const handleSearchDel = (item) => {
  const idx = useMusicStore.searchHistory.indexOf(item);
  console.log("idx: ", idx);
  useMusicStore.searchHistory.splice(idx, 1);
};

// 立即播放
const handlePlayNow = async (item, idx) => {
  const { cover, name, singer, url } = await getMusic(item, idx);
  useMusicStore.musicList.push({
    cover,
    name,
    singer,
    url,
  });
  useMusicStore.playMusic(useMusicStore.musicList.length - 1);
};
// 添加到播放列表
const handleAddToList = async (item, idx) => {
  const { cover, name, singer, url } = await getMusic(item, idx);
  useMusicStore.musicList.push({
    cover,
    name,
    singer,
    url,
  });
};
// 下一首播放
const handlePlayNext = async (item, idx) => {
  const { cover, name, singer, url } = await getMusic(item, idx);
  useMusicStore.musicList.splice(useMusicStore.activeIndex, 0, {
    cover,
    name,
    singer,
    url,
  });
};
// 下载
const handleDownload = async (item, idx) => {
  const { url } = await getMusic(item, idx);
  downloadFile(url);
};
// 获取音乐信息
const getMusic = async (item, idx) => {
  const { data } = await axios.get(
    `https://xiaoapi.cn/API/yy_sq.php?msg=${item.name}&n=${idx + 1}`
  );
  return data;
};
</script>

<style lang="less" scoped>
.search {
  margin-top: 12px;
  .search-history,
  .search-list {
    margin-top: 12px;
    padding: 2px;
    .title {
      margin-bottom: 4px;
    }
    .search-history-box {
      display: flex;
      p {
        font-size: 12px;
        line-height: 20px;
        list-style: none;
        display: inline-block;
        height: auto;
        margin-inline-end: 8px;
        padding-inline: 7px;
        white-space: nowrap;
        background: rgba(0, 0, 0, 0.02);
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        opacity: 1;
        transition: all 0.2s;
        .anticon {
          margin-inline-start: 3px;
          font-size: 10px;
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
    ul,
    li {
      list-style: none;
      padding: 0;
    }
    li {
      display: flex;
      transition: all 0.3s;
      p {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        padding: 8px 6px;
      }
      .search-action {
        display: flex;
        align-items: center;
      }
      .anticon {
        margin-left: 20px;
        padding: 0 6px;
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
