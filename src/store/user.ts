/*
 * @Date: 2023-03-21 21:55:17
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-03-27 21:08:05
 * @FilePath: /vue3_base_demo/src/store/user.ts
 * @description:
 */
import { defineStore } from 'pinia'

export interface IUserInfo {
  username: string
  token: string
  email: string
  channelDescription: string | null
  avatar: string | null
}

export const useUserStore = defineStore('user', {
  state: (): IUserInfo => ({
    username: '',
    token: '',
    email: '',
    channelDescription: null,
    avatar: null
  }),

  actions: {
    saveUserInfo(state: IUserInfo) {
      Object.assign(this, state)
    }
  }
})
