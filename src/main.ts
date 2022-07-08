import { createApp } from "vue";
import App from "./App.vue";

// element-ui
import ElementPlus from "element-plus";
import * as ElementIcons from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

// style
import "@/style/index.scss"

// route
import router from "@/router/index";

// pinia
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router).use(createPinia()).use(ElementPlus).mount("#app");
