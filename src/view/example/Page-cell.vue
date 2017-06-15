<template>
<div class="page">
    <m-header title="Cell" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <m-cell title="普通列表" icon></m-cell>
        <m-cell title="带badge列表" icon>
            <m-badge type="danger" size="small" slot="badge">12</m-badge>
        </m-cell>
        <m-cell title="带左侧图标" value="右侧值" icon>
            <i class="icon iconfont" slot="icon">&#xe6ec;</i>
        </m-cell>
         <m-cell title="带左侧图片" value="带图片" icon>
             <img src="../../assets/logo.png" slot="icon" />
        </m-cell>

    </div>
    
</div>  
</template>
<style>

</style>
<script>
export default {
  
}
</script>

