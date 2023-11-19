<template>
  <div ref="fullscreenRef" class="music-fullscreen" :class="{ open: open }">
    <div class="bg">
      <img :src="playingMusic.cover" alt="" />
      <div class="mask"></div>
    </div>
    <div class="music-info">
      <img
        class="cover"
        @click="flag = !flag"
        :class="{ playing: flag || useMusicStore.settings.playing }"
        :src="playingMusic.cover"
        alt=""
      />
      <p>{{ playingMusic.name }}</p>
      <span>{{ playingMusic.singer }}</span>
      <div class="progress-box">
        <p>{{ secToMs(currentTime) }}</p>
        <a-slider
          class="play-slider"
          :min="0"
          :max="musicDuration"
          @change="handleDurationChange"
          v-model:value="currentTime"
          :tipFormatter="progressTipFormatter"
        />
        <p>{{ secToMs(musicDuration) }}</p>
      </div>
      <div class="prev-next">
        <div class="mode">
          <a-tooltip :title="musicMode">
            <i
              class="ifishfont ifish-musicListLoop"
              title="列表循环"
              v-if="useMusicStore.settings.mode === 'listCycle'"
              @click="handleChangeMode('singleCycle')"
            ></i>
            <i
              class="ifishfont ifish-musicSingleCycle"
              title="单曲循环"
              v-if="useMusicStore.settings.mode === 'singleCycle'"
              @click="handleChangeMode('randomPlay')"
            ></i>
            <i
              class="ifishfont ifish-musicRandomPlay"
              title="随机播放"
              v-if="useMusicStore.settings.mode === 'randomPlay'"
              @click="handleChangeMode('listCycle')"
            ></i>
          </a-tooltip>
        </div>
        <a-tooltip :title="`上一首${prevMusic ? '：' : ''}${prevMusic}`">
          <VerticalRightOutlined @click="handlePrev" />
        </a-tooltip>
        <a-tooltip :title="useMusicStore.settings.playing ? '点击暂停' : '点击播放'">
          <PlayCircleOutlined
            class="play"
            @click="handlePlay"
            v-if="!useMusicStore.settings.playing"
          />
          <PauseCircleOutlined class="pause" @click="handlePause" v-else />
        </a-tooltip>
        <a-tooltip :title="`下一首${nextMusic ? '：' : ''}${nextMusic}`">
          <VerticalLeftOutlined @click="handleNext" />
        </a-tooltip>
        <a-popover title="播放列表" placement="rightBottom">
          <template #content>
            <perfect-scrollbar class="scroll-music">
              <div class="music-list">
                <div
                  class="music-item"
                  v-for="(item, index) in useMusicStore.musicList"
                  :key="index"
                  :class="{ active: useMusicStore.activeIndex === index }"
                  @click="handlePlayNow(index)"
                >
                  <div class="music-cover">
                    <img
                      :src="item.cover"
                      onerror="this.src='./images/music.png'"
                      alt=""
                    />
                  </div>
                  <div class="music-info">
                    <p>{{ item.name }}</p>
                    <span>{{ item.singer }}</span>
                  </div>
                </div>
              </div>
            </perfect-scrollbar>
          </template>
          <MenuUnfoldOutlined />
        </a-popover>
      </div>
    </div>
    <div class="music-lyric">
      <p class="no-lyric" v-if="!lyricList.length">暂无歌词</p>
      <perfect-scrollbar class="scroll-bar" id="lyric-list">
        <p
          v-for="(item, index) in lyricList"
          :class="{ active: shouldHighlight(index) }"
          :key="index"
          @click="handleLyricJump(item, index)"
        >
          <span>{{ item.time }}</span>
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
import { computed, onMounted, ref, watch } from "vue";
import {
  DoubleRightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  VerticalRightOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  VerticalLeftOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";

import axios from "axios";
import { useFullscreen } from "@vueuse/core";
import useStore from "@/store";
const { useMusicStore } = useStore();
import { secToMs, msToSec } from "@/utils/utils";

const emit = defineEmits([
  "close",
  "handleDurationChange",
  "handlePlay",
  "handlePause",
  "handlePrev",
  "handleNext",
]);
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  musicCurrentTime: {
    // 当前播放进度
    type: Number,
    default: 0,
  },
  musicDuration: {
    // 音乐时长
    type: Number,
    default: 0,
  },
  prevMusic: {
    // 上一首
    type: String,
    default: "",
  },
  nextMusic: {
    // 下一首
    type: String,
    default: "",
  },
  musicMode: {
    // 播放模式
    type: String,
    default: "",
  },
});

onMounted(() => {
  window.onkeydown = (e) => {
    const { keyCode } = e;
    if (keyCode === 27) {
      handleClose();
    }
  };
});

const flag = ref(false);

const fullscreenRef = ref(null);
const { isFullscreen, toggle, exit } = useFullscreen(fullscreenRef);

const playingMusic = ref({});
watch(
  () => [useMusicStore.activeIndex, useMusicStore.settings.playing],
  () => {
    playingMusic.value = useMusicStore.musicList[useMusicStore.activeIndex] || {};
  },
  {
    immediate: true,
    deep: true,
  }
);

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
};

const lyricList = computed(() => {
  let list = [];
  if (useMusicStore.activeIndex < 0) return [];
  if (!playingMusic.value?.content?.length) {
    // 重拉歌词
    getLyric();
  } else {
    list = solveLyric(playingMusic.value?.content);
  }

  return list;
});

