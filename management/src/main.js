import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Aside,Main,Header,Menu,
  Submenu,MenuItem,MenuItemGroup} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router'
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


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
