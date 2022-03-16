import { App, createApp } from 'vue';
import mainApp from './App.vue';
import getRouter from './router';
import { createWebHashHistory, Router, RouterHistory } from 'vue-router';
import * as icons from '@element-plus/icons';
import ElementPlus from 'element-plus';
import zhcn from 'element-plus/lib/locale/lang/zh-cn';
import store from './store';

let app: App<Element> | null = null;
let history: RouterHistory | null = null;
let router: Router | null = null;

function render() {
  history = createWebHashHistory()
  router = getRouter(history)
  app = createApp(mainApp);
  app.use(router);
  app.use(ElementPlus, { locale: zhcn });
  app.use(store);
  for (const [key, value] of Object.entries(icons)) {
    app.component(key, value);
  }
  app.mount('#app');
}

// if (!window.__POWERED_BY_QIANKUN__) {
//   render();
// }
render();
// export async function bootstrap() {
//   console.log('zerus-fe bootstraped');
// }

// export async function mount() {
//   console.log('zerus-fe mounted');
//   render();
// }

// export async function unmount() {
//   console.log('zerus-fe unmounted');
//   app?.unmount();
//   if (app?._container?.innerHTML) {
//     app._container.innerHTML = '';
//   }
//   app = null;
//   router = null;
//   history?.destroy();
// }
