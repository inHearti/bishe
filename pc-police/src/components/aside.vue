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
      <img src="@/assets/logo.png" alt="" />
    </div>
    <el-menu-item index="1">
      <el-icon><odometer /></el-icon>
      <span>仪表盘</span>
    </el-menu-item>
    <el-menu-item index="2" @click="goclue">
      <el-icon><document /></el-icon>
      <span>线索管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'aside',
}
</script>

<script setup>
import { Document } from '@element-plus/icons-vue'
import { Odometer } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const router = useRouter()
const goclue = () => {
  router.push('/clue')
}
</script>
<!-- #4D70FF -->
<style lang="scss" scoped>
.el-menu {
  .is-active {
    background-color: #4d70ff;
    color: white;
  }
  height: 100%;
  > div {
    img {
      width: 100%;
    }
  }
  .el-menu-item {
    margin: 0 20px 10px;
    height: 56px;
    border-radius: 5px;
    &:hover {
      background-color: #4d70ff;
    }
  }
}
</style>