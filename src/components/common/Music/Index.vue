<template>
  <div class="music">
    <audio
      ref="audioRef"
      controls
      :src="playingMusic?.url"
      :loop="useMusicStore.settings.mode === 'singleCycle'"
      @timeupdate="updateProgress"
      @loadeddata="audioLoaded"
      @ended="audioEnded"
      @error="audioError"
      v-show="false"
    ></audio>

    <div
      class="toggle-icon bf"
      :title="useMusicStore.visible ? '隐藏播放器' : '显示播放器'"
      :class="[useMusicStore.visible ? 'down' : 'up']"
      @click="handleToggleMusicVisible"
    >
      <DoubleLeftOutlined />
    </div>
    <div class="music-ctrl bf" :class="[useMusicStore.visible ? 'show' : '']">
      <MusicCtrl
        :musicCurrentTime="musicCurrentTime"
        :musicDuration="musicDuration"
        :prevMusic="prevMusic"
        :nextMusic="nextMusic"
        :musicMode="musicMode"
        @showSearch="musicSearchVisible = true"
        @toggleMusicList="musicListVisible = !musicListVisible"
        @showLyric="lyricVisible = true"
        @handlePlay="handlePlay"
        @handlePause="handlePause"
        @handlePrev="handlePrev"
        @handleNext="handleNext"
        @handleDurationChange="handleDurationChange"
      />
    </div>

    <MusicList
      :open="musicListVisible"
      @showSearch="musicSearchVisible = true"
      @close="musicListVisible = false"
    />

    <IDialog
      title="搜索音乐"
      :visible="musicSearchVisible"
      :zIndex="1002"
      @ok="musicSearchVisible = false"
      @cancel="musicSearchVisible = false"
    >
      <MusicSearch />
    </IDialog>

    <MusicFullScreen
      :open="lyricVisible"
      :musicCurrentTime="musicCurrentTime"
      :musicDuration="musicDuration"
      :prevMusic="prevMusic"
      :nextMusic="nextMusic"
      :musicMode="musicMode"
      @close="lyricVisible = false"
      @handlePlay="handlePlay"
      @handlePause="handlePause"
      @handlePrev="handlePrev"
      @handleNext="handleNext"
      @handleDurationChange="handleDurationChange"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch, nextTick, computed } from "vue";
import { DoubleLeftOutlined } from "@ant-design/icons-vue";
import axios from "axios";
import useStore from "@/store";
const { useMusicStore } = useStore();
import eventBus from "@/utils/eventBus";
import MusicCtrl from "./MusicCtrl.vue";
import MusicList from "./MusicList.vue";
import MusicSearch from "./MusicSearch.vue";
import MusicFullScreen from "./MusicFullScreen.vue";
import { getRandomIntInRange } from "@/utils/utils";

onMounted(() => {
  useMusicStore.settings.playing = false;
  if (useMusicStore.musicList) {
    useMusicStore.musicList.map((item, index) => {
      let audio = new Audio(item.url);
      audio.onerror = function () {
        // 音频无法播放，重新拉取链接
        fetchData(item);
      };

      // 加载音频
      audio.load();
    });
  }

  eventBus.on("playOrPause", () => {
    useMusicStore.settings.playing ? handlePause() : handlePlay();
  });
  eventBus.on("prevMusic", () => {
    handlePrev();
  });
  eventBus.on("nextMusic", () => {
    handleNext();
  });
  eventBus.on("volChange", (val) => {
    useMusicStore.settings.volume += val;
    if (useMusicStore.settings.volume < 0) {
      useMusicStore.settings.volume = 0;
    } else if (useMusicStore.settings.volume > 100) {
      useMusicStore.settings.volume = 100;
    }
  });
});

const fetchData = (item) => {
  axios
    .get(`https://xiaoapi.cn/API/yy_sq.php?msg=${item.name} ${item.singer}&n=1`)
    .then((res) => {
      const { code, url } = res.data;
      if (code === 200) {
        item["url"] = url;
      }
    });
};

const musicListVisible = ref(false);
const musicSearchVisible = ref(false);
const lyricVisible = ref(false);

const audioRef = ref(null);
const playingMusic = ref({});
watch(
  () => [useMusicStore.activeIndex, useMusicStore.settings.playing],
  () => {
    playingMusic.value = useMusicStore.musicList[useMusicStore.activeIndex] || {};
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
const musicCurrentTime = ref(0);
const musicDuration = ref(1000);

// 音频加载完成时
const audioLoaded = () => {
  musicDuration.value = parseInt(audioRef.value.duration);
  musicCurrentTime.value = audioRef.value.currentTime =
    useMusicStore.settings.currentTime;
};
// 音频播放时
const updateProgress = (e) => {
  const { currentTime, duration } = e.target;
  musicCurrentTime.value = useMusicStore.settings.currentTime = parseInt(currentTime);
  musicDuration.value = parseInt(duration);
};

// 播放列表显隐
const handleToggleMusicVisible = () => {
  useMusicStore.toggleVisible();
};

// 点击播放
const handlePlay = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  useMusicStore.settings.playing = true;
  audioRef.value.play();
};
// 点击暂停
const handlePause = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  useMusicStore.settings.playing = false;
  audioRef.value.pause();
};
// 上一首
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
// 播放上一首
const handlePrev = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  let prevIndex =
    useMusicStore.activeIndex === 0
      ? useMusicStore.musicList.length - 1
      : useMusicStore.activeIndex - 1;
  useMusicStore.playMusic(prevIndex);
};
// 下一首
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
// 播放下一首
const handleNext = () => {
  if (!useMusicStore.musicList.length || useMusicStore.activeIndex < 0) return;
  let nextIndex =
    useMusicStore.activeIndex === useMusicStore.musicList.length - 1
      ? 0
      : useMusicStore.activeIndex + 1;
  useMusicStore.playMusic(nextIndex);
};
// 播放结束或遇到错误时
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
const audioError = () => {
  console.log("播放出错");
};
// 进度被拖拽时
const handleDurationChange = (currentTime) => {
  useMusicStore.settings.currentTime = currentTime;
  if (audioRef.value) {
    nextTick(() => {
      audioRef.value.currentTime = currentTime;
    });
  }
};
// 播放模式
const musicMode = computed(() => {
  const modes = {
    listCycle: "列表循环",
    singleCycle: "单曲循环",
    randomPlay: "随机播放",
  };
  return modes[useMusicStore.settings.mode];
});
</script>

<style lang="less" scoped>
.music {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  .toggle-icon {
    position: absolute;
    width: 28px;
    height: 22px;
    line-height: 26px;
    text-align: center;
    right: 20px;
    background-color: var(--theme-bg-color-a8);
    color: var(--theme-text-color);
    transition: top 0.45s ease-in-out;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    &.up {
      top: -54px;
      .anticon {
        transform: rotate(90deg);
      }
    }
    &.down {
      top: -96px;
      .anticon {
        transform: rotate(-90deg);
      }
    }
    &:hover {
      .anticon {
        color: var(--primary-color);
      }
    }
  }
  .music-ctrl {
    position: absolute;
    height: 74px;
    width: 100%;
    bottom: -74px;
    background-color: var(--theme-bg-color-a8);
    transition: bottom 0.3s ease-in-out;
    &.show {
      bottom: 0;
    }
  }
}
</style>
