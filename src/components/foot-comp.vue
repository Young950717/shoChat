<template>
  <div class="foot-comp">
    <div class="left">
      <img class="logo" src="@/assets/images/logo2.png" alt="" />
      <p class="text">{{ $t('footer.text1') }}</p>
      <p class="text">{{ $t('footer.text2') }}</p>
    </div>
    <div class="right">
      <!-- <p class="text">联系我们：fuersao@163.com</p> -->
      <img class="qrCode" src="../assets/images/qrCode.png" alt="" />
      <p class="text">{{ $t('footer.copyright') }}</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.foot-comp {
  display: flex;
  justify-content: space-between;
  // width: 1400px;
  height: 240px;
  box-sizing: border-box;
  background: #008dff;
  padding: 40px 110px;
  .left,
  .right {
    display: flex;
    flex-direction: column;
    .logo {
      width: 154px;
      height: 46px;
      margin-bottom: 55px;
    }
    .qrCode {
      width: 66px;
      height: 66px;
      margin-bottom: 11px;
    }
    .text {
      color: white;
      font-size: 16px;
      font-family: OPlusSans;
      font-weight: 500;
      line-height: 32px;
      word-wrap: break-word;
      margin-bottom: 11px;
    }
  }
  .right {
    align-items: flex-end;
  }
}
</style>