<template>
    <div class="page">
        <m-header title="mui" fixed></m-header>
        <div class="content">
            <!--css组件-->
            <div class="content-padded">css基础组件</div>
            <m-cell title="Button" name="Button" icon></m-cell>
            <m-cell title="Badge" name="Badge" icon>
                <m-badge type="danger" size="small" slot="badge">12</m-badge>
            </m-cell>
            <m-cell title="Cell" name="Cell" icon value="带 icon">
                <i class="icon iconfont" slot="icon">&#xe6ec;</i>
            </m-cell>
            <m-cell title="Header" name="Header" icon></m-cell>
            <m-cell title="Spinner" name="Spinner" icon></m-cell>
            <!--js组件-->
            <div class="content-padded">js基础组件</div>
            <m-cell title="Toast" name="Toast" icon></m-cell>
            <m-cell title="Indicator" name="Indicator" icon></m-cell>
            <!--form组件-->
            <div class="content-padded">form基础组件</div>
           <!--<Indicator ></Indicator>-->
           
        </div>
        <m-dialog></m-dialog>
    </div>
</template>

<script>
import Dialog from '../../components/dialog/src/dialog'
export default{
    data(){
        return{
           
        }
    },
    components:{
        mDialog:Dialog
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

