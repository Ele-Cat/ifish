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
          <img :src="`${item.cover}`" alt="" />
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import useStore from '@/store';
const { useSystemStore } = useStore();
import { toast } from "@/utils/feedback";

// https://movetab.jianyueku.com/api/wallpaper_video/search?offset=24&page=1
const dynamicList = reactive([
  {
    cover: "https://cccimg.com/view.php/8c5365fffd039027233c94ff3ce19bc8.jpg",
    video: "https://cccimg.com/view.php/833a1f6e6ecbeba1da5f52531c71167c.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/liulangdiqiu.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/liulangdiqiu.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/diqiuzizhuan.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/diqiuzizhuan.mov",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/HelloSummer.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/HelloSummer.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/Everybody.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/Everybody.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/shaonvshidai.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/shaonvshidai.mov",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/xiaomao.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/xiaomao.mov",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/zhandi.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/zhandi.mov",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/qingliangyixia.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/qingliangyixia.mov",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1001.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1001.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1002.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1002.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1003.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1003.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1004.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1004.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1005.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1005.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1006.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1006.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1007.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1007.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1008.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1008.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1009.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1009.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1010.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1010.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1012.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1012.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1015.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1015.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1016.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1016.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1017.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1017.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1018.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1018.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1019.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1019.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1020.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1020.mp4",
  },
  {
    cover: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1022.jpg",
    video: "https://img.zhuayuya.com/wallpaper/video/wallpa_video_1022.mp4",
  },
  {
    cover: "https://movetab.jianyueku.com/pick-source/img/wallpaper_video/wallpapers_video/648fb71175652244eaa103a0/607001859.mp4?x-oss-process=video/snapshot,t_0,f_jpg,w_620,h_0,m_fast",
    video: "https://movetab.jianyueku.com/pick-source/img/wallpaper_video/wallpapers_video/648fb71175652244eaa103a0/607001859.mp4",
  },
  {
    cover: "https://movetab.jianyueku.com/pick-source/img/wallpaper_video/wallpapers_video/648fb71175652244eaa103a0/435582351.mp4?x-oss-process=video/snapshot,t_0,f_jpg,w_620,h_0,m_fast",
    video: "https://movetab.jianyueku.com/pick-source/img/wallpaper_video/wallpapers_video/648fb71175652244eaa103a0/435582351.mp4",
  },
]);

const handleUse = (item) => {
  useSystemStore.settings.wallpaper.url = `${item.video}`;
  useSystemStore.settings.wallpaper.type = "dynamics";
  toast({
    content: "壁纸切换成功！",
  });
}
</script>

<style lang="less" scoped>
.scroll-bar {
  height: 390px;
}
.wallpaper-list {
  display: flex;
  flex-wrap: wrap;
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
    video {
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
