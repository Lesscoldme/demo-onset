import Pandect from '@/views/Pandect/index.vue';
import ClientProject from '@/views/ClientProject/index.vue';
import ProductDelivery from '@/views/ProductDelivery/index.vue';
import ProductsRoadsigns from '@/views/ProductsRoadsigns/index.vue';
import VersionPackage from '@/views/VersionPackage/index.vue';
import ApprovalProcess from '@/views/ClientProject/ApprovalProcess/index.vue';
import ClientList from '@/views/ClientProject/ClientList/index.vue';
import ListItem from '@/views/ClientProject/ListItem/index.vue';
import { RouteRecordRawExtend } from '@/types/router';

const ROUTES: Array<RouteRecordRawExtend> = [
  {
    path: '/',
    name: 'Pandect',
    component: Pandect,
    meta: {
      text: '总览',
    },
  },
  {
    path: '/client_project',
    name: 'ClientProject',
    component: ClientProject,
    meta: {
      text: '客户与项目',
    },
    childrenToMain: [
      {
        path: 'process',
        name: 'Process',
        component: ApprovalProcess,
        meta: {
          text: '流程管理',
        },
      },
      {
        path: 'client_list',
        name: 'ClientList',
        component: ClientList,
        meta: {
          text: '客户列表',
        },
      },
      {
        path: 'list_item',
        name: 'ListItem',
        component: ListItem,
        meta: {
          text: '项目列表',
        },
      },
      {
        path: 'new_project/:id',
        name: 'newProject',
        component: () => import('@/views/NewProject/index.vue'),
        meta: {
          text: '新建项目',
          hide: true,
        },
        childrenToMain: [],
      },
    ],
  },
  {
    path: '/product_delivery',
    name: 'productDelivery',
    component: ProductDelivery,
    meta: {
      text: '交付与运营',
    },
    childrenToMain: [],
  },
  {
    path: '/products_roadsigns',
    name: 'productsRoadsigns',
    component: ProductsRoadsigns,
    meta: {
      text: '产品与路标',
    },
    childrenToMain: [],
  },
  {
    path: '/version_package',
    name: 'versionPackage',
    component: VersionPackage,
    meta: {
      text: '版本与包管理',
    },
    childrenToMain: [],
  },

];

export default ROUTES;
