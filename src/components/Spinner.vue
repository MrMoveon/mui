<template>
  <div class="m-spinner">
    <img :style="[{width:size+'px'},{height:size+'px'}]" :src="path" alt="">
  </div>
</template>

<script>
/**
 * m-spinner
 * @desc 加载动画
 * @param {(string|number)} [type=default] - 显示类型，传入类型名，可选 `default`,`default-dark`,`default-primary`, `ellipsis`,`ellipsis-dark`,`ellipsis-primary`,
 * @param {number} size - 尺寸
 *
 * @example
 * <m-spinner type="default"></m-spinner>
 * <m-spinner type="default-dark"></m-spinner>
 * <m-spinner type="default-primary"></m-spinner>
 * 
 */
export default {
  name: 'Spinner',
  props:{
    type:{
      type:String,
      default:'default'
    },
    size:{
      type:Number,
      default:30
    }
  },
  computed:{
    path(){
      return require("../assets/images/loading/"+this.type+".svg");
    }
  },
  data () {
    return {
      
    }
  }
}
</script>


<style lang='less'>
@import '../assets/less/variables.less';
.@{name}spinner{
  img{
    display: block;
  }
}
</style>
