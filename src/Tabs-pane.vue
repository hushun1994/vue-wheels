<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wheelsTabsPane',
  props: {
    name: {
      type: String | Number,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
      }
    },
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
}
</script>

<style lang="scss" scoped>
@keyframes slidein {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes slideout {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.tabs-pane {
  padding: 1em;
  animation: slideout 0.25s linear;
  &.active {
    animation: slidein 0.25s linear;
  }
}
</style>
