import { createApp, defineAsyncComponent } from "vue";
import pinia from "@/store/pinia";
const App = defineAsyncComponent(() => import("./App.vue"));

// 引入UI、样式
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/animate.min.css";
import "./global.less";
import "@/assets/styles/index.less";

// 注册全局组件、指令
import ui from "@/components/libs";

const app = createApp(App);

app.use(Antd);
app.use(ui);
app.use(pinia);
app.mount("#app");
