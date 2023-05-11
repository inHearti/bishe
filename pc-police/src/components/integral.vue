<template>
  <div class="content">
    <el-table :data="info" style="width: 100%">
      <el-table-column label="头像">
        <template #default>
          <img
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            alt=""
          />
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="integral" label="积分" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="change(scope.row.id)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="dialogFormVisible1" title="添加物品" class="back">
    <el-form :model="form">
      <el-form-item label="线索ID" :label-width="formLabelWidth">
        <el-input disabled v-model="form.id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="积 分" :label-width="formLabelWidth">
        <el-input v-model="form.integral" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">关闭</el-button>
        <el-button type="primary" @click="submit"> 提交 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
 
 <script>
export default {
  name: 'integral',
}
</script>
 
 <script setup>
import { getcommoninfo, changeintegral } from '@/api/user'
import { computed, ref, reactive } from 'vue'

const info = ref([])
//控制弹窗显示
const dialogFormVisible1 = ref(false)

getcommoninfo()
  .then((res) => {
    const arr = []
    res.data.result.forEach((item) => {
      arr.push(item)
    })
    info.value = arr
  })
  .catch((e) => { })

const form = reactive({
  id: '',
  integral: ''
})

const submit = () => {
  dialogFormVisible1.value = false
  changeintegral(form).then((res) => {
    getcommoninfo()
      .then((res) => {
        const arr = []
        res.data.result.forEach((item) => {
          arr.push(item)
        })
        info.value = arr
      })
      .catch((e) => { })
  }).catch((e) => { })
}
const change = (id) => {
  dialogFormVisible1.value = true
  form.id = id
}
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
 