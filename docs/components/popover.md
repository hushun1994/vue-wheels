---
title: Popover - 弹出层
---

# Popover

::: slot code1

::: details 点击查看 <strong style="color:#3eaf7c">HTML</strong>代码

```vue
<template>
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
</template>
```

:::

<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>
