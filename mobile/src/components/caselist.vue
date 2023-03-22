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
      centered="false"
      desc="XXXXXXXX"
      title="张三"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #price> 2023-2-5 21:20 </template>
    </van-card>
    <van-card
      centered="false"
      desc="XXXXXXXX"
      title="张三"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #price> 2023-2-5 21:20 </template>
    </van-card>
    <van-card
      centered="false"
      desc="XXXXXXXX"
      title="张三"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #price> 2023-2-5 21:20 </template>
    </van-card>
    <van-card
      centered="false"
      desc="XXXXXXXX"
      title="张三"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #price> 2023-2-5 21:20 </template>
    </van-card>
    <van-card
      centered="false"
      desc="XXXXXXXX"
      title="张三"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #price> 2023-2-5 21:20 </template>
    </van-card>
  </div>
</template>

<script setup>
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