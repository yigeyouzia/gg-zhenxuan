// 路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router'

// pnpm i progress 进度条
// @ts-expect-error 渐变色：background-image: linear-gradient(to right, red, cyan, yellow, pink);
import nprogress from 'nprogress'
import setting from './setting'

// 引入进度条样式
import 'nprogress/nprogress.css'

// 获取用户相关的小仓库
import useUserStore from './store/modules/user'

// 取消加载小球
nprogress.configure({ showSpinner: false })

// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  console.log(from)
  document.title = `${setting.title} - ${to.meta.title}`
  nprogress.start()
  // 获取token  判断登录
  const userStore = useUserStore()
  const token = userStore.token
  // 获取用户名字
  const username = userStore.username
  // console.log(token)
  // 1.登录成功
  if (token) {
    // 1.1访问登录 到首页
    if (to.path === 'login') {
      next({ path: '/' })
    }
    else {
      // 1.2访问六个路由
      // 有username
      if (username) {
        next()
      }
      else {
        // 刷新时获取用户信息
        try {
          await userStore.userInfo()
          // 放行
          // 万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
          next({ ...to })
        }
        catch (error) {
          // token过期:获取不到用户信息了
          // 用户手动修改本地存储token
          // 退出登录->用户相关的数据清空
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  }
  else {
    // 2.用户未登录
    if (to.path == '/login')
      next()
    else
      next({ path: '/login', query: { rederict: to.path } })
  }
})
// 全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})

// 第一个问题:任意路由切换实现进度条业务 ---nprogress
// 第二个问题:路由鉴权(路由组件访问权限的设置)
// 全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)

// 用户未登录:可以访问login,其余六个路由不能访问(指向login)
// 用户登录成功:不可以访问login[指向首页],其余的路由可以访问
