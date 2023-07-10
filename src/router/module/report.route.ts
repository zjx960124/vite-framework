import { RouteRecordRaw } from 'vue-router';

const importRoute = {
  diapatchConfig: () => import('@/views/report/diapatchConfig/index.vue'),
  reportResult: () => import('@/views/report/reportResult/index.vue'),
  reportMonitoring: () => import('@/views/report/reportMonitoring/index.vue'),
};

const reportRoutes: RouteRecordRaw[] = [
  {
    path: '/diapatchConfig',
    name: 'diapatchConfig',
    component: importRoute['diapatchConfig'],
    meta: {
      title: '调度配置',
      isShow: true,
      icon: 'yibiao',
    },
  },
  {
    path: '/reportResult',
    name: 'reportResult',
    component: importRoute['reportResult'],
    meta: {
      title: '上报结果',
      isShow: true,
      icon: 'daping',
    },
  },
  {
    path: '/reportMonitoring',
    name: 'reportMonitoring',
    component: importRoute['reportMonitoring'],
    meta: {
      title: '上报监控',
      isShow: true,
      icon: 'daping',
    },
  },
];

export default reportRoutes;
