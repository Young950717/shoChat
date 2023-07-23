<template>
  <div class="comp2">
    <div class="left">
      <img class="left-img1" src="@/assets/images/comp2-2.png" />
      <img class="left-img2" src="@/assets/images/comp2-3.png" />
      <img class="left-img3" src="@/assets/images/comp2-4.png" />
    </div>
    <div class="right">
      <p class="row">
        <img class="icon" src="@/assets/images/comp2-1.png" alt="" />
      </p>
      <p class="text">商家面临的挑战及经验困扰</p>
      <p class="desc">
        无论是大型企业还是小型店铺，经营业务都会面临一些困扰。我们提供专业的解决方案，帮助商家克服以下常见问题：
      </p>
      <ul class="list">
        <li class="item">
          <img class="icon" src="@/assets/images/comp2-icon1.png" />
          <span class="item-text">多语种多店铺管理, 无法准确传达产品信息和服务给全球客户</span>
        </li>
        <li class="item">
          <img class="icon" src="@/assets/images/comp2-icon2.png" />
          <span class="item-text">客服信息一致性困扰, 没有统一工作流程、培训和标准</span>
        </li>
        <li class="item">
          <img class="icon" src="@/assets/images/comp2-icon3.png" />
          <span class="item-text">缺乏店铺信息知识库导致重复劳动、信息丢失和团队协作不畅</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.comp2 {
  display: flex;
  justify-content: space-between;
  .left {
    width: 476px;
    // height: 520px;
    // background: pink;
    position: relative;
    text-align: right;
    .left-img1 {
      width: 360px;
      height: 520px;
    }
    .left-img2 {
      position: absolute;
      top: 46px;
      left: 0;
      width: 396px;
      height: 329px;
    }
    .left-img3 {
      position: absolute;
      right: 80px;
      bottom: 25px;
      width: 376px;
    }
  }
  .right {
    width: 620px;
    .text {
      color: rgba(0, 0, 0, 0.8);
      font-size: 32px;
      font-family: OPlusSans;
      font-weight: 700;
      line-height: 51.2px;
      word-wrap: break-word;
      margin-bottom: 28px;
    }
    .desc {
      color: #8c8c8c;
      font-size: 16px;
      font-family: OPlusSans;
      font-weight: 500;
      line-height: 32px;
      word-wrap: break-word;
      margin-bottom: 50px;
    }
    .item {
      display: flex;
      width: fit-content;
      background: #f4f4f6;
      padding: 12px;
      margin-bottom: 26px;
      .icon {
        width: 32px;
        height: 32px;
        margin-right: 12px;
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
    margin-bottom: 20px;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>