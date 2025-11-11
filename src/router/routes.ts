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
