<template>
  <button class="m-button" :class="[buttonClass]" :style="[buttonStyle]">
    <slot></slot>
  </button>
</template>

<script>
/**
 * m-button
 * @desc 按钮
 * @param {(type|number)} [type=default] - 显示类型，传入类型名，可选 `primary`,`danger`,`warning`, `success`
 * @param {string} size - 尺寸，可选 `noraml`,`large`
 * @param {string} color - 自定义颜色，如 `#333333`,`#999999`
 * @param {Boolean} outlined - 无底色按钮 
 * @param {Boolean} disabled - 禁用按钮 
 * @example
 *
 * <m-button type="primary">按钮</m-button>
 * <m-button type="primary" outlined>无底色按钮</m-button>
 * <m-button type="primary" disabled>禁用按钮</m-button>
 * <m-button type="primary" size="large">块级按钮</m-button>
 */
export default {
  name: 'Button',
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
