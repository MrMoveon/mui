<template>
<div class="page">
    <m-header title="Indicator" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">
            <m-button size="large" @click="type01">
                点击弹出Indicator
            </m-button>
        </div>
         <div class="content-padded">
            <m-button size="large" @click="type02">
                Indicator自定义图标
            </m-button>
        </div>
         <div class="content-padded">
            <m-button size="large" @click="type03">
                Indicator自定义文本
            </m-button>
        </div>
    </div>
    
</div>  
</template>
<style>

</style>
<script>
export default {
  methods:{
    type01(){
        var type01=this.$Indicator();
        setTimeout(()=>{
            type01.close();
        },1000)
    },
    type02(){
         var type02=this.$Indicator({
            spinnerType:'ellipsis'
        });
        setTimeout(()=>{
            type02.close();
        },1000)
    },
    type03(){
        var type03=this.$Indicator('加载中...');
        setTimeout(()=>{
            type03.close();
        },1000)
    }
  }
}
</script>

