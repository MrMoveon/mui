<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="less">
@import './assets/less/variables.less';
@import './assets/less/mixins.less';
#app {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%,0,0);
    z-index: 1000;
    .page-width;
    overflow: hidden;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
</style>
