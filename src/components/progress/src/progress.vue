<template>
    <div class="mui-progress" :class="{'is-fixed':position}">
        <div class="mui-progress-line" :style="{'background':unfilled?background:'none'}" v-if="type==='line'">
            <span class="mui-progress-line-percent" :style="{'width':percent+'%','background':color}"></span>
        </div>
        <div class="mui-progress-circle"  v-if="type==='circle'" :style="{width:cw,height:cw}">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" :style="{width:cw,height:cw}"  viewBox="0 0 120 120">
                <circle :stroke="background"  r="50" cx="60" cy="60" :stroke-width="2"  stroke-linecap='round'  fill="transparent" />
                <circle  r="50" cx="60" cy="60" stroke-linecap='round' :stroke-width="4" :stroke="color"  fill="transparent" :stroke-dasharray="perimeter"
                :stroke-dashoffset="circlePercent"/>
            </svg> 
            <div class="mui-progress-circle-text">{{percent}}%</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mui-progress',
    props: {
        position: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'line'// circle
        },
        background: {
            type: String,
            default: '#eee'
        },
        color: {
            type: String,
            default: '#0894ec'
        },
        percent: {
            type: Number,
            default: 0
        },
        unfilled: {
            type: Boolean,
            default: true
        },
        // 圆环属性

        cr: {// 圆环半径
            type: Number,
            default: 50
        },
        cw: {
            type: String,
            default: '1rem'
        }

    },
    computed: {
        perimeter () { // 周长
            return Math.PI * this.cr * 2
        },
        circlePercent () { // 圆环进度
            return this.perimeter * (1 - this.percent / 100)
        }
    },
    watch: {
        percent (val) {
            this.$emit('update:percent', val)
        }
    }

}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-progress{
    // width: 100%;
    &.is-fixed{
        position: fixed;
        left: 0;
        right: 0;
        top:0;
        z-index:1000;
    }
}
.mui-progress-line{
    height: 5/@rem;
    width: 100%;
    //background: #eee;
    overflow: hidden;
}
.mui-progress-line-percent{
    display: block;
    height: 100%;
    transition: width .3s
}
.mui-progress-circle{
    position: relative;
}
.mui-progress-circle-text{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate3d(-50%,-50%,0);
}
</style>
