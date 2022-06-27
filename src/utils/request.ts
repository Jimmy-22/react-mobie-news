// 封装axios
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { getToken } from '@/utils/Token'

const url = ' http://127.0.0.1:4523/m1/1187659-0-default/'

const service = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: url,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // do...发请求之前
    const token = getToken().token
    if (token) {
      config.headers!['Authorization'] = `Bearer ${token}`
    }
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
