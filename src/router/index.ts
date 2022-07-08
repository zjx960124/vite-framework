import { createRouter, createWebHistory } from "vue-router";
import { constantRouterMap } from "./router.config";
import NProgress from "nprogress"; // progress bar
import "nprogress/css/nprogress.css"; // 进度条样式

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { top: 0 };
  },
  routes: constantRouterMap,
});

// 路由开始进入
router.beforeEach((to: any, from: any, next) => {
  NProgress.start(); // start progress bar
  next();
  return false;
});

router.afterEach((to, from, next) => {
  // 保存url
  NProgress.done(); // finish progress bar
});
export default router;
