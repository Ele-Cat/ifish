<template>
  <div class="settings-export">
    <a-form :model="formState" :label-col="labelCol">
      <a-form-item label="导入">
        <a-button type="primary">
          <label class="label" for="json">
            导入配置
            <input id="json" type="file" accept=".json" hidden @change="handleImport" />
          </label>
        </a-button>
      </a-form-item>
      <a-form-item label="导出">
        <a-button type="primary" @click="handleExport('app')" style="margin-bottom: 12px"
          >导出首页App配置</a-button
        >
        <br />
        <a-button
          type="primary"
          @click="handleExport('system')"
          style="margin-bottom: 12px"
          >导出系统配置</a-button
        >
        <br />
        <a-button type="primary" @click="handleExport('all')">导出全部配置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FileSaver from "file-saver";
import dayjs from "dayjs";
import useStore from "@/store";
const { useSystemStore, useAppStore } = useStore();
import { toast } from "@/utils/feedback";

const formState = ref({});
const labelCol = {
  style: {
    width: "68px",
  },
};

const handleImport = (e) => {
  const file = e.target.files[0];
  if (!file.name.includes("json")) {
    toast({
      type: "warning",
      content: "只能插入json文件",
    });
    return;
  }
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (res) => {
    const { type, data } = JSON.parse(res.target.result);
    if (!type || !["app", "system", "all"].includes(type) || !data) {
      toast({
        type: "warning",
        content: "JSON文件中的格式有问题，请检查后重试",
      });
    } else {
      if (type === "app") {
        useAppStore.lists = data;
      } else if (type === "system") {
        useSystemStore.settings = data;
      } else if (type === "all") {
        useAppStore.lists = data.app;
        useSystemStore.settings = data.system;
      }
      toast({
        content: "导入成功！",
      });
      window.location.reload();
    }
    // 处理同文件上传无法获取文件信息问题
    e.target.value = null;
  };
};

const handleExport = (type) => {
  let jsonObj = {};
  const exportTypes = {
    app: "首页App",
    system: "系统配置",
    all: "全部配置",
  };
  if (type === "app") {
    jsonObj = {
      type,
      data: useAppStore.lists,
    };
  } else if (type === "system") {
    jsonObj = {
      type,
      data: useSystemStore.settings,
    };
  } else if (type === "all") {
    jsonObj = {
      type,
      data: {
        app: useAppStore.lists,
        system: useSystemStore.settings,
      },
    };
  }
  const blob = new Blob([JSON.stringify(jsonObj, null, 2)], {
    type: "application/json",
  });
  FileSaver.saveAs(
    blob,
    `${exportTypes[type]} - ${dayjs().format("YYYYMMDDHHmmss")}.json`
  );
};
</script>

<style lang="less" scoped>
.settings-export {
  .label {
    cursor: pointer;
  }
}
</style>
