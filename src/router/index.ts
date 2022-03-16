import { createRouter, Router, RouteRecordRaw, RouterHistory } from 'vue-router';
import ROUTES from './routes';
import { RouteRecordRawExtend } from '@/types/router';
import store from '@/store';
// 辅助函数，释放childrenToMain到顶层进行渲染
function releaseToMain(Routes: Array<RouteRecordRawExtend>) {
  const routeList: Array<RouteRecordRaw> = [];
  const queue: Array<RouteRecordRawExtend> = []; // 支持回溯
  const releaseDeep = (_routeList: Array<RouteRecordRawExtend>, pre: Array<string>) => {
    for (const i of _routeList) {
      i.meta = i.meta || {};
      queue.push(i);
      if (i.childrenToMain) {
        releaseDeep(i.childrenToMain, [...pre, i.path]);
      }
      routeList.push({
        ...i,
        path: [...pre, i.path].join('/'),
        meta: { ...i.meta, deep: [...queue] },
      });
      queue.pop();
    }
  };
  releaseDeep(Routes, []);
  console.log(routeList);
  return routeList;
}

const getRouter = (history: RouterHistory): Router => {
  const router = createRouter({
    history,
    routes: releaseToMain(ROUTES),
  });
  router.beforeEach(async (to, from, next) => {
    console.log(1);

    next();
  });
  return router;
};
store.dispatch('allList', ROUTES);
export default getRouter;
