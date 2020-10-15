<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wheelsTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      this.$nextTick(() => {
        let { left: left1 } = this.$el.getBoundingClientRect()
        let { width, left } = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - left1}px`
      })
    })
  },
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$border-bottom: #3eaf7c;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $border-bottom;
    transition: all 0.25s;
  }
  > .actions-wrapper {
    margin-left: auto;
    padding: 0 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
