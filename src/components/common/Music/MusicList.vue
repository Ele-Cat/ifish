<template>
  <a-drawer width="80vw" title="播放列表" placement="right" :open="open" @close="close" rootClassName="disclaimers-root">
    <div class="music-list">
      <a-input @click="dialogVisible = true" readonly placeholder="搜索">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
      
      <div>
        播放列表
        {{ useMusicStore.musicList }}
      </div>
    </div>
  </a-drawer>
  <IDialog title="搜索音乐" :visible="dialogVisible" @ok="dialogVisible = false" @cancel="dialogVisible = false">
    <MusicSearch />
  </IDialog>
</template>

<script setup>
import { ref } from "vue";
import { SearchOutlined } from '@ant-design/icons-vue';
import useStore from '@/store';
const { useMusicStore } = useStore();
import MusicSearch from './MusicSearch.vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['close']);

const close = () => {
  emit("close");
}

const dialogVisible = ref(false);
</script>

<style lang="less" scoped>
.music-list {
  .search-box, .ant-input {
    cursor: pointer;
  }
}
</style>

<style lang="less">
.disclaimers-root {
  .ant-drawer-content-wrapper {
    max-width: 500px;
  }
}
</style>