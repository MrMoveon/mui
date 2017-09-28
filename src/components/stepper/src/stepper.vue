<template>
    <div class="mui-stepper">
        <span class="iconfont icon-minus minus-btn mui-stepper-btn"></span>
        <input class="mui-stepper-input" type="number" v-model="value" />
        <span class="iconfont icon-plus mui-stepper-btn"></span>
    </div>
</template>

<script>
export default {
    name: 'mui-stepper',
    props: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 10
        },
        defaultValue: {
            type: Number,
            default: 0
        },
        step: {
            type: [Number, String],
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            value: this.defaultValue
        }
    }

}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-stepper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
}
.mui-stepper-btn{
    display: inline-block;
    width:60/@rem;
    height: 60/@rem;
    border:1px solid #e8e8e8;
    text-align: center;
    line-height: 60/@rem;
    .font-dpr(14px);
}
.mui-stepper-input{
    flex: 1;
    border:1px solid #e8e8e8;
    border-left:none;
    border-right:none;
    height: 60/@rem;

}
</style>
