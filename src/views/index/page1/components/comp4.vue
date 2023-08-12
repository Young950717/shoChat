<template>
  <div class="comp4">
    <div class="left">
      <p class="desc">{{ $t('indexText.comp4.title') }}</p>
      <p class="small-desc">
        {{ $t('indexText.comp4.desc') }}
      </p>
      <el-button @click="openUrl" type="primary" color="#008DFF">{{ $t('header.btn1') }}</el-button>
    </div>

    <div class="right">
      <img class="bg1" src="@/assets/images/comp4.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const openUrl = () => {
  router.push({
    path: '/member'
  })
}
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