<template>
  <div>
    <h2>预览</h2>
    <div class="wrapper">
      <g-popover trigger="hover" position="left">
        <template v-slot:content>popover 内容</template>
        <g-button>hover 激活</g-button>
      </g-popover>
      <g-popover trigger="hover" position="top">
        <template v-slot:content>popover 内容</template>
        <g-button>hover 激活</g-button>
      </g-popover>
      <g-popover trigger="hover" position="bottom">
        <template v-slot:content>popover 内容</template>
        <g-button>hover 激活</g-button>
      </g-popover>
      <g-popover trigger="hover" position="right">
        <template v-slot:content>popover 内容</template>
        <g-button>hover 激活</g-button>
      </g-popover>
    </div>
    <div class="wrapper">
      <g-popover position="left">
        <template v-slot:content>popover 内容</template>
        <g-button>click 激活</g-button>
      </g-popover>
      <g-popover position="top">
        <template v-slot:content>popover 内容</template>
        <g-button>click 激活</g-button>
      </g-popover>
      <g-popover position="bottom">
        <template v-slot:content>popover 内容</template>
        <g-button>click 激活</g-button>
      </g-popover>
      <g-popover position="right">
        <template v-slot:content>popover 内容</template>
        <g-button>click 激活</g-button>
      </g-popover>
    </div>

    <h2>使用</h2>
    <Content slot-key="code1" />
    <p>
      <strong>Popover</strong>
      接受两部分内容，<strong>匿名插槽</strong>里面的内容直接展示出来，具名插槽
      <strong>content</strong>
      里面的内容展示在弹出层中。<strong>trigger</strong>
      用于定义触发弹出层显示的方式，有 <strong>click</strong> 和
      <strong>hover</strong> 两种触发方式，默认为
      <strong>click</strong> 触发。<strong>position</strong>
      用于定义弹出层出现的相对位置。
    </p>

    <h2>选项</h2>
    <h4>1. trigger</h4>
    <p>
      <strong>trigger</strong> 用于定义触发弹出层的方式，有
      <strong>click</strong> 和 <strong>hover</strong> 两种方式，默认为
      <strong>click</strong>
      触发，可选。
    </p>

    <h4>2. position</h4>
    <p>
      <strong>position</strong> 用于定义弹出层显示的相对位置，有
      <strong>top</strong
      >、<strong>bottom</strong>、<strong>left</strong>、<strong>right</strong>、四种，默认为
      <strong>top</strong>，可选。
    </p>

    <h4>3. 插槽</h4>
    <p>
      存在两个插槽，一个<strong>默认插槽</strong>和一个<strong
        >具名插槽 content</strong
      >
      ，默认插槽的内容直接展示在页面中，
      具名插槽的内容触发后展示在弹出层中，具名插槽是<strong>必须设置</strong>的，否则将无法展示任何内容。
    </p>
  </div>
</template>

<script>
import Popover from '../../../src/Popover'
import Button from '../../../src/Button'

export default {
  components: { 'g-popover': Popover, 'g-button': Button },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 54px 20px;
  padding: 0;
  button {
    color: #666;
    font-weight: 540;
  }
}
strong {
  color: #3eaf7c;
}
</style>
