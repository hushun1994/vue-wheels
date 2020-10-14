<template>
  <div>
    <h2>预览</h2>
    <div class="wrapper">
      <g-input :value="message1"></g-input>
      <g-input :value="message2" disabled></g-input>
      <g-input :value="message3" readonly></g-input>
      <g-input :value="message4" :error="error"></g-input>
    </div>
    <div class="wrapper">
      <g-input v-model="message5"></g-input>
      <br />
      <span>value: {{ message5 }}</span>
    </div>

    <h2>使用</h2>
    <Content slot-key="code1" />

    <h2>选项</h2>
    <h4>1. <strong>disabled</strong></h4>
    <p>
      <strong>disabled</strong> 属性表示输入框是否被禁用，布尔类型， 默认为
      false，可选。
    </p>
    <h4>2. <strong>readonly</strong></h4>
    <p>
      <strong>readonly</strong> 属性表示只读状态，不可修改，布尔类型，与
      disabled 相似，但 disabled 不可被 <strong>Tab 键</strong>选中，readonly
      可以被选中，可选。
    </p>
    <h4>3. <strong>error</strong></h4>
    <p>
      <strong>error</strong> 属性用于输入框错误状态的提示，<strong
        >error</strong
      >
      接收错误信息，可选。
    </p>
    <h4>4. <strong>v-model</strong></h4>
    <p>
      支持双向绑定，若状态由外部组件维护，可用 <strong>.sync</strong> 修饰符代替
      <strong>v-model</strong>
      达到一样的效果
    </p>
  </div>
</template>

<script>
import Input from '../../../src/Input'
export default {
  components: {
    'g-input': Input,
  },
  data() {
    return {
      message1: '我是谁？',
      message2: '我在哪？',
      message3: '我在干嘛？',
      message4: 'Hello World',
      message5: 'Hello World',
      error: 'error message',
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 10px 0;
}
strong {
  color: #48b885;
}
</style>
