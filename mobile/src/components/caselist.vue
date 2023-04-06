<template>
  <van-nav-bar
    title="案件总览"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    fixed="true"
    placeholder="true"
  />
  <div class="content">
    <van-card
    v-for="(o, index) in cases"
        :key="o"
      centered="false"
      :desc="o.caseinfo"
      :title="o.name"
      :thumb="o.caseimage"
    >
      <template #price> {{o.case_time}} </template>
    </van-card>
   
  </div>
</template>

<script setup>
import { getcase } from '@/api/case'
import { computed, ref, reactive } from 'vue'

const cases = ref([])
getcase()
  .then((res) => {
    cases.value = res.data.result
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