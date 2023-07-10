import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:svg-icons-register';

// element-ui
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import * as ElementIcons from '@element-plus/icons-vue';

// 引入全局样式
import '@/style/index.scss';

// route
import router from '@/router/index';

// pinia
import { createPinia } from 'pinia';

//utils
import directPlugin from '@/utils/directive/lazyPlugin';
import registedBreadcrumb from '@/utils/directive/registedBreadcrumb';
import changeBreadcrumb from '@/utils/directive/changeBreadcrumb';

import SvgIcon from '@/components/svg-icon/index.vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementIcons)) {
  app.component(key, component);
}
app
  .component('SvgIcon', SvgIcon)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .use(directPlugin)
  .use(registedBreadcrumb)
  .use(changeBreadcrumb)
  .mount('#app');
