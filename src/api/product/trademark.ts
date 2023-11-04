// 品牌管理接口
import request from '@/utils/request'
import type { TradeMarkResponseData } from './type'

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
}

// 分页
export const reqHasTrademark = (page: number, limit: number) =>
  request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)
