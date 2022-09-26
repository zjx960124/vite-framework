<script setup lang="ts">
</script>
<template>
  <div class="main">
    <div class="blank">
      <img class="csimg" v-img-lazy="'/src/assets/img/cs.jpg'" />
      <img class="csimg" v-img-lazy="'/src/assets/img/cs.jpg'" />
      <img class="csimg" v-img-lazy="'/src/assets/img/cs.jpg'" />
      <img class="csimg" v-img-lazy="'/src/assets/img/cs.jpg'" />
      <img class="csimg" v-img-lazy="'/src/assets/img/cs.jpg'" />
      <img class="csimg" v-img-lazy="'/src/assets/img/cs.jpg'" />
    </div>
  </div>
</template>
<style lang='scss' scoped>
.main {
  height: 100%;
  .blank {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 5px;
    overflow-y: auto;
    .csimg {
      width: 100%;
      height: 388px;
      margin-bottom: 50px;
    }
  }
}
</style>
