<template>
    <transition name="actionsheet-fade">
        <div class="mui-actionsheet" v-show="visible">
            <transition name="actionsheet-move">

                <div class="mui-actionsheet-inner" v-if="actionsheet">
                    <div class="mui-actionsheet-title" v-if="title">{{title}}</div>
                    <template v-if="shareOptions.length===0">
                        <div class="mui-actionsheet-item" v-for="(item,index) in options" :key="index" @click="onPress(index)">{{item}}</div>
                        <div class="mui-actionsheet-white-space"></div>
                    </template>
                    
                    <div class="mui-actionsheet-share" v-if="shareOptions.length>0">
                        <div class="mui-actionsheet-share-item" v-for="(item,index) in shareOptions" :key="index" @click="onPress(index)">
                            <p class="icon"><span class="iconfont" :class="'icon-'+item.icon"></span></p>
                            <p class="name">{{item.name}}</p>
                        </div>
                    </div>
                   
                    
                    <div class="mui-actionsheet-cancel"  @click="toggle">取消</div>
                </div>

            </transition>
            <div class="mui-actionsheet-mask" @click="toggle"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'mui-actionsheet',
    props: {
        title: {
            type: String,
            default: ''
        },
        visible: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default: function () {
                return []
            }
        },
        shareOptions: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    data () {
        return {
            actionsheet: this.visible,
            actionsheetSwitch: true
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.actionsheet = true
                this.actionsheetSwitch = true
            }
        }
    },
    methods: {
        toggle () {
            if (this.actionsheetSwitch) {
                this.actionsheetSwitch = false
                this.actionsheet = !this.actionsheet
                setTimeout(() => {
                    this.$emit('update:visible', false)
                }, 100)
            }
        },
        onPress (index) {
            this.toggle()
            this.$emit('on-press', index)
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
.mui-actionsheet-title{
    height:80/@rem;
    line-height: 80/@rem;
    .font-dpr(14px);
    background: #f4f4f4;
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
.mui-actionsheet-share{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    background: #f4f4f4;
}
.mui-actionsheet-share-item{
    width:120/@rem;
    margin-left:25/@rem;
    margin-bottom:20/@rem;
    .icon{
        width: 120/@rem;
        height:120/@rem;
        line-height: 120/@rem;
         border-radius:20/@rem;
        background: #fff;
    }
    .iconfont{
        .font-dpr(30px);
    }
    .name{
        padding-top:10/@rem;
        .font-dpr(12px);
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
