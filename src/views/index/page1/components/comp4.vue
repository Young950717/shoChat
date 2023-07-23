<template>
  <div class="comp4">
    <div class="left">
      <p class="desc">释放产品全面潜力，畅享成本付费模式！</p>
      <p class="small-desc">
        Chrome扩展一键安装，专为Shopee客服页面定制，学习0成本。会员订阅费+大语言模型用量成本费的完美结合，让您只为所需付费，畅快体验我们服务的强大功能！
      </p>
      <el-button type="primary" color="#008DFF">会员方案</el-button>
    </div>

    <div class="right">
      <img class="bg1" src="@/assets/images/comp4.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'
</script>

<style lang="less" scoped>
.comp4 {
  display: flex;
  justify-content: space-between;
  // position: relative;
  // width: 100%;
  // height: 768px;
  // background: pink;
  .left {
    // padding: 178px 0 0 100px;
    .desc {
      color: rgba(0, 0, 0, 0.8);
      font-size: 32px;
      font-family: Open Sans;
      font-weight: 700;
      line-height: 51.2px;
      word-wrap: break-word;
      margin-bottom: 28px;
    }
    .small-desc {
      color: #8c8c8c;
      font-size: 16px;
      font-family: OPlusSans;
      font-weight: 500;
      line-height: 32px;
      word-wrap: break-word;
      margin-bottom: 84px;
    }
  }
  .right {
    .bg1 {
      width: 540px;
      height: 361px;
    }
  }
}
</style>