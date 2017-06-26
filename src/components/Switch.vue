<template>
  <div class="m-switch">
    <label>
      <input type="checkbox" class="m-switch-input" v-model="checked">
      <div class="m-switch-handle"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  data () {
    return {
      checked:false
    }
  }
}
</script>


<style lang='less'>
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';
.m-switch{
 
  &-input{
  //  display: none;
  }
  &-handle{
     position: relative;
     width: 60px;
     height: 30px;
     .border-radius(30px);
     
     &:after{
       content: '';
       position: absolute;
       left: 0;
       right: 0;
       top:0;
       bottom:0;
       background: #fff;
       border: 1px solid @color-split;
       .border-radius(30px);
     }
  }
}
</style>
