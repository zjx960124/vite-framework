import { RouteRecordRaw } from 'vue-router';

const importRoute = {
  dataCatalog: () => import('@/views/preview/dataCatalog/index.vue'),
  myJob: () => import('@/views/preview/myJob/index.vue'),
  dataCheck: () => import('@/views/preview/dataCheck/index.vue'),
  systemConfig: () => import('@/views/preview/systemConfig/index.vue'),
};

const previewRoutes: RouteRecordRaw[] = [
  {
    path: '/dataCatalog',
    name: 'dataCatalog',
    component: importRoute['dataCatalog'],
    meta: {
      title: '数据目录',
      isShow: true,
      icon: 'yibiao',
    },
  },
  {
    path: '/myJob',
    name: 'myJob',
    component: importRoute['myJob'],
    meta: {
      title: '我的工作',
      isShow: true,
      icon: 'daping',
    },
  },
  {
    path: '/dataCheck',
    name: 'dataCheck',
    component: importRoute['dataCheck'],
    meta: {
      title: '数据审核',
      isShow: true,
      icon: 'daping',
    },
  },
  {
    path: '/systemConfig',
    name: 'systemConfig',
    component: importRoute['systemConfig'],
    meta: {
      title: '系统设置',
      isShow: true,
      icon: 'daping',
    },
  },
];

export default previewRoutes;
