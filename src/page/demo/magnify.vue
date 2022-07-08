<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, nextTick } from "vue";
const internalInstance = getCurrentInstance()!;
const { ctx } = internalInstance as any;
const enter = ref<boolean>(false);
const overlay = ref<boolean>(false);
const oriWidth = ref<Number | undefined>();
const oriHeight = ref<Number | undefined>();
const newWidth = ref<Number | undefined>();
const newHeight = ref<Number | undefined>();
onMounted(() => {
  ctx.$refs.originImg.addEventListener(
    "mouseenter",
    originImgMouseEnter,
    false
  );
  ctx.$refs.overlay.addEventListener("mouseleave", originImgMouseOver, false);
  ctx.$refs.overlay.addEventListener("mousemove", overlayMouseMove, false);
});
const originImgMouseEnter = (e: any) => {
  console.log("进入");
  // 开启蒙版
  overlay.value = true;
  ctx.$refs.overlay.style.left = 0;
  ctx.$refs.overlay.style.top = 0;
  ctx.$refs.overlay.style.width = ctx.$refs.originImg.width + "px";
  ctx.$refs.overlay.style.height = ctx.$refs.originImg.height + "px";
  // 开启放大镜
  enter.value = true;
  ctx.$refs.wrapper.style.left = e.offsetX - 150 + "px";
  ctx.$refs.wrapper.style.top = e.offsetY - 150 + "px";
  // 移动原图
  oriWidth.value = ctx.$refs.originImg.width;
  oriHeight.value = ctx.$refs.originImg.height;
  newWidth.value = ctx.$refs.scaleImg.width;
  newHeight.value = ctx.$refs.scaleImg.height;
  ctx.$refs.scaleImg.style.left =
    -e.offsetX / (<number>oriWidth.value / <number>newWidth.value) + 150 + "px";
  ctx.$refs.scaleImg.style.top =
    -e.offsetY / (<number>oriHeight.value / <number>newHeight.value) +
    150 +
    "px";
};
const overlayMouseMove = (e: any) => {
  ctx.$refs.wrapper.style.left = e.offsetX - 150 + "px";
  ctx.$refs.wrapper.style.top = e.offsetY - 150 + "px";
  ctx.$refs.scaleImg.style.left =
    -e.offsetX / (<number>oriWidth.value / <number>newWidth.value) + 150 + "px";
  ctx.$refs.scaleImg.style.top =
    -e.offsetY / (<number>oriHeight.value / <number>newHeight.value) +
    150 +
    "px";
};
const originImgMouseOver = () => {
  enter.value = false;
  overlay.value = false;
  ctx.$refs.overlay.style.width = "0px";
  ctx.$refs.overlay.style.height = "0px";
};
</script>
<template>
  <div class="main">
    <div class="img-view" ref="imgView">
      <img src="@/assets/img/cs.jpg" ref="originImg" />
    </div>
    <div class="wrapper-view" v-show="enter" ref="wrapperView">
      <div class="img-wrapper" ref="wrapper">
        <img src="@/assets/img/cs.jpg" ref="scaleImg" class="scale-img" />
      </div>
    </div>
    <div ref="overlay" v-show="overlay" class="overlay-view"></div>
  </div>
</template>
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .img-view {
    width: 100%;
    & > img {
      width: 100%;
    }
  }
  .wrapper-view {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    .img-wrapper {
      position: absolute;
      width: 300px;
      height: 300px;
      left: 0;
      top: 0;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 0 20px 4px #000;
      z-index: 8;
      .scale-img {
        position: absolute;
      }
    }
  }
  .overlay-view {
    position: absolute;
    opacity: 0;
    z-index: 3;
  }
}
</style>
