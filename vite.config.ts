/*
 * @Date: 2023-03-21 21:55:17
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-06-28 16:14:20
 * @FilePath: /vue3-mobile-template/vite.config.ts
 * @description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    vueJsx()
  ],
  base: './',
  resolve: {
    extensions: ['.mjs', '.js', '.vue', '.json'],
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    proxy: {
      '/ytb': {
        changeOrigin: true,
        target: 'http://xizige.cn:7001'
      }
    }
  }
})
