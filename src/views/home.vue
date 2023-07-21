<template>
  <headComp :btnList="btnList" />
  <comp1 />
  <comp2 class="pd" />
  <comp3 />
</template>

<script setup>
import headComp from '@/components/head-comp.vue'
import comp1 from './components/comp1.vue'
import comp2 from './components/comp2.vue'
import comp3 from './components/comp3.vue'
const btnList = [
  {
    label: '会员方案',
    type: 'default',

    onClick: () => {
      console.log('点击会员方案')
    }
  },
  {
    label: '免费试用',
    type: 'primary',
    color: '#008DFF',
    onClick: () => {
      console.log('点击免费试用')
    }
  }
]
</script>

<style lang="less">
.pd {
  padding: 110px 100px;
}
.mg {
  margin: 110px 100px;
}
</style>