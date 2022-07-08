<script setup lang="ts">
import { useMainStore } from "@/store/main";
const mainStore = useMainStore();
const updateName = () => {
  mainStore.$patch({
    name: "测试成功",
  });
};
let b:number;
let a
</script>

<template>
  <div>{{ mainStore.name }}</div>
  <div>{{ mainStore.nameLength }}</div>
  <el-button @click="updateName">测试pinia异步</el-button>
</template>
