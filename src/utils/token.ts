// 封装本地读取数据和存数据
export function SET_TOKEN(token: string) {
  localStorage.setItem('TOKEN', token)
}

export function GET_TOKEN(): string | null {
  return localStorage.getItem('TOKEN')
}

export function DEl_TOKEN(): void {
  localStorage.removeItem('TOKEN')
}
