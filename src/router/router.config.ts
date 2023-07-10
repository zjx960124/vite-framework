import { RouteRecordRaw } from 'vue-router';
const Layout = () => import('@/views/layout/index.vue');
console.log(Layout);
import modules from './module';

export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Preview',
    redirect: '/dataCatalog',
    component: Layout,
    meta: {
      title: '中职数据',
      icon: 'analytics',
      isShow: true,
    },
    children: [...modules.previewRoutes],
  },
  {
    path: '/Report',
    name: 'Report',
    redirect: '/dispathConfig',
    component: Layout,
    meta: {
      title: '数据上报',
      icon: 'analytics',
      isShow: true,
    },
    children: [...modules.reportRoutes],
  },
  {
    path: '/hook',
    name: 'hook',
    redirect: '/hook/hookList',
    component: () => import('@/page/index.vue'),
    children: [
      {
        path: 'hookList',
        components: {
          store: () => import('@/page/demo/store.vue'),
          model: () => import('@/page/demo/model.vue'),
          magnify: () => import('@/page/demo/magnify.vue'),
          password: () => import('@/page/demo/password.vue'),
          imageLazy: () => import('@/page/demo/imageLazy.vue'),
        },
      },
    ],
  },
];
