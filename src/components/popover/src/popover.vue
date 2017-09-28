<template>
    <transition name="popover-fade">
        <div class="mui-popover" v-show="visible">
            <transition name="popover-fade">
                <div class="mui-popover-wrap" v-if="popover">
                    <div class="mui-popover-arrow"></div>
                    <div class="mui-popover-inner">
                        <slot></slot>
                    </div>
                </div>
            </transition>
            <div class="mui-popover-mask" @click="close"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'mui-popover',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            popover: this.visible
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.popover = true
            }
        }
    },
    methods: {
        close () {
            this.popover = false
            setTimeout(() => {
                this.$emit('update:visible', false)
            }, 100)
        }
    }

}
</script>

<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-popover {
    transition: all .3s ease;
    z-index: 1000;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .mui-popover-wrap {
        position: absolute;
        top: 50/@rem;
        right: 10/@rem;
        z-index: 10001;
        transition: all .3s ease;
    }
    .mui-popover-inner {
        position: absolute;
        top: 25/@rem;
        right: 0;
        width: 360/@rem;
        background: #fff;
        border-radius: 12/@rem;
        overflow: hidden;
    }
    .mui-popover-arrow {
        position: absolute;
        top: 0px;
        right: 10/@rem;
        border-left: 15/@rem solid transparent;
        border-right: 15/@rem solid transparent;
        border-top: 15/@rem solid transparent;
        border-bottom: 15/@rem solid #fff;
    }
    .mui-popover-mask {
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
}


.popover-fade-enter,
.popover-fade-leave-to {
    opacity: 0
}
</style>
