<template>
  <router-link :to="{name:this.name}" tag="a" class="m-cell">
  <!--<a class="m-cell">-->
   <div class="m-cell-title">
     <slot name="icon"></slot>
     <span class="m-cell-text">{{title}}</span>
   </div>
   
   <div class="m-cell-value">
     {{value}}
     <slot name="badge"></slot>
     <i v-if="icon" class="icon iconfont">&#xe88e;</i></div>
  <!--</a>-->
  </router-link>
</template>

<script>
export default {
  name: 'cell',
  props:{
    name:{
      type:String,
      default:'List'
    },
    title:{
      type:String,
      default:''
    },
    value:{
      type:String,
      default:''
    },
    icon:{
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
