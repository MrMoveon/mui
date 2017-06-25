<template>
<div class="page">
    <m-header title="Toast" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">
            <m-button size="large" @click="alert">
                点击弹出alert
            </m-button>
           
        </div>
        
    </div>
    
</div>  
</template>
<style>

</style>
<script>
import Dialog from '../../components/dialog';
export default {
  destroyed(){
      Dialog.close();
  },
  methods:{
    alert(){
        var vm=this;
        Dialog.alert('hello mui框架')
    }
  }
}
</script>

