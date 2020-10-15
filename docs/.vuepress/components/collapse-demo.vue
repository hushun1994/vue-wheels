<template>
  <div>
    <h2>预览</h2>
    <div class="wrapper">
      <g-collapse :selected="selected1">
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
    <Content slot-key="code1" />
    <p>
      折叠面板需要通过 <strong>Collapse</strong> 组件 和
      <strong>CollapseItem</strong> 组合使用来完成，<strong>Collapse</strong>
      需要动态绑定 <strong>selected</strong> 属性，绑定的
      <strong>selected</strong> 是一个数组，与 <strong>CollapseItem</strong> 的
      <strong>name</strong> 关联，数组的项为默认展开的
      <strong>CollapseItem</strong> 的
      <strong>name</strong>，可同时展开多项，绑定空数组表示默认都不展开，<strong
        >CollapseItem</strong
      >
      接收 <strong>title</strong>
      参数作为标题展示，详见代码。
    </p>

    <h2>single 单项展开</h2>
    <div class="wrapper">
      <g-collapse :selected.sync="selected2" single>
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
    <Content slot-key="code2" />
    <p>
      <strong>Collapse</strong> 接收 <strong>single</strong> 参数，当传入
      <strong>single</strong> 参数时，表示只支持单项展开，如果传入
      <strong>single</strong> 的同时，如果 <strong>selected</strong>
      数组存在多项，那么只会默认只会开展第一项。
    </p>

    <h2>选项</h2>
    <h3>Collapse 组件</h3>
    <h4>1. selected</h4>
    <p>
      需要为 <strong>Collapse</strong> 动态绑定是
      <strong>selected</strong> 属性，类型为 &lt;String&gt;<strong
        >Array</strong
      >
      ，数组的项的类型为
      <strong>String</strong>，可以是空数组，也可支持多项，绑定的数组与
      <strong>CollapseItem</strong> 的
      <strong>name</strong> 关联，数组的项为默认展开的
      <strong>CollapseItem</strong> 的 <strong>name</strong> 。
      <strong>Collapse</strong> 及其子组件通过 <strong>eventBus</strong> 以
      <strong>Collapse</strong>
      为事件中心进行通信，通过<strong>发布订阅模式</strong>完成状态的变更，所有子组件的状态变更都是通过
      <strong>eventBus</strong>
      通知父组件来完成的，实现<strong>单向数据流</strong>。
    </p>

    <h4>2. single</h4>
    <p>
      <strong>single</strong> 属性表示是否为单项展开，类型为
      <strong>Boolean</strong>，默认为 <strong>false</strong> ，可选。
    </p>

    <h3>CollapseItem 组件</h3>
    <h4>1. title</h4>
    <p>
      通过 <strong>title</strong> 属性是为
      <strong>CollapseItem</strong> 指定标题内容，类型为
      <strong>String</strong>，必传。
    </p>
    <h4>2. name</h4>
    <p>
      每个 <strong>CollapseItem</strong> 都必须有一个独一无二的
      <strong>name</strong>，<strong>Collapse</strong> 通过
      <strong>name</strong> 属性的值是否在
      <strong>selected</strong> 数组中来判断
      <strong>CollapseItem</strong> 的状态，必传。
    </p>
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
    return {
      selected1: ['1', '2'],
      selected2: ['1'],
    }
  },
}
</script>

<style lang="scss" scoped>
strong {
  color: #3eaf7c;
}
</style>
