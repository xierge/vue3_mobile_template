/*
 * @Date: 2023-04-06 23:36:07
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-06-28 15:49:14
 * @FilePath: /vue3-mobile-template/src/utils/request.ts
 * @description:
 */
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios'

const Api: AxiosInstance = axios.create({
  timeout: 3000,
  baseURL: 'http://xizige.cn:7001/ytb'
})

Api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Api.interceptors.response.use(
  (response: AxiosResponse) => {
    const {
      data: { code, data }
    } = response
    return data
  },
  (error) => {
    if (error?.response?.status === 422) {
      console.log(error)
    }
    return Promise.reject(error)
  }
)

export default {
  get<T = unknown>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return Api.get(url, options)
  },
  post<T = unknown>(
    url: string,
    data: object,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return Api.post(url, data, options)
  },
  put<T = unknown>(
    url: string,
    data: object,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return Api.put(url, data, options)
  }
}
