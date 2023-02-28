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
              <th width="140">反馈信息</th>
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
                {{i.feedback}}
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
  </div>
</template>

<script>
export default {
  name: 'cluetrue',
}
</script>

<script setup>
import { getclue } from '@/api/clue';
import { computed, ref } from 'vue';

const currentPage = ref(1)
const pageSize = ref(6)

const clues = ref([])

getclue().then(res=>{
  const arr = []
   res.data.result.forEach(item => {
    if(item.status == 1){
      arr.push(item)
    }
   });
   clues.value = arr
}).catch(e=>{

})

const clues1 = computed(()=>{
  return clues.value.slice((currentPage.value-1)*6,currentPage.value*6)
})
console.log(clues1);
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped lang="scss">
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
