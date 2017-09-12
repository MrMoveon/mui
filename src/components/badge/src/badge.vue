<template>
  <div class="mui-badge" :class="[badgeClass]" :style="[badgeStyle]">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mui-badge
 * @desc 徽章
 * @param {(type|number)} [type=default] - 显示类型，传入类型名，可选 `primary`,`danger`,`warning`, `success`
 * @param {string} size - 尺寸，可选 `noraml`,`small`
 * @param {string} color - 自定义颜色，如 `#333333`,`#999999`
 * @example
 * <mui-badge type="primary" size="small">1</mui-badge>
 * <mui-badge type="danger" size="small">12</mui-badge>
 * <mui-badge type="warning" size="small">13</mui-badge>
 * <mui-badge type="success" size="small" color="#cccccc">14</mui-badge>
 *
 */
export default {
    name: 'mui-badge',
    props: {
        type: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            name: 'mui-badge--',
            msg: ''
        }
    },
    computed: {
        badgeClass () {
            let classobj = ''
            if (this.type) {
                classobj += this.name + this.type
            }
            if (this.size) {
                classobj += ' ' + this.name + this.size
            }
            return classobj
        },
        badgeStyle () {
            if (this.color) {
                return {backgroundColor: this.color}
            }
        }

    }
}
</script>


<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.@{name}badge{
    display: inline-block;
   
    .font-dpr(12px);
   
    padding: 0 12/@rem;
    height: 32/@rem;
    line-height: 34/@rem;
    border-radius:100/@rem;
    color: #fff;
    background-color: @color-danger;
    &.mui-badge--dot{
        width: 14/@rem;
        height:  14/@rem;
        padding: 0;
        position: absolute;
        right: -10/@rem;
        top:-7/@rem;
        z-index:999;
    }
}
// background
.@{name}badge--primary{
    background-color: @color-primary;
}
.@{name}badge--danger{
    background-color: @color-danger;
}
.@{name}badge--warning{
    background-color: @color-warning;
}
.@{name}badge--success{
    background-color: @color-success;
}

.@{name}badge--normal{
   
}
</style>