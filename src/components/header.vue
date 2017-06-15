<template>
<div class="m-header" :class="[{'is-fixed':fixed},headerType]">
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
export default {
  name: 'header',
  props:{
    title:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'primary'
    },
    color:{
      type:String,
      default:''
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
    headerType(){
      return this.name+this.type;
    }
  }
}
</script>


<style lang='less'>

</style>
