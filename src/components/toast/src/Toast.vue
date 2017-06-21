<template>
<transition name="fade">
  <div class="m-toast" :class="position?'m-toast--'+position:''" v-if="visible" :style="{backgroundColor:color,zIndex:tIndex+9999}">
          <i v-if="icon" :class="icon" style="font-size:40px;display:block"></i>
          {{msg}}
  </div>
  </transition>
</template>
<script>
/**
 * m-toast
 * @desc 消息提示框，支持自定义位置、图标、持续时间和样式
 * @param {string} position - 位置，可选 `top`,`bottom`,`middle`
 * @param {string} color - 自定义颜色，如 `#333333`,`rgba(0,0,0,0.6)`
 * @param {number} duration - 持续时间 
 * @param {string} msg - 显示信息 
 * @param {string} icon - 显示图标,传入自定义图标iconfont icon-prompt_fill
 * @example
 * 
 * 组件调用
 * <m-toast position="top" msg="信息" :duration="2000" color="#4cd964"></m-toast>
 * js调用
 * this.$Toast({
 *      msg:'自定义颜色',
 *      position:'top',
 *      duration:1000,
 *      color:'#4cd964'
 *  })
 */
export default {
  name:'Toast',
  props:{
    position:{
        type:String,
        default:'middle'
    },
    msg:String,
    duration:{
        type:Number,
        default:3000
    },
    color:{
        type:String,
        default:'rgba(0,0,0,0.6)'
    },
    icon:{
        type:String,
        default:''
    },
    visible:{
        type:Boolean,
        default:false
    }
  },
  methods:{
      setTimer(){
         setTimeout(()=>{
            this.close();
          },this.duration);
      },
      close(){
        this.visible=false;
        setTimeout(()=>{
            //销毁这个实例
            this.$destroy(true)
            //存在节点，就移除节点
            this.$el || this.$el.parentNode.removeChild(this.$el)
        },500)
      }
  },
  mounted(){
    //组件挂载完成，显示
    this.setTimer();
  }
  
}
</script>

<style lang='less'>
.m-toast{
    position: fixed;
    left: 50%;
    z-index: 9999;
    max-width: 80%;
    text-align: center;
    transform: translate(-50%,0);
    border-radius: 4px;
    background: rgba(0,0,0,0.6);
    padding:5px 10px;
    color: #fff;
    transition: all 0.3 linear;
    &--bottom{
        bottom:20px;
    }
    &--top{
        top:64px;
    }
    &--middle{
        top:50%;
        transform: translate(-50%,-50%);
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s linear
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
</style>
