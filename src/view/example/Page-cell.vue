<template>
<div class="page">
    <m-header title="Cell" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe8b5;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <m-cell title="button" icon></m-cell>
        <m-cell title="badge" icon>
            <m-badge type="danger" size="small" slot="badge">12</m-badge>
        </m-cell>
        <m-cell title="cell" value="带 icon">
            <i class="icon iconfont" slot="icon">&#xe86d;</i>
        </m-cell>
         <m-cell title="标题文字" value="带图片" icon>
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

