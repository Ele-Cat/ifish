import { createApp } from "vue";
import pinia from "@/store/pinia";
import App from "./App.vue";

import "./global.less";
import "normalize.css";

import { Button, Drawer, message } from "ant-design-vue";

import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
const app = createApp(App);

app.config.globalProperties.$message = message;
app.use(Button);
app.use(Drawer);

app.use(pinia);
app.use(PerfectScrollbar, {
  watchOptions: true,
  options: {
    minScrollbarLength: 38, // 设定最小滚动条高度
    // maxScrollbarLength: 200, // 设定最大滚动条高度
  },
});
app.mount("#app");
