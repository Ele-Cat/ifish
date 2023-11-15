<template>
  <div ref="fullscreenRef" class="music-fullscreen" :class="{open: open}">
    <div class="bg">
      <img :src="playingMusic.cover" alt="" />
      <div class="mask"></div>
    </div>
    <div class="music-info">
      <img class="cover" :src="playingMusic.cover" alt="" />
      <p>{{ playingMusic.name }}</p>
      <span>{{ playingMusic.singer }}</span>
    </div>
    <div class="music-lyric">
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
      <CompressOutlined title="关闭全屏" v-if="isFullscreen" @click="toggle" />
      <ExpandOutlined title="开启全屏" v-else @click="toggle" />
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import { DoubleRightOutlined, CompressOutlined, ExpandOutlined } from '@ant-design/icons-vue';
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

const fullscreenRef = ref(null);
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
  const list = [];
  // console.log("playingMusic.content: ", playingMusic.value.content);
  if (!playingMusic.value?.content?.length) {
    // 重拉歌词
    return list;
  }
  const contents = playingMusic.value?.content.split("\n");
  // console.log("contents: ", contents);
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
});

const handleClose = () => {
  emit("close");
}

const { isFullscreen, toggle } = useFullscreen(fullscreenRef);
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
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.8;
    color: #eee;
    .cover {
      max-width: 80%;
      margin-bottom: 20px;
    }
    p {
      font-size: 32px;
    }
  }
  .music-lyric {
    flex: 1;
    font-size: 1.8rem;
    padding: 50px 0;
    .scroll-bar {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: #eee;
        margin: 12px 0;
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
