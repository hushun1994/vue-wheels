<template>
  <div>
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
      <g-layout>
        <g-header> header </g-header>
        <g-layout>
          <g-sider> sider </g-sider>
          <g-layout>
            <g-content> content </g-content>
            <g-footer> footer </g-footer>
          </g-layout>
        </g-layout>
      </g-layout>
    </div>
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
        width: 3em;
        width: 200px;
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
