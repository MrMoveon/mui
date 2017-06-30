<template>
    <div class="page">
        <m-header title="mui" fixed></m-header>
        <div class="content">
            
            <!--css组件-->
            <div class="content-padded">css基础组件</div>
            <m-cell title="Button" :to="{name:'Button'}" icon></m-cell>
            <m-cell title="Badge" :to="{name:'Badge'}" icon>
                <m-badge type="danger" size="small" slot="badge">12</m-badge>
            </m-cell>
            <m-cell title="Cell" :to="{name:'Cell'}" icon value="带 icon">
                <i class="icon iconfont" slot="icon">&#xe6ec;</i>
            </m-cell>
            <m-cell title="Header" :to="{name:'Header'}" icon></m-cell>
            <m-cell title="Spinner" :to="{name:'Spinner'}" icon></m-cell>
            <!--js组件-->
            <div class="content-padded">js基础组件</div>
            <m-cell title="Toast" :to="{name:'Toast'}" icon></m-cell>
            <m-cell title="Indicator" :to="{name:'Indicator'}" icon></m-cell>
            <m-cell title="Dialog" :to="{name:'Dialog'}" icon></m-cell>
            <!--form组件-->
            <div class="content-padded">form基础组件</div>
            <m-cell title="Switch" :to="{name:'Switch'}" icon></m-cell>
           <!--<Indicator ></Indicator>-->
          
        </div>
        <!--<m-dialog title="提示" text="欢迎使用mui框架"></m-dialog>-->
    </div>
</template>

<script>
// import Dialog from '../../components/dialog/src/dialog'
import Dialog from '../../components/dialog';
export default{
    data(){
        return{
           
        }
    },
    components:{
      //  mDialog:Dialog
    },
    mounted(){
        // Dialog.alert({
        //     title:'提示',
        //     text:'hello mui框架',
        //     showCancelButton:true,
        //     callback(action){
        //         if(action=='confirm'){
                    
        //             return false;
        //         }
        //         if(action=='cancel'){
                    
        //         }
                
        //     }
        // })
    },
    methods:{
        load(){
            this.$Indicator({
               text:'加载中...',
               spinnerType:'ellipsis'
            });
        }
    }
}
</script>
<style>

</style>

