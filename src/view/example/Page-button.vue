<template>
<div class="page">
    <m-header title="Button" fixed>
        <router-link to='/List' slot="left" tag="span">
           <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">普通按钮</div>
        <div class="content-padded">
            <m-button>按钮</m-button>
            <m-button type="primary">按钮</m-button>
            <m-button type="danger">按钮</m-button>
            <m-button type="warning">按钮</m-button>
            <m-button type="success">按钮</m-button>
        </div>
        <div class="content-padded">图标按钮</div>
        <div class="content-padded">
            <m-button type="primary">按钮 <i class="iconfont">&#xe733;</i></m-button>
            <m-button type="danger">按钮<i class="iconfont">&#xe741;</i></m-button>
            <m-button type="warning">按钮<i class="iconfont">&#xe748;</i></m-button>
            <m-button type="success">按钮 <i class="iconfont">&#xe6ed;</i></m-button>
        </div>
        <div class="content-padded">无底色按钮</div>
        <div class="content-padded">
            <m-button type="primary" outlined>按钮</m-button>
            <m-button type="danger" outlined>按钮</m-button>
            <m-button type="warning" outlined>按钮</m-button>
            <m-button type="success" outlined>按钮</m-button>
        </div>
        <div class="content-padded">无底色图标按钮</div>
        <div class="content-padded">
            <m-button type="primary" outlined><i class="iconfont">&#xe733;</i> 按钮 </m-button>
            <m-button type="danger" outlined><i class="iconfont">&#xe741;</i> 按钮</m-button>
            <m-button type="warning" outlined><i class="iconfont">&#xe748;</i> 按钮</m-button>
            <m-button type="success" outlined><i class="iconfont">&#xe6ed;</i> 按钮 </m-button>
        </div>
        <div class="content-padded">禁用按钮</div>
        <div class="content-padded">
            <m-button type="primary" disabled>按钮</m-button>
            <m-button type="danger" disabled>按钮</m-button>
            <m-button type="warning" disabled>按钮</m-button>
            <m-button type="success" disabled>按钮</m-button>
            <m-button type="primary" outlined disabled>按钮</m-button>
            <m-button type="danger" outlined disabled>按钮</m-button>
            <m-button type="warning" outlined disabled>按钮</m-button>
            <m-button type="success" outlined disabled>按钮</m-button>
        </div>
        
        <div class="content-padded">块级按钮</div>
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

