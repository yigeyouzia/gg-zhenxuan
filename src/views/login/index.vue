<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <h1>hello</h1>
          <h2>欢迎来到✨✨✨</h2>
          <el-form-item size="normal" prop="username">
            <el-input
              prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item size="normal" prop="password">
            <el-input
              type="password"
              prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item size="normal">
            <el-button
              :loading="loading"
              class="login-btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getMsgByTime } from '@/utils/time.ts'

// 引入user小仓库
import useUserStore from '@/store/modules/user'
import { rules } from './rules'

let userStore = useUserStore()
// 获取路由器
let $router = useRouter()

// 加载变量
let loading = ref(false)
let loginForm = reactive({ username: 'admin', password: '111111' })
// 获取form Ref
let loginFormRef = ref()
// 登录按钮回调
const login = async () => {
  // 表单校验字段
  await loginFormRef.value.validate()
  // 加载效果
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    // 跳转到首页
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getMsgByTime()}好`,
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(to bottom, rgba(110, 116, 130, 0.5), rgba(89, 86, 87, 0.5)),
    url('@/assets/images/background1.jpg') center/80% no-repeat;
  // background: content-box radial-gradient(rgb(143, 74, 88), rgb(89, 135, 152));
  background: url('@/assets/images/background.jpg') center/80% no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    right: 10vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: #fff;
      font-size: 40px;
    }

    h2 {
      color: #fff;
      font-size: 20px;
      margin: 20px 0;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
