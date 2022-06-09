<template>
    <header>
        <div class="i-content">
            <el-button plain icon="el-icon-menu" size="mini" @click="handleeMenu"></el-button>
            <!-- <h3 style="color: #fff;">首页</h3> -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }" class="bread-font">
                    {{ item.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class='user' :src="userImg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: 'VueLearningCommonHeader',

    data() {
        return {
            userImg: require('../assets/head.png')
        };
    },

    mounted() {

    },

    methods: {
        handleeMenu() {
            this.$store.commit('collapseMenu')
        },
    },
    computed:{
        ...mapState({
            tags: state => state.tab.tabsList
        })
    }
};
</script>

<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}

.i-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

// .el-breadcrumb ::v-deep .el-breadcrumb__inner {
//     color: rgb(207, 207, 207);
// }
// ::v-deep .el-breadcrumb__inner:last-child {
//     color: red;
// }

/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: #fff
}
/deep/ .el-breadcrumb__inner.is-link {
  color:#606266
}

/deep/ .el-breadcrumb__inner.is-link:hover {
  color:rgb(54, 151, 255)
}



</style>