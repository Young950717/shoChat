<template>
  <div class="foot-comp">
    <div class="left">
      <img class="logo" src="@/assets/images/logo2.png" alt="" />
      <p class="text">打造智能店铺，提升客户体验</p>
      <p class="text">Sochat 让您的回复更智能、更准确，为客户带来卓越的服务体验！</p>
    </div>
    <div class="right">
      <!-- <p class="text">联系我们：fuersao@163.com</p> -->
      <img class="qrCode" src="../assets/images/qrCode.png" alt="" />
      <p class="text">ShoChat@版权所有</p>
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
  .right{
    align-items: flex-end;
  }
}
</style>