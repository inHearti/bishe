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
      <el-menu-item-group >
        <el-menu-item index="2-1" @click="gocluefalse">
          <el-icon><QuestionFilled /></el-icon>
          <span>待处理线索</span></el-menu-item
        >
        <el-menu-item index="2-2" @click="gocluetrue">
          <el-icon><SuccessFilled /></el-icon>
          <span>已处理线索</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><Microphone /></el-icon>
        <span>通知管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1" >
          <el-icon><Promotion /></el-icon>
          <span>警情通报</span></el-menu-item
        >
        <el-menu-item index="3-2">
          <el-icon><Promotion /></el-icon>
          <span>防诈提醒</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon><Coin /></el-icon>
      <span>积分</span>
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
import { SuccessFilled } from '@element-plus/icons-vue'
import { QuestionFilled } from '@element-plus/icons-vue'
import { Microphone } from '@element-plus/icons-vue'
import { Promotion } from '@element-plus/icons-vue'
import { Coin } from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'



const router = useRouter()
const gocluefalse = () => {
  router.push('/cluefalse')
}
const gocluetrue = () => {
  router.push('/cluetrue')
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
    border-radius: 5px;
    &:hover {
      // opacity: 0.8;
    }
  }
}
</style>