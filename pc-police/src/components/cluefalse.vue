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
        <el-button type="primary" @click="onSubmit" >查询</el-button>
      </el-form-item>
    </el-form>
  </div>

  <el-table :data="clues1" style="width: 100%">
    <el-table-column prop="id" label="线索ID" width="80" />
    <el-table-column prop="time" label="时间" width="180" />
    <el-table-column prop="place" label="地点" />
    <el-table-column prop="people" label="举报人手机号" />
    <el-table-column prop="status_2" label="状态" width="180" />
    <el-table-column fixed="right" label="操作" width="180">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="moreinfo(scope.row.id)"
          >详细信息</el-button
        >
        <el-button
          link
          type="primary"
          size="small"
          @click="feedback(scope.row.id)"
          >反馈</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <div class="clue-page">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="clues.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

    <el-dialog v-model="dialogFormVisible2" title="详细信息">
      <el-form :data="clues">
        <el-form-item label="线索ID" :label-width="formLabelWidth">
         {{more_clue.id}}
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          {{ more_clue.time }}
        </el-form-item>
        <el-form-item label="地点" :label-width="formLabelWidth">
          {{ more_clue.place }}
        </el-form-item>
        <el-form-item label="举报人手机号" :label-width="formLabelWidth">
          {{ more_clue.people }}
        </el-form-item>       
        <el-form-item label="图片信息" :label-width="formLabelWidth">
          <img src="../assets/github.png" alt="">
        </el-form-item>
        <el-form-item label="描述信息" :label-width="formLabelWidth">
          {{ more_clue.message }}
        </el-form-item> 
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">关闭</el-button>
          <el-button type="primary" @click="moreinfoback"> 反馈 </el-button>
        </span>
      </template>
    </el-dialog>



    <el-dialog v-model="dialogFormVisible1" title="反馈" class="back">
      <el-form :model="form">
        <el-form-item label="线索ID" :label-width="formLabelWidth">
          <el-input disabled v-model="form.id" autocomplete="off" />
        </el-form-item>
        <el-form-item label="反馈地点" :label-width="formLabelWidth">
          <el-select v-model="form.handle_place" placeholder="请选择地点">
            <el-option label="武清东蒲洼派出所" value="武清东蒲洼派出所" />
          </el-select>
        </el-form-item>
        <el-form-item label="反馈信息" :label-width="formLabelWidth">
          <el-input v-model="form.feedback" autocomplete="off" type="textarea"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">关闭</el-button>
          <el-button type="primary" @click="submit"> 提交 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
  </div>
</template>

<script>
export default {
  name: 'cluetrue',
}
</script>

<script setup>
import { getclue, feedbackclue } from '@/api/clue'
import { computed, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'



const labelPosition = ref('left')
//查询参数
const formInline = reactive({
  id: '',
  place: '',
})

//控制弹窗显示
const dialogFormVisible1 = ref(false)
const dialogFormVisible2 = ref(false)
const formLabelWidth = '120px'

//详细信息获取

const more_clue = ref()
const moreinfo = (id)=>{

  dialogFormVisible2.value=true
    clues.value.forEach((item)=>{
    if(item.id == id){
      more_clue.value = item
      return
    }
  })
}

//详细信息反馈
const moreinfoback =  ()=>{
  dialogFormVisible1.value = true
  selectid.value = more_clue.value.id
}

//反馈id
const selectid = ref()
const feedback = (id) => {
  selectid.value = id
  dialogFormVisible1.value = true
}
// 获取当前时间
const formatTime = (data) => {
  const date = new Date(data)
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? '0' + d : d
  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let minute = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  let second = date.getSeconds()
  second = second < 10 ? '0' + second : second

  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}

const form = reactive({
  id: selectid,
  feedback: '',
  police: JSON.parse(localStorage.getItem('user')).id,
  handle_time: formatTime(new Date()),
  handle_place: '',
})

const router = useRouter()
//提交反馈
const submit = () => {
  dialogFormVisible1.value = false
  feedbackclue(form)
    .then((res) => {
      getclue()
        .then((res) => {
          const arr = []
          res.data.result.forEach((item) => {
            if (item.status == 0) {
              arr.push(item)
            }
          })
          clues.value = arr
        })
        .catch((e) => {})
    })
    .catch((e) => {})
}

const currentPage = ref(1)
const pageSize = ref(6)

const clues = ref([])

getclue()
  .then((res) => {
    const arr = []
    res.data.result.forEach((item) => {
      if (item.status == 0) {
        arr.push(item)
      }
    })
    clues.value = arr
  })
  .catch((e) => {})

const clues1 = computed(() => {
  return clues.value.slice((currentPage.value - 1) * 6, currentPage.value * 6)
})
</script>

<style scoped lang="scss">

::v-deep .back{
  &:last-child{
    width: 40%;
    margin-top: 20vh;
  }
}
.content{
  background-color: white;
  padding: 20px;
}
::v-deep .el-form-item__label {
  padding-left: 12px;
}
</style>
