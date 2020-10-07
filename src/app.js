import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sider from "./Sider";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-content", Content);
Vue.component("g-footer", Footer);
Vue.component("g-sider", Sider);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: "hi",
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
  },
});
