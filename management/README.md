# management

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- 实现步骤 -->

使用element 按需引入组件 

使用v-for 循环渲染菜单导航

(这里使用到了 两个计算属性函数  函数内部来 使用数组 filter来判断 是否存在children子数组  **el-menu-item** 循环不存在子数组的 函数返回值 **el-submenu** 则循环存在子数组的  然后其内部el-menu-item-group 循环children数组 实现子导航)

样式问题:{

暂时不要用*{margin:0;padding:0}

这样会引起element的一些元素高度变少

正确使用html,body{margin:0;padding:0}

}



路由跳转 加入了一个配置对象,可以根据对应组件的 name 进行跳转

this.$router.push({

​	name:变量

})

app里面只挂了一个 router-view 

路由根路径 里面写了子路径 

根路径指向的是 main.vue (公共布局)

在main.vue中  头部 和侧边栏 是固定死的组件 

中间的内容区 用路由管理器显示(router-view )





