<template>
    <div class="content">
        <el-form ref="form" label-width="100px" :model="form" :inline="inline">
            <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
                <el-input v-if="item.type === 'input'" :placeholder="'请输入' + item.label" >

                </el-input>

                <el-switch v-if="item.type === 'switch'" ></el-switch>

                <el-date-picker v-if="item.type === 'date'" type='date' value-format="yyyy-MM-dd" placeholder="选择日期"
                    >
                </el-date-picker>

                <el-select v-if="item.type === 'select'" placeholder="请选择" >
                    <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <slot></slot>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'VueLearningCommonForm',

    props: {
        formLabel: Array,
        form: Object,
        inline: Boolean,
    },
    data() {
        return {
            
        };
    },

    mounted() {
        // console.log(this.myprops.formLabel)
        // console.
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
    .content{
        margin-top: 22px;
    }
</style>23