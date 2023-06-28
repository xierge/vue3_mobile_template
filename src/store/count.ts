import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({ count: 0 }),
  actions: {
    async increment() {
      await this.count++
    },
    decrement() {
      this.count--
    }
  }
})
