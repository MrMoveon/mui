<template>
    <div class="mui-wing-blank" :class="'mui-wing-blank-'+size">
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
        }
    }

}
</script>

<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-wing-blank{
    &.mui-wing-blank-lg{
        margin-left:30/@rem;
        margin-right:30/@rem;
    }
     &.mui-wing-blank-md{
        margin-left:20/@rem;
        margin-right:20/@rem;
    }
     &.mui-wing-blank-sm{
        margin-left:10/@rem;
        margin-right:10/@rem;
    }
}
</style>
