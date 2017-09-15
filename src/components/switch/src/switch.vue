<template>
  <div class="mui-switch" :class="'mui-switch--'+color" @click.prevent="onChange">
    <label>
      <input type="checkbox" class="mui-switch-input" v-model="value" >
      <div class="mui-switch-handle" :style="{opacity:disabled?0.5:1}"></div>
    </label>
    <span class="mui-switch-label"><slot></slot></span>
  </div>
</template>

<script>
/**
 * mui-switch
 * @desc 开关按钮
 * @param {Boolean} value - 传递的值
 * @param {Boolean} disabled - 是否禁用
 * @param {string} color - 可选颜色，如 `blue`,`org`,`red`,`green`
 * @example
 * <mui-switch :value.sync='isChecked2' color="org">开关 {{isChecked2}}</mui-switch>
 *
 */
export default {
    name: 'mui-switch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        color: String
    },
    methods: {
        onChange (e) {
            if (this.disabled) return
            this.$emit('on-change', e)
            this.$emit('update:value', !this.value)
        }
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.@{name}switch{
  display: flex;
  flex-direction: row;
  align-items:center;
  label{
    display: inline-block;
    width: 100/@rem;
    height: 60/@rem;
  }
  .@{name}switch-input{
   display: none;
   opacity: 0;
    &:checked + .@{name}switch-handle{
      &:after{
         background: @color-primary;
      }
      &:before{
        transform: translate3d(40/@rem,0,0);
      }
    }
  }
  &.@{name}switch--blue{
     .mui-switch-input:checked + .mui-switch-handle:after{
        background:@color-blue;
     }
  }
   &.@{name}switch--red{
     .mui-switch-input:checked + .mui-switch-handle:after{
        background:@color-red;
     }
  }
   &.@{name}switch--org{
     .mui-switch-input:checked + .mui-switch-handle:after{
        background:@color-org;
     }
  }
   &.@{name}switch--green{
     .mui-switch-input:checked + .mui-switch-handle:after{
        background:@color-green;
     }
  }
  .@{name}switch-handle{
     position: relative;
     width: 100/@rem;
     height: 60/@rem;
     border-radius:60/@rem;
     
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
        border-radius:60/@rem;
      
     }
     &:before{
       content: '';
       position: absolute;
       left: 2px;
       top:0;
       bottom:0;
       z-index: 2;
       width: 56/@rem;
       height: 56/@rem;
       background: #fff;
       box-shadow:2px 2px 3px rgba(0,0,0,0.2);
       transition: all .3s;
        border-radius:60/@rem;
       
     }
  }
  .@{name}switch-label{
    display: inline-block;
    padding-left: 10/@rem;
  }
}
</style>