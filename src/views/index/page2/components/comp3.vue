<template>
  <div class="comp3">
    <p class="title">{{ $t('memberText.comp3.title') }}</p>
    <p class="desc">{{ $t('memberText.comp3.desc') }}</p>
    <ul class="list">
      <li class="item">
        <span class="top">{{ $t('memberText.comp3.list[0].title') }}</span>
        <span class="detail">
          <p>{{ $t('memberText.comp3.list[0].text1') }}</p>
          <p>{{ $t('memberText.comp3.list[0].text2') }}</p>
          <el-button type="primary" :loading="btnLoading" @click="plus(5)">{{ $t('memberText.comp3.btn') }}</el-button>
        </span>
      </li>
      <li class="item">
        <span class="top">{{ $t('memberText.comp3.list[1].title') }}</span>
        <span class="detail">
          <p>{{ $t('memberText.comp3.list[1].text1') }}</p>
          <p>{{ $t('memberText.comp3.list[1].text2') }}</p>
          <el-button type="primary" :loading="btnLoading" @click="plus(4)">{{ $t('memberText.comp3.btn') }}</el-button>
        </span>
      </li>
      <li class="item">
        <span class="top">{{ $t('memberText.comp3.list[1].title') }}</span>
        <span class="detail">
          <p>{{ $t('memberText.comp3.list[2].text1') }}</p>
          <p>{{ $t('memberText.comp3.list[2].text2') }}</p>
          <el-button type="primary" :loading="btnLoading" @click="plus(3)">{{ $t('memberText.comp3.btn') }}</el-button>
        </span>
      </li>
    </ul>
    <p class="tips">
      {{ $t('memberText.comp3.longTips[0]') }} <br />
      {{ $t('memberText.comp3.longTips[1]') }} <br />
      {{ $t('memberText.comp3.longTips[2]') }} <br />
      {{ $t('memberText.comp3.longTips[3]') }} <br />
      {{ $t('memberText.comp3.longTips[4]') }} <br />
      {{ $t('memberText.comp3.longTips[5]') }} 
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { checkoutSession } from '@/api'
import { ElMessage } from 'element-plus'
const btnLoading = ref(false)
const plus = async id => {
  try {
    btnLoading.value = true
    const resp = await checkoutSession({
      product_id: id
    })
    btnLoading.value = false
    if (resp) {
      window.location.href = resp
    }
  } catch (e) {
    btnLoading.value = false
    ElMessage.error(e.message ? e.message : '出错了')
  }
}
</script>
<style lang="less" scoped>
.comp3 {
  padding: 50px 137px 110px 137px;
  background: #fafafa;
  .title {
    color: black;
    font-size: 32px;
    font-family: OPlusSans;
    font-weight: 700;
    line-height: 51.2px;
    word-wrap: break-word;
    margin-bottom: 14px;
    text-align: center;
  }
  .desc {
    text-align: center;
    color: #a9a9a9;
    font-size: 16px;
    font-family: OPlusSans;
    font-weight: 500;
    line-height: 32px;
    word-wrap: break-word;
    margin-bottom: 38px;
  }
  .list {
    display: flex;
    margin-bottom: 38px;
    .item {
      width: 354px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 32px;
      box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.03);
      &:last-child {
        margin-right: 0;
      }
      .top {
        width: 100%;
        padding: 15px 0;
        color: white;
        font-size: 20px;
        font-family: Noto Sans SC;
        font-weight: 500;
        word-wrap: break-word;
        background: #008dff;
        border-radius: 8px 8px 0 0;
        text-align: center;
      }
      .detail {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        // height: 232px;
        background: #fff;
        border-radius: 0 0 8px 8px;
        padding: 31px 54px 37px 54px;
        box-sizing: border-box;
        p {
          color: black;
          font-size: 18px;
          font-family: OPlusSans;
          font-weight: 500;
          line-height: 52px;
          word-wrap: break-word;
          &:last-of-type {
            margin-bottom: 24px;
          }
        }
        // .df-c {
        //   display: flex;
        //   justify-content: center;
        // }
      }
    }
  }
  .tips {
    color: #a9a9a9;
    font-size: 14px;
    font-family: OPlusSans;
    font-weight: 500;
    line-height: 20px;
    word-wrap: break-word;
  }
}
</style>