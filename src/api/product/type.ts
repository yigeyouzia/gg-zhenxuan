//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
    code: number
    message: string
    ok: boolean
}

// 已有品牌数据类型
export interface TradeMark {
    id?: number,
    tmName: string,
    logoUrl: string
}

// 包含全部已有品牌数据
export type Records = TradeMark[]

// 获取接口所有品牌类型
export interface TradeMarkResponseData extends ResponseData {
    data: {
        records: Records
        total: number,
        size: number,
        current: number
        searchCount: boolean,
        pages: number
    }
}