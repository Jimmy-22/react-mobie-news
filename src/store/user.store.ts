// 用户信息模块
import { makeAutoObservable } from 'mobx'
import { service } from '../utils/request'

// 定义后端实际返回的token，data类型
type TokenInfo = {
  token: string
  refresh_token: string
}
// 定义通用的返回值结构
type LoginResponce = {
  message: string
  data: TokenInfo
}

type LoginForm = {
  mobie: string
  code: string
}

class userStore {
  tokenInfo: TokenInfo
  constructor() {
    makeAutoObservable(this)
    this.tokenInfo = {
      refresh_token: '',
      token: ''
    }
  }
  login = async ({ mobie, code }: LoginForm) => {
    const result = await service.post<LoginResponce>('/authorizations', {
      mobie,
      code
    })
    this.tokenInfo = result.data.data
  }
}

export default userStore
