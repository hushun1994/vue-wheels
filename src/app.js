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
import Toast from "./Toast";
import plugin from "./plugin";

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
Vue.component("g-toast", Toast);
Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: "hi",
  },
  created() {
    this.$toast(
      "很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字",
      {
        enableHtml: false,
      }
    );
  },
  methods: {
    showToast() {
      // this.$toast("我是 message");
    },
  },
});
