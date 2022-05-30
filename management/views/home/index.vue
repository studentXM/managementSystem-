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
            <el-card style="margin-top:20px;height: 460px;">
                <!-- 这里data绑定了 tableData数组-->
                <el-table :data="tableData">
                    <!-- 下面的 prop里是传入的index会作为tableData的key -->
                    <!-- label则是 每一列的标题 -->
                    <el-table-column v-for="(item, index) in tableLabel" :key="index" :prop="index" :label="item">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>

        <el-col :span="16" style="margin-top: 20px;">
            <div class="num_out">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="num">￥{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;">

            </el-card>
            <div class="graph">
                <el-card style="height:260px"></el-card>
                <el-card style="height:260px"></el-card>
            </div>
        </el-col>

    </el-row>

</template>

<script>
import {getData} from '../../api/data.js'
export default {
    name: 'home',

    data() {
        return {
            headImg: require('../../src/assets/head.png'),
            tableData: [],
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
        };
    },

    mounted() {
        getData().then(res => {
            const {code,data} = res.data
            if(code === 20000){
                this.tableData = data.tableData
            }
            
        })
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.home {
    .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
        margin-bottom: 20px;

        .userinfo {
            margin-left: 30px;
        }

        img {
            height: 100px;
            width: 100px;
            border-radius: 100%;
        }
    }

    .login-info {
        p {
            display: flex;
            justify-content: space-between;
        }
    }

    .num_out {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .el-card {
            width: 32%;
            flex-shrink: 0;
            margin-bottom: 20px;
            box-sizing: border-box;
            cursor: pointer;
        }

        .icon {
            display: flex;
            align-items: center;
            width: 60px;
            justify-content: center;
            height: 60px;
        }

        .detail {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            p {
                margin: 0 !important;
            }

            .num {
                font-size: 22px;
            }

            .txt {
                color: rgb(83, 83, 83);
                font-size: 12px;
            }

        }
    }

    .graph {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .el-card {
            width: 48%;
        }
    }


}
</style>