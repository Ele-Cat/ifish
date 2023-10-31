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
import useStore from '@/store';
const { useContextMenuStore } = useStore();
import { useElementBounding } from '@vueuse/core';
import { toast } from "@/utils/feedback";

const contextMenuRef = ref(null);

// 点击菜单条目
const handleMenuClick = (type) => {
  if (type === "moveUp") {
    
  } else if (type === "moveDown") {
    toast({
      type: "warning",
      content: "提醒",
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
      contextMenuList.value = [
        {
          label: "添加导航",
          value: "moveUp",
        },
        {
          label: "随机壁纸",
          value: "moveDown",
        },
        {
          label: "打开设置",
          value: "edit",
          borderTop: true,
        },
      ]
    } else if (newVal === "app") {
      contextMenuList.value = [
        {
          label: "布局",
          value: "moveUp",
        },
        {
          label: "修改",
          value: "moveDown",
        },
        {
          label: "删除",
          value: "edit",
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
  background-color: rgba(255, 255, 255, 0.6);
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
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
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