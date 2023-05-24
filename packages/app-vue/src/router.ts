import { createRouter, createWebHistory } from 'vue-router';
import Layout from './pages/layout.vue';

const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/editor/pro',
  },
  {
    path: '/editor',
    name: 'editor',
    component: Layout,
    children: [
      {
        path: 'pro',
        name: 'pro',
        component: function () {
          return import(/* webpackChunkName: "assets" */ './pages/editor-pro.vue')
        }
      },
      {
        path: 'noheader',
        name: 'noheader',
        component: function () {
          return import(/* webpackChunkName: "assets" */ './pages/editor-noheader.vue')
        }
      },
    ]
  },
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
