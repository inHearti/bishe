<template>
  <div>
    <van-form @submit="onSubmit">
      <div class="title" style="font-size: 30px">注册</div>
      <van-cell-group inset>
        <van-field
          v-model="loginFormData.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginFormData.phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="loginFormData.password"
          type="password"
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
          block
          color="#1E3A8A"
        >
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { Toast } from "vant";
import { useRouter } from 'vue-router'
import { register } from '@/api/user'


const router = useRouter()

const loginFormData = reactive({
  name:'',
  phone: '',
  password: '',
  integral:0
})


const onSubmit = (values) => {
  register(loginFormData).then((res) => {
      router.push('/login')
  })
    .catch((e) => {
     
    })
}


</script>

<style scoped lang="scss">
.title {
  font-weight: bold;
}
.van-form{
  margin-top: 150px;
}
.van-button{
  margin-bottom: 10px;
}
</style>
