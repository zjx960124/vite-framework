import { App } from "vue";
const lazyPlugin = {
  install(app: App<Element>, options: any) {
    app.directive("lazy", {});
  },
};
