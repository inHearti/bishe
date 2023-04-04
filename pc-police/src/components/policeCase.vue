<template>
  <div class="content">
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
      <el-form-item label="案发时间" prop="case_time">
        <el-date-picker
          v-model="ruleForm.case_time"
          type="datetime"
          placeholder="选择时间"
          format="YYYY-MM-DD hh:mm"
          value-format="YYYY-MM-DD h:m a"
        />
      </el-form-item>

      <el-form-item label="上传图片" prop="caseimage">
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

      <el-form-item label="案件描述" prop="caseinfo">
        <el-input v-model="ruleForm.caseinfo" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          提交
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  <img v-if="imageUrl1" :src="imageUrl1" class="avatar" />
</template>
<script>
export default {
  name: 'policeCase',
}
</script>
<script setup>
import { reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { circulate } from '@/api/case'

//上传图片
const imageUrl = ref('')
const imageUrl1 = ref('')
// 用于控制图片上传
const uploadRef = ref()

const handleAvatarSuccess = (
  response,
  uploadFile
) => {


  imageUrl.value = URL.createObjectURL(uploadFile.raw)
  ruleForm.caseimage = response.result
}


const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  name: '',
  place: '',
  case_time: '',
  caseimage: '',
  caseinfo: '',
})

const rules = reactive({
  name: [
    { required: true, message: '请输入嫌疑人姓名', trigger: 'blur' },
  ],
  place: [
    { required: true, message: '请输入案发地点', trigger: 'blur' },
  ],
  case_time: [
    { required: true, message: '请输入案发时间', trigger: 'blur' },
  ],
  caseimage: [
    { required: false, trigger: 'blur' },
  ],
  caseinfo: [
    { required: true, message: '请输入案件描述', trigger: 'blur' },
  ],
})

// 文件类型转Blob
// const fileToBlob = (file) => {
//   const type = file.type;
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     let baseData = reader.result;
//     //base64-->blob
//     var byteString;
//     if(baseData.split(',')[0].indexOf('base64') >= 0)
//       byteString = atob(baseData.split(',')[1]);//base64 解码
//     else{
//       byteString = unescape(baseData.split(',')[1]);
//     }
//     var mimeString = baseData.split(',')[0].split(':')[1].split(';')[0];//mime类型 -- image/png
//     var ia = new Uint8Array(byteString.length);//创建视图
//     for(var i = 0; i < byteString.length; i++) {
//       ia[i] = byteString.charCodeAt(i);
//     }
//     var blob = new Blob([ia], {type});

//     console.log(blob);
//     let file = blobToFile(blob)
//     console.log(file);
//   };

// };


const fileToBlob = (file) => {
  const type = file.type;
  const reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = function (e) {
    const blob = new Blob([e.target.result], { type });
    console.log("blob:", blob);
    const file1 = blobToFile(blob, 'fileName');
    console.log('file', file1);
    imageUrl1.value = URL.createObjectURL(file1)
  };
}


// Blob 转 File
const blobToFile = (blob, fileName) => {
  const file = new File([blob], fileName, { type: blob.type });
  return file;
}


const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // console.log(ruleForm.caseimage.raw);
      // fileToBlob(ruleForm.caseimage.raw)


      // ruleForm.caseimage = imageUrl.value
      uploadRef.value.submit()
      setTimeout(async () => {
        await circulate(ruleForm)
          .then((res) => { })
          .catch((e) => { })
      }, 100)
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

<style lang="scss" scoped>
.content {
  background-color: white;
  padding: 20px;
}
::v-deep .avatar-uploader .el-upload {
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