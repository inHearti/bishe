<template>
  <div class="content">
    <div class="add">
      <el-button type="primary">新增物品</el-button>
    </div>
    <el-row>
    <el-col
      v-for="(o, index) in 10"
      :key="o"
      :span="4"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>汉堡</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">认领</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style scoped lang="scss">
.content {
  background-color: white;
  padding: 20px;
  .add{
    padding-left: 30px;
  }
  .el-row{
   justify-content: space-around;
  }
  .el-col{
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
  display: block;
}
</style>
