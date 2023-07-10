<template>
  <div class="navbar-container">
    <breadcrumb />
    <el-dropdown popper-class="dropdown-menu-self">
      <span class="el-dropdown-link">
        <el-avatar icon="UserFilled" class="navbar-container-avatar" />
        <span class="text-blue">bee</span>
        <el-icon class="el-icon--right" v-if="false">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="custom-el-drop">
          <el-dropdown-item @click="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import breadcrumb from "../breadcrumb";

const loginout = () => {
  window.location.href =
    import.meta.env.VITE_APP_BASE_URL +
    "/rest/bi/login/out?service=" +
    encodeURIComponent(window.location.href);
};
</script>
<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px 0;
  box-sizing: border-box;

  .navbar-container-avatar {
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
  .el-dropdown-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
}

:deep .el-dropdown .el-dropdown-selfdefine {
  display: flex;
  align-items: center;
}
.text-blue {
  color: #293270;
}
</style>

<style lang="scss">
.custom-el-drop {
  background: #c3c9fd70;
  border-color: #c3c9fd70;
}
.el-popper.is-light .el-popper__arrow::before {
  background: #c3c9fd40 !important;
}
</style>
