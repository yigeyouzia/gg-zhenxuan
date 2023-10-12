//路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router'
// pnpm i progress 进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  nprogress.start()
  next()
})
// 全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})
