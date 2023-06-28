<!--
 * @Date: 2023-03-07 14:55:03
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-06-28 15:47:33
 * @FilePath: /vue3-mobile-template/src/pages/login/index.vue
 * @description: 
-->
<template>
  <div class="login bg-white">
    <!-- header -->

    <!-- container -->
    <div class="bg-[#00A0EA]">
      <div class="h-[430px] relative">
        <!-- login-form -->
        <el-form :model="form" :rules="rules">
          <div class="px-[33px] py-[15px]">
            <el-form-item prop="username">
              <el-input
                size="large"
                v-model="form.username"
                placeholder="请输入账号"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                size="large"
                type="password"
                v-model="form.password"
                placeholder="请输入密码"
              />
            </el-form-item>
            <div
              class="flex items-center text-sm justify-between translate-y-[-5px] mb-[6px]"
            >
              <el-checkbox v-model="isRem" label="记住密码" size="large" />
              <el-tooltip effect="light" placement="left">
                <template #content>
                  <span class="text-sm p-3"> 请联系我们重置密码 </span>
                </template>
                忘记密码?
              </el-tooltip>
            </div>
            <el-button
              class="w-full m-0"
              size="large"
              type="primary"
              @click="toLogin"
              >登录</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api'
import { useUserStore } from '@/store/user'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { setStorage } from '@/utils/index'
const userStore = useUserStore()

const router = useRouter()
interface ILoginForm {
  username: string
  password: string
}
let form = reactive<ILoginForm>({
  username: '',
  password: ''
})

const isRem = ref<boolean>(false)
async function toLogin() {
  const res = await login(form)
  setStorage('token', res.token)
  setStorage('cookie', res.email)
  userStore.saveUserInfo(res)
  router.push('/')
}

const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    }
  ]
})
</script>

<style lang="less">
.login .el-form-item__content {
  margin-left: 0 !important;
}
</style>
