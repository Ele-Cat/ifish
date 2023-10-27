<template>
  <a-drawer width="80vw" title="播放列表" placement="right" :open="open" @close="close" rootClassName="disclaimers-root">
    <div class="music-list">
      播放列表
    </div>
  </a-drawer>
</template>

<script setup>
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

// 最新音乐排行榜top100 https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923
// 随机推荐 https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472

// 专辑封面 http://imgcache.qq.com/music/photo/album_300/17/300_albumpic_8217_0.jpg
</script>

<style lang="less" scoped>
.music-list {
}
</style>

<style lang="less">
.disclaimers-root {
  .ant-drawer-content-wrapper {
    max-width: 500px;
  }
}
</style>