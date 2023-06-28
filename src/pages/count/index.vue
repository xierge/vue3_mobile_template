<!--
 * @Date: 2023-03-08 11:53:55
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-06-28 16:27:54
 * @FilePath: /vue3-mobile-template/src/pages/count/index.vue
 * @description: 
-->
<template>
  <div class="count">
    <span>{{ countStore.count }}</span>
    <br />
    <van-button type="primary">123</van-button>
    <div class="box">123</div>
  </div>
</template>

<script lang="ts" setup>
import { useCountStore } from '@/store/count'
import { onUnmounted } from 'vue'
import Lslot from './slot.vue'
const countStore = useCountStore()

const increment = () => {
  countStore.increment()
}

const subscribe = countStore.$onAction(
  ({ name, store, args, after, onError }) => {
    const startTime = Date.now()
    // 这将在执行 "store "的 action 之前触发。
    console.log(`Start "${name}" with params [${args.join(', ')}].`)
    console.log(store)
    // 这将在 action 成功并完全运行后触发。
    // 它等待着任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回一个拒绝的 promise，这将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

onUnmounted(() => {
  subscribe()
})
</script>

<style>
button {
  margin: 10px;
}

.box {
  width: 200px;
}
</style>
