<template>
  <div class="search">
    <a-row :gutter="12">
      <a-col :span="20">
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
      <p class="title">
        搜索历史：
        <span class="clear" @click="handleSearchClear"
          ><DeleteOutlined />清空历史搜索</span
        >
      </p>
      <div class="search-history-box">
        <p
          v-for="(item, index) in useMusicStore.searchHistory"
          :key="index"
          @click="handleSearchRes(item)"
        >
          <span class="text" title="点击搜索">{{ item }}</span
          ><CloseOutlined title="点击移除" @click.stop="handleSearchDelete(item)" />
        </p>
      </div>
    </div>
    <div class="search-list">
      <p class="title">搜索结果：</p>
      <a-spin :spinning="searchLoading" tip="加载中...">
        <perfect-scrollbar class="scroll-bar" @ps-scroll-y="onSearchScroll">
          <a-empty v-if="!searchResult.length"></a-empty>
          <ul>
            <li
              v-for="(item, index) in searchResult"
              :key="index"
              @click="handlePlayNow(item, index)"
            >
              <p title="立即播放">{{ item.song }} - {{ item.singers }}</p>
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
import { ref, watch } from "vue";
import {
  SearchOutlined,
  EllipsisOutlined,
  CloseOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import axios from "axios";
import useStore from "@/store";
const { useMusicStore } = useStore();
import { uuid, downloadFile } from "@/utils/utils";

const searchText = ref("");
const searchResult = ref([]);
const searchLoading = ref(false);

const handleSearch = (searchTextValue) => {
  if (useMusicStore.searchHistory.indexOf(searchTextValue) < 0) {
    useMusicStore.searchHistory.unshift(searchTextValue);
  }
  handleSearchRes(searchTextValue);
};

const pageSize = 15;
let pageNo = ref(1);
let noMore = ref(false);
const handleSearchRes = (item) => {
  searchText.value = item;
  searchLoading.value = true;

  const url = `https://api.lolimi.cn/API/qqdg/api.php?msg=${item}&p=${pageNo.value}&sc=${pageSize}`;
  // const url = `https://xiaoapi.cn/API/yy_sq.php?msg=${item}`
  axios.get(url).then((res) => {
    if (res.data.code === 1) {
      searchResult.value = [...searchResult.value, ...res.data.data] || [];
      if (res.data.data.length < pageSize) {
        noMore.value = true;
      }
    } else {
      noMore.value = true;
    }
    searchLoading.value = false;
  });
};

const onSearchScroll = (event) => {
  if (noMore.value) return;
  let el = event.target;
  if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
    pageNo.value++;
    handleSearchRes(searchText.value);
  }
};

const handleSearchClear = () => {
  useMusicStore.searchHistory = [];
};

const handleSearchDelete = (item) => {
  const idx = useMusicStore.searchHistory.indexOf(item);
  useMusicStore.searchHistory.splice(idx, 1);
};

// 立即播放
const handlePlayNow = async (item, idx) => {
  const { cover, name, singer, url, content } = await getMusic(item, idx);
  useMusicStore.musicList.push({
    id: uuid(21),
    cover,
    name,
    singer,
    url,
    content,
  });
  useMusicStore.playMusic(useMusicStore.musicList.length - 1);
};
// 添加到播放列表
const handleAddToList = async (item, idx) => {
  const { cover, name, singer, url, content } = await getMusic(item, idx);
  useMusicStore.musicList.push({
    id: uuid(21),
    cover,
    name,
    singer,
    url,
    content,
  });
};
// 下一首播放
const handlePlayNext = async (item, idx) => {
  const { cover, name, singer, url, content } = await getMusic(item, idx);
  useMusicStore.musicList.splice(useMusicStore.activeIndex + 1, 0, {
    id: uuid(21),
    cover,
    name,
    singer,
    url,
    content,
  });
};
// 下载
const handleDownload = async (item, idx) => {
  const { url } = await getMusic(item, idx);
  url && downloadFile(url);
};
// 获取音乐信息
const getMusic = async (item, idx) => {
  const promise1 = new Promise((resolve, reject) => {
    axios
      .get(`https://xiaoapi.cn/API/yy_sq.php?msg=${item.song}-${item.singer}&n=1`)
      .then((res) => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          resolve({});
        }
      });
  });
  const promise2 = new Promise((resolve, reject) => {
    axios
      .get(`https://api.lolimi.cn/API/kggc/api.php?msg=${item.song}-${item.singer}&n=1`)
      .then((res) => {
        if (res.data.code === 1) {
          resolve(res.data.data);
        } else {
          resolve({});
        }
      });
  });
  const values = await Promise.all([promise1, promise2]);
  return { ...values[0], ...values[1] };
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
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .clear {
        color: var(--grey-6);
        cursor: pointer;
        .anticon {
          margin-right: 4px;
        }
        &:hover {
          color: var(--primary-color);
        }
      }
    }
    .search-history-box {
      display: flex;
      flex-wrap: wrap;
      padding-top: 6px;
      p {
        font-size: 12px;
        line-height: 20px;
        list-style: none;
        display: inline-block;
        height: auto;
        margin-inline-end: 8px;
        padding-inline: 7px;
        white-space: nowrap;
        background: var(--theme-bg-color-a8);
        border: 1px solid #d9d9d9;
        margin-bottom: 4px;
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
        .text {
          cursor: pointer;
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
        &:hover {
          color: var(--primary-color);
        }
      }
      .search-action {
        display: flex;
        align-items: center;
      }
      .anticon {
        margin-left: 20px;
        padding: 0 6px;
        &:hover {
          color: var(--primary-color);
        }
      }
      &:nth-of-type(2n) {
        background-color: var(--theme-bg-color-a8);
      }
      &:hover {
        background-color: var(--theme-bg-color);
      }
    }
  }
  .scroll-bar {
    max-height: 50vh;
    padding: 0 8px;
  }
}
</style>
