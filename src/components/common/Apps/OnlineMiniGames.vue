<template>
  <div
    class="online-mini-game"
    :class="{ preview: type === 'preview' }"
    @click="handlePlayGame"
  >
    <div class="ctrl-game">
      <LeftOutlined @click.stop="handlePN(-1)" />
      <RightOutlined @click.stop="handlePN(1)" />
    </div>
    <img :src="activeGame.icon || renderIcon(activeGame.url)" alt="" />
    <div class="active-game">
      <p>{{ activeGame.label }}</p>
      <p>点击开始游戏</p>
    </div>
  </div>
  <IDialog
    :title="`在线小游戏 - ${activeGame.label}`"
    :width="useAppStore.miniGames.width"
    :visible="dialogVisible"
    :zIndex="10010"
    wrapClassName="game-dialog"
    @cancel="dialogVisible = false"
  >
    <template #titleLink>
      <span class="title-link">
        <a
          href="javascript:;"
          class="link"
          title="全屏娱乐"
          @click="gameListVisible = !gameListVisible"
          >{{ gameListVisible ? "隐藏" : "显示" }}游戏列表</a
        >
        <a href="javascript:;" class="link" title="全屏娱乐" @click="toggle">全屏</a>
        <a href="javascript:;" class="link" title="点击进入原站" @click="toOrigin"
          >进入原站</a
        >
        <a-space>
          窗口大小
          <a-input-number
            :min="480"
            v-model:value="useAppStore.miniGames.width"
            size="small"
          />*
          <a-input-number
            :min="360"
            v-model:value="useAppStore.miniGames.height"
            size="small"
          />
        </a-space>
      </span>
    </template>
    <div class="game-box">
      <perfect-scrollbar
        v-if="gameListVisible"
        class="scroll-bar"
        :style="{
          height: useAppStore.miniGames.height + 'px',
        }"
      >
        <div class="game-list">
          <p
            class="game-item"
            :class="{ active: activeIndex === index }"
            v-for="(item, index) in gameList"
            :key="index"
            @click="activeIndex = index"
          >
            {{ item.label }}
          </p>
        </div>
      </perfect-scrollbar>
      <a-spin :spinning="gameLoading" tip="加载中，请耐心等待...">
        <iframe
          ref="iframeRef"
          :src="activeGame.url"
          :style="{
            height: useAppStore.miniGames.height + 'px',
            backgroundColor: isFullscreen ? '#FFF' : 'transparent',
          }"
          frameborder="0"
        ></iframe>
      </a-spin>
    </div>
  </IDialog>
</template>

<script setup>
import { computed, reactive, ref, nextTick } from "vue";
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
import { useFullscreen } from "@vueuse/core";
import useStore from "@/store";
const { useAppStore } = useStore();
import { renderIco } from "@/utils/utils";

const props = defineProps({
  type: {
    type: String,
    default: "use",
  },
});

// https://hellokit.com.cn/web/game

