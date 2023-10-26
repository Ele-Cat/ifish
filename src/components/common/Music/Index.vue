<template>
  <div class="music">
    <div class="toggle-icon bf" :title="useMusicStore.visible ? '关闭播放器' : '打开播放器'" :class="[useMusicStore.visible ? 'down' : 'up' ]"  @click="handleToggleMusicVisible">
      <DoubleLeftOutlined />
    </div>
    <div class="music-ctrl bf" :class="[useMusicStore.visible ? 'show' : '' ]">
      <MusicCtrl />
    </div>

    <MusicList :open="musicListVisible" @close="musicListVisible = false" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import { DoubleLeftOutlined } from '@ant-design/icons-vue';
import useStore from "@/store";
const { useMusicStore } = useStore();
import MusicCtrl from './MusicCtrl.vue'
import MusicList from './MusicList.vue'

const handleToggleMusicVisible = () => {
  useMusicStore.toggleVisible();
}

const musicListVisible = ref(false);
watch(() => useMusicStore.visible, newVal => {
  if (newVal) {
    // if (!useMusicStore.musicList.length) {
    //   musicListVisible.value = true;
    // }
  }
}, {
  immediate: true,
})
const getTiangou = () => {
  let url= "https://xiaoapi.cn/API/yy.php?type=qq&msg=夜曲"
  // qq、kg、kw、wy、qqmv、kgmv

  // url = 'https://xiaoapi.cn/API/yy_sq.php?msg=夜曲&n=1'
  axios.get(url).then(res => {
    console.log('res: ', res);
  })
}

// getTiangou();
</script>

<style lang="less" scoped>
.music {
  position: fixed;
  bottom: 0;
  width: 100%;
  .toggle-icon {
    position: absolute;
    width: 28px;
    height: 22px;
    line-height: 26px;
    text-align: center;
    right: 20px;
    background-color: var(--theme-bg-color-a8);
    color: var(--theme-text-color);
    transition: top .45s ease-in-out;
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
    transition: bottom .3s ease-in-out;
    &.show {
      bottom: 0;
    }
  }
}
</style>