<template>
  <a-drawer
    width="360px"
    title="播放列表"
    placement="right"
    :open="open"
    @close="close"
    rootClassName="disclaimers-root"
  >
    <div class="music-box">
      <a-input
        @click="handleShowSearch"
        readonly
        placeholder="搜索"
        style="border-radius: 20px"
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>

      <div>
        <p class="title">
          <span
            ><UnorderedListOutlined />播放列表（共
            {{ useMusicStore.musicList.length }} 首）</span
          >
          <a-popconfirm title="确认清空列表？" @confirm="handleClearList">
            <span><DeleteOutlined />清空列表</span>
          </a-popconfirm>
        </p>
        <a-empty
          v-if="!useMusicStore.musicList.length"
          description="暂无歌曲，请搜索添加"
        ></a-empty>
        <perfect-scrollbar class="scroll-bar">
          <div class="music-list">
            <div
              class="music-item"
              v-for="(item, index) in useMusicStore.musicList"
              :key="index"
              :class="{ active: useMusicStore.activeIndex === index }"
              @click="handlePlayNow(index)"
            >
              <div class="music-cover">
                <img :src="item.cover" onerror="this.src='./images/music.png'" alt="" />
              </div>
              <div class="music-info">
                <p>{{ item.name }}</p>
                <span>{{ item.singer }}</span>
              </div>
              <div class="music-action" @click.stop>
                <a-dropdown placement="bottomLeft" arrow>
                  <EllipsisOutlined />
                  <template #overlay>
                    <a-menu>
                      <a-menu-item>
                        <a href="javascript:;" @click="handlePlayNow(index)">播放</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;" @click="handleRemove(index)">移除</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;" @click="handleDownload(item)">下载</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </a-drawer>
</template>

<script setup>
import { ref } from "vue";
import {
  SearchOutlined,
  UnorderedListOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import useStore from "@/store";
const { useMusicStore } = useStore();
import { downloadFile } from "@/utils/utils";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close", "showSearch"]);

const close = () => {
  emit("close");
};

const handleShowSearch = () => {
  emit("showSearch");
};

const handleClearList = () => {
  useMusicStore.musicList = [];
};

// 立即播放
const handlePlayNow = (idx) => {
  useMusicStore.playMusic(idx);
};
// 移除
const handleRemove = (idx) => {
  if (idx < useMusicStore.activeIndex) {
    useMusicStore.musicList.splice(idx, 1);
    useMusicStore.activeIndex--;
  } else if (idx === useMusicStore.activeIndex) {
    useMusicStore.settings.currentTime = 0;
    if (useMusicStore.activeIndex === useMusicStore.musicList.length - 1) {
      useMusicStore.activeIndex = 0;
    }
    useMusicStore.activeIndex++;
    useMusicStore.activeIndex--;
    useMusicStore.musicList.splice(idx, 1);
  } else {
    useMusicStore.musicList.splice(idx, 1);
  }
};
// 下载
const handleDownload = (item) => {
  downloadFile(item.url);
};
</script>

<style lang="less" scoped>
.music-box {
  padding-bottom: 40px;
  .search-box,
  .ant-input {
    cursor: pointer;
  }
  .title {
    padding: 12px 8px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    .anticon {
      margin: 2px 4px 0 0;
    }
    span {
      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  .scroll-bar {
    max-height: calc(100vh - 260px);
  }
  .music-list {
    padding: 4px;
    .music-item {
      display: flex;
      padding: 8px 12px 8px 8px;
      border-radius: 8px;
      cursor: pointer;
      border-bottom: 1px solid var(--theme-bg-color-a8);
      transition: all 0.3s ease-in-out;
      .music-cover {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 6px;
        overflow: hidden;
      }
      .music-info {
        padding: 0 10px;
        flex: 1;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
          font-size: 12px;
        }
      }
      .music-action {
        display: flex;
        align-items: center;
      }
      &:hover,
      &.active {
        color: var(--primary-color);
        background-color: var(--theme-bg-color-a8);
      }
    }
  }
}
</style>
