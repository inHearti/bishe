<template>
  <van-nav-bar
    title="线索跟踪"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    fixed="true"
    placeholder="true"
  />
  <div class="content">
    <van-card
      v-for="(o, index) in clues1"
      :key="o"
      centered="false"
      :desc="o.feedback"
      :title="o.place"
      :thumb="o.image"
    >
      <template #price> {{ o.time }} </template>
    </van-card>
    <van-card
      v-for="(o, index) in clues"
      :key="o"
      centered="false"
      :desc="o.message"
      :title="o.place"
      :thumb="o.image"
    >
      <template #price> {{ o.time }} </template>
      <template #footer>
        <van-button size="mini" @click="provide(o.id)">提供新线索</van-button>
      </template>
    </van-card>
  </div>
  <van-dialog @confirm="submit" v-model:show="show" title="提供线索" show-cancel-button show-confirm-button="true">
    <van-field
    v-model="cluenew.message"
    rows="2"
    autosize
    label="信息"
    type="textarea"
    maxlength="100"
    placeholder="请输入线索"
    show-word-limit
  />
</van-dialog>
</template>

<script setup>
import { getclue, provideclue } from '@/api/clue'

import { computed, ref, reactive } from 'vue'
const show = ref(false);
const clues = ref([])
const clues1 = ref([])
getclue()
  .then((res) => {
    const arr = []
    const arr1 = []
    res.data.result.forEach((item) => {
      if (item.status == 0) {
        arr.push(item)
      } else {
        arr1.push(item)
      }
    })
    clues.value = arr
    clues1.value = arr1
  })
  .catch((e) => { })

  const cluenew = reactive({
    id:'',
    message:''
  })

const provide = (id) => {
  show.value = true
  cluenew.id = id

}
//返回
const submit = ()=>{
   provideclue(cluenew).then((res) => {
    getclue()
      .then((res) => {
        const arr = []
        const arr1 = []
        res.data.result.forEach((item) => {
          if (item.status == 0) {
            arr.push(item)
          } else {
            arr1.push(item)
          }
        })
        clues.value = arr
        clues1.value = arr1
      })
      .catch((e) => { })
  }).catch((e) => { })
}
const onClickLeft = () => history.back();

</script>

<style lang="scss" scoped>
.content {
  padding: 20px;

  .van-card__content {
    text-align: left;
  }
}
</style>