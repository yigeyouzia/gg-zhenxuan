// 品牌管理接口
import type { TradeMark, TradeMarkResponseData } from './type'
import request from '@/utils/request'

enum API {
  // 获取已有品牌接口
  TRADEMARK_URL = '/admin/product/baseTrademark/',
  // 添加品牌
  ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
  // 修改已有品牌
  UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',

}

// 分页
export function reqHasTrademark(page: number, limit: number) {
  return request.get<any, TradeMarkResponseData>(`${API.TRADEMARK_URL}${page}/${limit}`)
}

// 添加与修改品牌
export function reqAddOrUpdateTrademark(data: TradeMark) {
  // 修改
  if (data.id)
    return request.put<any, any>(API.UPDATETRADEMARK_URL, data)
  else
    return request.post<any, any>(API.ADDTRADEMARK_URL, data)
}
