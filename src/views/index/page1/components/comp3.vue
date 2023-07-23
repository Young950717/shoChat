<template>
  <div class="comp3">
    <ul class="list">
      <li class="item">
        <img class="icon" src="@/assets/images/comp3-1.png" alt="" />
        <span class="text">智能回复轻松搞定</span>
        <span class="desc"
          >智能回复实现了生成回复、补全回复、翻译回复等一键操作。商家只需轻轻点击，即可一键生成全部未读消息的回复，极大地减少了打字输入的工作量，提高了客服工作的效率和速度。</span
        >
      </li>
      <li class="df alc">
        <img class="line" src="@/assets/images/line.png" />
      </li>
      <li class="item">
        <img class="icon" src="@/assets/images/comp3-2.png" alt="" />
        <span class="text">无障碍多语言对话</span>
        <span class="desc"
          >提供了多语言无障碍的对话理解和回复翻译功能。它支持东南亚6国的多语言交流，商家不再受限于语言障碍，更好地满足不同语言背景客户的需求，扩大业务范围。</span
        >
      </li>
       <li class="df alc">
        <img class="line" src="@/assets/images/line.png" />
      </li>
      <li class="item">
        <img class="icon" src="@/assets/images/comp3-3.png" alt="" />
        <span class="text">构建智能店铺知识库</span>
        <span class="desc"
          >一键学习店铺商品和优惠券信息，构建不断学习和更新的店铺专属的知识库。构建店铺对话模型，从中获取准确的信息，提供更准确和个性化的回复，提升客户满意度和品牌形象。</span
        >
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.comp3 {
  width: 1200px;
  background: #fafafa;
  border-radius: 64px 4px 64px 4px;
  height: 600px;
  .list {
    display: flex;
    padding: 104px 56px 0 52px;
    .df {
      display: flex;
    }
    .alc {
      align-items: center;
    }
    .item {
      display: flex;
      flex-direction: column;
      width: 300px;
      margin: 0 48px;
      align-items: center;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      .icon {
        width: 106px;
        height: 114px;
        margin-bottom: 60px;
      }
      .text {
        color: rgba(0, 0, 0, 0.8);
        font-size: 20px;
        font-family: OPlusSans;
        font-weight: 700;
        line-height: 32px;
        word-wrap: break-word;
        margin-bottom: 24px;
      }
      .desc {
        color: #8c8c8c;
        font-size: 16px;
        font-family: OPlusSans;
        font-weight: 500;
        line-height: 32px;
        word-wrap: break-word;
      }
    }
  }
}
</style>