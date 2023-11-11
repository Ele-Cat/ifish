<template>
  <div>
    <perfect-scrollbar class="scroll-bar">
      <div class="wallpaper-list">
        <div
          class="wallpaper-item"
          v-for="(item, index) in dynamicList"
          :key="index"
          @click="handleUse(item)"
        >
          <img :src="`https://img.zhuayuya.com/wallpaper/video/${item.cover}`" alt="" />
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from 'axios';
import useStore from '@/store';
const { useSystemStore } = useStore();
import { toast } from "@/utils/feedback";

const apiUrl = "https://movetab.jianyueku.com/api/wallpaper_video/search?offset=24&page=1"
axios.get(apiUrl).then(res => {
  console.log('res: ', res);
})

const dynamicList = reactive([
  {
    cover: "liulangdiqiu.jpg",
    video: "liulangdiqiu.mp4",
  },
  {
    cover: "diqiuzizhuan.jpg",
    video: "diqiuzizhuan.mov",
  },
  {
    cover: "HelloSummer.jpg",
    video: "HelloSummer.mp4",
  },
  {
    cover: "Everybody.jpg",
    video: "Everybody.mp4",
  },
  {
    cover: "shaonvshidai.jpg",
    video: "shaonvshidai.mov",
  },
  {
    cover: "xiaomao.jpg",
    video: "xiaomao.mov",
  },
  {
    cover: "zhandi.jpg",
    video: "zhandi.mov",
  },
  {
    cover: "qingliangyixia.jpg",
    video: "qingliangyixia.mov",
  },
  {
    cover: "wallpa_video_1001.jpg",
    video: "wallpa_video_1001.mp4",
  },
  {
    cover: "wallpa_video_1002.jpg",
    video: "wallpa_video_1002.mp4",
  },
  {
    cover: "wallpa_video_1003.jpg",
    video: "wallpa_video_1003.mp4",
  },
  {
    cover: "wallpa_video_1004.jpg",
    video: "wallpa_video_1004.mp4",
  },
  {
    cover: "wallpa_video_1005.jpg",
    video: "wallpa_video_1005.mp4",
  },
  {
    cover: "wallpa_video_1006.jpg",
    video: "wallpa_video_1006.mp4",
  },
  {
    cover: "wallpa_video_1007.jpg",
    video: "wallpa_video_1007.mp4",
  },
  {
    cover: "wallpa_video_1008.jpg",
    video: "wallpa_video_1008.mp4",
  },
  {
    cover: "wallpa_video_1009.jpg",
    video: "wallpa_video_1009.mp4",
  },
  {
    cover: "wallpa_video_1010.jpg",
    video: "wallpa_video_1010.mp4",
  },
  {
    cover: "wallpa_video_1012.jpg",
    video: "wallpa_video_1012.mp4",
  },
  {
    cover: "wallpa_video_1015.jpg",
    video: "wallpa_video_1015.mp4",
  },
  {
    cover: "wallpa_video_1016.jpg",
    video: "wallpa_video_1016.mp4",
  },
  {
    cover: "wallpa_video_1017.jpg",
    video: "wallpa_video_1017.mp4",
  },
  {
    cover: "wallpa_video_1018.jpg",
    video: "wallpa_video_1018.mp4",
  },
  {
    cover: "wallpa_video_1019.jpg",
    video: "wallpa_video_1019.mp4",
  },
  {
    cover: "wallpa_video_1020.jpg",
    video: "wallpa_video_1020.mp4",
  },
  {
    cover: "wallpa_video_1022.jpg",
    video: "wallpa_video_1022.mp4",
  },
]);

const handleUse = (item) => {
  useSystemStore.settings.wallpaper.url = `https://img.zhuayuya.com/wallpaper/video/${item.video}`;
  useSystemStore.settings.wallpaper.type = "dynamics";
  toast({
    content: "壁纸切换成功！",
  });
}
</script>

<style lang="less" scoped>
.scroll-bar {
  height: 60vh;
}
.wallpaper-list {
  display: flex;
  flex-wrap: wrap;
  min-height: 270px;
  .wallpaper-item {
    position: relative;
    width: 32%;
    height: auto;
    margin: 3px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      transition: all .3s;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
