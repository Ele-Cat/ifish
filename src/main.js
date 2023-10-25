import { createApp } from "vue";
import pinia from "@/store/pinia";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/animate.min.css";
import "./global.less";
import "@/assets/styles/index.less";

import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
const app = createApp(App);

app.use(Antd);

app.use(pinia);
app.use(PerfectScrollbar, {
  watchOptions: true,
  options: {
    minScrollbarLength: 38, // 设定最小滚动条高度
    // maxScrollbarLength: 200, // 设定最大滚动条高度
  },
});
app.mount("#app");
