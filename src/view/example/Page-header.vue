<template>
<div class="page">
    <m-header title="Header" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe8b5;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <m-header title="标题太长太长太长太长太长太长太长太长太长太长" style="margin-top:10px;">
            <router-link to='List' slot="left" tag="span">
                <i class="iconfont">&#xe8b5;</i>
                <span class="m-header-left-text">返回</span>
            </router-link>
            <span  slot="right">
                <i class="iconfont">&#xe8bd;</i>
            </span>
        </m-header>
        <m-header title="页面标题" style="margin-top:10px;">
            <router-link to='List' slot="left" tag="span">
                <i class="iconfont">&#xe8b5;</i>
                <span class="m-header-left-text">返回</span>
            </router-link>
            <span  slot="right">
                完成
            </span>
        </m-header>
        <m-header title="页面标题" style="margin-top:10px;">
            <router-link to='List' slot="left" tag="span">
                <i class="iconfont">&#xe8b5;</i>
                <span class="m-header-left-text">返回</span>
            </router-link>
            <div slot="right">
                <i class="iconfont">&#xe873;</i>
                <i class="iconfont">&#xe8bc;</i>
            </div>
        </m-header>
    </div>
    
</div>  
</template>
<style>

</style>
<script>
export default {
  
}
</script>

