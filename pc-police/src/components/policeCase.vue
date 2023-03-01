<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="嫌疑人姓名" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="案发地点" prop="place">
      <el-input v-model="ruleForm.place" />
    </el-form-item>
    <el-form-item label="案发时间" prop="time">
      <el-date-picker
        v-model="ruleForm.time"
        type="datetime"
        placeholder="选择时间"
        format="YYYY/MM/DD hh:mm:ss"
        value-format="YYYY-MM-DD h:m:s a"
      />
    </el-form-item>


   
    <el-form-item label="上传图片" prop="img">
      <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="ruleForm.img" :src="ruleForm.img" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
    </el-form-item>

    <el-form-item label="案件描述" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        提交
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'policeCase',
}
</script>
<script setup>
import { reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

//上传图片
const imageUrl = ref('')

const handleAvatarSuccess = (
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  name: '张某',
  place:'',
  time:'',
  img:'',
  desc: '',
})

const rules = reactive({
  name: [
    { required: true, message: '请输入嫌疑人姓名', trigger: 'blur' },
  ],
  place: [
    { required: true, message: '请输入案发地点', trigger: 'blur' },
  ],
  time: [
    { required: true, message: '请输入案发时间', trigger: 'blur' },
  ],
  img: [
    { required: false,  trigger: 'blur' },
  ],
  desc: [
    { required: true, message: '请输入案件描述', trigger: 'blur' },
  ],
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<style>

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>