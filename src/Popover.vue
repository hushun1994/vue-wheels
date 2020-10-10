<template>
  <div class="popover" @click.stop="xxx">
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
    };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
          this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
          // let { offsetLeft, offsetTop } = this.$refs.triggerWrapper;
          // this.$refs.contentWrapper.style.top = `${this.$el.offsetTop}px`;
          // this.$refs.contentWrapper.style.left = `${this.$el.offsetLeft}px`;
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.body.addEventListener("click", eventHandler);
        });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
