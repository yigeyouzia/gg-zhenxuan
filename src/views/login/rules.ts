import Verify from '@/utils/Verify'

// 表单校验对象
/**
 * TODO 密码正则校验 自定义
 * @param rule 校验规则对象
 * @param value 表单元素文本内容
 * @param callback 规则放行函数
 */
// const validatorUserName = (rule: any, value: any, callback: any) => {
//   if (/^\d{5, 10}$/.test(value)) {
//     callback()
//   } else {
//     callback(new Error("账号长度为5~10位"));
//   }
// }
export const rules = {
  username: [
    { required: true, message: '请输入账号' },
    {
      validator: Verify.username,
      trigger: 'change',
      message: '账号只能是数字，字母，特殊字符 最少5~18位',
    },
  ],
  password: [
    { required: true, message: '请输入密码' },
    {
      validator: Verify.password,
      trigger: 'change',
      message: '密码只能是数字，字母，特殊字符 最少6~18位',
    },
  ],
}
