<template>
    <transition name="actionsheet-fade">
        <div class="mui-actionsheet" v-show="visible">
            <transition name="actionsheet-move">

                <div class="mui-actionsheet-inner" v-if="actionsheet">
                    <div class="mui-actionsheet-item" v-for="(item,index) in options" :key="index" @click="close">{{item}}</div>
                    <div class="mui-actionsheet-white-space"></div>
                    <div class="mui-actionsheet-cancel"  @click="close">取消</div>
                </div>

            </transition>
            <div class="mui-actionsheet-mask" @click="close"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'mui-actionsheet',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array
        }
    },
    data () {
        return {
            actionsheet: this.visible
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.actionsheet = true
            }
        }
    },
    methods: {
        close () {
            this.actionsheet = false
            setTimeout(() => {
                this.$emit('update:visible', false)
            }, 300)
        }
    }

}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-actionsheet {
   
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
     z-index: 1000;
    transition: all .3s ease;
}

.mui-actionsheet-inner {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    
    z-index: 10001;
    background: #FFF;
    text-align: center;
    transition: all .3s ease;
}

.mui-actionsheet-white-space {
    height: 20/@rem;
    background: #eee;
}

.mui-actionsheet-cancel {
    position: relative;
    height: 100/@rem;
    line-height: 100/@rem;
    .font-dpr(14px);
    &:active{
        background: #eee;
    }
}

.mui-actionsheet-item {
    position: relative;
    height: 100/@rem;
    line-height: 100/@rem;
    .font-dpr(14px);
    .sideline(bottom,#eee);
    &:active{
        background: #eee;
    }
}

.mui-actionsheet-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.4);
}

.actionsheet-fade-enter,
.actionsheet-fade-leave-to {
    opacity: 0
}

.actionsheet-move-enter,
.actionsheet-move-leave-to {
    transform: translateY(100%)
}
</style>
