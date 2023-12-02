<template>
  <div class="settings-news">
    <div class="header">
      <p>支持拖拽排序、是否启用</p>
      <a-popconfirm
        title="确认重置资讯设置？"
        placement="left"
        @confirm="handleResetNews"
      >
        <a-button size="small" type="primary">重置</a-button>
      </a-popconfirm>
    </div>
    <perfect-scrollbar class="scroll-bar">
      <Draggable
        :list="useNewsStore.lists"
        :animation="100"
        item-key="id"
        class="list-group news-box"
        :forceFallback="true"
        ghost-class="ghost"
        :fallback-tolerance="8"
        :delay="10"
      >
        <template #item="{ element }">
          <div class="news-item">
            <p>{{ element.label }}</p>
            <a-switch v-model:checked="element.visible" :title="`${element.visible ? '关闭' : '启用'} ${element.label}`" />
          </div>
        </template>
      </Draggable>
    </perfect-scrollbar>
  </div>
</template>

<script setup>
import Draggable from "vuedraggable";
import useStore from "@/store";
const { useNewsStore } = useStore();

const handleResetNews = () => {
  useNewsStore.reset();
} 
</script>

<style lang="less" scoped>
.settings-news {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px 8px;
  }
  // .scroll-bar {
  //   height: calc(100vh - 280px);
  // }
  .news-box {
    display: flex;
    flex-wrap: wrap;
    .news-item {
      width: calc(50% - 8px);
      display: flex;
      justify-content: space-between;
      margin: 4px;
      padding: 6px 8px;
      border: 1px solid var(--theme-bg-color);
      cursor: move;
    }
  }
}
</style>