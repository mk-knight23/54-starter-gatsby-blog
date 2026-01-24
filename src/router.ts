import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/article/:slug',
    component: () => import('./views/Article.vue'),
    props: true
  }
]
