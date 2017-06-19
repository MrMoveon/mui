<template>
  <div class="m-badge" :class="[badgeClass]" :style="[badgeStyle]">
    <slot></slot>
  </div>
</template>

<script>
/**
 * m-badge
 * @desc 徽章
 * @param {(type|number)} [type=default] - 显示类型，传入类型名，可选 `primary`,`danger`,`warning`, `success`
 * @param {string} size - 尺寸，可选 `noraml`,`small`
 * @param {string} color - 自定义颜色，如 `#333333`,`#999999`
 * @example
 * <m-badge type="primary" size="small">1</m-badge>
 * <m-badge type="danger" size="small">12</m-badge>
 * <m-badge type="warning" size="small">13</m-badge>
 * <m-badge type="success" size="small" color="#cccccc">14</m-badge>
 * 
 */
export default {
  name: 'Badge',
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
