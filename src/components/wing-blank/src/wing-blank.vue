<template>
    <div class="mui-wing-blank" :class="'mui-wing-blank-'+size" :style="{background:color}">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @description 两翼留白 组件
 * @param {String} [size]  - 尺寸，接受 lg , md , sm
 */
export default {
    name: 'mui-wing-blank',
    props: {
        size: {
            type: String,
            default: 'lg'
        },
        color: {
            type: String,
            default: ''
        }
    }

}
</script>

<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-wing-blank{
    &.mui-wing-blank-lg{
        padding-left:30/@rem;
        padding-right:30/@rem;
    }
     &.mui-wing-blank-md{
        padding-left:20/@rem;
        padding-right:20/@rem;
    }
     &.mui-wing-blank-sm{
        padding-left:10/@rem;
        padding-right:10/@rem;
    }
}
</style>
