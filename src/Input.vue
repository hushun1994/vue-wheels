<template>
  <div class="wrapper" :class="{ error }">
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      :error="error"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "wheelsInput",
  components: { Icon },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #999;
      color: #999;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
