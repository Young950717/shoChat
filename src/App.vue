<script setup>
</script>

<template>
  <div class="index-page-container">
    <router-view />
    <el-backtop :right="50" :bottom="50" />
  </div>
</template>

<style>
.index-page-container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
