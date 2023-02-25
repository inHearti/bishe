<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="rgb(25,26,35)"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
  <div>
    <img src="@/assets/logo.png" alt="" >
  </div>
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'aside',
}
</script>

<script setup>
import {Document} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<!-- #4D70FF -->
<style lang="scss" scoped>
.el-menu {
  height: 100%;
  >div{
    img{
      width: 100%;
    }
  }
  .el-menu-item{
    margin: 0 20px;
    height: 56px;
    border-radius: 5px;
    &:hover{
      background-color: #4D70FF;
    }
  }
}
</style>