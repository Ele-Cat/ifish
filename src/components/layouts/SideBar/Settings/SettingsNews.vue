<template>
  <div class="settings-news">
    <p class="title">支持拖拽排序、是否启用</p>
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
</script>

<style lang="less" scoped>
.settings-news {
  .title {
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