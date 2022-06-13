import Vue from 'vue'
import App from './App.vue'
import {
  Button, Radio, Container, Aside, Main, Header, Menu,
  Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownItem,
  DropdownMenu, Row, Col, Card, Table, TableColumn, Breadcrumb,
   BreadcrumbItem,Tag,Form,FormItem,Input,Select,Switch,DatePicker,Option,
   Dialog,Pagination
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router'
import store from './store'
import http from 'axios'
import '../api/mock.js'


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
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)

// axios 我们绑定到Vue的原型上来使用
Vue.prototype.$http = http
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
