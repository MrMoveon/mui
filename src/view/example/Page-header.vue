<template>
<div class="page">
    <m-header title="Header" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <m-header title="标题太长太长太长太长太长太长太长太长太长太长" style="margin-top:10px;">
            <router-link to='List' slot="left" tag="span">
                <i class="iconfont">&#xe72a;</i>
                <span class="m-header-left-text">返回</span>
            </router-link>
            <span  slot="right">
                <i class="iconfont">&#xe6ee;</i>
            </span>
        </m-header>
        <m-header title="页面标题" style="margin-top:10px;">
            <router-link to='List' slot="left" tag="span">
                <i class="iconfont">&#xe72a;</i>
                 <span class="m-header-left-text">返回</span>
            </router-link>
            <span  slot="right">
                完成
            </span>
        </m-header>
        <m-header title="页面标题" style="margin-top:10px;" color="white">
            <router-link to='List' slot="left" tag="span">
               <i class="iconfont">&#xe72a;</i>
                <span class="m-header-left-text">返回</span>
            </router-link>
            <div slot="right">
                <i class="iconfont">&#xe708; <m-badge size="small" style="position:absolute;right:0;top:-10px;">2</m-badge></i>
                <i class="iconfont">&#xe732;</i>
            </div>
        </m-header>
        <m-header style="margin-top:10px;" tabs color="white">
            <router-link to='List' slot="left" tag="span">
                <i class="iconfont">&#xe72a;</i>
                <span class="m-header-left-text">返回</span>
            </router-link>
            <div class="m-header-tabs-title" slot="middle">
                <span class="m-header-tabs-title-item is-active">类别1</span>
                <span class="m-header-tabs-title-item">类别2</span>
            </div>
            <div slot="right">
                <i class="iconfont">&#xe708;</i>
                <i class="iconfont">&#xe732;</i>
            </div>
        </m-header>
        <m-header style="margin-top:10px;" tabs>
            <router-link to='List' slot="left" tag="span">
                <i class="iconfont">&#xe72a;</i>
            </router-link>
            <div class="m-header-tabs-title" slot="middle">
                <span class="m-header-tabs-title-item is-active">类别1</span>
                <span class="m-header-tabs-title-item">类别2</span>
            </div>
            <div slot="right">
                <i class="iconfont">&#xe708;</i>
                <i class="iconfont">&#xe732;</i>
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

