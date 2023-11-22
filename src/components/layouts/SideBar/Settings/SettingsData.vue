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
          >导出首页配置</a-button
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
      <a-form-item label="重置">
        <a-button type="primary" @click="handleReset('app')" style="margin-bottom: 12px">重置首页配置</a-button>
        <br />
        <a-button type="primary" @click="handleReset('system')" style="margin-bottom: 12px">重置系统配置</a-button>
        <br />
        <a-popconfirm
          title="确认重置全部配置？"
          @confirm="handleReset('all')"
        >
          <a-button type="primary" style="margin-bottom: 12px">重置全部配置</a-button>
        </a-popconfirm>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FileSaver from "file-saver";
import dayjs from "dayjs";
import useStore from "@/store";
const { useAppStore, useSystemStore } = useStore();
import { toast } from "@/utils/feedback";

const formState = ref({});
const labelCol = {
  style: {
    width: "68px",
  },
};
const dataTypes = {
  app: "首页配置",
  system: "系统配置",
  all: "全部配置",
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
    if (!type || !["app", "news", "system", "all"].includes(type) || !data) {
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
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    }
    // 处理同文件上传无法获取文件信息问题
    e.target.value = null;
  };
};

const handleExport = (type) => {
  let jsonObj = {};
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
    `${dataTypes[type]} - ${dayjs().format("YYYYMMDDHHmmss")}.json`
  );
};

const handleReset = (type) => {
  if (type === "app") {
    useAppStore.reset();
  } else if (type === "system") {
    useSystemStore.reset();
  } else if (type === "all") {
    useAppStore.reset();
    useSystemStore.reset();
  }
  toast({
    content: `${dataTypes[type]}重置成功！`,
  });
  setTimeout(() => {
    window.location.reload();
  }, 1000)
};
</script>

<style lang="less" scoped>
.settings-export {
  .label {
    cursor: pointer;
  }
}
</style>
