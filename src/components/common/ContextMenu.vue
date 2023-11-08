<template>
  <div ref="contextMenuRef" class="custom-menu bf" v-show="useContextMenuStore.menuVisible"
    :style="{ top: useContextMenuStore.menuTop + 'px', left: useContextMenuStore.menuLeft + 'px' }" @contextmenu="e => e.preventDefault()">
    <ul>
      <li 
        v-for="contextMenu in contextMenuList" 
        :key="contextMenu.value" 
        :class="{ 'border-top': contextMenu.borderTop, 'red': contextMenu.value === 'delete', 'layout-li': contextMenu.value === 'layout' }"
        @click.stop="handleMenuClick(contextMenu.value)">
        {{ contextMenu.label }}<CaretRightOutlined class="caret-right" v-if="contextMenu.value === 'layout'" />
        <ul class="layout-box bf" v-if="contextMenu.value === 'layout'">
          <li v-for="item in appLayout" @click="handleEditLayout(item)" :class="{active: liActive(item)}" :key="item.label">{{ item.label }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { CaretRightOutlined } from '@ant-design/icons-vue';
import axios from 'axios';
import useStore from '@/store';
const { useContextMenuStore, useSystemStore, useAppStore } = useStore();
import { useElementBounding } from '@vueuse/core';
import { toast } from "@/utils/feedback";
import { appLayout } from "@/utils/enums";
import eventBus from '@/utils/eventBus';

const contextMenuRef = ref(null);

// 点击菜单条目
const handleMenuClick = (type) => {
  const { id } = useContextMenuStore.activeApp;
  if (type === "addApps") {
    eventBus.emit("addApps");
  } else if (type === "randomBg") {
    // 输出分类id[36(4K专区)|6(美女模特)|30(爱情美图)|9(风景大片)|15(小清新)|26(动漫卡通)|11(明星风尚)|14(萌宠动物)|5(游戏壁纸)|12(汽车天下)|10(炫酷时尚)|29(月历壁纸)|7(影视剧照)|13(节日美图)|22(军事天地)|16(劲爆体育)|18(BABY秀)|35(文字控)]
    // https://api.7585.net.cn/360/api.php?return=json
    axios.get(`https://api.7585.net.cn/360/api.php?return=json`).then(res => {
      toast({
        content: "壁纸切换成功！",
      });
      useSystemStore.settings.wallpaper.url = res.data.imgurl
      useSystemStore.settings.wallpaper.type = "image"
    })
  } else if (type === "settings") {
    eventBus.emit("openSettings");
  } else if (type === "edit") {
    toast({
      type: "warning",
      content: "开发中...",
    });
  } else if (type === "delete") {
    useAppStore.lists.splice(useAppStore.lists.findIndex(app => app.id == id), 1)
  }
  useContextMenuStore.activeApp = {}; 
  useContextMenuStore.menuVisible = false;
}

const liActive = (item) => {
  const activeApp = useContextMenuStore.activeApp
  if (activeApp && activeApp.gridSize) {
    return activeApp?.gridSize[0] === item?.value[0] && activeApp?.gridSize[1] === item?.value[1]
  } else {
    return false;
  }
}
const handleEditLayout = (item) => {
  useAppStore.lists.map(app => {
    if (app.id === useContextMenuStore.activeApp.id) {
      app.gridSize = item.value;
    }
  })
  // useContextMenuStore.activeApp = {};
  useContextMenuStore.menuVisible = false;
}

// 根据点击的对象展示对应的菜单列表
const contextMenuList = ref([])

watch(() => useContextMenuStore.activeApp, (newVal) => {
  if (newVal) {
    // const { x, y, top, right, bottom, left, width, height } = useElementBounding(contextMenuRef);
    // console.log('x, y, top, right, bottom, left, width, height: ', x, y, top, right, bottom, left, width, height);
    if (newVal.type === "page") {
      if (useSystemStore.activeMenu === "home") {
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
    } else if (newVal.type === "bookmark") {
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
    } else if (newVal.type === "component") {
      contextMenuList.value = [
        {
          label: "布局",
          value: "layout",
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
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
  // overflow: hidden;
  >ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 12px;
    color: #000000;
    color: var(--theme-text-color);
    // border: 1px solid #C4C4C4;
    li {
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 20px;
      border-radius: 4px;
      // overflow: hidden;
      .caret-right {
        position: absolute;
        right: 4px;
        top: 8px;
      }
      &.red {
        color: #ff4d4f;
      }
      &:hover {
        background-color: #E2E2E2;
        background-color: var(--theme-bg-color-a8);
      }
      .layout-box {
        position: absolute;
        padding: 0;
        margin: 0;
        left: 100%;
        top: 0;
        width: 51px;
        border-radius: 4px;
        background-color: var(--theme-bg-color-a8);
        display: none;
        li {
          list-style: none;
          border-radius: 4px;
          padding: 0 10px;
          &.active, &:hover {
            background-color: var(--theme-bg-color);
          }
        }
      }
      &.layout-li {
        &:hover {
          .layout-box {
            display: block;
          }
        }
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