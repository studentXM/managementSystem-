export default{
    state:{
        isCollapse:false,
        tabList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
        currentMenu:null
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name == 'home'){
                state.curremtMenu
            }
        }
    }
}