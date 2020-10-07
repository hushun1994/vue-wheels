<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="hide">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "wheelsSider",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    hide() {
      this.visible = !this.visible;
    },
    enter(el, done) {
      el.marginLeft = "-200px";
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>
