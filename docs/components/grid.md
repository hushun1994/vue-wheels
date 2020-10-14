---
title: Grid - 栅格
---

# Grid

::: slot code1

::: details 点击查看代码

```vue
<template>
  <div class="grid-wrapper">
    <g-row class="row">
      <g-col class="item" span="24">col-24</g-col>
    </g-row>
    <g-row>
      <g-col class="item" span="12">col-12</g-col>
      <g-col class="item" span="12">col-12</g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="8">col-8</g-col>
      <g-col class="item" span="8">col-8</g-col>
      <g-col class="item" span="8">col-8</g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
    </g-row>
  </div>
</template>

<script>
import Row from '../../../src/Row'
import Col from '../../../src/Col'

export default {
  components: {
    'g-row': Row,
    'g-col': Col,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
.grid-wrapper {
  $background: #3eaf7c;
  > .row {
    padding: 0.2em;
    > .item {
      padding: 0.5em 0;
      text-align: center;
      color: white;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: black;
      }
    }
  }
}
</style>
```

:::

::: slot code2

::: details 点击查看代码

```vue
<template>
  <div class="gutter-wrapper">
    <g-row gutter="40">
      <g-col class="item" span="8"> <span> col-8 gutter-40</span> </g-col>
      <g-col class="item" span="8"> <span> col-8 gutter-40</span> </g-col>
      <g-col class="item" span="8"> <span> col-8 gutter-40</span> </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col class="item" span="8"> <span> col-8 gutter-20</span> </g-col>
      <g-col class="item" span="8"> <span> col-8 gutter-20</span> </g-col>
      <g-col class="item" span="8"> <span> col-8 gutter-20</span> </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col class="item" span="8"> <span> col-8 gutter-10</span> </g-col>
      <g-col class="item" span="8"> <span> col-8 gutter-10</span> </g-col>
      <g-col class="item" span="8"> <span> col-8 gutter-10</span> </g-col>
    </g-row>
  </div>
</template>

<script>
import Row from '../../../src/Row'
import Col from '../../../src/Col'

export default {
  components: {
    'g-row': Row,
    'g-col': Col,
  },
}
</script>

<style>
.gutter-wrapper {
  padding-top: 10px;
  .item {
    text-align: center;
    color: white;
    > span {
      display: block;
      padding: 0.5em;
      background: #3eaf7c;
    }
  }
}
</style>
```

:::

::: slot code3

::: details 点击查看代码

```vue
<template>
  <div class="align-wrapper">
    <g-row class="row" align="left">
      <g-col class="item" span="8">left</g-col>
      <g-col class="item" span="8">left</g-col>
    </g-row>
    <g-row class="row" align="center">
      <g-col class="item" span="8">center</g-col>
      <g-col class="item" span="8">center</g-col>
    </g-row>
    <g-row class="row" align="right">
      <g-col class="item" span="8">right</g-col>
      <g-col class="item" span="8">right</g-col>
    </g-row>
  </div>
</template>
<style>
* {
  box-sizing: border-box;
}
$background: #3eaf7c;
.align-wrapper {
  text-align: center;
  color: white;
  .row {
    padding-top: 10px;
    > .item {
      text-align: center;
      padding: 0.5em 0;
      color: white;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: black;
      }
    }
  }
}
</style>
```

:::

::: slot code4

::: details 点击查看代码

```vue
<template>
  <div class="grid-wrapper">
    <g-row class="row">
      <g-col class="item" span="24">span-24</g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="8">span-8</g-col>
      <g-col class="item" span="8">span-8</g-col>
      <g-col class="item" span="8">span-8</g-col>
    </g-row>
  </div>
</template>
<style>
$background: #3eaf7c;
.grid-wrapper {
  > .row {
    padding: 0.2em;
    > .item {
      padding: 0.5em 0;
      text-align: center;
      color: white;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: black;
      }
    }
  }
}
</style>
```

:::

::: slot code5

::: details 点击查看代码

```vue
<template>
  <div class="offset-wrapper">
    <g-row class="row">
      <g-col class="item" span="16"> <span>col-16</span> </g-col>
      <g-col class="item" span="4" offset="4"> <span>col-4</span> </g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="12"> <span>col-12</span> </g-col>
      <g-col class="item" span="8" offset="4"> <span>col-8</span> </g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="8"> <span>col-8</span> </g-col>
      <g-col class="item" span="12" offset="4"> <span>col-12</span> </g-col>
    </g-row>
  </div>
</template>
<style>
.offset-wrapper {
  padding-top: 10px;
  > .row {
    > .item {
      text-align: center;
      color: white;
      > span {
        display: block;
        padding: 0.5em 0;
        background: #3eaf7c;
      }
    }
  }
}
</style>
```

:::

::: slot code6

::: details 点击查看代码

```vue
<template>
  <div class="response-wrapper">
    <g-row class="row">
      <g-col
        class="item"
        span="24"
        :ipad="{ span: 8 }"
        :narrow-pc="{ span: 4 }"
        :pc="{ span: 2 }"
        :wide-pc="{ span: 1 }"
      >
        <span>col</span>
      </g-col>
      <g-col
        class="item"
        span="24"
        :ipad="{ span: 16 }"
        :narrow-pc="{ span: 20 }"
        :pc="{ span: 20, offset: 2 }"
        :wide-pc="{ span: 21 }"
      >
        <span>col</span>
      </g-col>
    </g-row>
  </div>
</template>
<style>
.response-wrapper {
  padding-top: 10px;
  > .row {
    > .item {
      text-align: center;
      color: black;
      > span {
        display: block;
        background: #3eaf7c;
      }
    }
  }
}
</style>
```

:::

::: slot tip1

::: tip
<strong style="color: #3eaf7c">Row 组件</strong>必须和 <strong style="color: #3eaf7c">Col 组件</strong>一起配合何用才能完成<strong style="color: #3eaf7c"> grid 布局</strong>
:::

::: slot tip2

::: tip
<strong style="color: #3eaf7c">Col</strong> 的选项有 <strong style="color: #3eaf7c">span</strong>、 <strong style="color: #3eaf7c">offset</strong> 以及响应式相关的 <strong style="color: #3eaf7c">ipad</strong>、 <strong style="color: #3eaf7c">narrowPc</strong>、 <strong style="color: #3eaf7c">pc</strong>、 <strong style="color: #3eaf7c">widePc</strong> 等。
:::

::: slot tip3

::: tip
每个属性上对应的 <strong style="color: #3eaf7c">span + offset</strong> 总和为 <strong style="color: #3eaf7c">24</strong>。
:::

<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>
