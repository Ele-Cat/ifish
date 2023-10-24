<template>
  <div class="apps-box">
    <div class="app bf" v-for="app in apps" :key="app.value" @click="handleAppClick(app)">
      <img :src="app.icon" alt="">
      <p>{{ app.label }}</p>
    </div>
    <!-- https://www.sojson.com/other/relax.html -->
    <!-- <video src=""></video> -->

    <!-- https://api.vvhan.com/api/ip -->

    <!-- 随机一句一言API接口 https://api.vvhan.com/api/ian -->
    <!-- 随机笑话API接口 https://api.vvhan.com/api/joke -->
    <!-- 随机一句情话API接口 https://api.vvhan.com/api/love -->
    <!-- 随机一句骚话API接口 https://api.vvhan.com/api/sao -->
    <!-- 美图API接口 https://api.vvhan.com/api/mobil.girl?type=json -->
    <!-- https://api.vvhan.com/api/girl?type=json -->

    <IDialog :title="dialogTitle" :visible="dialogVisible" @ok="dialogVisible = false" @cancel="dialogVisible = false">
      <component :is="activeDialogComponent" />
    </IDialog>
    <a-image :width="200" style="width:0;height:0" :preview="{
      visible: appImageVisible,
      onVisibleChange: setImagePreviewVisible,
    }" :src="appImageUrl" />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
const IDialog = defineAsyncComponent(() => import('@/components/libs/IDialog.vue'));
const Tiangou = defineAsyncComponent(() => import('./components/Tiangou.vue'));

const apps = ref([
  {
    label: "摸鱼日报",
    value: "moyu",
    icon: "./images/apps/moyu.png",
    // imageUrl: "https://api.vvhan.com/api/moyu",
    imageUrl: "https://dayu.qqsuu.cn/moyuribao/apis.php",
  },
  {
    label: "60s读懂世界",
    value: "60s",
    icon: "./images/apps/60s.png",
    imageUrl: "https://api.vvhan.com/api/60s",
  },
  {
    label: "舔狗日记",
    value: "tiangou",
    icon: "./images/apps/tiangou.png",
    component: Tiangou,
  }
])

const dialogVisible = ref(false);
const appImageVisible = ref(false);
const appImageUrl = ref("");
const dialogTitle = ref("");
const activeDialogComponent = ref(null);
const handleAppClick = (app) => {
  console.log(app);
  if (["moyu", "60s"].includes(app.value)) {
    appImageUrl.value = app.imageUrl;
    setImagePreviewVisible(true);
  } else if (["tiangou"].includes(app.value)) {
    activeDialogComponent.value = app.component;
    dialogTitle.value = app.label;
    dialogVisible.value = true;
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
  :deep(.ant-image) {
    width: 0 !important;
  }
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