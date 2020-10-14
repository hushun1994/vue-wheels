<template>
  <div>
    <h2>预览</h2>
    <div class="wrapper">
      <g-button>默认按钮</g-button>
      <g-button icon="setting" :loading="loading1" @click="change1"
        >图标按钮</g-button
      >
      <g-button icon="setting" iconPosition="right">图标按钮</g-button>
      <g-button :loading="loading2" @click="change2">加载按钮</g-button>
      <g-button disabled>禁用按钮</g-button>
    </div>
    <h2>使用</h2>
    <Content slot-key="code1" />
    <p>
      设置 <strong>icon</strong> 属性嵌入图标，<strong>iconPosition</strong>
      属性设置图标位置 <strong>left / right</strong>，<strong
        >动态绑定 loading
      </strong>
      可设置加载状态，可在加载与非加载状态之间切换，<strong>disabled</strong>
      属性设置按钮禁用。
    </p>

    <h2>按钮组</h2>

    <div class="wrapper">
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>查询</g-button>
        <g-button icon="right" iconPosition="right">下一页</g-button>
      </g-button-group>
    </div>

    <h2>使用</h2>
    <Content slot-key="code2" />
    <p>
      在 <strong>ButtonGroup</strong> 组件中写入
      <strong>Button</strong> 组件即可构成按钮组
    </p>

    <h2>选项</h2>
    <h4>1. <strong>icon</strong></h4>
    <p>设置 <strong>icon</strong> 属性可以在按钮中嵌入一个图标，可选。</p>
    <h4>2. <strong>iconPosition</strong></h4>
    <p>
      在按钮中存在图标时，该属性可设置图标的位置，该属性支持两个值
      <strong>left / right</strong>， 默认为 <strong>left</strong>。
    </p>
    <h4>3. <strong>loading</strong></h4>
    <p>
      该属性可以设置按钮的加载状态，给按钮动态绑定该属性，可切换状态，可选。
    </p>
    <h4>4. <strong>disabled</strong></h4>
    <p>设置 <strong>disabled</strong> 属性，可将按钮设置为禁用状态，可选。</p>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import ButtonGroup from '../../../src/Button-group'

export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
  },
  data() {
    return {
      loading1: true,
      loading2: true,
    }
  },
  methods: {
    change1() {
      this.loading1 = !this.loading1
    },
    change2() {
      this.loading2 = !this.loading2
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 30px;
  > button {
    margin: 5px 0;
  }
}
strong {
  color: #48b885;
}
</style>
