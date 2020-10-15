---
title: Tabs - 标签页
---

# Tabs

::: slot code1

::: details 点击查看代码

```vue
<template>
  <div class="tabs-wrapper">
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="tab1">
          <g-icon name="setting"></g-icon>Tab1
        </g-tabs-item>
        <g-tabs-item name="tab2">Tab2</g-tabs-item>
        <g-tabs-item name="tab3">Tab3</g-tabs-item>
        <g-tabs-item name="tab4" disabled>Tab4</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="tab1">内容1</g-tabs-pane>
        <g-tabs-pane name="tab2">内容2</g-tabs-pane>
        <g-tabs-pane name="tab3">内容3</g-tabs-pane>
        <g-tabs-pane name="tab4">内容4</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/Tabs'
import TabsHead from '../../../src/Tabs-head'
import TabsBody from '../../../src/Tabs-body'
import TabsItem from '../../../src/Tabs-item'
import TabsPane from '../../../src/Tabs-pane'
import Icon from '../../../src/Icon'

export default {
  components: {
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-body': TabsBody,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
    'g-icon': Icon,
  },
  data() {
    return { selectedTab: 'tab1' }
  },
}
</script>
```

:::

<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>
