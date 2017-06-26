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
import Indicator from '../../components/indicator';
export default {
  destroyed(){
    Indicator.close();
  },
  methods:{
    type01(){
        Indicator.open();
        setTimeout(()=>{
            Indicator.close();
        },1000)
    },
    type02(){
        Indicator.open({
            spinnerType:'ellipsis'
        });
        setTimeout(()=>{
            Indicator.close();
        },1000)
        
    },
    type03(){
        Indicator.open('加载中...');
        setTimeout(()=>{
            Indicator.close();
        },1000)
    }
  }
}
</script>

