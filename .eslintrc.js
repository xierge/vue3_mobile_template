/*
 * @Date: 2023-04-10 10:26:18
 * @LastEditors: 李鹏玺 2899952565@qq.com
 * @LastEditTime: 2023-06-06 18:41:31
 * @FilePath: /vue3_ts_demo/.eslintrc.js
 * @description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 必须放在最后面
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // "off" or 0 - 关闭规则
    // "warn" or 1 - 将规则视为一个警告
    // "error" or 2 - 将规则视为一个错误
    eqeqeq: 2, // 强制使用 === 和 !==
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
