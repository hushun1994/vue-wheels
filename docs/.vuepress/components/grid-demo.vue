<template>
  <div>
    <p>通过基础的 <strong>24</strong> 分栏，迅速简便地创建布局。</p>
    <h2>预览</h2>
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

    <h2>使用</h2>
    <Content slot-key="code1" />
    <p>
      使用 <strong>Col</strong> 组件和 <strong>Row</strong> 组件，通过基础的
      <strong>24</strong> 分栏完成 <strong>grid</strong> 布局。
    </p>

    <h2>选项</h2>
    <Content slot-key="tip1" />

    <h3><strong>Row 组件</strong></h3>

    <h4>1. gutter (排水沟、槽)</h4>
    <strong></strong>
    <p>
      通过给 <strong>Row</strong> 设置 <strong>gutter</strong> 属性,
      可以让栅格有间隔。单位为 <strong>px</strong> 。
    </p>
    <span>预览：</span>
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
    <Content slot-key="code2" />

    <h4>2. align</h4>
    <p>
      通过给 <strong>Row</strong> 设置 <strong>align</strong> 属性, 可以定义
      <strong>Col 组件</strong>在其中的<strong>对齐方式</strong>。接受
      <strong>left / right / center</strong> ，默认为 <strong>left</strong>。
    </p>
    <span>预览：</span>
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
    <Content slot-key="code3" />

    <h3><strong>Col 组件</strong></h3>
    <Content slot-key="tip2" />
    <h4>1. span</h4>
    <p>
      在 <strong>24</strong> 栅格系统中，通过
      <strong>span</strong> 属性设置栅格占据的列数，在一行中所有列的
      <strong>span</strong> 加和为 <strong>24</strong> 。
    </p>
    <span>预览：</span>
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
    <Content slot-key="code4" />

    <h4>2. offset</h4>
    <p>
      使用 <strong>offset</strong> 设置栅格左侧的间隔格数，默认是
      <strong>0</strong> 。
    </p>
    <span>预览：</span>
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
    <Content slot-key="code5" />

    <h4>3. 响应式</h4>
    <p>
      <strong>移动端</strong>首先，默认是手机的样式。添加
      <strong>ipad、narrowPc、pc、widePc</strong>
      等属性，可同时支持多端设备，可按需求进行选择。
    </p>
    <Content slot-key="tip3" />
    <span>预览：</span>
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
    <span class="response-preview">动态图预览：</span>
    <div>
      <img src="../public/response.gif" alt="response" />
    </div>
    <Content slot-key="code6" />
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

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
$background: #3eaf7c;
.grid-wrapper {
  padding-top: 10px;
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
.response-preview {
  display: block;
  padding: 1.4em 0;
}
strong {
  color: #48b885;
}
</style>
