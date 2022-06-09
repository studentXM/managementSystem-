<template>

    <el-container style="height: 100%;">
        <el-aside width="auto">
            <!-- 固定组件 -->
            <common-aside />
        </el-aside>
        <el-container>
            <el-header>
                <!-- 固定组件 -->
                <CommonHeader></CommonHeader>
            </el-header>
            <common-tag />
            <!-- 内容区使用路由管理器 来动态显示 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
import CommonAside from '../src/components/CommonAside.vue';
import CommonHeader from '../src/components/CommonHeader.vue';
import CommonTag from '../src/components/CommonTag.vue';
export default {
    name: 'VueLearningHome',

    data() {
        return {

        };
    },
    components: {
        CommonAside,
        CommonHeader,
        CommonTag
    },
    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.el-header {
    background: #333;
}

.el-main {
    padding-top: 0;
}
</style>