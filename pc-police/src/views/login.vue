<template>
  <div id="userLayout">
    <div class="login_panel">
      <div class="login_panel_form">
        <div class="login_panel_form_title">
          <img class="login_panel_form_title_logo" alt />
          <p class="login_panel_form_title_p"></p>
        </div>

        <el-form
          ref="loginForm"
          :model="loginFormData"
          :rules="rules"
          :validate-on-rule-change="false"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginFormData.username"
              size="large"
              placeholder="请输入用户名"
              :suffix-icon="User"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginFormData.password"
              size="large"
              placeholder="请输入密码"
              :suffix-icon="Lock"
            />
          </el-form-item>
          <el-form-item>
            <div class="vPicBox">
              <el-input
                placeholder="请输入验证码"
                size="large"
                style="flex: 1; padding-right: 20px"
              />
              <div class="vPic">
                <img v-if="picPath" :src="picPath" />
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button @click="login" type="primary" style="width: 46%"
              >登录</el-button
            >
            <el-button type="primary" style="width: 46%; margin-left: 8%"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
}
</script>

<script setup>
import { User } from '@element-plus/icons-vue'
import { Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
// 验证函数
const checkUsername = (rule, value, callback) => {
  if (value.length < 5) {
    return callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}
const checkPassword = (rule, value, callback) => {
  if (value.length < 6) {
    return callback(new Error('请输入正确的密码'))
  } else {
    callback()
  }
}

const router = useRouter()
const login = () => {
  router.push('/home')
}
// 登录相关操作
const loginForm = ref(null)
const picPath = ref('')
const loginFormData = reactive({
  username: 'admin',
  password: '123456',
})
const rules = reactive({
  username: [{ validator: checkUsername, trigger: 'blur' }],
  password: [{ validator: checkPassword, trigger: 'blur' }],
})
</script>
<style lang="scss" scoped>
@import '@/style/newLogin.scss';
</style>

