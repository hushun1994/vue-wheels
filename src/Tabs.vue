<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wheelsTabs",
  props: {
    selected: {
      type: String,
      requiired: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  created() {
    // this.$emit('update:selected', 'xxx')
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>