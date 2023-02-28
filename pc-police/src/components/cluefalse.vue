<template>
  <div class="clue-page">
    <div class="container">
      <div class="clue">
        <table>
          <thead>
            <tr>
              <th width="50">ID</th>
              <th width="400">线索描述</th>
              <th width="220">时间</th>
              <th width="180">地点</th>
              <th width="140">反馈</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="i in clues1" :key="i">
              <td>{{i.id}}</td>
              <td>
                <div class="goods">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/13ab302f8f2c954d873f03be36f8fb03.png"
                    alt=""
                  />
                  <div>
                    <p class="name ellipsis">
                      {{i.message}}
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>{{i.time}}</p>
              </td>
              <td class="tc">{{i.place}}</td>
              <td class="tc">
                <p><a class="green" href="javascript:;" @click="feedback(i.id)">反馈</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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

    
  <el-dialog v-model="dialogFormVisible" title="反馈">
    <el-form :model="form">
      <el-form-item label="ID" :label-width="formLabelWidth">
        <el-input disabled v-model="form.id" autocomplete="off"  />
      </el-form-item>
      <el-form-item label="反馈" :label-width="formLabelWidth">
        <el-input v-model="form.feedback" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">关闭</el-button>
        <el-button type="primary" @click="submit">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'cluetrue',
}
</script>

<script setup>
import { getclue ,feedbackclue} from '@/api/clue';
import { computed, ref ,reactive} from 'vue';
import { useRouter } from 'vue-router';

//控制弹窗显示
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

//反馈id
const selectid = ref()
const feedback = (id)=>{
  selectid.value = id
  dialogFormVisible.value = true
}
const form = reactive({
  id:selectid,
  feedback: '',
})

const router = useRouter()
const submit = ()=>{
  dialogFormVisible.value = false
  feedbackclue(form)
  getclue().then(res=>{
  const arr = []
   res.data.result.forEach(item => {
    if(item.status == 0){
      arr.push(item)
    }
   });
   clues.value = arr
}).catch(e=>{

})
}

const currentPage = ref(1)
const pageSize = ref(6)

const clues = ref([])

getclue().then(res=>{
  const arr = []
   res.data.result.forEach(item => {
    if(item.status == 0){
      arr.push(item)
    }
   });
   clues.value = arr
}).catch(e=>{

})

const clues1 = computed(()=>{
  return clues.value.slice((currentPage.value-1)*6,currentPage.value*6)
})

</script>

<style scoped lang="scss">
::v-deep .el-form-item__label{
  width: 50px !important;
}
.el-pagination{
  position: absolute;
  left: 20px;
  bottom: 10px;
}
.tc {
  text-align: center;
}
.red {
  color: red;
}
.green {
  color: green;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}

.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.clue-page {
  position: relative;
  height: 100%;
  background-color: white;
  .clue {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>
