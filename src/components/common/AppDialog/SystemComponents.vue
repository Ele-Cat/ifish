<template>
  <perfect-scrollbar class="scroll-bar">
    <div class="system-tags">
      <div
        class="system-tag"
        v-for="(component, index) in systemComponents"
        :key="index"
        @click="addSystemComp(component)"
      >
        <div v-if="component.icon">
          <img :src="component.icon" alt="" />
        </div>
        <component v-else :is="components[component.component]" type="preview" />
        <p>{{ component.title }}</p>
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
const Tiangou = defineAsyncComponent(() =>
  import("@/components/common/Apps/Tiangou.vue")
);
const Zhibuzhi = defineAsyncComponent(() =>
  import("@/components/common/Apps/Zhibuzhi.vue")
);
const Gongde = defineAsyncComponent(() => import("@/components/common/Apps/Gongde.vue"));
const components = {
  tiangou: Tiangou,
  zhibuzhi: Zhibuzhi,
  gongde: Gongde,
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
    height: 10rem;
    background-color: var(--theme-bg-color);
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in-out;
    img {
      max-width: 100%;
    }
    p {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:hover {
      box-shadow: 0 0 15px var(--theme-bg-color-a8);
      color: var(--primary-color);
    }
  }
}
</style>
