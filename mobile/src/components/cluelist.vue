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
    v-for="(o, index) in clues"
        :key="o"
      centered="false"
      :desc="o.message"
      :title="o.place"
      :thumb="o.image"
    >
      <template #price> {{o.time}} </template>
      <template #footer>
    <van-button size="mini">提供新线索</van-button>
  </template>
    </van-card>
    
  </div>
</template>

<script setup>
import { getclue } from '@/api/clue'
import { computed, ref, reactive } from 'vue'

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
//返回
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