<template>
  <div class="word-games" :class="{preview: type === 'preview'}">
    <perfect-scrollbar class="scroll-bar">
      <div
        class="word-item"
        v-for="(item, index) in wordGames"
        :key="index"
        @click="handlePlayGame(item)"
      >
        <img
          :src="item.icon"
          onerror="this.src='./images/website.svg'"
          :alt="item.name"
        />
        <p>{{ item.label }}</p>
      </div>
    </perfect-scrollbar>
  </div>
  <IDialog
    :title="activeGame.label"
    :width="useAppStore.wordGames.width"
    :visible="dialogVisible"
    :zIndex="10010"
    wrapClassName="game-dialog"
    @cancel="dialogVisible = false"
  >
    <template #titleLink>
      <span class="title-link">
        <a href="javascript:;" class="link" title="全屏娱乐" @click="toggle">全屏</a>
        <a :href="activeGame.url" target="_blank" class="link" title="点击进入原站">进入原站</a>
        <a-space>
          窗口大小
          <a-input-number :min="480" v-model:value="useAppStore.wordGames.width" size="small" />*
          <a-input-number :min="360" v-model:value="useAppStore.wordGames.height" size="small" />
        </a-space>
      </span>
    </template>
    <a-spin :spinning="gameLoading" tip="加载中，请耐心等待...">
      <iframe ref="iframeRef" :src="activeGame.url" :style="{height: useAppStore.wordGames.height + 'px',backgroundColor: isFullscreen ? '#FFF' : 'transparent'}" frameborder="0"></iframe>
    </a-spin>
  </IDialog>
</template>

<script setup>
import { nextTick, reactive, ref } from "vue";
import { useFullscreen } from "@vueuse/core";
import useStore from "@/store";
const { useAppStore } = useStore();

const props = defineProps({
  type: {
    type: String,
    default: "use",
  }
})

const activeGame = ref({});
const dialogVisible = ref(false);
const gameLoading = ref(false);
const wordGames = reactive([
  {
    label: "小黑屋",
    icon: "https://qiujunya.com/adarkroom/favicon.ico",
    url: "http://doublespeakgames.github.io/adarkroom/?lang=zh_cn",
  },
  {
    label: "猫国建设者",
    icon: "https://img.zhuayuya.com/element_icon/tavg/maomao.png",
    url: "https://likexia.gitee.io/cat-zh/#",
  },
  {
    label: "偷偷钓个鱼",
    icon: "https://img.zhuayuya.com/element_icon/tavg/toutoudiaogeyu.png",
    url: "https://fishing.florastudio.app/",
  },
  {
    label: "钓鱼公司",
    icon: "https://img.zhuayuya.com/element_icon/tavg/diaoyulao.png",
    url: "https://gltyx.github.io/fish/fish/fish.html",
  },
  {
    label: "超级进化",
    icon: "	https://img.zhuayuya.com/element_icon/tavg/jinhua.png",
    url: "https://g8hh.github.io/evolve/",
  },
  {
    label: "模拟修仙",
    icon: "https://img.zhuayuya.com/element_icon/tavg/monixiuxian.png",
    url: "https://cultivation-simulato.g8hh.com.cn/",
  },
  {
    label: "汉字炼金术",
    icon: "https://img.zhuayuya.com/element_icon/tavg/hanzilianjinshu.png",
    url: "https://g8hh.github.io/chinese-character-alchemy/",
  },
  {
    label: "激燃太空",
    icon: "https://img.zhuayuya.com/element_icon/tavg/jirantaikong.png",
    url: "https://g1tyx.github.io/the-ignited-space/",
  },
  {
    label: "矿石",
    icon: "	https://img.zhuayuya.com/element_icon/tavg/kuangshi.png",
    url: "https://g1tyx.github.io/into-the-quarry/",
  },
  {
    label: "能源收集",
    icon: "https://img.zhuayuya.com/element_icon/tavg/nengyuanshouji.png",
    url: "https://gityxs.github.io/planet-fall-idle/",
  },
]);

const iframeRef = ref(null);
const { isFullscreen, toggle } = useFullscreen(iframeRef);
const handlePlayGame = (game) => {
  activeGame.value = {};
  dialogVisible.value = true;
  gameLoading.value = true;
  activeGame.value = game;
  nextTick(() => {
    iframeRef.value.addEventListener("load", () => {
      gameLoading.value = false;
    })
  })
};
</script>

<style lang="less" scoped>
.word-games {
  width: 100%;
  height: 100%;
  padding: 6px;
  .scroll-bar {
    height: 100%;
  }
  .word-item {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    padding: 2px;
    border-radius: 18px;
    transition: all 0.3s;
    img {
      width: 32px;
      border-radius: 50%;
      margin-right: 6px;
    }
    &:hover {
      background-color: var(--primary-color);
      color: #f8fafc;
    }
  }
  &.preview {
    padding: 0;
    height: 120px;
    .word-item {
      pointer-events: none;
    }
  }
}
</style>

<style lang="less">
.game-dialog {
  .title-link {
    display: flex;
    align-items: center;
    .link {
      font-weight: normal;
      font-size: 14px;
      margin-left: 16px;
    }
    .ant-space {
      margin-left: 16px;
      .ant-input-number {
        width: 66px;
      }
    }
  }
  .ant-modal-close {
    top: 7px;
    right: 12px;
  }
  .ant-modal-header {
    height: 32px;
    line-height: 32px;
    padding: 4px 0 0 12px;
    margin-bottom: 0;
    border-bottom: 1px solid #CCC;
  }
  .ant-modal-content {
    padding: 0 !important;
    .ant-modal-body,
    iframe {
      width: 100%;
      border-radius: 8px;
      background-color: #FFF;
    }
  }
}
</style>
