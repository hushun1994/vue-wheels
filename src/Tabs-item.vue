<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wheelsTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name, this);
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
.tabs-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>