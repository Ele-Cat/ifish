<template>
  <div>
    <a-spin tip="加载中..." :spinning="loading">
      <div class="wallpaper-list">
        <div class="wallpaper-item" v-for="(item, index) in wallpaperList" :key="index">
          <img :src="item" alt="">
          <div class="mask">
            <p @click="handlePreview(item)">
              <EyeOutlined />预览
            </p>
            <p @click="handleUse(item)">
              <CheckOutlined />使用
            </p>
          </div>
        </div>
      </div>
    </a-spin>
    <a-button type="primary" :disabled="loading" @click="getWallpaper" style="margin-top:12px;">换一批</a-button>
    <a-image
      :width="200"
      :style="{ display: 'none' }"
      :preview="{
        visible,
        onVisibleChange: setVisible,
      }"
      :src="previewUrl"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { EyeOutlined, CheckOutlined } from '@ant-design/icons-vue';
import useStore from '@/store';
const { useSystemStore } = useStore();
import { toast } from "@/utils/feedback";

const wallpaperList = ref([]);
const loading = ref(false);

const getWallpaper = () => {
  loading.value = true;
  const apiUrl = `https://api.7585.net.cn/360/api.php?return=jsonpro`
  axios.get(apiUrl).then(res => {
    wallpaperList.value = res.data.imgurls.splice(0, 9);
    loading.value = false;
  })
}

getWallpaper();

const visible = ref(false);
const setVisible = value => {
  visible.value = value;
};
const previewUrl = ref("");
const handlePreview = (url) => {
  setVisible(true);
  previewUrl.value = url;
}

const handleUse = (url) => {
  useSystemStore.settings.wallpaper.url = url;
  useSystemStore.settings.wallpaper.type = "basic";
  toast({
    content: "壁纸切换成功！",
  });
}
</script>

<style lang="less" scoped>
.wallpaper-list {
  display: flex;
  flex-wrap: wrap;
  min-height: 370px;
  .wallpaper-item {
    position: relative;
    width: 32%;
    margin: 3px;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transition: all .3s;
    }
    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background-color: rgba(0, 0, 0, 0.45);
      justify-content: center;
      align-items: center;
      color: #FFF;
      display: none;
      p {
        cursor: pointer;
        margin: 0 8px;
        display: flex;
        align-items: center;
        transition: all .3s;
        .anticon {
          margin-right: 4px;
        }
        &:hover {
          color: var(--primary-color);
        }
      }
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
      .mask {
        display: flex;
      }
    }
  }
}
</style>