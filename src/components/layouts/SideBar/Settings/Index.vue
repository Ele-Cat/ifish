<template>
  <a-drawer width="80vw" title="系统设置" placement="right" :open="open" @close="close" rootClassName="settings-root">
    <div class="settings-drawer">
      <a-tabs
        v-model:activeKey="activeKey"
        tab-position="left"
        :style="{ minHeight: '400px' }"
      >
        <a-tab-pane v-for="item in settingsNavs" :key="item.value" :tab="item.label">
          <keep-alive>
            <component :is="item.component" />
          </keep-alive>
        </a-tab-pane>
      </a-tabs>
      <div class="intro">
        <p>说明:</p>
        <p>您修改的设置内容仅存储在您浏览器缓存中，本站不存储任何内容；</p>
        <p>当您清理浏览器缓存或更换浏览器后需要重新设置，感谢您的支持与理解!</p>
      </div>
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

<style lang="less">
.settings-root {
  .ant-drawer-content-wrapper {
    max-width: 500px;
  }
  .intro {
    padding: 20px 0 0 14px;
    line-height: 1.6;
  }
}
</style>