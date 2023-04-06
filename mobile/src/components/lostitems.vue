<template>
  <van-nav-bar
  title="失物招领"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  fixed="true"
  placeholder="true"
/>
  <van-grid :border="false" :column-num="3">
  <van-grid-item
  v-for="(o, index) in lostitem"
        :key="o">
    <van-image
    :src="o.image"
    />
    {{o.name}}
  </van-grid-item>
 
</van-grid>

</template>

<script setup>
import {  getlost } from '@/api/lost'
import { ref, reactive } from 'vue'

const lostitem = ref([])
getlost().then((res) => {
  lostitem.value = res.data.result
})
//返回
const onClickLeft = () => history.back();

</script>

<style lang="scss" scoped>
.van-grid{
  padding: 20px;
}
</style>