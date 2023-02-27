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
    <el-sub-menu index="2">
      <template #title>
        <el-icon><document /></el-icon>
        <span>线索管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="goclue">
          <el-icon><QuestionFilled /></el-icon>
          <span>待处理线索</span></el-menu-item
        >
        <el-menu-item index="2-2">
          <el-icon><SuccessFilled /></el-icon>
          <span>已处理线索</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
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
import { SuccessFilled } from '@element-plus/icons-vue'
import { QuestionFilled } from '@element-plus/icons-vue'
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
  .el-sub-menu {
    .el-menu-item {
      margin-left: 40px;
      padding-left: 20px;
    }
  }
  .el-menu-item,
  .el-sub-menu {
    margin: 0 10px 10px;
    height: 56px;
    border-radius: 5px;
    &:hover {
      // opacity: 0.8;
    }
  }
}
</style>