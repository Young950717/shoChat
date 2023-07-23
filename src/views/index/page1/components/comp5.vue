<template>
  <div class="comp5">
    <h1 class="title">常见问题与回答</h1>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="什么是ShoChat？" name="1">
        <div class="answer">ShoChat就是ShoChat</div>
      </el-collapse-item>
      <el-collapse-item title="什么是ShoChat？" name="2">
        <div>ShoChat就是ShoChat</div>
      </el-collapse-item>
      <el-collapse-item title="什么是ShoChat？" name="3">
        <div>ShoChat就是ShoChat</div>
      </el-collapse-item>
      <el-collapse-item title="什么是ShoChat？" name="4">
        <div>ShoChat就是ShoChat</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
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
    padding-left: 50px;
  }
}
</style>