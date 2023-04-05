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
      <el-form-item label="当前提醒信息">
        {{ remind.message }}
      </el-form-item>

      <div class="tip">发布新信息</div>
      <el-form-item label="提醒信息" prop="message">
        <el-input v-model="ruleForm.message" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          发布
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'remind',
}
</script>
<script setup>
import { reactive, ref } from 'vue'
import { getremind, warn } from '@/api/remind'

const remind = ref([])

getremind()
  .then((res) => {
    const arr = []
    res.data.result.forEach((item) => {
      arr.push(item)
    })
    remind.value = arr[0]
  })
  .catch((e) => {})

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  message: '',
})

const rules = reactive({
  message: [{ required: true, message: '请输入案件描述', trigger: 'blur' }],
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      warn(ruleForm).then()
      setTimeout(() => {
        getremind()
          .then((res) => {
            const arr = []
            res.data.result.forEach((item) => {
              arr.push(item)
            })
            remind.value = arr[0]
          })
          .catch((e) => {})
      }, 10)
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
  .tip {
    margin-bottom: 20px;
    padding-left: 23px;
    color: rgb(77, 112, 255);
  }
}
</style>