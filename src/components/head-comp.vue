<template>
  <header class="header" :style="styleObj">
    <div class="logo-box">
      <img class="logo" src="../assets/images/logo.png" />
    </div>
    <div class="btn">
      <el-button
        class="btn-item"
        v-for="(btn, idx) in props.btnList"
        :key="idx"
        :type="btn.type"
        :color="btn.color"
        @click="btn.onClick"
        >{{ btn.label }}</el-button
      >
      <el-dropdown @command="command">
        <span class="el-dropdown-link">
          {{ $t('header.langText') }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
  <!-- <div class="placeholder-box"></div> -->
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { defineProps, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { ElButton } from 'element-plus'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const props = defineProps({
  btnList: {
    type: Array,
    default: () => []
  }
})
const command = lang => {
  nextTick(() => {
    locale.value = lang
    localStorage.setItem('lang', lang)
  })
}
const styleObj = ref('')
const handleScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  let offsetTop = document.querySelector('.header').offsetTop
  //设置背景颜色的透明读
  if (offsetTop && scrollTop) {
    styleObj.value = `
    background: rgba(255, 255, 255,${scrollTop / (scrollTop + 40)});
    box-shadow: 0px -1px 0px #F0F0F0 inset;
    `
  } else if (scrollTop == 0) {
    styleObj.value = ''
  } else if (scrollTop != 0) {
    styleObj.value = `
    background: rgba(255, 255, 255,${scrollTop / (scrollTop + 40)});
    box-shadow: 0px -1px 0px #F0F0F0 inset;
    `
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 100px;
  z-index: 2;
  .logo {
    width: 155px;
  }
  .btn {
    display: flex;
    align-items: center;
    .btn-item {
      font-size: 16px;
      line-height: 22px;
      padding: 8px 22px;
      &.el-button--default :first-child {
        color: #0529c5;
      }
      &:last-of-type {
        margin-right: 12px;
      }
    }
  }
}
.placeholder-box {
  height: 60px;
  display: none;
}
.el-dropdown-link {
  cursor: pointer;
  color: #0529c5;
  display: flex;
  align-items: center;
}
</style>