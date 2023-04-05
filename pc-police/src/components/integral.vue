<template>
  <div class="content">
    <el-table :data="info" style="width: 100%">
      <el-table-column label="头像">
        <template #default>
          <img src="../assets/github.png" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="integral" label="积分" />
    </el-table>
  </div>
</template>
 
 <script>
export default {
  name: 'integral',
}
</script>
 
 <script setup>
import { getcommoninfo } from '@/api/user'
import { computed, ref, reactive } from 'vue'

const info = ref([])

getcommoninfo()
  .then((res) => {
    const arr = []
    res.data.result.forEach((item) => {
      arr.push(item)
    })
    info.value = arr
  })
  .catch((e) => {})
</script>
 
 <style scoped lang="scss">
.content {
  background-color: white;
  padding: 20px;
  img {
    width: 50px;
    height: 50px;
  }
}
::v-deep .el-form-item__label {
  padding-left: 12px;
}
</style>
 