<template>
  <el-container class="container">

    <el-header>
      <slot name="header" />
    </el-header>

    <el-main class="main">
      <slot name="main" />
    </el-main>

  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex: 1;
}
</style>
