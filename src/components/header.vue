<template>
<div class="m-header" :class="[{'is-fixed':fixed},headerColor]">
	<div class="m-header-left">
		<slot name="left"></slot>
	</div>
	<div class="m-header-right">
		<slot name="right"></slot>
	</div>
	<div class="m-header-title">
		<span v-if="!tabs">{{title}}</span>
		<slot v-else name="middle"></slot>
	</div>
</div>
</template>

<script>
/**
 * m-header
 * @desc 顶部导航
 * @param {(type|number)} [color=primary] - 显示颜色，可选 `primary`,`white`
 * @param {string} size - 尺寸，可选 `noraml`,`large`
 * @param {string} title - 标题
 * @param {Boolean} fixed - 是否浮动到顶部 
 * @param {Boolean} tabs - title区中间tab按钮 
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 * @param {slot} [middle] - 显示在中间区域的tab内容
 * @example
 *

 *       <m-header style="margin-top:10px;" tabs color="white">
 *           <router-link to='List' slot="left" tag="span">
 *               <i class="iconfont">&#xe72a;</i>
 *               <span class="m-header-left-text">返回</span>
 *           </router-link>
 *           <div class="m-header-tabs-title" slot="middle">
 *               <span class="m-header-tabs-title-item is-active">类别1</span>
 *               <span class="m-header-tabs-title-item">类别2</span>
 *           </div>
 *           <div slot="right">
 *               <i class="iconfont">&#xe708;</i>
 *               <i class="iconfont">&#xe732;</i>
 *           </div>
 *       </m-header>

 */
export default {
  name: 'Header',
  props:{
    title:{
      type:String,
      default:''
    },
    color:{
      type:String,
      default:'primary'
    },
    fixed:{
      type:Boolean,
      default:false
    },
    tabs:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      name:'m-header--',
    }
  },
  computed:{
    headerColor(){
      return this.name+this.color;
    }
  }
}
</script>


<style lang='less'>

</style>
