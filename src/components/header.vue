<template>
 <div class="m-header" :class="{'is-fixed':fixed}">
  <div class="m-header-left"><slot name="left"></slot></div>
  <div class="m-header-right"><slot name="right"></slot></div>
  <div class="m-header-title"><span>{{title}}</span></div>
 </div>
</template>

<script>
export default {
  name: 'header',
  props:{
    title:{
      type:String,
      default:''
    },
    color:{
      type:String,
      default:''
    },
    fixed:{
      type:Boolean,
      default:false
    }
    
  },
  data () {
    return {
      
    }
  }
}
</script>


<style lang='less'>

</style>
