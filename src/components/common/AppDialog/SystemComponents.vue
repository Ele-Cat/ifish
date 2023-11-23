<template>
  <perfect-scrollbar class="scroll-bar">
    <div class="system-tags">
      <div
        class="system-tag"
        v-for="(component, index) in systemComponents"
        :key="index"
        @click="addSystemComp(component)"
      >
        <div class="system-icon" v-if="component.icon">
          <img :src="component.icon" alt="" />
        </div>
        <component v-else :is="components[component.component]" type="preview" />
        <p class="title">{{ component.title }}</p>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import useStore from "@/store";
const { useAppStore } = useStore();
import { systemComponents } from "@/mock/app";
import { uuid } from "@/utils/utils";
import { toast } from "@/utils/feedback";

const WordGames = defineAsyncComponent(() => 
  import("@/components/common/Apps/WordGames.vue")
);
const components = {
  wordGames: WordGames,
};

const addSystemComp = (comp) => {
  useAppStore.lists.push({
    id: uuid(21),
    type: "component",
    title: comp.title,
    url: comp.url,
    icon: comp.icon,
    component: comp.component,
    gridSize: [2, 2],
  });
  toast({
    content: "添加成功",
  });
};
</script>

<style lang="less" scoped>
.system-tags {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-flow: dense;
  gap: 1rem;
  padding: 20px;
  overflow: auto;
  .system-tag {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--theme-bg-color);
    border-radius: 8px;
    padding: 10px 10px 4px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in-out;
    .system-icon {
      flex: 1;
      display: flex;
      align-items: center;
      img {
        max-width: 100%;
        border-radius: 8px;
      }
    }
    .title {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:hover {
      box-shadow: 0 0 15px var(--theme-bg-color-a8);
      .title {
        color: var(--primary-color);
      }
    }
  }
}
</style>
