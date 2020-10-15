---
title: Layout - 布局
---

# Layout

::: slot code1

::: details 点击查看代码

```vue
<template>
  <div class="wrapper">
    <g-layout class="layout-wrapper">
      <g-header class="header-wrapper"> header </g-header>
      <g-layout class="layout-wrapper">
        <g-sider class="sider-wrapper"> sider </g-sider>
        <g-content class="content-wrapper"> content </g-content>
      </g-layout>
      <g-footer class="footer-wrapper"> footer </g-footer>
    </g-layout>
    <br />
    <g-layout class="layout-wrapper">
      <g-header class="header-wrapper"> header </g-header>
      <g-content class="content-wrapper"> content </g-content>
      <g-footer class="footer-wrapper"> footer </g-footer>
    </g-layout>
    <br />
    <g-layout class="layout-wrapper">
      <g-header class="header-wrapper"> header </g-header>
      <g-layout class="layout-wrapper">
        <g-sider class="sider-wrapper"> sider </g-sider>
        <g-layout class="layout-wrapper">
          <g-content class="content-wrapper"> content </g-content>
          <g-footer class="footer-wrapper"> footer </g-footer>
        </g-layout>
      </g-layout>
    </g-layout>
  </div>
</template>
<style>
.wrapper {
  overflow: hidden;
  > .layout-wrapper {
    height: 30vh;
    > .header-wrapper {
      height: 3em;
      background: $background;
    }
    > .content-wrapper {
      background: lighten($background, 40%);
    }
    > .layout-wrapper {
      height: 6em;
      > .sider-wrapper {
        width: 15%;
        background: lighten($background, 15%);
      }
      > .content-wrapper {
        background: lighten($background, 40%);
      }
      > .layout-wrapper {
        > .content-wrapper {
          background: lighten($background, 40%);
        }
        > .footer-wrapper {
          background: $background;
        }
      }
    }
    > .footer-wrapper {
      background: $background;
    }
  }
}
</style>
```

:::

::: slot tip1

::: tip
提供基础布局，样式自定义。
:::

<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>
