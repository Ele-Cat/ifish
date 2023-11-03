<template>
  <div ref="contextMenuRef" class="custom-menu bf" v-show="useContextMenuStore.menuVisible"
    :style="{ top: useContextMenuStore.menuTop + 'px', left: useContextMenuStore.menuLeft + 'px' }" @contextmenu="e => e.preventDefault()">
    <ul>
      <li v-for="contextMenu in contextMenuList" :key="contextMenu.type" :class="{ 'border-top': contextMenu.borderTop, 'red': contextMenu.value === 'delete' }"
        @click.stop="handleMenuClick(contextMenu.value)">{{ contextMenu.label }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import useStore from '@/store';
const { useContextMenuStore, useSystemStore } = useStore();
import { useElementBounding } from '@vueuse/core';
import { toast } from "@/utils/feedback";
import eventBus from '@/utils/eventBus';

const contextMenuRef = ref(null);

// 点击菜单条目
const handleMenuClick = (type) => {
  if (type === "settings") {
    eventBus.emit("openSettings");
  } else if (type === "randomBg") {
    // 输出分类id[36(4K专区)|6(美女模特)|30(爱情美图)|9(风景大片)|15(小清新)|26(动漫卡通)|11(明星风尚)|14(萌宠动物)|5(游戏壁纸)|12(汽车天下)|10(炫酷时尚)|29(月历壁纸)|7(影视剧照)|13(节日美图)|22(军事天地)|16(劲爆体育)|18(BABY秀)|35(文字控)]
    // https://api.7585.net.cn/360/api.php?return=json
    axios.get(`https://api.7585.net.cn/360/api.php?return=json`).then(res => {
      toast({
        content: "壁纸切换成功！",
      });
      useSystemStore.settings.bg = {
        url: res.data.imgurl,
        type: "image"
      }
    })
  } else if (["addApps", "layout", "edit"].includes(type)) {
    toast({
      type: "warning",
      content: "开发中...",
    });
  } else if (type === "delete") {
    toast({
      type: "warning",
      content: "开发中...",
    });
  }
  useContextMenuStore.activeType = "";
  useContextMenuStore.menuVisible = false;
}

// 根据点击的对象展示对应的菜单列表
const contextMenuList = ref([])

watch(() => useContextMenuStore.activeType, (newVal) => {
  if (newVal) {
    // const { x, y, top, right, bottom, left, width, height } = useElementBounding(contextMenuRef);
    // console.log('x, y, top, right, bottom, left, width, height: ', x, y, top, right, bottom, left, width, height);
    if (newVal === "page") {
      if (useSystemStore.activeMenu === "nav") {
        contextMenuList.value = [
          {
            label: "添加导航",
            value: "addApps",
          },
          {
            label: "随机壁纸",
            value: "randomBg",
          },
          {
            label: "打开设置",
            value: "settings",
            borderTop: true,
          },
        ]
      } else {
        contextMenuList.value = [
          {
            label: "随机壁纸",
            value: "randomBg",
          },
          {
            label: "打开设置",
            value: "settings",
            borderTop: true,
          },
        ]
      }
    } else if (newVal === "app") {
      contextMenuList.value = [
        {
          label: "布局",
          value: "layout",
        },
        {
          label: "修改",
          value: "edit",
        },
        {
          label: "删除",
          value: "delete",
          borderTop: true,
        },
      ]
    }
  }
})
</script>

<style lang="less" scoped>
.custom-menu {
  position: fixed;
  top: 0;
  left: 0;
  // width: 144px;
  // background-color: #fff;
  background-color: var(--theme-bg-color-a8);
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
  overflow: hidden;

  >ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 12px;
    color: #000000;
    color: var(--theme-text-color);
    // border: 1px solid #C4C4C4;

    li {
      height: 28px;
      line-height: 28px;
      padding: 0 20px;
      overflow: hidden;
      &.red {
        color: #ff4d4f;
      }

      &:hover {
        background-color: #E2E2E2;
        background-color: var(--theme-bg-color-a8);
      }
    }

    .border-top {
      border-top: 1px solid #EDEDED;
    }
  }

  &.show {
    display: block;
  }
}
</style>