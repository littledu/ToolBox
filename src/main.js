// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Upload
} from 'element-ui';

Vue.config.productionTip = false;

[
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Upload
].forEach(item=>{
  Vue.use(item);
});

// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
