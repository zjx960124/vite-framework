<script setup lang="ts">
import { ref } from "vue";
let username = ref<string>("");
let password = ref<string>("");
let strong = ref<number>(0);
const changePassWord = (e: string) => {
  let objResult = zxcvbn(e);
  strong.value = objResult.guesses_log10;
};
</script>
<template>
  <div class="main">
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="username" size="small"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="password"
          @input="changePassWord"
          type="password"
          show-password
          size="small"
          style="width: calc(100% - 140px)"
        ></el-input>
        <meter
          min="0"
          max="12"
          low="4"
          high="8"
          optimum="10"
          :value="strong"
        ></meter>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang='scss' scoped>
.main {
  width: 50%;
  margin: 20px auto;
  ::-webkit-meter-bar {
    width: 120px;
    height: 12px;
    border: 0;
    background: #eee;
    flex-shrink: 0;
    -webkit-mask: linear-gradient(
      to right,
      red 39px,
      transparent 0 41px,
      orange 0 79px,
      transparent 0 81px,
      green 0
    );
  }
  ::-webkit-meter-even-less-good-value {
    background: red;
  }
  ::-webkit-meter-suboptimum-value {
    background: linear-gradient(to right, red 40px, orange 0);
  }
  ::-webkit-meter-optimum-value {
    background: linear-gradient(to right, red 40px, orange 0 80px, green 0);
  }
  meter {
    position: relative;
    width: 120px;
    margin-left: 20px;
  }
  meter::after {
    content: "弱 中 强 asjdskajdkajdajdoisajdoijajd";
    position: absolute;
    left: calc(20px - 0.5em);
    right: calc(20px - 0.5em);
    text-align: justify;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
  }
}
</style>

