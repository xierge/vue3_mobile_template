/*
 * @Author: 李鹏玺 2899952565@qq.com
 * @Date: 2023-03-07 14:39:01
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-06-28 15:48:32
 * @FilePath: /vue3-mobile-template/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
// 引入pinia
import { createPinia } from 'pinia'
// 引入路由
import { initRouter } from './router'
// 引入element plus
import App from './App.vue'

const router = initRouter()
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
