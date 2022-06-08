<template>
    <div :style="style" :id="uuid">

    </div>
</template>

<script>
import * as echarts from 'echarts'
const idGen = ()=> new Date().getTime();

export default {
    name: 'VueLearningTest',
    props:{
        echartHeight:{
            type:String,
            default:'100%'
        },
        echartWidth:{
            type:String,
            default:'100%'
        },
        options:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    data() {
        return {
            uuid:null
        };
    },
    watch:{
        echartWidth(){
            if(this.echartWidth == '600px'){
                this.echartWidth = '800px'
            }
        }
    },
    computed:{
        style(){
            return {
                height:this.echartHeight,
                width:this.echartWidth
            }
        }
    },
    created(){
        this.uuid = idGen()
    },

    mounted() {
        // 测试数据
         echarts.init(document.getElementById(this.uuid)).setOption(this.options)
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
</style>