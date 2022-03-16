import { RouteRecordRawExtend } from '@/types/router';

const joinList = (Routes: Array<RouteRecordRawExtend>): Array<RouteRecordRawExtend> => {
  // 将路由收束并剔除不需要展示的目录
  const releaseDeep = (_routeList: Array<RouteRecordRawExtend>, pre: Array<string>) => {
    for (const i of _routeList) {
      if (i.childrenToMain) {
        releaseDeep(i.childrenToMain, [i.path]);
      }
      i.path = [...pre, i.path].join('/');
    }
    return _routeList;
  };
  const routeList: Array<RouteRecordRawExtend> = releaseDeep(Routes, []);

  const filters = (_list: Array<RouteRecordRawExtend>) => _list.filter((items) => {
    if (items.childrenToMain) {
      items.childrenToMain = filters(items.childrenToMain);
    }
    return !items.meta?.hide;
  });
  return filters(routeList);
};


export {
  joinList,
};
