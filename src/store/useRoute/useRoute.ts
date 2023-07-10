import { breadcrumbItem } from '@/types';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useRouteStore = defineStore({
  id: 'route',
  state: () => ({
    default_navication: '/dashboardManage',
    breadcrumbList: [
      {
        name: '数据目录',
        path: '/dataCatalog',
      },
    ],
    isShowTips: false,
  }),
  getters: {
    getBreadcrumbList(): breadcrumbItem[] {
      return this.breadcrumbList;
    },
  },
  actions: {
    async registerBreadcrumb(data: breadcrumbItem): Promise<void> {
      const current = this.breadcrumbList.findIndex(function (val) {
        return val.path === data.path;
      });
      current < 0 && this.breadcrumbList.push(data);
      current >= 0 &&
        this.breadcrumbList.push(...this.breadcrumbList.splice(current, 1));
      this.changeDefaultNavication();
    },
    async changeBreadcrumb(index: number): Promise<void> {},
    async changeDefaultNavication(): Promise<void> {
      this.default_navication =
        this.breadcrumbList[this.breadcrumbList.length - 1]['path'];
    },
    async setDefaultRoute(val: string): Promise<void> {
      this.default_navication = val;
    },
    async deleteBreadCrumb(index: number) {
      if (this.breadcrumbList.length === 1) return;
      this.breadcrumbList.splice(index, 1);
    },
    async changeTips(val: boolean): Promise<void> {
      this.isShowTips = val;
    },
  },
});
