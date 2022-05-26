import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Aside,Main,Header,Menu,
  Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownItem,DropdownMenu} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router'
// import store from '../store'
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

new Vue({
  // store,  
  router,
  render: h => h(App),
}).$mount('#app')
