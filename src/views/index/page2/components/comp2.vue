<template>
  <div class="comp2">
    <div class="left">
      <p class="title">ShoChat会员</p>
      <ul class="list">
        <li v-for="item of list" :key="item" class="item">
          <img class="icon" src="@/assets/images/Vector.png" />
          <span v-html="item" class="item-text"></span>
        </li>
      </ul>
      <div class="row">
        <el-button :loading="btnLoading" type="primary" @click="joinUrl" class="btn">立即加入</el-button>
        <div class="df">
          <span class="text big mr-12">早鸟价</span>
          <span class="text big">{{ amout }}</span>
          <span class="text small">/月</span>
        </div>
      </div>
      <span class="desc">
        *每个ShoChat账号会自动绑定唯一对应的Shopee店铺，账号不限使用人数，均可安装，并在该店铺客服聊天页面使用。
      </span>
    </div>
    <div class="right">
      <img class="right-img1" src="@/assets/images/p2-comp2-1.png" />
      <img class="right-img2" src="@/assets/images/p2-comp2-2.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { checkoutSession } from '@/api'
import { ElMessage } from 'element-plus'
const list = [
  '全部回复功能',
  '历史数据学习',
  '所有多语言',
  '支持新功能首发体验',
  '店铺商品和优惠券知识库<br/>自动更新',
  'AI对话模型训练'
]
const amout = '$9.9'
const btnLoading = ref(false)
const joinUrl = async () => {
  try {
    btnLoading.value = true
    const resp = await checkoutSession({
      product_id: 7
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
.comp2 {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 750px;
  padding: 110px 88px 110px 151px;
  box-sizing: border-box;
  .left {
    width: 602px;
    .title {
      text-align: center;
      color: black;
      font-size: 32px;
      font-family: OPlusSans;
      font-weight: 700;
      line-height: 51.2px;
      word-wrap: break-word;
      margin-bottom: 89px;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      .item {
        display: flex;
        width: 50%;
        align-items: flex-start;
        margin-bottom: 30px;
        .icon {
          width: 25px;
          height: 20px;
          margin-right: 18px;
        }
        .item-text {
          color: black;
          font-size: 16px;
          font-family: OPlusSans;
          font-weight: 500;
          line-height: 32px;
          word-wrap: break-word;
        }
      }
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 70px;
      .btn {
        width: 100px;
        height: 36px;
        margin-right: 22px;
        padding: 0 12px;
      }
      .df {
        display: flex;
        align-items: flex-end;
      }
      .text {
        color: #0529c5;
        font-family: OPlusSans;
        font-weight: 900;
        word-wrap: break-word;
        &.big {
          font-size: 36px;
        }
        &.small {
          font-size: 20px;
        }
        &.mr-12 {
          margin-right: 12px;
        }
      }
    }
    .desc {
      color: #a9a9a9;
      font-size: 14px;
      font-family: OPlusSans;
      font-weight: 500;
      line-height: 20px;
      word-wrap: break-word;
    }
  }
  .right {
    position: relative;
    .right-img1 {
      width: 360px;
      height: 520px;
      position: absolute;
      right: 0;
      top: 0;
    }
    .right-img2 {
      width: 446px;
      height: 459px;
      position: absolute;
      right: 80px;
      top: 46px;
    }
  }
}
</style>