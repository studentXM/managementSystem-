import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Aside,Main,Header,Menu,
  Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownItem,
  DropdownMenu,Row,Col,Card,Table,TableColumn} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router'
import store from './store'
import http from 'axios'
Vue.config.productionTip = false
// 按需引入
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)

// axios 不是插件 所以我们绑定到Vue的原型上来使用
Vue.prototype.$http = http
new Vue({
  store,  
  router,
  render: h => h(App),
}).$mount('#app')
