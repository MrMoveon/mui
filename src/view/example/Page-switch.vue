<template>
<div class="page">
    <m-header title="Switch" fixed>
        <router-link to='/List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">
            <m-switch :value.sync='isChecked'>开关 {{isChecked}}</m-switch>
        </div>
        <div class="content-padded">
            <m-switch :value.sync='isChecked2' color="org">开关 {{isChecked2}}</m-switch>
        </div>
        <div class="content-padded">
            <m-switch :value.sync='isChecked5' disabled>开关 禁用 {{isChecked5}}</m-switch>
        </div>
         <div class="content-padded">
            <m-switch :value.sync='isChecked6' disabled>开关 禁用 {{isChecked6}}</m-switch>
        </div>
        <m-cell title="开关" name="Switch">
            <span slot='label'> {{isChecked3}}</span>
            <m-switch :value.sync='isChecked3' color="red" slot="switch"></m-switch>
        </m-cell>
        <m-cell title="开关" name="Switch" >
            <span slot='label'> {{isChecked4}}</span>
            <m-switch :value.sync='isChecked4' color="green" slot="switch"></m-switch>
        </m-cell>
         <m-cell title="开关" name="Switch">
            <span slot='label'>禁用 {{isChecked5}}</span>
            <m-switch :value.sync='isChecked5' disabled slot="switch"></m-switch>
        </m-cell>
        <m-cell title="开关" name="Switch">
            <span slot='label'>禁用 {{isChecked6}}</span>
            <m-switch :value.sync='isChecked6' disabled slot="switch"></m-switch>
        </m-cell>
    </div>
    
</div>  
</template>
<style>

</style>
<script>
export default {
  name:'Page-switch',
  data(){
      return {
          isChecked:false,
          isChecked2:true,
          isChecked3:false,
          isChecked4:true,
          isChecked5:false,
          isChecked6:true
      }
  }
}
</script>

