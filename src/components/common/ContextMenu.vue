<template>
  <div
    ref="contextMenuRef"
    class="custom-menu bf"
    v-show="useContextMenuStore.menuVisible"
    :style="useContextMenuStore.position"
    @contextmenu="(e) => e.preventDefault()"
  >
    <ul>
      <li
        v-for="contextMenu in contextMenuList"
        :key="contextMenu.value"
        :class="{
          'border-top': contextMenu.borderTop,
          red: contextMenu.value === 'delete',
          'layout-li': contextMenu.value === 'layout',
        }"
        @click.stop="handleMenuClick(contextMenu.value)"
      >
        {{ contextMenu.label
        }}<CaretRightOutlined class="caret-right" v-if="contextMenu.value === 'layout'" />
        <ul class="layout-box bf" v-if="contextMenu.value === 'layout'">
          <li
            v-for="item in appLayout"
            @click="handleEditLayout(item)"
            :class="{ active: liActive(item) }"
            :key="item.label"
          >
            {{ item.label }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { CaretRightOutlined } from "@ant-design/icons-vue";
import useStore from "@/store";
const { useContextMenuStore, useSystemStore, useAppStore } = useStore();
import { toast } from "@/utils/feedback";
import { appLayout } from "@/utils/enums";
import eventBus from "@/utils/eventBus";

const contextMenuRef = ref(null);

// 点击菜单条目
const handleMenuClick = (type) => {
  const { id } = useContextMenuStore.activeApp;
  if (type === "addApps") {
    // 添加app
    eventBus.emit("addApps", {
      type: "add",
    });
  } else if (type === "edit") {
    // 编辑书签
    eventBus.emit("addApps", {
      type: "edit",
      app: useContextMenuStore.activeApp,
    });
  } else if (type === "randomBg") {
    // 随机背景
    useSystemStore.randomWallpaper();
  } else if (type === "bgSettings") {
    // 背景设置
    eventBus.emit("openBgSettings");
  } else if (type === "settings") {
    // 打开设置
    eventBus.emit("openSettings");
  } else if (type === "delete") {
    // 移除书签
    useAppStore.lists.splice(
      useAppStore.lists.findIndex((app) => app.id == id),
      1
    );
  }
  useContextMenuStore.activeApp = {};
  useContextMenuStore.menuVisible = false;
};

const liActive = (item) => {
  const activeApp = useContextMenuStore.activeApp;
  if (activeApp && activeApp.gridSize) {
    return (
      activeApp?.gridSize[0] === item?.value[0] &&
      activeApp?.gridSize[1] === item?.value[1]
    );
  } else {
    return false;
  }
};
const handleEditLayout = (item) => {
  useAppStore.lists.map((app) => {
    if (app.id === useContextMenuStore.activeApp.id) {
      app.gridSize = item.value;
    }
  });
  // useContextMenuStore.activeApp = {};
  useContextMenuStore.menuVisible = false;
};

// 根据点击的对象展示对应的菜单列表
const contextMenuList = ref([]);

watch(
  () => useContextMenuStore.activeApp,
  (newVal) => {
    if (newVal) {
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
              label: "壁纸设置",
              value: "bgSettings",
            },
            {
              label: "打开设置",
              value: "settings",
              borderTop: true,
            },
          ];
        } else {
          contextMenuList.value = [
            {
              label: "随机壁纸",
              value: "randomBg",
            },
            {
              label: "壁纸设置",
              value: "bgSettings",
            },
            {
              label: "打开设置",
              value: "settings",
              borderTop: true,
            },
          ];
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
        ];
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
        ];
      }
    }
  }
);
</script>

<style lang="less" scoped>
.custom-menu {
  position: fixed;
  // top: 0;
  // left: 0;
  width: 88px;
  // background-color: #fff;
  background-color: var(--theme-bg-color-a8);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 10086;
  // overflow: hidden;
  > ul {
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
      text-align: center;
      // border-radius: 4px;
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
        background-color: #e2e2e2;
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
          // border-radius: 4px;
          padding: 0 10px;
          &.active,
          &:hover {
            background-color: var(--theme-bg-color);
          }
          &:nth-of-type(1) {
            border-radius: 4px 4px 0 0;
          }
          &:nth-last-of-type(1) {
            border-radius: 0 0 4px 4px;
          }
        }
      }
      &:nth-of-type(1) {
        border-radius: 4px 4px 0 0;
      }
      &:nth-last-of-type(1) {
        border-radius: 0 0 4px 4px;
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
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        border-top: 1px solid #ededed;
      }
    }
  }
  &.show {
    display: block;
  }
}
</style>
