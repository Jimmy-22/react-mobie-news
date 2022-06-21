// 封装axios
import axios from 'axios'
import { Toast } from 'antd-mobile'

const service = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    Toast.show({
      content: error.response?.data.message,
      duration: 1000
    })
    return Promise.reject(error)
  }
)

export { service }
