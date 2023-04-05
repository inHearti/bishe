<template>
  <div class="content">
    <el-table :data="info" style="width: 100%">
      <el-table-column label="图片">
        <template #default="scope">
          <img :src="scope.row.info_image" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="info_title" label="标题" />
      <el-table-column prop="info_link" label="链接" />
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
    <el-form :model="form" class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="标题">
        <el-input v-model="form.info_title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="form.info_link" autocomplete="off" />
      </el-form-item>
      <el-form-item label="上传图片" prop="info_image">
        <el-upload
          class="avatar-uploader"
          action="http://127.0.0.1/lost/upload"
          :show-file-list="true"
          :on-success="handleAvatarSuccess"
          :auto-upload="false"
          ref="uploadRef"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
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
  name: 'information',
}
</script>
 
 <script setup>
import { getinfo, changeinfo } from '@/api/information'
import { computed, ref, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'
//上传图片
const imageUrl = ref('')
// 用于控制图片上传
const uploadRef = ref()
//控制弹窗显示
const dialogFormVisible1 = ref(false)

const handleAvatarSuccess = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
  form.info_image = response.result
}

const form = reactive({
  id: '',
  info_title: '',
  info_link: '',
  info_image: '',
})

//提交
const submit = () => {
  dialogFormVisible1.value = false
  uploadRef.value.submit()
  setTimeout(async () => {
    await changeinfo(form)
      .then((res) => {})
      .catch((e) => {})

    await getinfo()
      .then((res) => {
        info.value = res.data.result
      })
      .catch((e) => {})
  }, 100)
}

const info = ref([])

getinfo()
  .then((res) => {
    info.value = res.data.result
  })
  .catch((e) => {})

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
 