<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const shop_url = route.query.shop_url || ''
const shop_uid = route.query.shop_uid || ''
sessionStorage.setItem('_shop_url_', JSON.stringify(shop_url))
sessionStorage.setItem('_shop_uid_', JSON.stringify(shop_uid))
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
