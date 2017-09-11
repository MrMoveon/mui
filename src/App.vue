<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            transitionName: 'slide-left'
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
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
    
}
</style>
