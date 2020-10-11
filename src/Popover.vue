<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wheelsPopover",
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
    },
    onClickDocument(e) {
      if (
        (this.$refs.popover && this.$refs.popover.contains(e.target)) ||
        (this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener("click", this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener("click", this.onClickDocument)
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
  mounted() {
    // document.addEventListener("click", () => {
    //   console.log("最初的绑定")
    // })
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
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  transform: translateY(-100%);
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
    left: 19px;
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
</style>
