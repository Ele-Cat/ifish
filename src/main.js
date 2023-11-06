import { createApp } from "vue";
import pinia from "@/store/pinia";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/animate.min.css";
import "./global.less";
import "@/assets/styles/index.less";

import ui from "@/components/libs";

const app = createApp(App);

app.use(Antd);
app.use(ui);
app.use(pinia);
app.mount("#app");
