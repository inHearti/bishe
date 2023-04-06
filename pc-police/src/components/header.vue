<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="flex-grow" />

    <el-sub-menu index="2">
      <template #title>
        <div class="block">
          <el-avatar :size="35" :src="circleUrl" />
          <span>{{userinfo.name}}</span>
        </div>
      </template>
      <el-menu-item index="2-1" @click="dialogFormVisible = true">个人信息</el-menu-item>
      <el-menu-item index="2-2" @click="quit">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <el-dialog v-model="dialogFormVisible" title="个人信息">
      <el-form :data="userinfo">
        <el-form-item label="ID:" :label-width="formLabelWidth">
         {{userinfo.id}}
        </el-form-item>
        <el-form-item label="用户名:" :label-width="formLabelWidth">
          {{ userinfo.name }}
        </el-form-item>
        <el-form-item label="年龄:" :label-width="formLabelWidth">
          {{ userinfo.age }}
        </el-form-item>
        <el-form-item label="手机号:" :label-width="formLabelWidth">
          {{ userinfo.phone }}
        </el-form-item>       
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
</template>

<script setup>
import { ref ,reactive} from 'vue'
import { useRouter } from 'vue-router'

//控制弹窗显示
const dialogFormVisible = ref(false)

const circleUrl =
  ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const activeIndex = ref('1')

const userinfo = reactive({
  id: JSON.parse(localStorage.getItem('user')).id,
  name:JSON.parse(localStorage.getItem('user')).name,
  age:JSON.parse(localStorage.getItem('user')).age,
  phone:JSON.parse(localStorage.getItem('user')).phone,
})

const router = useRouter()
const quit = ()=>{
  localStorage.removeItem('user')
  router.push('/')
}
</script>

<style lang="scss" scoped>

::v-deep .el-form-item__label {
  padding-left: 12px;
}
.flex-grow {
  flex-grow: 1;
}
.block{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-avatar{
    margin-right: 10px;
  }
}
</style>
