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