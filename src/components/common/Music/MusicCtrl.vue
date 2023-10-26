<template>
  <div class="music-box">
    <img class="cover" src="/images/apps/tiangou.jpg" alt="">
    <div class="info">
      舔狗 - 舔到最后一无所有
    </div>
    <div class="ctrl">
      <VerticalRightOutlined />
      <PlayCircleOutlined />
      <PauseCircleOutlined />
      <VerticalLeftOutlined />
      <MenuUnfoldOutlined />
    </div>
  </div>
</template>

<script setup>
import { PlayCircleOutlined, PauseCircleOutlined, VerticalRightOutlined, VerticalLeftOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

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
  }
  .info {
    flex: 1;
    margin: 0 12px;
  }
  .ctrl {
    font-size: 22px;
  }
}
</style>