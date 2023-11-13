<template>
  <div class="music-box">
    <img class="cover" src="https://y.qq.com/music/photo_new/T002R300x300M000004BLMpS3oSu0b_2.jpg" alt="">
    <div class="info">
      王杰 - 一无所有 (是否我真的一无所有)
    </div>
    <div class="ctrl">
      <a-tooltip :title="`上一首`">
        <VerticalRightOutlined />
      </a-tooltip>
      <a-tooltip :title="useMusicStore.settings.playing ? '点击暂停' : '点击播放'">
        <PlayCircleOutlined class="play" @click="useMusicStore.settings.playing = true" v-if="!useMusicStore.settings.playing" />
        <PauseCircleOutlined class="pause" @click="useMusicStore.settings.playing = false" v-else />
      </a-tooltip>
      <a-tooltip :title="`下一首`">
        <VerticalLeftOutlined />
      </a-tooltip>
      <a-tooltip :title="`播放列表`">
        <MenuUnfoldOutlined @click="handleShowMusicList" />
      </a-tooltip>

      <div class="mode">
        <a-tooltip :title="`切换模式`">
          <i class="ifishfont ifish-musicListLoop" title="列表循环" v-if="useMusicStore.settings.mode === 'listCycle'" @click="handleChangeMode('singleCycle')"></i>
          <i class="ifishfont ifish-musicSingleCycle" title="单曲循环" v-if="useMusicStore.settings.mode === 'singleCycle'" @click="handleChangeMode('randomPlay')"></i>
          <i class="ifishfont ifish-musicRandomPlay" title="随机播放" v-if="useMusicStore.settings.mode === 'randomPlay'" @click="handleChangeMode('listCycle')"></i>
        </a-tooltip>
      </div>
      <div class="volume" :title="`当前音量：${useMusicStore.settings.volume}`">
        <i class="ifishfont ifish-volumeDisable" v-if="useMusicStore.settings.mute || useMusicStore.settings.volume === 0" @click="handleToggleMute(true)"></i>
        <i class="ifishfont ifish-volumeLow" v-else-if="useMusicStore.settings.volume >= 0 && useMusicStore.settings.volume < 30" @click="handleToggleMute(false)"></i>
        <i class="ifishfont ifish-volumeMiddle" v-else-if="useMusicStore.settings.volume >= 30 && useMusicStore.settings.volume < 60" @click="handleToggleMute(false)"></i>
        <i class="ifishfont ifish-volumeHigh" v-else @click="handleToggleMute(false)"></i>
        <a-slider class="volume-slider" :min="0" :max="100" v-model:value="useMusicStore.settings.volume" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { PlayCircleOutlined, PauseCircleOutlined, VerticalRightOutlined, VerticalLeftOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
const emit = defineEmits(['showMusicList']);
import useStore from '@/store';
const { useMusicStore } = useStore();

// https://xiaoapi.cn/API/yy_sq.php?msg=夜曲&type=json&n=1

const handleShowMusicList = () => {
  emit("showMusicList")
}

const handleChangeMode = (mode) => {
  useMusicStore.changeMode(mode);
}
const handleToggleMute = (flag) => {
  useMusicStore.toggleMute(flag);
}
</script>

<style lang="less" scoped>
.music-box {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  .cover {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--theme-text-color);
  }
  .info {
    flex: 1;
    margin: 0 12px;
  }
  .ctrl {
    font-size: 22px;
    display: flex;
    align-items: baseline;
    .anticon {
      margin: 0 8px;
      cursor: pointer;
      &:hover {
        color: var(--primary-color);
      }
    }
    .play, .pause {
      font-size: 32px;
    }
    .mode, .volume {
      margin: 0 8px;
      cursor: pointer;
      position: relative;
      top: -3px;
      i {
        font-size: 24px;
      }
      &:hover {
        color: var(--primary-color);
      }
    }
    .mode {
      top: -1px;
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
</style>