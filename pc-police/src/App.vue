<template>
  <router-view />
</template>
<script setup>
import { onMounted } from 'vue'
 
onMounted(() => {
  document.body.style.setProperty('--el-color-primary', 'rgb(77,112,255)');
})
</script>

<style lang="scss">
#app {
  background: #eee;
  height: 100vh;
  overflow: hidden;
}
.el-button {
  font-weight: 400 !important;

}
body {
  padding: 0;
  margin: 0;
}
</style>
