<script setup lang="tsx">
import { reactive } from "vue";
import { UserService } from "@/api/login";
import { useModal } from "@/utils/hooks/useModal";

import { ElRadio, ElRadioGroup } from "element-plus";
// Modal hook

const state = reactive({
  coverRadio: "current",
});

const showModal = () => {
  useModal({
    title: "Modal Hook",
    props: {
      width: 700,
    },
    content: () => (
      <>
        <ElRadioGroup v-model={state.coverRadio}>
          <ElRadio label="current">覆盖当前页面</ElRadio>
          <ElRadio label="all">覆盖整个项目</ElRadio>
        </ElRadioGroup>
      </>
    ),
    onConfirm: () => {
      console.log(state.coverRadio);
    },
  });
};

const data = UserService.login({ username: "", password: "" })
  .then((result: any) => {
    console.log(result);
  })
  .catch((err: any) => {
    console.log(err);
  });
</script>
<template>
  <div>
    <el-button type="primary" @click="showModal">Modal Hook</el-button>
  </div>
</template>
<style lang="scss" scoped></style>
