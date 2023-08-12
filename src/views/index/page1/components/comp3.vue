<template>
  <div class="comp3">
    <ul class="list">
      <li class="item">
        <img class="icon" src="@/assets/images/comp3-1.png" alt="" />
        <span class="text">{{ $t('indexText.comp3.li1.title') }}</span>
        <span class="desc">{{ $t('indexText.comp3.li1.desc') }}</span>
      </li>
      <li class="df alc">
        <img class="line" src="@/assets/images/line.png" />
      </li>
      <li class="item">
        <img class="icon" src="@/assets/images/comp3-2.png" alt="" />
        <span class="text">{{ $t('indexText.comp3.li2.title') }}</span>
        <span class="desc">{{ $t('indexText.comp3.li2.desc') }}</span>
      </li>
      <li class="df alc">
        <img class="line" src="@/assets/images/line.png" />
      </li>
      <li class="item">
        <img class="icon" src="@/assets/images/comp3-3.png" alt="" />
        <span class="text">{{ $t('indexText.comp3.li3.title') }}</span>
        <span class="desc">{{ $t('indexText.comp3.li2.desc') }}</span>
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