<template>
  <button class="m-button" :class="[buttonClass]" :style="[buttonStyle]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button',
  props:{
    type:{
      type:String,
      default:''
    },
    color:{
      type:String,
      default:''
    },
    size:{
      type:String,
      default:'noraml'
    },
    outlined:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      name:'m-button--',
      msg: ''
    }
  },
  computed: {
    buttonClass(){
      let classobj='';
      if(this.type){
        classobj+=this.name+this.type;
      }
      if(this.size){
        classobj+=' '+this.name+this.size;
      }
      if(this.outlined){
        classobj+=' '+this.name+'outlined';
      }
      if(this.disabled){
        classobj+=' is-disabled';
      }
     return classobj;
    },
    buttonStyle(){
      if(this.color){
        return {backgroundColor:this.color};
      }
    }
   
  }
}
</script>


<style lang='less'>

</style>
