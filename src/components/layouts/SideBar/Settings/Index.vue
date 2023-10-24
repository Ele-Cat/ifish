<template>
  <a-drawer width="80vw" title="系统设置" placement="right" :open="open" @close="close" rootClassName="settings-root">
    <div class="settings-drawer">
      <a-tabs
        v-model:activeKey="activeKey"
        tab-position="left"
        :style="{ minHeight: '200px' }"
      >
        <a-tab-pane v-for="item in settingsNavs" :key="item.value" :tab="item.label">
          <keep-alive>
            <component :is="item.component" />
          </keep-alive>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-drawer>
</template>

<script setup>
import { ref, shallowRef, defineAsyncComponent } from 'vue';
const SettingsBasic = defineAsyncComponent(() => import('./SettingsBasic.vue'));
const SettingsAppearance = defineAsyncComponent(() => import('./SettingsAppearance.vue'));
const SettingsShortcutKey = defineAsyncComponent(() => import('./SettingsShortcutKey.vue'));

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['close']);

const close = () => {
  emit("close");
}

const activeKey = ref("basic");
const settingsNavs = ref([
  {
    label: "基础设置",
    value: "basic",
    component: SettingsBasic,
  },
  {
    label: "外观设置",
    value: "appearance",
    component: SettingsAppearance,
  },
  {
    label: "快捷键设置",
    value: "shortcutKey",
    component: SettingsShortcutKey,
  },
]);
</script>

<style lang="less" scoped>
.settings-drawer {
  :deep(.ant-tabs) {
    color: var(--theme-text-color);
    .ant-tabs-tab {
      justify-content: flex-end;
      padding: 8px 12px;
      &+.ant-tabs-tab {
        margin: 6px 0 0 0;
      }
    }
    .ant-tabs-tabpane {
      padding: 4px 0 0 12px;
    }
  }
}
</style>

<style lang="less">
.settings-root {
  .ant-drawer-content-wrapper {
    max-width: 500px;
  }
}
</style>