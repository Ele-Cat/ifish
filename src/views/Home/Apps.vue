<template>
  <div class="apps-box">
    <div class="app" v-for="app in apps" :key="app.value" @click="handleAppClick(app)">
      <div class="app-inner">
        <template v-if="!app.isComponent">
          <img :src="app.icon" alt="">
          <p :title="app.label">{{ app.label }}</p>
        </template>
        <component v-else :is="app.component" />
      </div>
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

    <!-- 美女视频 https://www.nihaowua.com/v/video.php?_t=0.6096279598934722 -->
    <!-- 美女写真 https://api.moyuduck.com/random/xiezhen -->

    <img :src="imageUrl" v-for="imageUrl in imageUrls" :key="imageUrl" v-show="false" alt="">
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
const Zhibuzhi = defineAsyncComponent(() => import('./components/Zhibuzhi.vue'));
const Gongde = defineAsyncComponent(() => import('./components/Gongde.vue'));

const apps = ref([
  {
    label: "摸鱼日报",
    value: "moyu",
    icon: "./images/apps/moyu.png",
    imageUrl: "https://api.vvhan.com/api/moyu",
    // imageUrl: "https://dayu.qqsuu.cn/moyuribao/apis.php",
  },
  {
    label: "60s读懂世界",
    value: "60s",
    icon: "./images/apps/60s.png",
    imageUrl: "https://api.vvhan.com/api/60s",
    // imageUrl: "https://v2.alapi.cn/api/zaobao?token=nWFMxBYTIMdmOKox&format=image",
    // imageUrl: "http://dwz.2xb.cn/zaob",
  },
  {
    label: "舔狗日记",
    value: "tiangou",
    icon: "./images/apps/tiangou.png",
    component: Tiangou,
  },
  {
    label: "这班上的值不值",
    value: "zhibuzhi",
    icon: "./images/apps/zhibuzhi.png",
    component: Zhibuzhi,
  },
  {
    label: "功德+1",
    value: "gongde",
    isComponent: true,
    component: Gongde,
  },
  // 摸鱼日报API https://dayu.qqsuu.cn/moyuribao/apis.php
  // 摸鱼日历API https://dayu.qqsuu.cn/moyurili/apis.php
  // 明星八卦API https://dayu.qqsuu.cn/mingxingbagua/apis.php
  // 内涵段子API https://dayu.qqsuu.cn/neihanduanzi/apis.php
  // 新闻简报API https://dayu.qqsuu.cn/weiyujianbao/apis.php
  // 情感花园API https://dayu.qqsuu.cn/qingganhuayuan/apis.php
  // 星座运势API https://dayu.qqsuu.cn/xingzuoyunshi/apis.php
  // 摸鱼日报美女视频版API https://dayu.qqsuu.cn/moyuribaoshipin/apis.php
])

const imageUrls = ref([])
apps.value.map(app => {
  if (app.imageUrl) {
    imageUrls.value.push(app.imageUrl)
  }
})

const dialogVisible = ref(false);
const appImageVisible = ref(false);
const appImageUrl = ref("");
const dialogTitle = ref("");
const activeDialogComponent = ref(null);
const handleAppClick = (app) => {
  // console.log(app);
  if (["moyu", "60s"].includes(app.value)) {
    appImageUrl.value = app.imageUrl;
    setImagePreviewVisible(true);
  } else if (["tiangou", "zhibuzhi"].includes(app.value)) {
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
  flex-wrap: wrap;
  padding: 20px 0;
  :deep(.ant-image) {
    width: 0 !important;
  }
  .app {
    display: flex;
    flex-wrap: wrap;
    width: 10%;
    padding: 6px 6px 10px;
    cursor: pointer;
    .app-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 6px;
      border-radius: 10px;
      background-color: var(--theme-bg-color-a8);
      transition: all .3s ease-in-out;
      img {
        max-width: 100%;
        max-height: 120px;
        object-fit: contain;
        filter: brightness(1);
      }
      p {
        max-width: 80%;
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
        color: var(--primary-color);
      }
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