<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top:20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="headImg" alt="" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间 : <span>2022/5/27</span></p>
                    <p>上次登陆地点 : <span>武汉</span></p>
                </div>
            </el-card>
        </el-col>
    </el-row>

</template>

<script>
export default {
    name: 'home',

    data() {
        return {
            headImg:require('../../src/assets/head.png')
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>

    .home{
        
    }

</style>