import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main'),
        redirect:'/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user'),
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/mall'),
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/other/page1.vue'),
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/other/page2.vue'),
            },
        ]
    },

    {
      path:'/login',
      name:'login',
      component:()=>{
        return import('../views/Login/login.vue') 
      }
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

// 跳转重复路由 取消报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


export default router