<template>
  <div>
    <a-form :model="formState" :label-col="labelCol">
      <a-card title="老板键" size="small">
        <a-form-item label="快捷键">
          <a-input v-model:value="formState.lock.key" readonly placeholder="例如：Ctrl + L" />
        </a-form-item>
        <a-form-item label="切换时">
          <a-select v-model:value="formState.lock.target">
            <a-select-option value="_self">在本页打开</a-select-option>
            <a-select-option value="_blank">打开新页</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="打开网址" class="bottom-0">
          <a-select v-model:value="formState.lock.action" :options="formState.lock.actionList.map(item => ({ value: item }))">
            <template #dropdownRender="{ menuNode: menu }">
              <v-nodes :vnodes="menu" />
              <a-divider style="margin: 4px 0" />
              <p style="padding: 4px 8px">配置：</p>
              <a-space style="padding: 4px 8px">
                <a-input size="small" ref="inputRef" v-model:value="addAction" placeholder="请输入要打开的网址" />
                <a-button size="small" type="primary" @click="handleAddAction">
                  <template #icon>
                    <PlusOutlined />
                  </template>
                  添加
                </a-button>
              </a-space>
              <a-space class="action-box" align="center" style="padding: 4px 8px;">
                <p>移除第</p>
                <a-input-number size="small" :min="1" :max="formState.lock.actionList.length" v-model:value="removeIndex" placeholder="序号" style="width: 78px;" />
                <p>个网址</p>
                <a-button size="small" type="primary" danger @click="handleRemoveAction">
                  <template #icon>
                    <MinusOutlined />
                  </template>
                  移除
                </a-button>
              </a-space>
            </template>
          </a-select>
        </a-form-item>
      </a-card>
      <a-card title="随机背景" size="small" style="margin-top:12px;">
        <a-form-item label="快捷键" class="bottom-0">
          <a-input v-model:value="formState.wallpaper.key" readonly placeholder="例如：Ctrl + E" />
        </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';
import useStore from "@/store";
const { useSystemStore } = useStore();
import { toast } from "@/utils/feedback";

const VNodes = defineComponent({
  props: {
    vnodes: {
      type: Object,
      required: true,
    },
  },
  render() {
    return this.vnodes;
  },
});

const formState = ref({...useSystemStore.settings});
const labelCol = {
  style: {
    width: '88px',
  },
};

const inputRef = ref();
const addAction = ref();
const removeIndex = ref();

const handleAddAction = e => {
  e.preventDefault();
  let pattern = /^(http|https):\/\/([a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}(\/\S*)?$/;
  if (!pattern.test(addAction.value)) {
    toast({
      type: "warning",
      content: "请输入正确的网址"
    })
    return;
  }
  if (formState.value.lock.actionList.indexOf(addAction.value) < 0) {
    formState.value.lock.actionList.push(addAction.value);
  }
  addAction.value = '';
  setTimeout(() => {
    inputRef.value?.focus();
  }, 0);
}

const handleRemoveAction = () => {
  if (!removeIndex.value) {
    toast({
      type: "warning",
      content: "请输入要移除的网址序号"
    })
    return;
  } else if (formState.value.lock.actionList.length == 1) {
    toast({
      type: "warning",
      content: "请至少保留一个网址"
    })
    return;
  }
  formState.value.lock.actionList.splice(removeIndex.value - 1, 1);
  if (formState.value.lock.actionList.indexOf(formState.value.lock.action) < 0) {
    formState.value.lock.action = formState.value.lock.actionList[0];
  }
  removeIndex.value = "";
}
</script>

<style lang="less" scoped>
.ant-form-item {
  margin-bottom: 12px;
  &.bottom-0 {
    margin-bottom: 0;
  }
}
.action-box {
  p {
    font-size: 12px;
  }
}
:deep(.ant-card) {
  background-color: var(--theme-bg-color-a8);
  .ant-card-head {
    color: var(--theme-text-color);
  }
}
</style>