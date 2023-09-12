// 创建用户小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import { loginFormData, loginResponseData } from '@/api/user/type'
import { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 引入路由（常量路由）
import { constantRoute } from '@/router/routes'
let useUserSotre = defineStore('User', {
  // 小仓库存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识
      menuRoutes: constantRoute, //仓库存储需要存储菜单数组（路由）
    }
  },
  // 异步|逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormData): Promise<any> {
      let res: loginResponseData = await reqLogin(data)
      console.log(res)
      // 成功：200：token
      if (res.code === 200) {
        this.token = res.data.token as string
        // 本地存储
        SET_TOKEN(res.data.token as string)
        // 保证当前async函数返回成功的promise
        return 'ok'
      } else {
        // 失败：201
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})

// 对外暴露小仓库
export default useUserSotre
