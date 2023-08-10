<template>
  <div class="comp3">
    <p class="title">大语言模型调用加量包</p>
    <p class="desc">（按大语言模型 API成本价收取）</p>
    <ul class="list">
      <li class="item">
        <span class="top">3美元充值包</span>
        <span class="detail">
          <p>预计可生成300-370条回复</p>
          <p>或翻译1500回复</p>
          <el-button type="primary" :loading="btnLoading" @click="plus(5)">加量充值</el-button>
        </span>
      </li>
      <li class="item">
        <span class="top">5美元充值包</span>
        <span class="detail">
          <p>预计可生成500-650条回复</p>
          <p>或翻译2500回复</p>
          <el-button type="primary" :loading="btnLoading" @click="plus(4)">加量充值</el-button>
        </span>
      </li>
      <li class="item">
        <span class="top">10美充值包</span>
        <span class="detail">
          <p>预计可生成1000-1250条回复</p>
          <p>或翻译5000回复</p>
          <el-button type="primary" :loading="btnLoading" @click="plus(3)">加量充值</el-button>
        </span>
      </li>
    </ul>
    <p class="tips">
      *大语言模型调用加量包购买须知： <br />
      · 该充值包仅用于结算 大语言模型官方接口调用成本，本产品不会从中谋取任何经济收益。<br />
      · 具体官方定价请参考官方文档。<br />
      · 具体消耗情况在产品右上角实时显示。<br />
      · 如资费耗尽，则会造成插件无法使用，请及时充值。<br />
      · 充值包购买后充值余额永久有效。
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