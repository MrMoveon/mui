<template>
    <transition name="fade">
        <div class="m-indicator" v-show="visible">
            <div class="m-indicator-container">
                <m-spinner :type="spinnerType" :size="40"></m-spinner>
                <div v-if="text">{{text}}</div>
            </div>
        </div>
    </transition>
    
</template>
<script>
/**
 * m-indicator
 * @desc 加载提示框
 * @param {string} text - 显示文本 
 * @param {boolean} visible - 显示隐藏
 * @param {string} spinnerType - 显示加载图标,传入图标名字：default ellipsis
 * @example
 * 
 * 组件调用
 * <m-indicator text="加载中..." spinnerType="ellipsis" :visible='true'></m-indicator>
 * js调用
 * import Indicator from '../../components/indicator/Indicator.js';
 * Indicator.open({
 *      text:'加载中...'
 *      spinnerType:'ellipsis',
 *  })
 */
export default {
    name:'Indicator',
    props:{
        text:{
            type:String,
            default:''
        },
        spinnerType:{
            type:String,
            default:'default'
        },
        visible:{
            type:Boolean,
            default:false
        }
    }
    
}
</script>
<style lang='less'>

.m-indicator{
    position: fixed;
    left: 0;
    right:0;
    top:0;
    bottom:0;
    z-index: 9999;
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    &-container{
        background: rgba(0,0,0,0.6);
        color: #fff;
        padding:15px 15px;
        border-radius:8px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s linear
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
</style>
