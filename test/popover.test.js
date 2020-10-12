const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('接收 position 属性', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position='bottom' ref="a">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>点击</button>
      </g-popover>
    `
    const vm = new Vue({
      el: div,
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
      div.remove()
      vm.$destroy()
    })
  })

  xit('接收 trigger 属性', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position='bottom' ref="a">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>点击</button>
      </g-popover>
    `
    const vm = new Vue({
      el: div,
    })
    let event = new Event('mouseenter')
    vm.$el.dispatchEvent(event)
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.a.$refs
      console.log(contentWrapper)
      console.log(vm.$refs.a.visible)
      expect(contentWrapper).to.exist
      done()
      div.remove()
      vm.$destroy()
    })
  })
})
