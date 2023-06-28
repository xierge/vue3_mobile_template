/*
 * @Date: 2023-04-06 23:36:07
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-06-28 15:45:02
 * @FilePath: /vue3-mobile-template/src/router/index.ts
 * @description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/pages/login/index.vue'
import Count from '@/pages/count'
export const initRouter = function () {
  const routes: RouteRecordRaw[] = [
    // {
    //   path: '/',
    //   component: () => import('@/pages/Layout/index.vue'),
    //   redirect: '/todo',
    //   name: 'layout',
    //   children: [
    //     {
    //       path: '/chargeSale',
    //       component: () => import('@/pages/login'),
    //       name: 'chargeSale'
    //     }
    //   ]
    // },
    { path: '/login', component: Login, name: 'login' },
    { path: '/count', component: Count, name: 'count' },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Count }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  return router
}
