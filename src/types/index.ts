// 定义后端实际返回的token，data类型
export type TokenInfo = {
  token: string
  refresh_token: string
}

// 用户信息
export type User = {
  id: string
  name: string
  photo: string
  art_count: string
  follow_count: number
  fans_count: number
  like_count: number
}

export interface ApiRes<T = any> {
  code: number
  message: string
  data: T
}
