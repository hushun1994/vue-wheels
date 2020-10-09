const expect = chai.expect;
import Vue from "vue";
import TabsItem from "../src/Tabs-item";

Vue.component("g-tabs-item", TabsItem);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {
  it("存在.", () => {
    expect(TabsItem).to.exist;
  });

  it("接收 name 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx",
      },
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
  });

  it("接收 disabled 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true,
      },
    }).$mount();
    expect(vm.$el.classList.contains("disabled")).to.eq(true);
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});
