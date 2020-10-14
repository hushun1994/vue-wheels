---
title: Button - 按钮
---

# 按钮

::: slot code1

```html
<g-button>默认按钮</g-button>
<g-button icon="setting" :loading="loading1" @click="change1"
  >图标按钮</g-button
>
<g-button icon="setting" iconPosition="right">图标按钮</g-button>
<g-button :loading="loading2" @click="change2">加载按钮</g-button>
<g-button disabled>禁用按钮</g-button>
```

```js
import Button from '../../../src/Button'

export default {
  components: {
    'g-button': Button,
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
```

:::

::: slot code2

```html
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>查询</g-button>
  <g-button icon="right" iconPosition="right">下一页</g-button>
</g-button-group>
```

:::

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>
