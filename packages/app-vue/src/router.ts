import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/editor-pro',
  },
  {
    path: '/editor-pro',
    name: 'editor-pro',
    component: () => import('./pages/editor-pro.vue'),
  },
  {
    path: '/editor-noheader',
    name: 'editor-noheader',
    component: () => import('./pages/editor-noheader.vue'),
  },
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
