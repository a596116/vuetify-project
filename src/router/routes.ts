import type { RouteRecordRaw } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/index.vue'),
        meta: { title: '首頁' }
      },
      {
        path: '/charts',
        name: 'charts',
        component: () => import('@/pages/charts.vue'),
        meta: { title: '圖表展示' }
      },
      {
        path: '/chart-table',
        name: 'chart-table',
        component: () => import('@/pages/chart-table.vue'),
        meta: { title: '圖表與表格' }
      },
      {
        path: '/os-usage',
        name: 'os-usage',
        component: () => import('@/pages/os-usage.vue'),
        meta: { title: '操作系統統計' }
      },
      {
        path: '/kpi-overview',
        name: 'kpi-overview',
        component: () => import('@/pages/kpi-overview.vue'),
        meta: { title: 'KPI 總覽' }
      }
    ]
  }

  // {
  //   path: '/:any(.*)',
  //   name: 'notFound',
  //   component: () => import('../views/error/404.vue'),
  //   meta: { menu: { title: '404', hiddenMenu: true, hiddenHistory: true } },
  // },
] as RouteRecordRaw[]
