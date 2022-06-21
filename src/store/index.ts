import UserStore from './user.store'
import React from 'react'
import { configure } from 'mobx'
configure({
  enforceActions: 'never'
})

class RootStore {
  userStore: UserStore
  // 组合模块
  constructor() {
    this.userStore = new UserStore()
  }
}
// 把生成的根实例store存入context
const StoresContext = React.createContext(new RootStore())
// 导出方法 用来获取contex中的数据
export const useStore = () => React.useContext(StoresContext)
