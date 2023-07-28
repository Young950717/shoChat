<template>
  <div class="comp1">
    <div class="left">
      <p class="desc">
        发掘全面潜力，释放创新无限 畅享按量付费模式的灵活性
        <img class="desc-img" src="@/assets/images/Group-14.png" />
      </p>
      <p class="small-desc">
        ShoChat提供一种灵活且高性价比的付费模式，结合会员订阅费和大语言模型按量计成本费。让您在使用大语言模型时能够灵活调整和控制成本。我们致力于为您提供最优质的服务，同时确保您在付费方面拥有更多的选择和掌控权。
      </p>
      <el-button @click="openUrl" type="primary" color="#008DFF">了解更多</el-button>
    </div>

    <div class="right">
      <img class="bg1" src="@/assets/images/p2-comp1-1.png" alt="" />
      <img class="bg2" src="@/assets/images/p2-comp1-2.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'
const openUrl = () => {
  window.open(import.meta.env.VITE_OUT_LINK)
}
</script>

<style lang="less" scoped>
.comp1 {
  position: relative;
  width: 100%;
  height: 768px;
  // background: pink;
  .left {
    position: absolute;
    top: 0;
    right: 0;
    padding: 178px 100px 0 0;
    // direction: rtl;
    .desc {
      position: relative;
      width: 500px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 36px;
      font-family: OPlusSans;
      font-weight: 700;
      line-height: 57.6px;
      word-wrap: break-word;
      margin-bottom: 50px;
      .desc-img {
        position: absolute;
        width: 367px;
        height: 69px;
        bottom: 5px;
        left: 4px;
        z-index: -1;
      }
    }
    .small-desc {
      width: 500px;
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
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    .bg1 {
      position: absolute;
      left: 0;
      top: 0;
      width: 716px;
      height: 600px;
    }
    .bg2 {
      position: absolute;
      left: 149px;
      top: 130px;
      width: 600px;
      height: 621px;
      // height: 557px;
    }
  }
}
</style>