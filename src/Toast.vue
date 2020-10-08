<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>

    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose()">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "wheelsToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true,
      };
    },
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 0.5s;
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  background: $toast-bg;
  position: fixed;
  left: 50%;
  color: #fff;
  padding: 0 16px;
  line-height: 1.8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #ccc;
    margin-left: 16px;
  }
  &.position-top {
    top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    transform: translateX(-50%);
    animation: top-fade-in $animation-duration;
    @keyframes top-fade-in {
      0% {
        opacity: 0;
        transform: translate(-50%, -100%);
      }
      100% {
        opacity: 1;
        transform: translate(-50% 0%);
      }
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: middle-fade-in $animation-duration;
    @keyframes middle-fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  &.position-bottom {
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transform: translateX(-50%);
    animation: bottom-fade-in $animation-duration;
    @keyframes bottom-fade-in {
      0% {
        opacity: 0;
        transform: translate(-50%, 100%);
      }
      100% {
        opacity: 1;
        transform: translate(-50% 0%);
      }
    }
  }
}
</style>
