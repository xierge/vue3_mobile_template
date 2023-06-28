/*
 * @Date: 2023-03-21 21:55:17
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-06-28 15:48:51
 * @FilePath: /vue3-mobile-template/src/api/index.ts
 * @description:
 */
import Api from '@/utils/request'
import { IUserInfo } from '@/store/user'

export const login = (data: { username: string; password: string }) =>
  Api.post<IUserInfo>('/v1/login', data)

export const upload = (data: FormData) =>
  Api.post('http://localhost:3000/upload', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

export const upload1 = (data: FormData) =>
  Api.post('http://localhost:3000/upload1', data)

export const mergeFile = (data: { size: number; fileName: string }) =>
  Api.post('http://localhost:3000/merge', data)
