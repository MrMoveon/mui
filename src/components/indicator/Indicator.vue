<template>
    <transition name="fade">
        <div class="m-indicator" v-if="visible">
            <div class="m-indicator-container">
                <m-spinner :type="spinnerType" :size="40"></m-spinner>
                <div v-if="text">{{text}}</div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'Indicator',
    data(){
        return{

        }
    },
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
    },
    methods:{
        close(){
            this.visible=false;
            setTimeout(()=>{
                this.$destroy(true);
                this.$el ||this.$el.parentNode.removeChild(this.$el)
            },500)
            
        }
    }
}
</script>
<style lang='less'>
@import '../../assets/less/variables.less';
.@{name}indicator{
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
