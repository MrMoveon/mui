<template>
    <div class="mui-page-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'mui-page-container'
}
</script>

<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
@header-height:88/@rem;
.mui-page-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .page-width;
}
.mui-header.is-fixed ~ .mui-page-container{
    padding-top:@header-height;
}
</style>
