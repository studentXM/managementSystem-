<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <h3>{{isCollapse?'后台':'通用管理系统'}}</h3>
        <!-- 不存在子元素的菜单 -->
        <el-menu-item v-for='item in noChildren' :index="item.path" :key="item.path" 
        @click="clickMenu(item)">
            <i :class="'el-icon-'+item.icon" ></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <!-- 存在子元素的菜单 -->
            <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.label">
                <template slot="title">
                    <i :class='"el-icon-"+item.icon'></i>
                    <span slot="title">{{item.label}}</span>
                </template>
                <el-menu-item-group v-for="(child,subItem) in item.children" 
                :key="child.path">
                    <el-menu-item :index="subItem.toString()" @click="clickMenu(child)">
                    {{child.label}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
    </el-menu>

</template>


<script>
export default {
    data() {
        return {
            menu: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item){
            console.log(item)
            this.$router.push({
                name:item.name
            })
        }
    },
    computed:{
        // 使用计算属性 利用数组filter过滤来返回对应类型的数组 (有子元素和 没有子元素的 ) 单独渲染
        noChildren(){
            return this.menu.filter(item => !item.children)//没有 子元素 则返回
        },
        hasChildren(){
            return this.menu.filter(item => item.children) // 有子元素 则返回
        },
        //vuex 管理侧边栏开关 因为数据响应式 header组件更改
        // 这个值的时候 这个数据会发生改变 同时 侧边栏根据值发生改变
        isCollapse(){
            return this.$store.state.tab.isCollapse
        } 
    }
}
</script>

<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu{
    height: 100%;
    border:none;
    h3{
        color: #fff;
        text-align:center;
        line-height: 48px;
    }
}

</style>