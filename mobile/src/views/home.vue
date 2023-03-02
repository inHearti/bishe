<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header /></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-header{
  border-bottom: 1px solid #ccc;
}
</style>