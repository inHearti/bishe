<template>
  <div class="content">
 
   <el-table :data="info" style="width: 100%">
    <el-table-column  label="图片">
       <template #default>
        <img src="../assets/github.png" alt="">
       </template>
     </el-table-column>
     <el-table-column prop="info_title" label="标题"  />
     <el-table-column prop="info_link" label="链接" />
     <el-table-column fixed="right" label="操作" width="180">
       <template #default>
         <el-button link type="primary" size="small" @click="handleClick"
           >修改</el-button
         >
       </template>
     </el-table-column>
   </el-table>
 
  </div>
 </template>
 
 <script>
 export default {
   name: 'information',
 }
 </script>
 
 <script setup>
 import { getinfo } from '@/api/information'
 import { computed, ref, reactive } from 'vue'
 
 
const info = ref([])
 
 getinfo()
   .then((res) => {
     const arr = []
     console.log(res.data.result);
     res.data.result.forEach((item) => {
    
         arr.push(item)
    
     })
     info.value = arr
   })
   .catch((e) => {})
 

 </script>
 
 <style scoped lang="scss">
 .content{
   background-color: white;
   padding: 20px;
 
 }
 ::v-deep .el-form-item__label {
   padding-left: 12px;
 }
 </style>
 