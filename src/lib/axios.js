import axios from 'axios'
import {getToken} from './utils'
import {message} from 'antd'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api', // api的base_url
    timeout: 20000 // 请求超时时间
})

instance.defaults.headers.Accept = '*/*'

let timer
//拦截请求
instance.interceptors.request.use(config => {
    const token = getToken()
    if (token) {
        config.headers.token = token
    }
    return config
  },
  error => {
    message.error('bed request')
    Promise.reject(error)
  }
)
//拦截响应
instance.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.code !== 0) {
      response.data.message && message.warning(response.data.message)
      return Promise.reject(response.data)
	}
    return Promise.resolve(response.data)
  },
  err => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            message.error('错误请求')
            break
          case 401:
            localStorage.clear()
            message.error('登录信息过期或未授权，请重新登录！')
            break
          case 403:
            message.error('拒绝访问！')
            break
          case 404:
            message.error('请求错误,未找到该资源！')
            break
          case 500:
            message.err('服务器出问题了，请稍后再试！')
            break
          default:
            message.err(`连接错误 ${err.response.status}！`)
            break
        }
      } else {
        message.error('服务器出了点小问题，请稍后再试！')
      }
    }, 200) // 200 毫秒内重复报错则只提示一次！

    return Promise.reject(err)
  }
)

export default instance