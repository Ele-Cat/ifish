<template>
  <div class="music">
    <div
      class="toggle-icon bf"
      :title="useMusicStore.visible ? '关闭播放器' : '打开播放器'"
      :class="[useMusicStore.visible ? 'down' : 'up']"
      @click="handleToggleMusicVisible"
    >
      <DoubleLeftOutlined />
    </div>
    <div class="music-ctrl bf" :class="[useMusicStore.visible ? 'show' : '']">
      <MusicCtrl
        @showSearch="showSearchF"
        @toggleMusicList="musicListVisible = !musicListVisible"
      />
    </div>

    <MusicList
      :open="musicListVisible"
      @showSearch="showSearchF"
      @close="musicListVisible = false"
    />

    <IDialog
      title="搜索音乐"
      :visible="dialogVisible"
      :zIndex="1002"
      @ok="dialogVisible = false"
      @cancel="dialogVisible = false"
    >
      <MusicSearch />
    </IDialog>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { DoubleLeftOutlined } from "@ant-design/icons-vue";
import useStore from "@/store";
const { useMusicStore } = useStore();
import MusicCtrl from "./MusicCtrl.vue";
import MusicList from "./MusicList.vue";
import MusicSearch from "./MusicSearch.vue";

onMounted(() => {
  useMusicStore.settings.playing = false;
});

const handleToggleMusicVisible = () => {
  useMusicStore.toggleVisible();
};

const musicListVisible = ref(false);
watch(
  () => useMusicStore.visible,
  (newVal) => {
    if (newVal) {
      // if (!useMusicStore.musicList.length) {
      //   musicListVisible.value = true;
      // }
    }
  },
  {
    immediate: true,
  }
);

const dialogVisible = ref(false);
const showSearchF = () => {
  dialogVisible.value = true;
};
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
      top: -86px;
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
    height: 64px;
    width: 100%;
    bottom: -64px;
    background-color: var(--theme-bg-color-a8);
    transition: bottom 0.3s ease-in-out;
    &.show {
      bottom: 0;
    }
  }
}
</style>
