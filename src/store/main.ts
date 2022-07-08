import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    name: "超级管理员",
    hook_active: "store"
  }),
  getters: {
    nameLength: (state) => state.name.length,
    hookActive: (state) => state.hook_active,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    },
  },
});
