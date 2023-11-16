<template>
  <div class="system-tags">
    <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol">
      <a-form-item label="网站地址" name="url">
        <a-input v-model:value="formState.url" placeholder="请输入网站地址" />
      </a-form-item>
      <a-form-item label="网站名称" name="title">
        <a-input v-model:value="formState.title" placeholder="请输入网站名称" />
      </a-form-item>
      <a-form-item label="网站介绍" name="description">
        <a-input v-model:value="formState.description" placeholder="请输入网站介绍" />
      </a-form-item>
      <a-form-item label="网站图标" name="icon">
        <ImageEditor :imageInfo="{
          url: formState.icon,
          width: 88,
          height: 88,
        }" :aspectRatio="1" allowClear @use="onIconUpload"></ImageEditor>
      </a-form-item>
      <a-form-item label=" " :colon="false">
        <a-button type="primary" @click="onSubmit">保存</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useStore from "@/store";
const { useAppStore } = useStore();
import { uuid } from "@/utils/utils";
import { toast } from "@/utils/feedback";
import ImageEditor from "@/components/common/ImageEditor.vue";
import eventBus from '@/utils/eventBus';

const props = defineProps({
  editType: {
    type: String,
    default: "add",
  },
  activeApp: {
    type: Object,
    default: () => {},
  },
})

const formState = ref({});
watch(() => [props.editType, props.activeApp], () => {
  if (props.editType === "edit") {
    const {id, url, title, description, icon} = props.activeApp;
    formState.value = {id, url, title, description, icon}
  }
}, {
  immediate: true,
  deep: true,
})

const formRef = ref();
const labelCol = {
  style: {
    width: '80px',
  },
};
const validateUrl = async (_rule, value) => {
  if (!value) {
    return Promise.reject('请输入网站地址');
  }
  let pattern = /^(http|https):\/\/([a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}(\/\S*)?$/;
  if (!pattern.test(value)) {
    return Promise.reject('请输入正确网站地址');
  } else {
    return Promise.resolve();
  }
};
const rules = {
  url: [
    { required: true, validator: validateUrl, trigger: ['change', 'blur'] }
  ],
  title: [
    { required: true, message: '请输入网站名称', trigger: ['change', 'blur'] },
  ],
  icon: [
    { required: true, message: '请上传网站图标', trigger: ['change', 'blur'] },
  ],
};

const onIconUpload = (url) => {
  formState.value.icon = url;
  formRef.value.validateFields(["icon"]);
}

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      if (props.editType === "edit") {
        const activeIndex = useAppStore.lists.findIndex(app => app.id === formState.value.id);
        useAppStore.lists.splice(activeIndex, 1, {
          id: formState.value.id,
          type: "bookmark",
          title: formState.value.title,
          url: formState.value.url,
          icon: formState.value.icon,
          description: formState.value.description,
          gridSize: [1, 1],
        })
      } else {
        useAppStore.lists.push({
          id: uuid(21),
          type: "bookmark",
          title: formState.value.title,
          url: formState.value.url,
          icon: formState.value.icon,
          description: formState.value.description,
          gridSize: [1, 1],
        })
        resetForm();
      }
      toast({
        content: props.editType === "edit" ? "编辑成功" : "添加成功",
      });
    })
    .catch(error => {
      console.log('error', error);
    });
}

const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style lang="less" scoped>

</style>