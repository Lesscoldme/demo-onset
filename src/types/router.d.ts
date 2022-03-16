import { RouteRecordRaw } from 'vue-router';

export type RouteRecordRawExtend = RouteRecordRaw & {
  childrenToMain?: Array<RouteRecordRawExtend>;
};
