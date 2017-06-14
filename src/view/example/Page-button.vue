<template>
<div class="page">
    <m-header title="Button" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe8b5;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">
            <m-button type="primary">按钮</m-button>
            <m-button type="danger">按钮</m-button>
            <m-button type="warning">按钮</m-button>
            <m-button type="success">按钮</m-button>
            <m-button type="primary">按钮</m-button>
             <m-button type="primary" disabled>按钮</m-button>
            <m-button type="danger" outlined>按钮</m-button>
            <m-button type="warning" outlined>按钮</m-button>
            <m-button type="success" outlined>按钮</m-button>
            <m-button type="success" outlined disabled>按钮(禁用)</m-button>
        </div>
        <div class="content-padded">
            <m-button type="primary" size="small">按钮</m-button>
            <m-button type="primary" size="small">按钮</m-button>
            <m-button type="danger" size="small">按钮</m-button>
            <m-button type="warning" size="small">按钮</m-button>
            <m-button type="success" size="small">按钮</m-button>
            <m-button type="success" size="small" disabled>按钮</m-button>
            <m-button type="primary" size="small" outlined>按钮</m-button>
            <m-button type="danger" size="small" outlined>按钮</m-button>
            <m-button type="warning" size="small" outlined>按钮</m-button>
            <m-button type="success" size="small" outlined>按钮</m-button>
            <m-button type="success" size="small" outlined disabled>按钮(禁用)</m-button>
        </div>
        <div class="content-padded">
            <m-button type="primary" size="large">按钮</m-button>
            <m-button type="danger" size="large">按钮</m-button>
            <m-button type="warning" size="large">按钮</m-button>
            <m-button type="success" size="large">按钮</m-button>
            <m-button type="success" size="large" disabled>按钮(禁用)</m-button>
            <m-button type="primary" size="large" outlined>按钮</m-button>
            <m-button type="danger" size="large" outlined>按钮</m-button>
            <m-button type="warning" size="large" outlined>按钮</m-button>
            <m-button type="success" size="large" outlined>按钮</m-button>
            <m-button type="success" size="large" outlined disabled>按钮(禁用)</m-button>
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

