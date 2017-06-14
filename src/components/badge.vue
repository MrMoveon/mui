<template>
  <div class="m-badge" :class="[badgeClass]" :style="[badgeStyle]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'badge',
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
  },
  data () {
    return {
      name:'m-badge--',
      msg: ''
    }
  },
  computed: {
    badgeClass(){
      let classobj='';
      if(this.type){
        classobj+=this.name+this.type;
      }
      if(this.size){
        classobj+=' '+this.name+this.size;
      }
     return classobj;
    },
    badgeStyle(){
      if(this.color){
        return {backgroundColor:this.color};
      }
    }
   
  }
}
</script>


<style lang='less'>

</style>