const activeIndex = ref(0);
const gameListVisible = ref(true);
const gameList = reactive([
  {
    label: "俄罗斯方块",
    icon: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",
    url: "http://farter.cn/tetr.js/",
  },
  {
    label: "简易华容道",
    icon: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",
    url: "https://sliding.toys/",
  },
  {
    label: "迷宫大全",
    icon: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",
    url: "https://maze.toys/",
  },
  {
    label: "球归色条",
    url: "http://looptap.top",
  },
  {
    label: "躲避小球",
    url: "http://guiduo.top",
  },
  {
    label: "切方块",
    icon:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/cut-the-box/cube.png",
    url: "https://hellokit.com.cn/cut-the-box",
  },
  {
    label: "盖塔楼",
    icon:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/build-tower/box-icon.png",
    url: "https://hellokit.com.cn/build-tower",
  },
  {
    label: "圣诞老人过桥",
    icon: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",
    url: "https://hellokit.com.cn/bridge",
  },
  {
    label: "闯关小游戏",
    icon: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",
    url: "https://hellokit.com.cn/barrier-game",
  },
  {
    label: "2048",
    icon: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/2048/2048.jpeg",
    url: "https://hellokit.com.cn/2048",
  },
  {
    label: "魔方",
    icon: "https://img.zhuayuya.com/icon/mofang.webp",
    url: "https://www.zhuayuya.com/cube/index.html",
  },
  {
    label: "扫雷",
    icon: "https://img.zhuayuya.com/icon/saolei.webp",
    url: "https://www.zhuayuya.com/saolei_tow/index.html",
  },
  {
    label: "数独",
    icon: "https://img.zhuayuya.com/icon/shudu.webp",
    url: "https://www.zhuayuya.com/sudoku_tow/index.html",
  },
  {
    label: "西瓜插口红",
    icon: "https://img.zhuayuya.com/images/y69.png",
    url: "https://game.zhuayuya.com/yxmb/69/index.html",
  },
  {
    label: "贪吃蛇",
    icon: "https://img.zhuayuya.com/images/y14.png",
    url: "https://game.zhuayuya.com/yxmb/14/index.html",
  },
  {
    label: "中国象棋",
    icon: "https://img.zhuayuya.com/images/y65.png",
    url: "https://game.zhuayuya.com/yxmb/65/index.html",
  },
  {
    label: "射箭游戏",
    icon: "https://img.zhuayuya.com/images/y30.png",
    url: "https://game.zhuayuya.com/yxmb/30/index.html",
  },
  {
    label: "最强眼力",
    icon: "https://img.zhuayuya.com/images/y36.png",
    url: "https://game.zhuayuya.com/yxmb/36/index.html",
  },
  {
    label: "飞机大战",
    icon: "https://img.zhuayuya.com/images/y31.png",
    url: "https://game.zhuayuya.com/yxmb/31/index.html",
  },
  {
    label: "维京战争",
    icon: "https://img.zhuayuya.com/images/y1.png",
    url: "https://game.zhuayuya.com/yxmb/1/index.html",
  },
  {
    label: "3D拳击",
    icon: "https://img.zhuayuya.com/images/y58.png",
    url: "https://game.zhuayuya.com/yxmb/58/index.html",
  },
  {
    label: "线条生存",
    icon: "https://img.zhuayuya.com/images/y19.png",
    url: "https://game.zhuayuya.com/yxmb/19/index.html",
  },
  {
    label: "架子鼓",
    url: "http://guozhivip.com/jzg/",
  },
  {
    label: "对称绘画",
    url: "http://weavesilk.com",
  },
  {
    label: "流星雨",
    url: "https://www.meteorshowers.org",
  },
  {
    label: "孔明灯",
    url: "https://henxiangsi.com/",
  },
  {
    label: "3d飞行兔子",
    icon: "https://img.zhuayuya.com/images/y72.png",
    url: "https://game.zhuayuya.com/yxmb/72/index.html",
  },
]);
const renderIcon = computed(() => (url) => {
  return renderIco(url);
})
const activeGame = computed(() => {
  return gameList[activeIndex.value];
});
const dialogVisible = ref(false);
const gameLoading = ref(false);

const handlePN = (val) => {
  activeIndex.value += val;
  if (activeIndex.value < 0) {
    activeIndex.value = gameList.length - 1;
  }
  if (activeIndex.value > gameList.length - 1) {
    activeIndex.value = 0;
  }
};

const iframeRef = ref(null);
const { isFullscreen, toggle } = useFullscreen(iframeRef);
const handlePlayGame = () => {
  dialogVisible.value = true;
  // gameLoading.value = true;
  nextTick(() => {
    iframeRef.value.addEventListener("load", () => {
      gameLoading.value = false;
    });
  });
};
const toOrigin = () => {
  window.open(activeGame.value.url, "_blank");
};
</script>

<style lang="less" scoped>
.online-mini-game {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f093ff 0%, #c13dff 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .ctrl-game {
    position: absolute;
    width: 120%;
    left: -10%;
    opacity: 0;
    top: 8px;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s;
    .anticon {
      display: flex;
      width: 26px;
      justify-content: center;
      color: #fff;
      height: 26px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 18px;
      &:hover {
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
  img {
    position: absolute;
    display: block;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    top: 12%;
    left: 50%;
    margin-left: -29px;
    box-shadow: 0 4px 26px rgba(0, 0, 0, 0.26);
    background-color: #fff;
    z-index: 99;
  }
  .active-game {
    position: absolute;
    width: 88%;
    height: 66%;
    margin: 0 auto;
    bottom: 4%;
    left: 6%;
    border-radius: 16px;
    background: linear-gradient(180deg, #f3a6ff 0%, #ca56ff 100%);
    padding: 36px 0 6px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      &:nth-of-type(1) {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  &:hover {
    .ctrl-game {
      width: 90%;
      left: 5%;
      opacity: 1;
    }
  }
  &.preview {
    border-radius: 8px;
    pointer-events: none;
    .active-game {
      p {
        &:nth-of-type(2) {
          display: none;
        }
      }
    }
  }
}
.game-box {
  display: flex;
  .game-list {
    width: 160px;
    min-height: 100%;
    border-right: 1px solid var(--primary-color);
    background-color: var(--theme-bg-color-a8);
    .game-item {
      height: 36px;
      line-height: 36px;
      padding: 0 12px;
      // background-color: var(--grey-4);
      border-bottom: 1px solid var(--primary-color);
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.active,
      &:hover {
        background-color: var(--primary-color);
        color: #fff;
      }
    }
  }
  .ant-spin-nested-loading {
    flex: 1;
  }
  iframe {
    border-radius: 0 !important;
  }
}
</style>
