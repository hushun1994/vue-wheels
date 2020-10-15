---
title: Collapse - 折叠面板
---

# Collapse

::: slot code1

::: details 点击查看代码

```vue
<template>
  <div>
    <h2>预览</h2>
    <div class="wrapper">
      <g-collapse :selected.sync="selected">
        <g-collapse-item title="标题1" name="1">
          <strong>这是一首简单的小情歌</strong>
        </g-collapse-item>
        <g-collapse-item title="标题2" name="2">
          <strong>唱着人们心肠的曲折</strong>
        </g-collapse-item>
        <g-collapse-item title="标题3" name="3">
          <strong>我想我很快乐</strong>
        </g-collapse-item>
      </g-collapse>
    </div>
    <h2>使用</h2>
  </div>
</template>

<script>
import Collapse from '../../../src/Collapse'
import CollapseItem from '../../../src/Collapse-item'

export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem,
  },
  data() {
    return { selected: ['1', '2'] }
  },
}
</script>
```

:::

::: slot code2

::: details 点击查看代码

```vue
<template>
  <div>
    <h2>预览</h2>
    <div class="wrapper">
      <g-collapse :selected.sync="selected" single>
        <g-collapse-item title="标题1" name="1">
          <strong>这是一首简单的小情歌</strong>
        </g-collapse-item>
        <g-collapse-item title="标题2" name="2">
          <strong>唱着人们心肠的曲折</strong>
        </g-collapse-item>
        <g-collapse-item title="标题3" name="3">
          <strong>我想我很快乐</strong>
        </g-collapse-item>
      </g-collapse>
    </div>
    <h2>使用</h2>
  </div>
</template>

<script>
import Collapse from '../../../src/Collapse'
import CollapseItem from '../../../src/Collapse-item'

export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem,
  },
  data() {
    return { selected: ['1', '2'] }
  },
}
</script>
```

:::

<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>
