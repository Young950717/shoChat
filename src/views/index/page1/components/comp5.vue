<template>
  <div class="comp5">
    <h1 class="title">常见问题与回答</h1>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="item in collapseList" :key="item.id" :title="item.title" :name="item.id">
        <div class="answer">{{ item.answer }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
const collapseList = [
  {
    id: '1',
    title: '什么是ShoChat？',
    answer:
      'ShoChat是一个智能客服插件，只需要将它添加到你的Chrome浏览器，就可以在客服回复页面拥有一个帮助你补全回复，翻译回复，甚至自动生成回复的智能助手，极大提升客服回复效率。'
  },
  {
    id: '2',
    title: '如何安装和设置ShoChat插件？',
    answer:
      '只需要跳转到谷歌官方拓展程序商店，一键点击添加即可。返回并刷新你的客服界面，插件就会自动初始化，完成后即可使用，无需任何其他设置操作。'
  },
  {
    id: '3',
    title: '它可以在哪些平台和浏览器上运行？',
    answer: '它可以运行在所有Shopee站点，支持谷歌的Chrome浏览器。'
  },
  {
    id: '4',
    title: '是否需要支付费用才能使用该插件？',
    answer:
      '新店铺添加插件试用完全免费，会赠送会员体验时长，和三方模型调用体验费。试用满意后，支付包月订阅费+三方模型调用成本即可，调用成本费率和试用期间完全一致，无任何隐含费用。'
  }
]
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