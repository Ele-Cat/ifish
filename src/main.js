import { createApp } from "vue";
import pinia from "@/store/pinia";
import App from "./App.vue";

import "./global.less";
import "normalize.css";

const app = createApp(App);

app.use(pinia);
app.mount("#app");
