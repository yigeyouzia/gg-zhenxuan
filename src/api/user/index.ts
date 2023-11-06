// 统一管理咱们项目用户相关的接口

import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from './type'
import request from '@/utils/request'

// 项目用户相关的请求地址

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  LOGOUT_URL = '/admin/acl/index/logout',
  USERINFO_URL = '/admin/acl/index/info',
  // LOGIN_URL = '/user/login',
  // USERINFO_URL = '/user/info',
}
// 登录接口
export function reqLogin(data: loginFormData) {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}
// 获取用户信息

export function reqUserInfo() {
  return request.get<any, userInfoReponseData>(API.USERINFO_URL)
}

// 退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
