<script lang="ts">
export default {
  name: 'svgIcon',
};
</script>

<template>
  <div
    v-if="isOnlineSvg"
    :style="{ '--svg-icon-url': `url(${icon})` }"
    class="svg-icon svg-icon-online"
    :class="className"
  />
  <svg
    v-else
    class="svg-icon"
    :style="`width:${width}rem;height:${height}rem;`"
    :class="className"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    icon?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    currentColor?: number | string;
  }>(),
  {
    icon: '',
    className: '',
    width: 1,
    height: 1,
  }
);

const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon));
</script>

<style scoped lang="scss">
.svg-icon {
  width: v-bind(width);
  height: v-bind(height);
  fill: currentColor;
  overflow: hidden;
}

.svg-icon-online {
  background-color: currentColor;
  mask-image: var(--svg-icon-url);
  -webkit-mask-image: var(--svg-icon-url);
  mask-size: cover;
  -webkit-mask-size: cover;
  display: inline-block;
}
</style>
