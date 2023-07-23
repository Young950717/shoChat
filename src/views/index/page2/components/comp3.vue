<template>
  <div class="comp3">
    <p class="title">ChatGPT调用加量包</p>
    <p class="desc">（按大数据模型 API成本价收取）</p>
    <ul class="list">
      <li class="item">
        <span class="top">30元充值包</span>
        <span class="detail">
          <p>预计可生成1000-2000条回复</p>
          <p>或翻译1000+回复</p>
        </span>
      </li>
      <li class="item">
        <span class="top">60元充值包</span>
        <span class="detail">
          <p>预计可生成2000-4000条回复</p>
          <p>或翻译2000+回复</p>
        </span>
      </li>
      <li class="item">
        <span class="top">120元充值包</span>
        <span class="detail">
          <p>预计可生成4000-8000条回复</p>
          <p>或翻译4000+回复</p>
        </span>
      </li>
    </ul>
    <p class="tips">
      *ChatGPT调用加量包购买须知： <br />
      · 该充值包仅用于结算 ChatGPT官方接口调用成本，本产品不会从中谋取任何经济收益。<br />
      · 具体官方定价请参考官方文档。<br />
      · 具体消耗情况在产品右上角实时显示。<br />
      · 如资费耗尽，则会造成插件无法使用，请及时充值。<br />
      · 充值包购买后充值余额永久有效。
    </p>
  </div>
</template>
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
        // height: 232px;
        background: #fff;
        border-radius: 0 0 8px 8px;
        padding: 31px 0 37px 54px;
        box-sizing: border-box;
        p {
          color: black;
          font-size: 18px;
          font-family: OPlusSans 3;
          font-weight: 500;
          line-height: 52px;
          word-wrap: break-word;
        }
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