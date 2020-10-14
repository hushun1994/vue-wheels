<template>
  <div class="container">
    <h2>预览</h2>
    <div class="wrapper">
      <g-icon class="icon" name="setting"></g-icon>
      <g-icon class="icon" name="left"></g-icon>
      <g-icon class="icon" name="right"></g-icon>
      <g-icon class="icon" name="up"></g-icon>
      <g-icon class="icon" name="down"></g-icon>
    </div>

    <h2>使用</h2>
    <Content slot-key="code1" />
    <p>通过设置 <strong>name</strong> 属性来使用即可</p>

    <h2>配色</h2>
    <div class="wrapper">
      <g-icon class="icon" fill="#48b885" name="upload"></g-icon>
      <g-icon class="icon" fill="#48b885" name="download"></g-icon>
      <g-icon class="icon" fill="#48b885" name="loading"></g-icon>
      <g-icon class="icon" fill="#48b885" name="thumbs-up"></g-icon>
      <g-icon class="icon" fill="#48b885" name="error"></g-icon>
    </div>
    <Content slot-key="code2" />
    <p>通过设置 <strong>fill</strong> 属性为 icon 配色</p>

    <h2>选项</h2>
    <h4>1. name</h4>
    <p>设置 name 属性来选择需要使用图标</p>
    <h4>2. fill</h4>
    <p>设置 fill 属性为图标自定义颜色</p>
  </div>
</template>

<script>
import Icon from '../../../src/Icon'

export default {
  components: {
    'g-icon': Icon,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}
.icon {
  width: 2em;
  height: 2em;
  margin-right: 10px;
}
strong {
  color: #48b885;
}
</style>
