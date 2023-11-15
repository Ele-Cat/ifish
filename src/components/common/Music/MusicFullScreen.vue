<template>
  <div ref="fullscreenRef" class="music-fullscreen" :class="{open: open}">
    <div class="bg">
      <img :src="playingMusic.cover" alt="" />
      <div class="mask"></div>
    </div>
    <div class="music-info">
      <img class="cover" @click="flag = !flag" :class="{playing: flag || useMusicStore.settings.playing}" :src="playingMusic.cover" alt="" />
      <p>{{ playingMusic.name }}</p>
      <span>{{ playingMusic.singer }}</span>
    </div>
    <div class="music-lyric">
      <p class="no-lyric" v-if="!lyricList.length">暂无歌词</p>
      <perfect-scrollbar class="scroll-bar">
        <p
          v-for="(item, index) in lyricList"
          :class="{ active: index === 6 }"
          :key="index"
        >
          {{ item.lyric }}
        </p>
      </perfect-scrollbar>
    </div>
    <div class="action">
      <DoubleRightOutlined class="close" title="关闭歌词" @click="handleClose" />
      <FullscreenExitOutlined title="关闭全屏" v-if="isFullscreen" @click="toggle" />
      <FullscreenOutlined title="开启全屏" v-else @click="toggle" />
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import { DoubleRightOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';
import axios from "axios";
import { useFullscreen } from '@vueuse/core';
import useStore from "@/store";
const { useMusicStore } = useStore();

const emit = defineEmits(["close"]);
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  }
})

const flag = ref(false);

const fullscreenRef = ref(null);
const { isFullscreen, toggle, exit } = useFullscreen(fullscreenRef);

const playingMusic = ref({});
watch(
  () => [useMusicStore.activeIndex, useMusicStore.settings.playing],
  () => {
    playingMusic.value = useMusicStore.musicList[useMusicStore.activeIndex];
  },
  {
    immediate: true,
    deep: true,
  }
);

const lyricList = computed(() => {
  let list = [];
  if (!playingMusic.value?.content?.length) {
    // 重拉歌词
    getLyric();
  } else {
    list = solveLyric(playingMusic.value?.content);
  }
  
  return list;
});

const getLyric = () => {
  axios.get(`https://api.lolimi.cn/API/kggc/api.php?msg=${playingMusic.value.name}-${playingMusic.value.singer}&n=1`).then(res => {
    const { content } = res.data.data;
    if (res.data.code === 1) {
      useMusicStore.musicList[useMusicStore.activeIndex]["content"] = content;
    }
  })
}

const solveLyric = (content) => {
  const list = [];
  const contents = content.split("\n");
  contents.map((content) => {
    let matches = content.match(/\[(.*?)\]/);
    if (matches) {
      let timeString = matches[1];
      let intervalRegex = /^(0\d|1\d|2[0-3]):([0-5]\d)\.(?:\d{2})$/;
      if (intervalRegex.test(timeString)) {
        list.push({
          time: timeString,
          lyric: content.replace(/\[.*?\]/g, ""),
        });
      }
    }
  });
  return list;
}

const handleClose = () => {
  exit();
  emit("close");
}
</script>

<style lang="less" scoped>
.music-fullscreen {
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--theme-bg-color);
  display: flex;
  top: 100vh;
  transition: top .15s ease-in-out;
  &.open {
    top: 0;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -99;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.66);
      backdrop-filter: blur(10px);
    }
  }
  .music-info {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.8;
    color: #eee;
    .cover {
      max-width: 56%;
      margin-bottom: 20px;
      transition: all .3s ease-in-out;
      &.playing {
        max-width: 80%;
      }
    }
    p {
      font-size: 32px;
    }
  }
  .music-lyric {
    flex: 1;
    font-size: 1.4rem;
    .no-lyric {
      height: 100%;
      display: flex;
      font-size: 2rem;
      justify-content: center;
      align-items: center;
    }
    .scroll-bar {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 88px 50px;
      p {
        width: 100%;
        color: #eee;
        margin: 2px 0;
        padding: 12px 0;
        text-align: center;
        transition: all .3s;
        cursor: pointer;
        border-radius: 8px;
        &:hover {
          background-color: var(--theme-bg-color-a8);
          backdrop-filter: saturate(500%) blur(10px);
          color: var(--primary-color);
        }
        &.active {
          font-size: 2rem;
          color: var(--primary-color);
        }
      }
    }
  }
  .action {
    position: absolute;
    top: 20px;
    right: 30px;
    display: flex;
    flex-direction: column;
    color: #FFF;
    font-size: 24px;
    .anticon {
      margin-bottom: 20px;
      cursor: pointer;
      transition: all .3s;
      &.close {
        transform: rotate(90deg);
      }
      &:hover {
        color: var(--primary-color);
      }
    }
  }
}
</style>
