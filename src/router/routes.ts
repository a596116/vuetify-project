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
        meta: { title: '首頁', icon: 'mdi-home', i18nKey: 'menu.home' }
      },
      {
        path: '/charts',
        name: 'charts',
        component: () => import('@/pages/charts.vue'),
        meta: { title: '圖表展示', icon: 'mdi-chart-bar', i18nKey: 'menu.charts' }
      },
      {
        path: '/chart-table',
        name: 'chart-table',
        component: () => import('@/pages/chart-table.vue'),
        meta: { title: '圖表與表格', icon: 'mdi-chart-box-outline', i18nKey: 'menu.chartTable' }
      },
      {
        path: '/os-usage',
        name: 'os-usage',
        component: () => import('@/pages/os-usage.vue'),
        meta: { title: '操作系統統計', icon: 'mdi-monitor-dashboard', i18nKey: 'menu.osUsage' }
      },
      {
        path: '/kpi-overview',
        name: 'kpi-overview',
        component: () => import('@/pages/kpi-overview.vue'),
        meta: { title: 'KPI 總覽', icon: 'mdi-view-dashboard-outline', i18nKey: 'menu.kpiOverview' }
      },
      {
        path: '/components-demo',
        name: 'components-demo',
        redirect: '/components-demo/drawer',
        meta: { title: '組件展示', icon: 'mdi-puzzle', i18nKey: 'menu.componentsDemo' },
        children: [
          {
            path: 'notification-demo',
            name: 'notification-demo',
            component: () => import('@/pages/notification-demo.vue'),
            meta: { title: '通知組件示範', i18nKey: 'menu.notificationDemo' }
          },
          {
            path: 'drawer',
            name: 'drawer-demo',
            component: () => import('@/pages/drawer-demo.vue'),
            meta: { title: 'Drawer 抽屜', i18nKey: 'menu.drawerDemo' }
          },
          {
            path: 'loading',
            name: 'loading-demo',
            component: () => import('@/pages/loading-demo.vue'),
            meta: { title: 'Loading 載入', i18nKey: 'menu.loadingDemo' }
          },
          {
            path: 'input',
            name: 'input-demo',
            component: () => import('@/pages/input-demo.vue'),
            meta: { title: 'Input 輸入框', i18nKey: 'menu.inputDemo' }
          },
          {
            path: 'datetime',
            name: 'datetime-demo',
            component: () => import('@/pages/datetime-demo.vue'),
            meta: { title: '日期時間輸入', i18nKey: 'menu.datetimeDemo' }
          }
        ]
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
