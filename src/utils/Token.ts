// 封装token的存取本地方法
import { TokenInfo } from '@/types'

const KEY = 'mobile-news'

function getToken() {
  const value = window.localStorage.getItem(KEY)
  // 类型判断，排除null，因为parse参数要求string
  if (value) {
    return JSON.parse(value)
  }
}

function setToken(tokenInfo: TokenInfo): void {
  return window.localStorage.setItem(KEY, JSON.stringify(tokenInfo))
}

function removeToken() {
  window.localStorage.removeItem(KEY)
}

export { getToken, setToken, removeToken }
