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



el-table 会有一个data来绑定数组

通常数组里面 会放对象



el-column是列标签 它的prop 代表拿去data数组里面的某个对象的key



​    <!-- 这里data绑定了 tableData数组-->

​        <el-table :data="tableData">

​        <!-- 下面的 prop里是传入的index会作为tableData的key -->

​        <!-- label则是 每一列的标题 -->

​          <el-table-column v-for="(item, index) in tableLabel" 

​          :key="index" :prop="index" :label="item">

​          </el-table-column>

​        </el-table>

列数由column决定

行数由table的data中的length决定

<!-- axios -->
<!-- 这个项目 axios 没有使用Vue.use  -->
<!-- 而是绑定Vue的原型上 -->
在 绑定vue的 main.js当中 引入axios 然后绑定到Vue原型上


<!-- echarts 封装 -->
axios请求到的数据 通过父子通信 传输给 echarts 组件
通过传输的布尔值 判断是否为饼图 和 其他图形


<!-- 面包屑通过vuex 来保持同步 -->
用到了 vuex 的两个辅助函数

<!-- 用户管理 -->
添加数据的 弹窗里面的 表单元素 使用 form包裹 然后v-for循环出来的 父组件传递给子组件 类型 子组件 根据类型 渲染对应 表单元素 
这里它循环的是 外层 from标签 没有直接循环input 一个form 只显示一个input 

<!-- 组件 v-model -->
把子组件的表单数据  通过自定义事件发送给父组件 接受数据的组件 用v-on(@)来接受 
数据 事件名和 emit 发送时 定义的 事件名 一致
<div>
<input type="text" :value="value" @input="handle">
</div>
<!-- 数据 -->
props:[
'value'
],
methods: {
    handle(e){
        console.log(e.target.value)
        this.$emit('diychange',e.target.value)
    }
},
<!-- 接受 -->
<ty :value="mess" @diychange="test"></ty>


<!-- 自定义组件 v-model -->
v-model 默认是 input事件和 v-bind绑定
如果表单是 非text输入框 的时候 (如checkbox radio)
就需要用到 自定义v-model 只需要在子组件 
写入
model:{
    prop:'值的方式 checkbox 或者 radio select 等等',
    event:'事件方式 change 或者其他',
}
