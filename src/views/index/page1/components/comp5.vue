<template>
  <div class="comp5">
    <h1 class="title">{{ $t('indexText.comp5.title') }}</h1>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="item in collapseList" :key="item.id" :title="item.title" :name="item.id">
        <div class="answer">{{ item.answer }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()
const collapseList = computed(() => {
  return [
    {
      id: '1',
      title: t('indexText.comp5.question1'),
      answer: t('indexText.comp5.answer1')
    },
    {
      id: '2',
      title: t('indexText.comp5.question2'),
      answer: t('indexText.comp5.answer2')
    },
    {
      id: '3',
      title: t('indexText.comp5.question3'),
      answer: t('indexText.comp5.answer3')
    },
    {
      id: '4',
      title: t('indexText.comp5.question4'),
      answer: t('indexText.comp5.answer4')
    }
  ]
})
</script>

<style lang="less" scoped>
.comp5 {
  padding-top: 50px;
  border: none;
  background: #fafafa;
  .title {
    color: black;
    font-size: 32px;
    font-family: OPlusSans;
    font-weight: 700;
    line-height: 51.2px;
    word-wrap: break-word;
    margin-bottom: 54px;
    text-align: center;
  }
  .el-collapse-item {
    margin-bottom: 24px;
  }
  /deep/ .el-collapse-item__header {
    padding: 0 50px;
    color: black;
    font-size: 20px;
    font-family: OPlusSans;
    font-weight: 500;
    line-height: 32px;
    word-wrap: break-word;
  }
  .answer {
    color: black;
    font-size: 16px;
    font-family: OPlusSans;
    font-weight: 500;
    line-height: 32px;
    word-wrap: break-word;
  }
  /deep/ .el-collapse {
    border: none;
  }
  .answer {
    padding-left: 50px;
  }
}
</style>