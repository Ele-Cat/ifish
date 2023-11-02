<template>
  <div>
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="老板键" extra="快捷切换键，暂不支持修改">
        <a-input v-model:value="formState.lock.key" readonly placeholder="例如：Ctrl + L" />
      </a-form-item>
      <a-form-item label="切换时">
        <a-select v-model:value="formState.lock.target">
          <a-select-option value="_self">在本页打开</a-select-option>
          <a-select-option value="_blank">打开新页</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="打开">
        <a-select v-model:value="formState.lock.action" :options="formState.lock.actionList.map(item => ({ value: item }))">
          <template #dropdownRender="{ menuNode: menu }">
            <v-nodes :vnodes="menu" />
            <a-divider style="margin: 4px 0" />
            <a-space style="padding: 4px 8px">
              <a-input ref="inputRef" v-model:value="addAction" placeholder="请输入要打开的网址" />
              <a-button type="primary" @click="handleAddAction">
                <template #icon>
                  <PlusOutlined />
                </template>
                添加
              </a-button>
            </a-space>
            <a-space align="center" style="padding: 4px 8px;">
              <p>移除第</p>
              <a-input-number :min="1" :max="formState.lock.actionList.length" v-model:value="removeIndex" placeholder="序号" style="width: 76px;" />
              <p>个网址</p>
              <a-button type="primary" danger @click="handleRemoveAction">
                <template #icon>
                  <MinusOutlined />
                </template>
                移除
              </a-button>
            </a-space>
          </template>
        </a-select>
      </a-form-item>
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
    width: '80px',
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

</style>