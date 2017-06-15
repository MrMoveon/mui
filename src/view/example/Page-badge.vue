<template>
<div class="page">
    <m-header title="Badge" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">小号</div>
        <div class="content-padded">
            <m-badge type="primary" size="small">1</m-badge>
            <m-badge type="danger" size="small">12</m-badge>
            <m-badge type="warning" size="small">13</m-badge>
            <m-badge type="success" size="small">14</m-badge>
        </div>
        <div class="content-padded">中号</div>
        <div class="content-padded">
            <m-badge type="primary" size="normal">1</m-badge>
            <m-badge type="danger" size="normal">12</m-badge>
            <m-badge type="warning" size="normal">13</m-badge>
            <m-badge type="success" size="normal">14</m-badge>
        </div>
       <div class="content-padded">自定义颜色</div>
        <div class="content-padded">
            <m-badge>1</m-badge>
            <m-badge color="#666" size="small">自定义颜色</m-badge>
            <m-badge color="#888" size="normal">自定义颜色</m-badge>
            <m-badge color="#ccc" size="large">自定义颜色</m-badge>
        </div>
    </div>
    
</div>  
</template>
<style>

</style>
<script>
export default {
  
}
</script>

