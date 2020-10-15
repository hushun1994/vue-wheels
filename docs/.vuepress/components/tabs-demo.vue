<template>
  <div>
    <h2>预览</h2>
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

    <h2>使用</h2>
    <Content slot-key="code1" />
    <p>
      <strong>Tabs</strong> 组件需要与<strong> TabsHead</strong>、
      <strong>TabsBody</strong>、<strong>TabsItem</strong>、
      <strong>TabsPane</strong> 等一起使用，同时
      <strong>TabsItem</strong> 与<strong>TabsPane</strong> 都必须设置
      <strong>name</strong> 属性，且必须是一一对应的关系，详见代码。
    </p>

    <h2>选项</h2>
    <h4>1. selected</h4>
    <p>
      给 <strong>Tabs</strong> 组件动态绑定
      <strong>selected</strong> 属性可以设置默认选中的标签， 必传的参数，类型为
      <strong>String</strong> 或 <strong>Number</strong> 。<strong>Tabs</strong>
      及其子组件通过 <strong>eventBus</strong> 以
      <strong>Tabs</strong> 为<strong>事件中心</strong> 进行通信，通过
      <strong>发布订阅模式</strong>完成状态的变更。
    </p>
    <h4>2. name</h4>
    <p>
      <strong>TabsItem</strong> 和 <strong>TabsPane</strong> 都需要设置
      <strong>name</strong> 属性，且必须是一一对应的关系， 必传的参数，类型为
      <strong>String</strong> 或 <strong>Number</strong>，与
      <strong>selected</strong> 属性关联。
    </p>
    <h4>3. disabled</h4>
    <p>
      给 <strong>TabsItem</strong> 绑定 <strong>disabled</strong>
      属性可以设置标签为禁用状态，可选，默认为
      <strong>false</strong>。
    </p>
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
    return {
      selectedTab: 'tab1',
    }
  },
}
</script>

<style lang="scss" scoped>
strong {
  color: #48b885;
}
</style>
