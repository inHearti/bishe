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
              v-model="loginFormData.phone"
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
            <el-button @click="login" type="primary" style="width: 46%"
              >登录</el-button
            >
            <el-button
              @click="dialogFormVisible1 = true"
              type="primary"
              style="width: 46%; margin-left: 8%"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

  <el-dialog v-model="dialogFormVisible1" title="注册" class="register">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model.number="ruleForm2.name" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm2.age" />
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="ruleForm2.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm2.password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm2.checkPass" autocomplete="off" />
      </el-form-item>
    </el-form>

    <el-form-item>
      <el-button @click="dialogFormVisible1 = false">关闭</el-button>
      <el-button type="primary" @click="submit(ruleFormRef)"> 注册 </el-button>
    </el-form-item>
  </el-dialog>
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
import { userAccountLogin } from '@/api/user'
import { register } from '@/api/user'

// 验证函数
const checkUsername = (rule, value, callback) => {
  if (value.length < 2) {
    return callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}
const Password = (rule, value, callback) => {
  if (value.length < 2) {
    return callback(new Error('请输入正确的密码'))
  } else {
    callback()
  }
}

const router = useRouter()


// 登录相关操作
const loginForm = ref(null)
const picPath = ref('')
const loginFormData = reactive({
  phone: '',
  password: '',
})
const rules = reactive({
  phone: [{ validator: checkUsername, trigger: 'blur' }],
  password: [{ validator: Password, trigger: 'blur' }],
})

const login = () => {
  userAccountLogin(loginFormData)
    .then((res) => {
      if (res.data.status == 200) {
        localStorage.setItem('user', JSON.stringify(res.data.result))
        router.push('/home')
      }
    })
    .catch((e) => {
      ElMessage.error('用户名或密码错误！')
    })
}

//注册弹窗
const ruleFormRef = ref();
const dialogFormVisible1 = ref(false)
const checkName = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入用户名'))
  }
  else {

    callback()

  }

}
const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入手机号'))
  }
  else {

    callback()

  }

}
const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入年龄'))
  }
  else {

    callback()

  }

}

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入确认密码'))
  } else if (value !== ruleForm2.password) {
    callback(new Error("密码不同"))
  } else {
    callback()
  }
}

const ruleForm2 = reactive({
  name: '',
  phone: '',
  password: '',
  checkPass: '',
  age: '',
})


const rules2 = reactive({
  name: [{ validator: checkName, trigger: 'blur' }],
  phone: [{ validator: checkPhone, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const ruleForm3 = {
        name: ruleForm2.name,
        phone: ruleForm2.phone,
        password: ruleForm2.password,
        age: ruleForm2.age
      }
      register(ruleForm3).then()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>
<style lang="scss" scoped>
@import "@/style/newLogin.scss";
</style>

