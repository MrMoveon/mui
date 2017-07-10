<template>
  <div id="app" class="page-group">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
   watch: {
      '$route':function(to, from) {
          var toDepth = to.path.split('/').length
          var fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
      
   }
}
</script>

<style lang='less'>
#app{
  &:after{
    content: '';
    position: fixed;
    left: 0;
    right:0;
    height: 44px;
    top: 0;
    z-index:-1;

    background:#0894ec;
  }
}
</style>

