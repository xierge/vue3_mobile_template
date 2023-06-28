/*
 * @Date: 2023-06-09 11:46:20
 * @LastEditors: 李鹏玺 2899952565@qq.com
 * @LastEditTime: 2023-06-09 11:56:57
 * @FilePath: /chongdian-web/src/utils/storage.ts
 * @description:
 */
export function setStorage(key: string, value: string | object) {
  const _value = typeof value === 'string' ? value : JSON.stringify(value)
  localStorage.setItem(key, _value)
}

export function getStorage(key: string) {
  const value = localStorage.getItem(key)
  return safeJsonParse(value)
}

export function removeStorage(key: string) {
  localStorage.removeItem(key)
}

function safeJsonParse(value: unknown) {
  if (!value || typeof value !== 'string') return value
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}
