<template>
  <div>
    <h2>预览</h2>
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
    <Content slot-key="code1" />
    <p>
      通过
      <strong>Layout</strong
      >、<strong>Header</strong>、<strong>Sider</strong>、<strong>Content</strong>、<strong
        >Footer</strong
      >
      等组件嵌套使用完成布局。
    </p>

    <h2>选项</h2>
    <Content slot-key="tip1" />
    <h3>组件概述</h3>
    <ul>
      <li>
        <strong>Layout</strong>：布局容器，内部可嵌套
        <strong>Header</strong
        >、<strong>Sider</strong>、<strong>Content</strong>、<strong
          >Footer</strong
        >
        或 <strong>Layout</strong> 本身，可放置在任何父容器中。
      </li>
      <li>
        <strong>Header</strong>：顶部布局，内部可嵌套任何元素，只能放在
        <strong>Layout</strong> 中。
      </li>
      <li>
        <strong>Sider</strong>：侧边栏，内部可嵌套任何元素，只能放在
        <strong>Layout</strong> 中。
      </li>
      <li>
        <strong>Content</strong>：内容部分，内部可嵌套任何元素，只能放在
        <strong>Layout</strong> 中。
      </li>
      <li>
        <strong>Footer</strong>：底部布局，内部可嵌套任何元素，只能放在
        <strong>Layout</strong> 中。
      </li>
    </ul>
  </div>
</template>

<script>
import Layout from '../../../src/Layout'
import Header from '../../../src/Header'
import Content from '../../../src/Content'
import Footer from '../../../src/Footer'
import Sider from '../../../src/Sider'

export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-footer': Footer,
    'g-sider': Sider,
  },
}
</script>

<style lang="scss" scoped>
$background: #3eaf7c;
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
strong {
  color: #3eaf7c;
}
</style>
