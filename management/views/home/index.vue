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
                <!-- <div style="height: 280px;" ref="echarts"></div> -->
                <Echart :chartData="echartData.order" style="height: 280px;" />
            </el-card>
            <div class="graph">
                <el-card style="height:260px">
                    <echart :chartData="echartData.user" style="height: 240px;" />
                </el-card>
                <el-card style="height:260px">
                    <echart :chartData="echartData.video" :isAxisChart="false" style="height: 240px;" />
                </el-card>
            </div>
            <el-card style="height: 280px;margin:20px 0px">
                <div style="height: 280px;" >
                    <testvue :options="this.testOption"></testvue>
                </div>
                <!-- <echart :chartData="echartData.order" style="height: 280px;" /> -->
            </el-card>
        </el-col>

    </el-row>

</template>

<script>
import { getData } from '../../api/data.js'
// import * as echarts from 'echarts'
import testvue from '../../src/components/test'
import Echart from '../../src/components/Echarts.vue'
export default {
    name: 'home',
    components: {
        Echart,
        testvue
    },
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
            echartData: {
                order: {
                    xData: [],
                    series: []
                },
                user: {
                    xData: [],
                    series: []
                },
                video: {
                    series: []
                }
            },
            testOption:{
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量', '数据']
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    },
                    {
                        name: '数据',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    },
                    {
                        name: '数据',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    },
                ]
            
            }
                       
        };
    },

    mounted() {

        getData().then(res => {
            const { code, data } = res.data
            if (code === 20000) {
                this.tableData = data.tableData
                const order = data.orderData
                const xData = order.date
                const keyArray = Object.keys(order.data[0])
                const series = []
                keyArray.forEach(key => {
                    series.push({
                        name: key,
                        data: order.data.map(item => item[key]),
                        type: 'line'
                    })
                })
                // const option = {
                //     xAxis: {
                //         data: xData
                //     },
                //     yAxis: {},
                //     legend: {
                //         data: keyArray
                //     },
                //     series
                // }

                this.echartData.order.xData = xData
                this.echartData.order.series = series

                // const E = echarts.init(this.$refs.echarts)
                // E.setOption(option)

                // 用户图
                // const userOption = {
                //     legend: {
                //         // 图例文字颜色
                //         textStyle: {
                //             color: "#333",
                //         },
                //     },
                //     grid: {
                //         left: "20%",
                //     },
                //     // 提示框
                //     tooltip: {
                //         trigger: "axis",
                //     },
                //     xAxis: {
                //         type: "category", // 类目轴
                //         data: data.userData.map(item => item.date),
                //         axisLine: {
                //             lineStyle: {
                //                 color: "#17b3a3",
                //             },
                //         },
                //         axisLabel: {
                //             interval: 0,
                //             color: "#333",
                //         },
                //     },
                //     yAxis: [
                //         {
                //             type: "value",
                //             axisLine: {
                //                 lineStyle: {
                //                     color: "#17b3a3",
                //                 },
                //             },
                //         },
                //     ],
                //     color: ["#2ec7c9", "#b6a2de"],
                //     series: [
                //         {
                //             name: '新增用户',
                //             date: data.userData.map(item => item.new),
                //             type: 'bar'
                //         },
                //         {
                //             name: '活跃用户',
                //             data: data.userData.map(item => item.active),
                //             type: 'bar'
                //         }
                //     ],
                // }

                // const U = echarts.init(this.$refs.userEcharts)
                // U.setOption(userOption)

                this.echartData.user.xData =  data.userData.map(item => item.date)
                this.echartData.user.series =  [
                        {
                            name: '新增用户',
                            date: data.userData.map(item => item.new),
                            type: 'bar'
                        },
                        {
                            name: '活跃用户',
                            data: data.userData.map(item => item.active),
                            type: 'bar'
                        }
                    ]

                // 饼图
                // const videoOption = {
                //     tooltip: {
                //         trigger: "item",
                //     },
                //     color: [
                //         "#0f78f4",
                //         "#dd536b",
                //         "#9462e5",
                //         "#a6a6a6",
                //         "#e1bb22",
                //         "#39c362",
                //         "#3ed1cf",
                //     ],
                //     series: [
                //         {
                //             data: data.videoData,
                //             type: 'pie'
                //         }
                //     ],
                // }
                // echarts.init(this.$refs.pieEcharts).setOption(videoOption)
                 this.echartData.video.series = [
                        {
                            data:data.videoData,
                            type:'pie'
                        }
                    ]


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