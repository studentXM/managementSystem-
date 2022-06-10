<template>
    <div class="tabs">
        <el-tag v-for="(tag, index) in tags" :key="tag.name" size="small" 
            :closable="tag.name !== 'home'"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
             @click="changeMenu(tag)"
            @close="handleClose(tag, index)">
            {{ tag.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState ,mapMutations} from 'vuex'
export default {
    name: 'VueLearningCommonTag',

    data() {
        return {

        };
    },

    created() {

    },

    mounted() {

    },

    methods: {
        ...mapMutations({
            // 别名
            close:"closeTag"
        }),
        changeMenu(item) {
            this.$router.push({
                name:item.name
            })
        },
        handleClose(tag,index) {
            console.log(tag)
            const length = this.tags.length - 1;
            this.close(tag)
            if(tag.name !== this.$route.name){
                return 
            }
            // 最后一位
            if(index === length){
                this.$router.push({
                    name:this.tags[index -1].name
                })
            }else{
                this.$router.psuh({
                    name:this.tags[index].name
                })
            }
            
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    }
};
</script>

<style lang="less" scoped>
    .tabs{
        margin-top: 10px;
        margin-left: 20px;
        .el-tag{
            margin-right: 10px;
            cursor: pointer;
        }
    }
</style>