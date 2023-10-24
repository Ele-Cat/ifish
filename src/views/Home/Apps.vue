<template>
  <div class="apps-box">
    <div class="app bf" v-for="app in apps" :key="app.value" @click="handleAppClick(app)">
      <img :src="app.icon" alt="">
      <p>{{ app.label }}</p>
    </div>
    <!-- <img src="https://api.vvhan.com/api/moyu" alt=""> -->
    <!-- https://www.sojson.com/other/relax.html -->
    <!-- <video src=""></video> -->

    <!-- 60s读懂世界 -->
    <!-- 图片 https://api.vvhan.com/api/60s -->
    <!-- 简报 https://api.qqsuu.cn/api/dm-60s?type=json -->
    <!-- 详细 https://www.zhihu.com/api/v4/columns/c_1261258401923026944/items -->
    <IDialog :visible="dialogVisible" @ok="dialogVisible = false" @cancel="dialogVisible = false"></IDialog>
    <a-image :width="200" :style="{ display: 'none' }" :preview="{
      visible: appImageVisible,
      onVisibleChange: setImagePreviewVisible,
    }" :src="appImageUrl" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IDialog from '@/components/libs/IDialog.vue';

const apps = ref([
  {
    label: "摸鱼日报",
    value: "moyu",
    icon: "./images/apps/moyu.png",
    imageUrl: "https://api.vvhan.com/api/moyu",
  },
  {
    label: "60s读懂世界",
    value: "60s",
    icon: "./images/apps/60s.png",
    imageUrl: "https://api.vvhan.com/api/60s",
  }
])

const dialogVisible = ref(false);
const appImageVisible = ref(false);
const appImageUrl = ref("");
const handleAppClick = (app) => {
  console.log(app);
  // dialogVisible.value = true;
  if (["moyu", "60s"].includes(app.value)) {
    appImageUrl.value = app.imageUrl;
    setImagePreviewVisible(true);
  }
}

const setImagePreviewVisible = value => {
  appImageVisible.value = value;
};
</script>

<style lang="less" scoped>
.apps-box {
  display: flex;
  padding: 20px 0;

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10%;
    background-color: var(--theme-bg-color-a8);
    padding: 6px 6px 10px;
    margin: 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    img {
      max-width: 100%;
      max-height: 120px;
      filter: brightness(1);
    }

    p {
      font-size: 12px;
      margin-top: 4px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:hover {
      box-shadow: 0 0 15px var(--theme-bg-color-a8);
      transform: translateY(-5px);
    }
  }
}

@media screen and (max-width: 1200px) {
  .apps-box {
    .app {
      width: 12.5%;
    }
  }
}

@media screen and (max-width: 870px) {
  .apps-box {
    .app {
      width: 20%;
    }
  }
}

@media screen and (max-width: 640px) {
  .apps-box {
    .app {
      width: 33.33%;
    }
  }
}
</style>