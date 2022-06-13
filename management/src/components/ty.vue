<template>
    <div>
        <input type="text" :value="value" @input="handle">
    </div>
</template>

<script>
export default {
    name: 'VueLearningTy',
    props:[
        'value'
    ],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        handle(e){
            console.log(e.target.value)
            this.$emit('diychange',e.target.value)
        }
    },
};
</script>

<style lang="less" scoped>

</style>