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
          <span>{{username}}</span>
        </div>
      </template>
      <el-menu-item index="2-1">个人信息</el-menu-item>
      <el-menu-item index="2-2">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
const username = JSON.parse(localStorage.getItem('user')).name
const circleUrl =
  ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
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
