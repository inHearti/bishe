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
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table :data="clues1" style="width: 100%">
      <el-table-column prop="id" label="线索ID" width="80" />
      <el-table-column prop="handle_time" label="处理时间" width="180" />
      <el-table-column prop="handle_place" label="处理地点" />
      <el-table-column prop="police" label="处理人ID" width="180" />
      <el-table-column prop="people" label="举报人手机号" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="moreinfo(scope.row.id)"
            >详细信息</el-button
          >
        </template>
      </el-table-column>
    </el-table>

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
          {{ more_clue.id }}
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
          <img src="../assets/github.png" alt="" />
        </el-form-item>
        <el-form-item label="描述信息" :label-width="formLabelWidth">
          {{ more_clue.message }}
        </el-form-item>
        <el-form-item label="处理人ID" :label-width="formLabelWidth">
          {{ more_clue.police }}
        </el-form-item>
        <el-form-item label="处理时间" :label-width="formLabelWidth">
          {{ more_clue.handle_time }}
        </el-form-item>
        <el-form-item label="处理地点" :label-width="formLabelWidth">
          {{ more_clue.handle_place }}
        </el-form-item>
        <el-form-item label="反馈信息" :label-width="formLabelWidth">
          {{ more_clue.feedback }}
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'cluetrue',
}
</script>

<script setup>
import { getclue } from '@/api/clue'
import { computed, ref, reactive } from 'vue'

const labelPosition = ref('left')
//查询参数
const formInline = reactive({
  id: '',
  place: '',
})

//控制弹窗显示
const dialogFormVisible2 = ref(false)
const formLabelWidth = '120px'

//详细信息获取

const more_clue = ref()
const moreinfo = (id) => {

  dialogFormVisible2.value = true
  clues.value.forEach((item) => {
    if (item.id == id) {
      more_clue.value = item
      return
    }
  })
}

const currentPage = ref(1)
const pageSize = ref(6)

const clues = ref([])

getclue()
  .then((res) => {
    const arr = []
    res.data.result.forEach((item) => {
      if (item.status == 1) {
        arr.push(item)
      }
    })
    clues.value = arr
  })
  .catch((e) => { })

const clues1 = computed(() => {
  return clues.value.slice((currentPage.value - 1) * 6, currentPage.value * 6)
})
console.log(clues1)
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped lang="scss">
::v-deep .el-dialog {
  margin-top: 8vh;
}
.content {
  background-color: white;
  padding: 20px;
}
::v-deep .el-form-item__label {
  padding-left: 12px;
}
</style>
