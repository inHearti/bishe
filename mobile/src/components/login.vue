<template>
  <div>
    <van-form @submit="onSubmit">
      <div class="title" style="font-size: 30px">登陆界面</div>
      <div class="sub-title" style="font-size: 15px">
        登录账号来使用各种提供的服务
      </div>
      <van-cell-group inset>
        <van-field
          v-model="loginFormData.phone"
          name="账号"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="loginFormData.password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          type="primary"
          native-type="submit"
          size="normal"
          @click="login()"
          block
          color="#1E3A8A"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { Toast } from "vant";
import { useRouter } from 'vue-router'
import { userAccountLogin } from '@/api/user'
import { register } from '@/api/user'

const router = useRouter()

const loginFormData = reactive({
  phone: '',
  password: '',
})


const login = () => {
  userAccountLogin(loginFormData).then((res) => {
    if (res.data.status == 200) {
      localStorage.setItem('user', JSON.stringify(res.data.result))

      router.push('/home')
    }
  })
    .catch((e) => {
     
    })
}


</script>

<style scoped lang="scss">
.title {
  font-weight: bold;
}
</style>
