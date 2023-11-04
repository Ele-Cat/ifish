<template>
  <div class="system-tags">
    <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol">
      <a-form-item label="网址" name="url">
        <a-input v-model:value="formState.url" placeholder="请输入网址" />
      </a-form-item>
      <a-form-item label="名称" name="title">
        <a-input v-model:value="formState.title" placeholder="请输入名称" />
      </a-form-item>
      <a-form-item label="介绍" name="description">
        <a-input v-model:value="formState.description" placeholder="请输入介绍" />
      </a-form-item>
      <a-form-item label="图标" name="icon">
        <ImageEditor :imageInfo="{
          url: formState.icon,
          width: 80,
          height: 80,
        }" :aspectRatio="1" allowClear @use="onIconUpload"></ImageEditor>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 3 }">
        <a-button type="primary" @click="onSubmit">保存</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import useStore from "@/store";
const { useAppStore } = useStore();
import { uuid } from "@/utils/utils";
import { toast } from "@/utils/feedback";
import ImageEditor from "@/components/common/ImageEditor.vue";

const formRef = ref();
const formState = reactive({});
const labelCol = {
  style: {
    width: '80px',
  },
};
const validateUrl = async (_rule, value) => {
  if (!value) {
    return Promise.reject('请输入网址');
  }
  let pattern = /^(http|https):\/\/([a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}(\/\S*)?$/;
  if (!pattern.test(value)) {
    return Promise.reject('请输入正确网址');
  } else {
    return Promise.resolve();
  }
};
const rules = {
  url: [
    { required: true, validator: validateUrl, trigger: ['change', 'blur'] }
  ],
  title: [
    { required: true, message: '请输入名称', trigger: ['change', 'blur'] },
  ],
  icon: [
    { required: true, message: '请上传图标', trigger: ['change', 'blur'] },
  ],
};


const onIconUpload = (url) => {
  formState.icon = url;
  formRef.value.validateFields(["icon"]);
}

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      useAppStore.lists.push({
        id: uuid(21),
        type: "bookmark",
        title: formState.title,
        url: formState.url,
        icon: formState.icon,
        description: formState.description,
        gridSize: [1, 1],
      })
      toast({
        content: "添加成功",
      });
      resetForm();
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