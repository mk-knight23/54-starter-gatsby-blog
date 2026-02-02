import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
    meta: { title: 'Home | Creative Visual Blog' }
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: () => import('./views/Article.vue'),
    props: true,
    meta: { title: 'Article | Creative Visual Blog' }
  },
  {
    path: '/category/:slug',
    name: 'category',
    component: () => import('./views/Category.vue'),
    props: true,
    meta: { title: 'Category | Creative Visual Blog' }
  },
  {
    path: '/tag/:slug',
    name: 'tag',
    component: () => import('./views/Tag.vue'),
    props: true,
    meta: { title: 'Tag | Creative Visual Blog' }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('./views/Gallery.vue'),
    meta: { title: 'Gallery | Creative Visual Blog' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue'),
    meta: { title: 'About | Creative Visual Blog' }
  },
  // 404 fallback
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('./views/NotFound.vue'),
    meta: { title: '404 - Not Found' }
  }
]
