<template>
  <IDialog title="添加导航" :width="880" :visible="dialogVisible" @ok="dialogVisible = false" @cancel="dialogVisible = false">
    <a-tabs class="add-box" v-model:activeKey="activeMenu" tab-position="left">
      <a-tab-pane v-for="tab in tabList" :key="tab.value">
        <template #tab>
          <span>
            <component :is="tab.icon" />
            {{tab.label}}
          </span>
        </template>
        <perfect-scrollbar class="scroll-bar">
          <keep-alive>
            <component class="animated fadeIn" :is="tab.component" />
          </keep-alive>
        </perfect-scrollbar>
      </a-tab-pane>
    </a-tabs>
  </IDialog>
</template>

<script setup>
import { ref, defineAsyncComponent, reactive } from "vue";
import { TagsFilled, TagFilled, AppstoreFilled } from '@ant-design/icons-vue';
import eventBus from '@/utils/eventBus';
const IDialog = defineAsyncComponent(() => import('@/components/libs/IDialog.vue'));
const SystemTags = defineAsyncComponent(() => import('./SystemTags.vue'));
const CustomTags = defineAsyncComponent(() => import('./CustomTags.vue'));
const SystemComponents = defineAsyncComponent(() => import('./SystemComponents.vue'));

const tabList = reactive([
  {
    label: "系统书签",
    value: "1",
    icon: TagsFilled,
    component: SystemTags,
  },
  {
    label: "自定义书签",
    value: "2",
    icon: TagFilled,
    component: CustomTags,
  },
  {
    label: "系统组件",
    value: "3",
    icon: AppstoreFilled,
    component: SystemComponents,
  },
])
const dialogVisible = ref(false);
const activeMenu = ref('1');

eventBus.on("addApps", () => {
  dialogVisible.value = true;
})
</script>

<style lang="less" scoped>
.add-box {
  padding-top: 20px;
  :deep(.ant-tabs-tab) {
    justify-content: flex-start !important;
  }
  .scroll-bar {
    height: calc(60vh);
  }
}
</style>