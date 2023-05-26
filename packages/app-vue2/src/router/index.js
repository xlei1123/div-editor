import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
// 关于我们
import aboutUs from '@/components/aboutUs'
// 帮助中心
import help from '@/components/help'
import pcWxLogin from '@/components/pcWxLogin'

import regist from '@/components/regist'
import getPwd from '@/components/getPwd'
import indexBox from '@/components/teacher/indexBox'
import index from '@/components/teacher/index'
import newQuery from '@/components/teacher/newQuery'
import publishResult from '@/components/teacher/publishResult'
import queryManagement from '@/components/teacher/queryManagement'
import modMyInfo from '@/components/teacher/modMyInfo'
import modPwd from '@/components/teacher/modPwd'
import view from '@/components/teacher/view'

// 学校简介以及学校官网导入
import modSchool from '@/components/teacher/modSchool'
// 学校最新活动导入
import addLatestAc from '@/components/teacher/addLatestAc'

// 查成绩
import enterQueryCode from '@/components/query/enterQueryCode'
import queryList from '@/components/query/queryList'
import query from '@/components/query/query'

// 微信中 学校简介菜单
import schoolIntro from '@/components/teacher/schoolIntro'
// 微信中 最新活动菜单
import latestAc from '@/components/teacher/latestAc'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/pcWxLogin',
      name: 'pcWxLogin',
      component: pcWxLogin
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/getPwd',
      name: 'getPwd',
      component: getPwd
    },
    {
      path: '/indexBox',
      name: 'indexBox',
      component: indexBox,
      children:[
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path: 'newQuery',
          name: 'newQuery',
          component: newQuery
        },
        {
          path: 'publishResult',
          name: 'publishResult',
          component: publishResult
        },
        {
          path: 'queryManagement',
          name: 'queryManagement',
          component: queryManagement
        },
        {
          path: 'modMyInfo',
          name: 'modMyInfo',
          component: modMyInfo
        },
        {
          path: 'modPwd',
          name: 'modPwd',
          component: modPwd
        },
        {
          path: 'view',
          name: 'view',
          component: view
        },
        {
          path: 'modSchool',
          name: 'modSchool',
          component: modSchool
        },
        {
          path: 'addLatestAc',
          name: 'addLatestAc',
          component: addLatestAc
        },
      ]
    },
    {
      path: '/enterQueryCode',
      name: 'enterQueryCode',
      component: enterQueryCode
    },
    {
      path: '/queryList',
      name: 'queryList',
      component: queryList
    },
    {
      path: '/query',
      name: 'query',
      component: query
    },
    {
      path: '/schoolIntro',
      name: 'schoolIntro',
      component: schoolIntro
    },
    {
      path: '/latestAc',
      name: 'latestAc',
      component: latestAc
    },
    {
      path: '*',
      name: 'login',
      component: login
    },
  ],
  mode:'history'
})


// 全局路由拦截 发现没有sessionStorage.teacherInfo 就去登录  //d第一个是全局检测拦截 第二个是登录页不用拦截  role ==0表示老师  role==1表示学生
router.beforeEach((to, from, next) =>{
  if(!sessionStorage.teacherInfo && to.path!='/login' && to.path!='/enterQueryCode' &&to.path!='/aboutUs' &&to.path!='/help'){  
    if(to.query.role){
      router.push({
        path:'/enterQueryCode'
      })
    }else{
      router.push({
        path:'/login'
      })
    }   
    
  }
  next()
})
export default router
