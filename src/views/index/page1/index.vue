<template>
  <headComp :btnList="btnList" />
  <comp1 />
  <comp2 class="pd" />
  <comp3 class="mg mt0" />
  <comp4 class="pd mt0" />
  <comp5 class="pd mt0" />
</template>

<script setup>
import headComp from '@/components/head-comp.vue'
import comp1 from './components/comp1.vue'
import comp2 from './components/comp2.vue'
import comp3 from './components/comp3.vue'
import comp4 from './components/comp4.vue'
import comp5 from './components/comp5.vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()
const router = useRouter()
const btnList = computed(() => {
  return [
    {
      label: t('header.btn1'),
      type: 'default',

      onClick: () => {
        router.push({
          path: '/member'
        })
      }
    },
    {
      label: t('header.btn2'),
      type: 'primary',
      color: '#008DFF',
      onClick: () => {
        window.open(import.meta.env.VITE_OUT_LINK)
      }
    }
  ]
})
</script>

<style lang="less">
.pd {
  padding: 110px 100px;
}
.mg {
  margin: 110px 100px;
}
.mt0 {
  margin-top: 0;
}
.el-button {
  height: auto;
  padding: 12px 40px;
  color: white;
  font-size: 16px;
  font-family: OPlusSans;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
}
</style>