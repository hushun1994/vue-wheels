<template>
  <div class="popover" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      :class="classes"
      v-if="visible"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wheelsPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      },
    },
  },
  data() {
    return {
      visible: false,
      timer: null,
    }
  },
  computed: {
    classes() {
      return { [`position-${this.position}`]: true }
    },
    openEvent() {
      return this.triggerWrapper === 'click' ? 'click' : 'mouseenter'
    },
    closeEvent() {
      return this.trigger === 'click' ? 'click' : 'mouseleave'
    },
  },
  mounted() {
    const { popover, contentWrapper } = this.$refs
    if (this.trigger === 'click') {
      popover.addEventListener('click', this.onClick)
    } else {
      popover.addEventListener('mouseenter', this.open)
      popover.addEventListener('mouseleave', this.close)
    }
  },
  beforeDestroy() {
    const { popover } = this.$refs
    if (this.trigger === 'click') {
      popover.removeEventListener('click', this.onClick)
    } else {
      popover.removeEventListener('mouseenter', this.open)
      popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const {
        left,
        top,
        width,
        height,
      } = triggerWrapper.getBoundingClientRect()
      const {
        width: width1,
        height: height1,
      } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + window.scrollY + height,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY - (height1 - height) / 2,
          left: left + window.scrollX - width1,
        },
        right: {
          top: top + window.scrollY - (height1 - height) / 2,
          left: left + window.scrollX + width,
        },
      }
      contentWrapper.style.top = positions[this.position].top + 'px'
      contentWrapper.style.left = positions[this.position].left + 'px'
    },
    onClickDocument(e) {
      const { contentWrapper, popover } = this.$refs
      if (
        (popover && popover.contains(e.target)) ||
        (contentWrapper && contentWrapper.contains(e.target))
      ) {
        return
      }
      this.close()
    },
    setTimer() {
      this.timer = setTimeout(() => {
        this.removerContentListener()
        this.visible = false
        this.timer = null
      }, 100)
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    addContentLietener() {
      if (this.trigger === 'hover' && this.timer === null) {
        this.$refs.contentWrapper.addEventListener(
          'mouseenter',
          this.clearTimer
        )
        this.$refs.contentWrapper.addEventListener('mouseleave', this.setTimer)
      }
    },
    removerContentListener() {
      if (this.trigger === 'hover') {
        this.$refs.contentWrapper.removeEventListener(
          'mouseenter',
          this.clearTimer
        )
        this.$refs.contentWrapper.removeEventListener(
          'mouseleave',
          this.setTimer
        )
      }
    },
    open() {
      this.clearTimer()
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
        this.addContentLietener()
      })
    },
    close() {
      this.setTimer()
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$border-color: #666;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  background: white;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    &::before,
    &::after {
      left: 19px;
      border-bottom: none;
    }
    &::before {
      border-top-color: #333;
      top: 100%;
    }
    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.5));
    &::before,
    &::after {
      left: 19px;
      border-top: none;
    }
    &::before {
      border-bottom-color: #333;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    margin-left: -10px;
    filter: drop-shadow(1px 0 1px rgba(0, 0, 0, 0.5));
    &::before,
    &::after {
      top: 50%;
      border-right: none;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: #333;
      left: 100%;
    }
    &::after {
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    filter: drop-shadow(-1px 0 1px rgba(0, 0, 0, 0.5));
    &::before,
    &::after {
      top: 50%;
      border-left: none;
      transform: translateY(-50%);
    }
    &::before {
      border-right-color: #333;
      right: 100%;
    }
    &::after {
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>
