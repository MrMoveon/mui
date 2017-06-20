<template>
<div class="page">
    <m-header title="mui" fixed></m-header>
    <div class="content">
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
        <div class="content-padded">js基础组件</div>
        <m-cell title="Toast" name="Toast" icon></m-cell>
    </div>
    <!--<m-toast position="bottom" msg="hello"></m-toast>-->
</div>  
</template>
<style>

</style>
<script>
// import Toast from '../../components/toast/Toast'

export default {
    components: {
        //mToast:Toast
    },
    mounted(){
      
    }
}
</script>

