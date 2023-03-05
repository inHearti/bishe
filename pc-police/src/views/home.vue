<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="220px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      padding: 0;
    }
    .el-main {
      height: 895px;
      padding: 20px 20px 0 20px;
      margin: 20px;
      background-color: #fff;
    }
  }
}
</style>