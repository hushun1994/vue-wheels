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
    })
    // const element = vm.$el
    // expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    // div.remove()
    // vm.$destroy()
  })
})
