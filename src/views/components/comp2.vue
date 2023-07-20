<template>
  <div class="comp2">
    <div class="left"></div>
    <div class="right">
      <p class="row">
        <img class="icon" src="../../assets/images/comp2-1.png" alt="" />
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.comp2 {
  display: flex;
  .left {
    width: 400px;
    height: 520px;
    background: pink;
  }
  .row {
    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>