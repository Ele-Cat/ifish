<template>
  <div class="music-box">
    <div class="info" v-if="!useMusicStore.musicList.length">
      暂无音乐，请选择<span class="add" @click="handleShowSearch">添加</span>
    </div>
    <div class="info" v-else>
      <div class="cover" @click="showLyric">
        <img
          :class="{ playing: useMusicStore.settings.playing }"
          :src="playingMusic.cover"
          onerror="this.src='./images/music.png'"
          alt=""
        />
      </div>
      {{ playingMusic.name }} - {{ playingMusic.singer }}
    </div>
    <div class="center">
      <div class="prev-next">
        <a-tooltip title="查看快捷键">
          <i class="ifishfont ifish-music-shortkey" @click="handleShowShortkey()"></i>
        </a-tooltip>
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
        <a-tooltip title="展开歌词">
          <i class="ifishfont ifish-music-lyric" @click="showLyric"></i>
        </a-tooltip>
      </div>
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
    </div>
    <div class="ctrl">
      <div class="volume" :title="`当前音量：${useMusicStore.settings.volume}`">
        <i
          class="ifishfont ifish-volumeDisable"
          v-if="useMusicStore.settings.mute || useMusicStore.settings.volume === 0"
          @click="handleToggleMute(true)"
        ></i>
        <i
          class="ifishfont ifish-volumeLow"
          v-else-if="
            useMusicStore.settings.volume >= 0 && useMusicStore.settings.volume < 30
          "
          @click="handleToggleMute(false)"
        ></i>
        <i
          class="ifishfont ifish-volumeMiddle"
          v-else-if="
            useMusicStore.settings.volume >= 30 && useMusicStore.settings.volume < 60
          "
          @click="handleToggleMute(false)"
        ></i>
        <i class="ifishfont ifish-volumeHigh" v-else @click="handleToggleMute(false)"></i>
        <a-slider
          class="volume-slider"
          :min="0"
          :max="100"
          v-model:value="useMusicStore.settings.volume"
        />
      </div>
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
      <a-divider type="vertical" />
      <a-tooltip :title="`播放列表`" placement="topRight">
        <MenuUnfoldOutlined @click="handleToggleMusicList" />
      </a-tooltip>
    </div>
  </div>
  <IDialog
    title="音乐快捷键"
    :visible="musicShortkeyVisible"
    :zIndex="1003"
    @ok="musicShortkeyVisible = false"
    @cancel="musicShortkeyVisible = false"
  >
    <MusicShortkey />
  </IDialog>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import useStore from "@/store";
const { useMusicStore } = useStore();
import { secToMs } from "@/utils/utils";
import MusicShortkey from "./MusicShortkey.vue";

const emit = defineEmits([
  "toggleMusicList",
  "showSearch",
  "handleDurationChange",
  "handlePlay",
  "handlePause",
  "handlePrev",
  "handleNext",
  "showLyric",
]);
const props = defineProps({
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

const handleToggleMusicList = () => {
  emit("toggleMusicList");
};
const handleShowSearch = () => {
  emit("showSearch");
};

// 切换模式
const handleChangeMode = (mode) => {
  useMusicStore.changeMode(mode);
};
// 切换是否静音
const handleToggleMute = (flag) => {
  useMusicStore.toggleMute(flag);
};

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
// 展开歌词面板
const showLyric = () => {
  emit("showLyric");
};

const musicShortkeyVisible = ref(false);
const handleShowShortkey = () => {
  musicShortkeyVisible.value = true;
};
</script>

<style lang="less" scoped>
.music-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  .info {
    margin: 0 12px 0 0;
    display: flex;
    align-items: center;
    .add {
      color: var(--primary-color);
      cursor: pointer;
    }
    .cover {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 12px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        &.playing {
          animation: rotate 20s infinite linear;
        }
      }
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
        z-index: 1;
        display: none;
      }
      &::after {
        content: "";
        position: absolute;
        width: 32px;
        height: 32px;
        border: 2px solid #fff;
        border-radius: 6px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-mask: conic-gradient(
          from -90deg at 16px 16px,
          red 90deg,
          transparent 0deg
        );
        mask: conic-gradient(from -90deg at 16px 16px, red 90deg, transparent 0deg);
        -webkit-mask-position: -8px -8px;
        mask-position: -8px -8px;
        z-index: 2;
        display: none;
      }
      &:hover {
        &::before,
        &::after {
          display: block;
        }
      }
    }
  }
  .center {
    position: absolute;
    left: 260px;
    right: 260px;
    font-size: 22px;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .prev-next {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .play,
      .pause {
        font-size: 36px;
      }
      .ifishfont {
        font-size: 22px;
        margin: 0 6px;
        cursor: pointer;
        &.ifish-music-lyric {
          font-size: 26px;
          margin-top: 2px;
        }
      }
    }
    .progress-box {
      width: 66%;
      min-width: 200px;
      max-width: 560px;
      display: flex;
      align-items: center;
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
  }
  .anticon {
    margin: 0 8px;
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
  .ctrl {
    font-size: 22px;
    display: flex;
    align-items: center;
    .ant-divider-vertical {
      border-inline-start: 1px solid var(--grey-6);
    }
    .mode,
    .volume {
      margin: 0 8px;
      cursor: pointer;
      position: relative;
      top: -1px;
      i {
        font-size: 24px;
      }
      &:hover {
        color: var(--primary-color);
      }
    }
    .mode {
      top: 0;
      i {
        font-size: 32px;
      }
    }
    .volume {
      position: relative;
      display: flex;
      align-items: center;
      .volume-slider {
        width: 66px;
      }
      :deep(.ant-slider-rail) {
        background-color: #fff;
      }
      :deep(.ant-slider-track) {
        background-color: var(--primary-color);
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
