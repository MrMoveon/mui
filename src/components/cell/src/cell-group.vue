<template>
   <div class="mui-cell-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'mui-cell-group'
}
</script>
<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-cell-group{
  .mui-list,.mui-media-list,.mui-field{
      &:first-child{
          .sideline(top,#eee);
      }
  }  
  
}
</style>