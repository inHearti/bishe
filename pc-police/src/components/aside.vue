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
      <img src="../assets/guohui.png" alt="" />
      <h2>平安武清</h2>
    </div>

    <el-menu-item index="1" @click="goguanwang" >
      <el-icon><HomeFilled /></el-icon>
      <span>官方网站</span>
    </el-menu-item>

    <el-menu-item index="2" @click="godashboard">
      <el-icon><odometer /></el-icon>
      <span>仪表盘</span>
    </el-menu-item>

    <el-sub-menu index="3">
      <template #title>
        <el-icon><User /></el-icon>
        <span>账号管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1" >
          <el-icon><Avatar /></el-icon>
          <span>管理员信息</span></el-menu-item
        >
        <el-menu-item index="3-2">
          <el-icon><Avatar /></el-icon>
          <span>用户信息</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <el-sub-menu index="4">
      <template #title>
        <el-icon><document /></el-icon>
        <span>线索管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1" @click="gocluefalse">
          <el-icon><QuestionFilled /></el-icon>
          <span>待处理线索</span></el-menu-item
        >
        <el-menu-item index="4-2" @click="gocluetrue">
          <el-icon><SuccessFilled /></el-icon>
          <span>已处理线索</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>
        <el-icon><Microphone /></el-icon>
        <span>通知管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1" @click="gopoliceCase">
          <el-icon><Promotion /></el-icon>
          <span>警情通报</span></el-menu-item
        >
        <el-menu-item index="5-2">
          <el-icon><Promotion /></el-icon>
          <span>防诈提醒</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="6">
      <el-icon><document /></el-icon>
      <span>案件总览</span>
    </el-menu-item>
    <el-menu-item index="7">
      <el-icon><Present /></el-icon>
      <span>失物招领</span>
    </el-menu-item>
    <el-menu-item index="8">
      <el-icon><Coin /></el-icon>
      <span>积分管理</span>
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
import { Present } from '@element-plus/icons-vue'
import { HomeFilled } from '@element-plus/icons-vue'
import {  User} from '@element-plus/icons-vue'
import {  Avatar} from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const gocluefalse = () => {
  router.push('/cluefalse')
}
const gocluetrue = () => {
  router.push('/cluetrue')
}
const gopoliceCase = () => {
  router.push('/policeCase')
}
const godashboard = () => {
  router.push('/dashboard')
}

const goguanwang= () => {
  window.location.href='https://www.tjwq.gov.cn/'
}
</script>
<!-- #4D70FF -->
<style lang="scss" scoped>
.el-menu {
  > div {
    display: flex;
    padding: 5px 20px 0;
    margin-bottom: 10px;
    img {
      width: 50px !important;
      height: 50px;
    }
    h2 {
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: 500;
      line-height: 50px;
      font-weight: 1000;
      font-size: 30px;
    }
  }
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
  }
  .el-menu-item,
  ::v-deep .el-sub-menu__title{
    height: 44px;
  }
}
</style>