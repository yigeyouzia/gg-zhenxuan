// 封装本地读取数据和存数据
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = (): string | null => {
  return localStorage.getItem('TOKEN')
}
