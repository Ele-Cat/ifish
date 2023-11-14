<template>
  <div class="music-fullscreen">
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
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import useStore from "@/store";
import { Item } from "ant-design-vue/es/menu";
const { useMusicStore } = useStore();

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
  const contents = playingMusic.value.content.split("\n");
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
</script>

<style lang="less" scoped>
.music-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--theme-bg-color);
  display: flex;
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
}
</style>
