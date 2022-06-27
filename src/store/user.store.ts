// 用户信息模块
import { makeAutoObservable } from 'mobx'
import { service } from '../utils/request'
import { getToken, setToken } from '@/utils/Token'
import { TokenInfo, User, ApiRes } from '@/types'

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
  // 声明用户信息
  userInfo: User
  constructor() {
    makeAutoObservable(this)
    // 以本地缓存作为初始值
    this.tokenInfo = getToken() || {
      refresh_token: '',
      token: ''
    }
    this.userInfo = {} as User
  }
  login = async ({ mobie, code }: LoginForm) => {
    const result = await service.post<LoginResponce>('/users', {
      mobie,
      code
    })
    console.log('res', result)
    // const result = await service.get<LoginResponce>('/users')
    this.tokenInfo = result.data.data
    // 拿到token之后往本地存一份
    setToken(result.data.data)
  }

  // 获取用户数据的action
  getUser = async () => {
    const res = await service.get<ApiRes<User>>('/user')
    this.userInfo = res.data.data
  }
}

export default userStore
