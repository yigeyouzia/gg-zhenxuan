// 创建用户小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
// 引入数据类型
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN, DEl_TOKEN } from '@/utils/token'
// 引入路由（常量路由）
import { constantRoute } from '@/router/routes'

const useUserSotre = defineStore('User', {
  // 小仓库存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识
      menuRoutes: constantRoute, //仓库存储需要存储菜单数组（路由）
      username: '',
      avatar: '',
    }
  },
  // 异步|逻辑的地方
  getters: {},
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormData): Promise<any> {
      const res: loginResponseData = await reqLogin(data)
      // 成功：200：token
      if (res.code === 200) {
        this.token = res.data as string
        // 本地存储
        SET_TOKEN(res.data as string)
        // 保证当前async函数返回成功的promise
        return 'ok'
      } else {
        // 失败：201
        return res.data === null
          ? Promise.reject(new Error('没有此用户'))
          : Promise.reject(new Error(res.data))
      }
    },

    // 获取用户信息
    async userInfo() {
      // 获取用户信息存储到仓库（用户头像，名字）
      const res: userInfoReponseData = await reqUserInfo()
      if (res.code === 200) {
        this.username = res.data.name
        this.avatar = res.data.avatar
        return 'ok'
      } else {
        return Promise.reject(res.message)
      }
    },

    // 退出logout
    async userLogout() {
      // 目前没有mock接口
      const res = await reqLogout()
      if (res.code == 200) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = ''
        this.username = ''
        this.avatar = ''
        DEl_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
  },
})

// 对外暴露小仓库
export default useUserSotre
