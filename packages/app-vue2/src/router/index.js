import Router from 'vue-router'

import editor from '@/components/editor/index'
import pro from '@/components/editor/pro'
import noheader from '@/components/editor/noheader'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/editor/pro'
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor,
      children:[
        {
          path: 'pro',
          name: 'pro',
          component: pro
        },
        {
          path: 'noheader',
          name: 'noheader',
          component: noheader
        },
      ]
    },
    {
      path: '*',
      redirect: '/editor/pro'
    },
  ],
  mode:'history'
})

export default router
