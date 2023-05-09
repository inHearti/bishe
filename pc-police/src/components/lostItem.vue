<template>
  <div class="content">
    <div class="add">
      <el-button type="primary" @click="dialogFormVisible1 = true"
        >新增物品</el-button
      >
    </div>
    <el-row>
      <el-col
        v-for="(o, index) in lostitem"
        :key="o"
        :span="4"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.image" class="image" />
          <div style="padding: 14px">
            <span>{{ o.name }}</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button" @click="dellostitem(o)">认领</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

  <el-dialog v-model="dialogFormVisible1" title="添加物品" class="back">
    <el-form :model="form" class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="名称">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.describe" autocomplete="off" />
      </el-form-item>
      <el-form-item label="上传图片" prop="image">
        <el-upload
          class="avatar-uploader"
          action="http://127.0.0.1/upload"
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

<script setup>
import { addlost, getlost, dellost } from '@/api/lost'
import { ref, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const lostitem = ref([])
getlost().then((res) => {
  lostitem.value = res.data.result
})

//上传图片
const imageUrl = ref('')
// 用于控制图片上传
const uploadRef = ref()

const handleAvatarSuccess = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)

  form.image = response.result
  // imageurl.value = res.url
}

//控制弹窗显示
const dialogFormVisible1 = ref(false)
//添加物品表单数据
const form = reactive({
  name: '',
  describe: '',
  image: '',
})

//提交
const submit = () => {
  dialogFormVisible1.value = false
  uploadRef.value.submit()
  setTimeout(async () => {
    await addlost(form)
      .then((res) => { })
      .catch((e) => { })
  }, 100)
}

const dellostitem = async (delform) => {
  await dellost(delform).then((res) => { 
    getlost().then((res) => {
  lostitem.value = res.data.result
})
  })
    .catch((e) => { })
}

const currentDate = ref(new Date())
</script>

<style scoped lang="scss">
.content {
  background-color: white;
  padding: 20px;
  .add {
    padding-left: 30px;
  }
 
  .el-col {
    flex: 25%;
    height: 345px;
    margin: 10px;
  }
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 250px;
  display: block;
}
</style>