const currentTime = ref(0);
watch(
  () => props.musicCurrentTime,
  (newVal) => {
    currentTime.value = newVal;
  },
  {
    immediate: true,
    deep: true,
  }
);

const activeLyricIndex = ref(0);
const shouldHighlight = (idx) => {
  const skewing = 1.0;
  const currentLineTime = msToSec(lyricList.value[idx].time);
  const nextLineTime = msToSec(lyricList.value[idx + 1]?.time); // 下一行歌词的时间
  const active =
    currentTime.value + skewing >= currentLineTime &&
    (currentTime.value + skewing < nextLineTime || !nextLineTime);
  if (active) {
    activeLyricIndex.value = idx;
  }
  return active;
};
// 歌词自动滚动到中间
watch(
  () => activeLyricIndex.value,
  () => {
    let lyricDom = document.getElementById("lyric-list");
    if (lyricDom) {
      let activeElement = lyricDom.querySelector(".active");
      if (activeElement) {
        lyricDom.scrollTo({
          top:
            activeElement.offsetTop -
            lyricDom.clientHeight / 2 +
            activeElement.clientHeight / 2,
          behavior: "smooth",
        });
      }
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

const getLyric = () => {
  axios
    .get(
      `https://api.lolimi.cn/API/kggc/api.php?msg=${playingMusic.value.name}-${playingMusic.value.singer}&n=1`
    )
    .then((res) => {
      const { content } = res.data.data || {};
      if (res.data.code === 1) {
        useMusicStore.musicList[useMusicStore.activeIndex]["content"] = content;
      }
    });
};

const handleClose = () => {
  exit();
  emit("close");
};
// 立即播放
const handlePlayNow = (idx) => {
  useMusicStore.playMusic(idx);
};
// 切换模式
const handleChangeMode = (mode) => {
  useMusicStore.changeMode(mode);
};
// 进度条时间格式化
const progressTipFormatter = (val) => {
  return secToMs(val);
};
// 拖拽进度条
const handleDurationChange = (currentTime) => {
  emit("handleDurationChange", currentTime);
};
// 执行播放
const handlePlay = () => {
  emit("handlePlay");
};
// 执行暂停
const handlePause = () => {
  emit("handlePause");
};
// 播放上一首
const handlePrev = () => {
  emit("handlePrev");
};
// 播放下一首
const handleNext = () => {
  emit("handleNext");
};
const handleLyricJump = (item, idx) => {
  emit("handleDurationChange", msToSec(item.time));
  emit("handlePlay");
};
</script>

<style lang="less">
.music-fullscreen {
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--theme-bg-color);
  display: flex;
  top: 100vh;
  transition: top 0.15s ease-in-out;
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
    .anticon {
      margin: 0 8px;
      cursor: pointer;
      &:hover {
        color: var(--primary-color);
      }
    }
    .cover {
      max-width: 56%;
      max-width: 80%;
      margin-bottom: 20px;
      transition: all 0.3s ease-in-out;
      &.playing {
        max-width: 80%;
      }
    }
    p {
      font-size: 32px;
    }
    .progress-box {
      width: 66%;
      min-width: 200px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      p {
        font-size: 12px;
      }
      .play-slider {
        flex: 1;
        margin: 0 12px;
        :deep(.ant-slider-rail) {
          background-color: #fff;
        }
        :deep(.ant-slider-track) {
          background-color: var(--primary-color);
        }
      }
    }
    .mode {
      margin: 0 4px;
      cursor: pointer;
      position: relative;
      top: 1px;
      i {
        font-size: 32px;
      }
      &:hover {
        color: var(--primary-color);
      }
    }
    .prev-next {
      display: flex;
      align-items: center;
      margin-top: 20px;
      font-size: 24px;
      .play,
      .pause {
        font-size: 36px;
        margin: 0 12px;
      }
    }
  }
  .music-lyric {
    flex: 1;
    font-size: 1.4rem;
    -webkit-mask: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0.6) 15%,
      #fff 25%,
      #fff 75%,
      hsla(0, 0%, 100%, 0.6) 85%,
      hsla(0, 0%, 100%, 0)
    );
    mask: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0.6) 15%,
      #fff 25%,
      #fff 75%,
      hsla(0, 0%, 100%, 0.6) 85%,
      hsla(0, 0%, 100%, 0)
    );
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
      padding: 50vh 60px 50vh 0;
      .ps__thumb-y,
      .ps__thumb-y {
        display: none !important;
      }
      p {
        width: 100%;
        color: #eee;
        margin: 2px 0;
        padding: 12px 0;
        text-align: center;
        transition: all 0.15s;
        cursor: pointer;
        border-radius: 12px;
        span {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 14px;
          display: none;
        }
        &:hover {
          background-color: var(--theme-bg-color-a8);
          backdrop-filter: saturate(500%) blur(10px);
          color: var(--primary-color);
          span {
            display: block;
          }
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
    color: #fff;
    font-size: 24px;
    .anticon {
      margin-bottom: 20px;
      cursor: pointer;
      transition: all 0.3s;
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

<style lang="less">
.scroll-music {
  max-height: 360px;
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
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--theme-text-color);
      span {
        font-size: 12px;
      }
    }
    &:hover {
      .music-info {
        color: var(--primary-color);
      }
    }
    &.active {
      .music-info {
        color: var(--primary-color);
      }
      background-color: var(--theme-bg-color-a8);
    }
  }
}
</style>
