<template>
    <div class="mui-stepper" :class="{'is-disabled':disabled}">
        <span class="iconfont icon-minus minus-btn mui-stepper-btn" :class="{'is-disabled':stepperMinus}" @click="minus"></span>
        <input class="mui-stepper-input" type="number" @input="valueChange" v-model="currentValue" :disabled="disabled" />
        <span class="iconfont icon-plus mui-stepper-btn" :class="{'is-disabled':stepperPlus}" @click="plus"></span>
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
        value: {
            type: Number,
            default: 0
        },
        step: {
            type: [Number, String],
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            currentValue: this.value,
            stepperPlus: false,
            stepperMinus: false
        }
    },
    watch: {
        currentValue (val) {
            if (val >= this.max) {
                this.stepperPlus = true
            } else if (val <= this.min) {
                this.stepperMinus = true
            } else {
                this.stepperMinus = false
                this.stepperPlus = false
            }
            this.$emit('input', val)
        }
    },
    mounted () {
        if (this.defaultValue <= this.min) {
            this.stepperMinus = true
        } else if (this.defaultValue >= this.max) {
            this.stepperPlus = true
        }
    },
    methods: {
        correctValue (value) {
            var correctValue = 0
            if (Number.isNaN(value)) {
                correctValue = this.min
            } else {
                correctValue = Math.max(this.min, value)
                correctValue = Math.min(this.max, value)
            }
            return correctValue
        },
        valueChange (e) {
            this.currentValue = this.correctValue(e.target.value)
        },
        minus () {
            if (this.disabled) return
            if (this.currentValue <= this.min) {
                this.currentValue = this.min
            } else {
                this.currentValue -= this.step
            }
        },
        plus () {
            if (this.disabled) return
            if (this.currentValue >= this.max) {
                this.currentValue = this.max
            } else {
                this.currentValue += this.step
            }
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
    width:200/@rem;
    &.is-disabled,.is-disabled{
        background: #f8f8f8;
        color:#ddd;
    }
}
.mui-stepper-btn{
    display:block;
    width:60/@rem;
    height: 60/@rem;
    border:1px solid #e8e8e8;
    text-align: center;
    line-height: 60/@rem;
    .font-dpr(14px);
}
.mui-stepper-input{

    width:80/@rem;
    border:1px solid #e8e8e8;
    border-left:none;
    border-right:none;
    height: 60/@rem;
    text-align: center;
    &:disabled{
        background: #f8f8f8;
    }
}
</style>
