// 根据当前时间获取上午 中午 下午
// 用于登录问候
export const getMsgByTime = (): String => {
  let msg: String = ''
  let hours: number = new Date().getHours()
  if (hours < 9) {
    msg = '早上'
  } else if (hours < 12) {
    msg = '上午'
  } else if (hours < 13) {
    msg = '中午'
  } else if (hours < 18) {
    msg = '下午'
  } else {
    msg = '晚上'
  }
  return msg
}
