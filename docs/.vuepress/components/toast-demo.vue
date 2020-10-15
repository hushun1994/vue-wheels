<template>
  <div>
    <h2>预览</h2>
    <div class="wrapper">
      <g-button @click="click1">自动关闭</g-button>&nbsp;&nbsp;
      <g-button @click="click2">点击关闭</g-button>&nbsp;&nbsp;
      <g-button @click="click3">点击触发回调</g-button>&nbsp;&nbsp;
      <g-button @click="click4">支持 HTML</g-button>&nbsp;&nbsp;
    </div>
    <div class="wrapper wrapper2">
      <g-button @click="top">上方弹出</g-button>
      <g-button @click="middle">中间弹出</g-button>
      <g-button @click="bottom">下方弹出</g-button>
    </div>
    <h2>使用</h2>
    <Content slot-key="code1" />
    <Content slot-key="code2" />
    <p>
      使用 <strong>Toast</strong> 需要同时注册 <strong>Toast 组件</strong>和
      <strong>plugin.js 插件</strong>(想知道插件的使用方法，可去 Vue
      的官方文档了解)， 通过<strong> vm.$toast(message, options) </strong
      >方法调用，该方法接受两个参数，
      <strong>message</strong>为弹出提示框的信息内容，<strong>options</strong>
      为选项对象。
    </p>

    <h2>选项</h2>
    <Content slot-key="tip1" />
    <h4>1. autoClose</h4>
    <p>
      <strong>autoClose</strong
      >属性用于指定<strong>是否自动关闭</strong>或是自动关闭的<strong>延迟时间</strong>，类型为
      <strong>Boolean</strong> 或
      <strong>Number</strong>，默认值为<strong>5</strong>，可选。
    </p>

    <h4>2. closeButton</h4>
    <p>
      <strong>closeButton </strong
      >属性用于自定义关闭按钮的内容与点击关闭后的回调函数，类型为<strong>
        Object</strong
      >，存在默认值，可选。
    </p>
    <Content slot-key="code4" />

    <h4>3. enableHtml</h4>
    <p>
      <strong>enableHtml</strong> 属性表示<strong>Toast</strong>
      提示信息是否支持 <strong>HTML</strong> 格式(是否支持写入
      <strong>HTML 标签</strong>)，类型为 <strong>Boolean</strong>，默认为
      <strong>false</strong>，可选。
    </p>

    <h4>4. position</h4>
    <p>
      <strong>position</strong> 属性指定信息弹出框出现的位置，类型为
      <strong>String</strong>，属性值为 <strong>top</strong>
      、<strong>middle</strong>、<strong>bottom</strong>中的一个，默认值为
      <strong>Top</strong>，可选。
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from '../../../src/Button'
import Toast from '../../../src/Toast'
import plugin from '../../../src/plugin'
Vue.use(plugin)

export default {
  components: { 'g-toast': Toast, 'g-button': Button },
  methods: {
    click1() {
      this.$toast('会自动关闭哦!', { autoClose: 5, closeButton: null })
    },
    click2() {
      this.$toast('点击才会关闭哦', {
        autoClose: false,
        closeButton: { text: '点我' },
      })
    },
    click3() {
      let _this = this
      this.$toast('点我就给你生猴子', {
        autoClose: false,
        closeButton: {
          text: '确定',
          callback() {
            _this.$toast('哈哈 我又回来啦', {
              autoClose: 5,
              position: 'middle',
              closeButton: { text: '信了没' },
            })
          },
        },
      })
    },
    click4() {
      this.$toast('<a href="https://www.bilibili.com">我是可以点鸡的</a>', {
        autoClose: 5,
        enableHtml: true,
        closeButton: { text: '确定' },
      })
    },
    top() {
      this.$toast('我是最高的!', { position: 'top' })
    },
    middle() {
      this.$toast('我不是最矮的!', { position: 'middle' })
    },
    bottom() {
      this.$toast('你们说谁矮呢？', { position: 'bottom' })
    },
  },
  beforeDestroy() {},
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 2em;
}
.wrapper2 {
  > button {
    margin-right: 0.6em;
  }
}
strong {
  color: #48b885;
}
</style>
