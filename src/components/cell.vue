<template>
  <!--<router-link :to="{name:this.name}" tag="a" class="m-cell">-->
 <a class="m-cell" :href="href">
   <div class="m-cell-title">
     <slot name="icon"></slot>
     <span class="m-cell-text">{{title}}</span>
     <slot name="label"></slot>
   </div>
   
   <div class="m-cell-value">
     {{value}}
     <slot name="badge"></slot>
     <slot name="switch"></slot>
     <i v-if="icon" class="icon iconfont">&#xe6fb;</i></div>
  </a>
  <!--</router-link>-->
</template>

<script>
export default {
  name: 'cell',
  data () {
    return {
      
    }
  },
  props:{
   
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
    },
    to:{
      type:[String,Object],
      default:'javascript:;'
    }
  },
  computed:{
    href(){
        //
        let resolved = this.$router.match(this.to);
        if(!resolved.matched.length) return this.to;
        //如果路由存在值，绑定跳转事件
        this.$nextTick(()=>{
           this.$el.addEventListener('click',this.handleClick)
        })
        return 'javascript:;';
    }
  },
  methods:{
    handleClick(){
      this.$router.push(this.to);
    }
  }
}
</script>


<style lang='less'>

</style>
