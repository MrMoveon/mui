<template>
    <div class="mui-white-space" :class="'mui-white-space-'+size" :style="{background:color}">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @description 上下留白 组件
 * @param {String} [size]  - 上下留白的间距，可选xs,sm,md,lg,xl
 */
export default {
    name: 'mui-white-space',
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
.mui-white-space{
    &.mui-white-space-xl{
       height: 30/@rem;
    }
     &.mui-white-space-lg{
       height: 20/@rem;
    }
    &.mui-white-space-md{
        height: 15/@rem;
    }
    &.mui-white-space-sm{
        height: 10/@rem;
    }
     &.mui-white-space-xs{
        height: 5/@rem;
    }
}
</style>
