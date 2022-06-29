<template>
  <div class="login_content">
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="login-container">
      <h3 class="login_title">系统登录</h3>
      <!-- 用户名条 -->
      <el-form-item label="用户名" label-width="80px" prop="username" class="username">
        <el-input type="input" v-model="form.username" autocomplete="off" placeholder="请输入账号">
        </el-input>
      </el-form-item>
      <!-- 密码条 -->
      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <!-- 提交按钮 -->
      <div class="submit_btn">
        <el-button type="primary" @click="login" class="login_submit">登录</el-button>
      </div>
    </el-form>
  </div>

</template>
<script>
// 引用mock 模拟 token 登陆身份证验证
import Mock from 'mockjs'
export default {

  name: 'login',
  data() {
    return {
      form: {

      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            message: '用户名长度不能小于3位',
            trigger: 'blur'
          },
        ],
        password: [
          {
            required: true, message: '请输入密码', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      // 随机数 生成token
       const token = Mock.random.guid()
      //  传入vuex
       this.$store.commit('setToken',token)
       this.$router.push({name:'home'})
    },

  },
  created() {
  },
  mounted() {

  },
}
</script>
<style lang="less" scoped>
.login_content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  // margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  height: 240px;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.submit_btn {
  display: flex;
  justify-content: center;
}
</style>
