import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './Button-group'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Layout from './Layout'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Sider from './Sider'
import Toast from './Toast'
import plugin from './plugin'
import Tabs from './Tabs'
import TabsHead from './Tabs-head'
import TabsBody from './Tabs-body'
import TabsItem from './Tabs-item'
import TabsPane from './Tabs-pane'
import Popover from './Popover'
import Collapse from './Collapse'
import CollapseItem from './Collapse-item'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    selectedTab: ['2'],
  },
  created() {},
  methods: {
    changeSelected(name) {
      this.selectedTab = name
    },
  },
})
