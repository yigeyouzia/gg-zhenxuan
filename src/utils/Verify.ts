const regs = {
  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  number: /^([0]|[1-9][0-9]*)$/,
  //   password: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*_]{6,18}$/,
  username: /^[a-zA-Z0-9]{5,18}$/,
  password: /^[a-zA-Z0-9]{6,18}$/,
  Ever: /^[a-zA-Z0-9\~\!\@\#\$\%\^\&\*\_\+\{\}\:\"\|\<\>\?\-\=\;\'\\\,\.\/]{6,15}$/,
}
const verify = (rule: any, value: any, reg: RegExp, callback: any) => {
  if (value) {
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error(rule.message))
    }
  } else {
    callback()
  }
}

export default {
  email: (rule: any, value: any, callback: any) => {
    return verify(rule, value, regs.email, callback)
  },
  number: (rule: any, value: any, callback: any) => {
    return verify(rule, value, regs.number, callback)
  },
  password: (rule: any, value: any, callback: any) => {
    return verify(rule, value, regs.password, callback)
  },
  username: (rule: any, value: any, callback: any) => {
    return verify(rule, value, regs.username, callback)
  },
}
