<template>
<div class="page">
    <m-header title="Spinner" fixed>
        <router-link to='/List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">深色</div>
        <div class="content-padded">
            <m-button>
                <m-spinner type="default-dark"></m-spinner>
            </m-button>
            <m-button>
                <m-spinner type="ellipsis-dark" ></m-spinner>
            </m-button>
        </div>
        <div class="content-padded">浅色</div>
        <div class="content-padded">
            <m-button type="primary">
                <m-spinner type="default"></m-spinner>
            </m-button>
            <m-button type="primary">
                 <m-spinner type="ellipsis"></m-spinner>
            </m-button>
        </div>
       <div class="content-padded">蓝色</div>
        <div class="content-padded">
            <m-button>
               <m-spinner type="default-primary"></m-spinner>
            </m-button>
            <m-button>
                <m-spinner type="ellipsis-primary"></m-spinner>
            </m-button>
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

