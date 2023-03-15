<template>
  <div class="content">
   <div>
     <el-form
       :inline="true"
       :model="formInline"
       class="demo-form-inline"
       :label-position="labelPosition"
     >
       <el-form-item label="ID">
         <el-input v-model="formInline.id" placeholder="请输入查询ID" />
       </el-form-item>
       <el-form-item label="地点">
         <el-input v-model="formInline.place" placeholder="请输入地点" />
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="onSubmit"  >查询</el-button>
       </el-form-item>
     </el-form>
   </div>
 
   <el-table :data="cases1" style="width: 100%">
     <el-table-column prop="id" label="案件ID" width="80" />
     <el-table-column  label="照片">
       <template #default>
        <img src="../assets/github.png" alt="">
       </template>
     </el-table-column>

     <el-table-column prop="name" label="嫌疑人姓名"  />
     <el-table-column prop="case_time" label="案发时间" />
     <el-table-column prop="place" label="案发地点"  />
     <el-table-column prop="caseinfo" label="描述" />
   </el-table>
 
   <el-pagination
     v-model:current-page="currentPage"
     v-model:page-size="pageSize"
     :small="small"
     :disabled="disabled"
     :background="background"
     layout="prev, pager, next, jumper"
     :total="cases.length"
     @size-change="handleSizeChange"
     @current-change="handleCurrentChange"
   />
  </div>
 </template>
 
 <script>
 export default {
   name: 'caselist',
 }
 </script>
 
 <script setup>
 import { getcase } from '@/api/case'
 import { computed, ref, reactive } from 'vue'
 
 const labelPosition = ref('left')
 //查询参数
 const formInline = reactive({
   id: '',
   place: '',
 })
 
 const currentPage = ref(1)
 const pageSize = ref(6)
 
 const cases = ref([])
 
 getcase()
   .then((res) => {
     const arr = []
     console.log(res.data.result);
     res.data.result.forEach((item) => {
    
         arr.push(item)
    
     })
     cases.value = arr
   })
   .catch((e) => {})
 
 const cases1 = computed(() => {
   return cases.value.slice((currentPage.value - 1) * 6, currentPage.value * 6)
 })
 console.log(cases)
 const handleSizeChange = (val) => {
   console.log(`${val} items per page`)
 }
 const handleCurrentChange = (val) => {
   console.log(`current page: ${val}`)
 }
 </script>
 
 <style scoped lang="scss">
 .content{
   background-color: white;
   padding: 20px;
   img{
    width: 100px;
    height: 100px;
   }
 
 }
 ::v-deep .el-form-item__label {
   padding-left: 12px;
 }
 </style>
 