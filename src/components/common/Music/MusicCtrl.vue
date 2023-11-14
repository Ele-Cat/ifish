<template>
  <div class="music-box">
    <div class="info" v-if="!useMusicStore.musicList.length">
      暂无音乐，请选择<span class="add" @click="handleShowSearch">添加</span>
    </div>
    <div class="info" v-else>
      <img
        class="cover"
        :class="{ playing: useMusicStore.settings.playing }"
        :src="playingMusic.cover"
        onerror="this.src='./images/music.png'"
        alt=""
      />
      {{ playingMusic.name }} - {{ playingMusic.singer }}
    </div>
    <div class="center">
      <div class="prev-next">
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
      </div>
      <div class="progress-box">
        <p>{{ secToMs(musicCurrentTime) }}</p>
        <a-slider
          class="play-slider"
          :min="0"
          :max="musicDuration"
          @change="handleDurationChange"
          v-model:value="musicCurrentTime"
          :tipFormatter="tipFormatter"
        />
        <p>{{ secToMs(musicDuration) }}</p>
      </div>
    </div>
    <div class="ctrl">
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
      <a-tooltip :title="`播放列表`">
        <MenuUnfoldOutlined @click="handleToggleMusicList" />
      </a-tooltip>
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
      <audio
        ref="audioRef"
        controls
        :src="playingMusic?.url"
        :loop="useMusicStore.settings.mode === 'singleCycle'"
        @timeupdate="updateProgress"
        @loadeddata="audioLoaded"
        @ended="audioEnded"
        @error="audioEnded"
        v-show="false"
      ></audio>
    </div>
  </div>
</template>

<script setup>
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
const emit = defineEmits(["toggleMusicList", "showSearch"]);
import useStore from "@/store";
import { computed, nextTick, ref, watch } from "vue";
const { useMusicStore } = useStore();
import { secToMs, getRandomIntInRange } from "@/utils/utils";

// https://xiaoapi.cn/API/yy_sq.php?msg=夜曲&type=json&n=1

const handleToggleMusicList = () => {
  emit("toggleMusicList");
};
const handleShowSearch = () => {
  emit("showSearch");
};

const musicMode = computed(() => {
  const modes = {
    listCycle: "列表循环",
    singleCycle: "单曲循环",
    randomPlay: "随机播放",
  };
  return modes[useMusicStore.settings.mode];
});
const handleChangeMode = (mode) => {
  useMusicStore.changeMode(mode);
};
const handleToggleMute = (flag) => {
  useMusicStore.toggleMute(flag);
};

const playingMusic = ref({});
const musicCurrentTime = ref(0);
const musicDuration = ref(1000);
const audioRef = ref(null);
watch(
  () => [useMusicStore.activeIndex, useMusicStore.settings.playing],
  () => {
    playingMusic.value = useMusicStore.musicList[useMusicStore.activeIndex];
    nextTick(() => {
      if (audioRef.value) {
        // console.log("audioRef: ", audioRef);
        musicDuration.value = parseInt(audioRef.value.duration);
        audioRef.value.volume = useMusicStore.settings.volume / 100;

        if (useMusicStore.settings.playing) {
          audioRef.value.play();
        }
      }
    });
  },
  {
    immediate: true,
    deep: true,
  }
);
const audioLoaded = () => {
  musicDuration.value = parseInt(audioRef.value.duration);
  musicCurrentTime.value = audioRef.value.currentTime =
    useMusicStore.settings.currentTime;
};
const updateProgress = (e) => {
  const { currentTime, duration } = e.target;
  musicCurrentTime.value = useMusicStore.settings.currentTime = parseInt(currentTime);
  musicDuration.value = parseInt(duration);
};
const tipFormatter = (val) => {
  return secToMs(val);
};
const handleDurationChange = (currentTime) => {
  useMusicStore.settings.currentTime = currentTime;
  if (audioRef.value) {
    nextTick(() => {
      audioRef.value.currentTime = currentTime;
    });
  }
};

watch(
  () => [useMusicStore.settings.volume, useMusicStore.settings.mute],
  () => {
    if (audioRef.value) {
      nextTick(() => {
        audioRef.value.volume = useMusicStore.settings.volume / 100;
        audioRef.value.muted = useMusicStore.settings.mute;
      });
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

const handlePlay = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  useMusicStore.settings.playing = true;
  audioRef.value.play();
};

const handlePause = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  useMusicStore.settings.playing = false;
  audioRef.value.pause();
};

const prevMusic = computed(() => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return "";
  let prevIndex =
    useMusicStore.activeIndex === 0
      ? useMusicStore.musicList.length - 1
      : useMusicStore.activeIndex - 1;
  return useMusicStore.musicList[prevIndex]
    ? useMusicStore.musicList[prevIndex]["name"]
    : "";
});
const handlePrev = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  let prevIndex =
    useMusicStore.activeIndex === 0
      ? useMusicStore.musicList.length - 1
      : useMusicStore.activeIndex - 1;
  useMusicStore.playMusic(prevIndex);
};

const nextMusic = computed(() => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return "";
  let nextIndex =
    useMusicStore.activeIndex === useMusicStore.musicList.length - 1
      ? 0
      : useMusicStore.activeIndex + 1;
  return useMusicStore.musicList[nextIndex]
    ? useMusicStore.musicList[nextIndex]["name"]
    : "";
});
const handleNext = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  let nextIndex =
    useMusicStore.activeIndex === useMusicStore.musicList.length - 1
      ? 0
      : useMusicStore.activeIndex + 1;
  useMusicStore.playMusic(nextIndex);
};

const audioEnded = () => {
  if (useMusicStore.settings.mode === "listCycle") {
    if (useMusicStore.musicList.length === 1) {
      useMusicStore.activeIndex--;
      useMusicStore.activeIndex++;
    }
    handleNext();
  } else if (useMusicStore.settings.mode === "singleCycle") {
    useMusicStore.playMusic(useMusicStore.activeIndex);
  } else if (useMusicStore.settings.mode === "randomPlay") {
    useMusicStore.playMusic(
      getRandomIntInRange(
        0,
        useMusicStore.musicList.length - 1,
        useMusicStore.activeIndex
      )
    );
  }
};
</script>

<style lang="less" scoped>
.music-box {
  height: 100%;
  display: flex;
  align-items: center;
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
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 12px;
      &.playing {
        animation: rotate 20s infinite linear;
      }
    }
  }
  .center {
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
    }
    .progress-box {
      width: 66%;
      min-width: 120px;
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
      }
      .play-slider {
        flex: 1;
        margin: 0 12px;
        :deep(.ant-slider-rail) {
          background-color: var(--theme-text-color);
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
        font-size: 28px;
      }
    }
    .volume {
      position: relative;
      display: flex;
      align-items: center;
      .volume-slider {
        width: 66px;
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
