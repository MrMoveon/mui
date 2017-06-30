<template>
  <div class="m-switch" :class="'m-switch--'+color" @click.prevent="chek">
    <label>
      <input type="checkbox" class="m-switch-input" v-model="value" >
      <div class="m-switch-handle" :style="{opacity:disabled?0.5:1}"></div>
    </label>
    <span class="m-switch-label"><slot></slot></span>
  </div>
</template>

<script>
/**
 * m-switch
 * @desc 开关按钮
 * @param {Boolean} value - 传递的值
 * @param {Boolean} disabled - 是否禁用
 * @param {string} color - 可选颜色，如 `blue`,`org`,`red`,`green`
 * @example
 * <m-switch :value.sync='isChecked2' color="org">开关 {{isChecked2}}</m-switch>
 * 
 */
export default {
  name: 'Switch',
  props:{
    value:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    color:String
  },
  methods:{
    chek(){
      if(this.disabled) return;
      this.$emit('update:value',!this.value)
    }
  }
}
</script>


<style lang='less'>
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';
.@{name}switch{
  display: flex;
  flex-direction: row;
  align-items:center;
  label{
    display: inline-block;
    width: 50px;
    height: 30px;
  }
  .@{name}switch-input{
   display: none;
   opacity: 0;
    &:checked + .@{name}switch-handle{
      &:after{
         background: @color-primary;
      }
      &:before{
        transform: translate3d(20px,0,0);
      }
    }
  }
  &.@{name}switch--blue{
     .m-switch-input:checked + .m-switch-handle:after{
        background:@color-blue;
     }
  }
   &.@{name}switch--red{
     .m-switch-input:checked + .m-switch-handle:after{
        background:@color-red;
     }
  }
   &.@{name}switch--org{
     .m-switch-input:checked + .m-switch-handle:after{
        background:@color-org;
     }
  }
   &.@{name}switch--green{
     .m-switch-input:checked + .m-switch-handle:after{
        background:@color-green;
     }
  }
  .@{name}switch-handle{
     position: relative;
     width: 50px;
     height: 30px;
     .border-radius(30px);
     
     &:after{
       content: '';
       position: absolute;
       left: 0;
       right: 0;
       top:0;
       bottom:0;
       z-index: 1;
       background: #fff;
       border: 1px solid @color-split;
       transition: all .3s;
       .border-radius(30px);
      
     }
     &:before{
       content: '';
       position: absolute;
       left: 2px;
       top:0;
       bottom:0;
       z-index: 2;
       width: 28px;
       height: 28px;
       background: #fff;
       box-shadow:2px 2px 3px rgba(0,0,0,0.2);
       transition: all .3s;
       .border-radius(30px);
       
     }
  }
  .@{name}switch-label{
    display: inline-block;
    padding-left: 10px;
  }
}
</style>
