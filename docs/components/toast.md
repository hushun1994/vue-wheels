---
title: Toast - 弹出提示框
---

# Toast

::: slot code1

```vue
<template>
  <div class="wrapper">
    <g-button @click="click1">自动关闭</g-button>
    <g-button @click="click2">点击关闭</g-button>
    <g-button @click="click3">点击触发回调</g-button>
    <g-button @click="click4">支持 HTML</g-button>
  </div>
  <div class="wrapper">
    <g-button @click="top">上方弹出</g-button>
    <g-button @click="middle">中间弹出</g-button>
    <g-button @click="bottom">下方弹出</g-button>
  </div>
</template>
```

:::

::: slot code2

::: details 点击查看代码

```vue
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
}
</script>
```

:::

::: slot code3

```js
import Vue from 'vue'
import Toast from '../../../src/Toast'
import plugin from '../../../src/plugin'
Vue.component('g-toast', Toast)
Vue.use(plugin)
```

:::

::: slot code4

```js
// 默认值
closeButton = { text: '关闭', callback: undefined }
```

:::

::: slot tip1

::: tip
使用 <strong style="color: #3eaf7c">Toast</strong> 组件，需要引入 <strong style="color: #3eaf7c">Vue</strong> 和 <strong style="color: #3eaf7c">plugin.js</strong>，然后通过 <strong style="color: #3eaf7c">Vue.use()</strong> 注册这个插件，通过 <strong style="color: #3eaf7c">vm.\$toast() / Vue.toast()</strong> 来使用它，当然你可以<strong style="color: #3eaf7c">全局注册 Toast 组件</strong>和这个插件，这样你就可以在你项目中的任何地方使用它了。
:::

<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>
