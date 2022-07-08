<script lang="ts" setup>
import { useMainStore } from "@/store/main";
const mainStore = useMainStore();
</script>

<template>
  <div class="container">
    <el-row :span="24" class="container-main">
      <el-col :span="4">
        <Navigation></Navigation>
      </el-col>
      <el-col :span="20" class="hook-view">
        <router-view :name="mainStore.hook_active" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  .container-main {
    height: 100%;
    .hook-view {
      box-sizing: border-box;
      padding: 20px 5px;
    }
  }
}
</style>
