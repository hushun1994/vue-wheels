<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wheelsToast",
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
$toast-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  color: #fff;
  padding: 0 16px;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $toast-bg;
  box-shadow: $toast-box-shadow;
}
</style>
