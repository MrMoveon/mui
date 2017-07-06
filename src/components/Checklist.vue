<template>
<div class="m-checklist-wrap">
  <div class="m-checklist" :class="{'is-disabled':item.disabled}" v-for="(item,index) in options" :key='index'  @click="$emit('change',currentValue)">
    <label>
      <input type="checkbox" v-model="currentValue" :value="item.value" :disabled="item.disabled">
      <div class="m-checkbox-handle"></div>
      <span class="m-checklist-label">{{item.label}}</span>
    </label>
  </div>
</div>  
</template>

<script>
export default {
  name: 'Checklist',
  data () {
    return {
     currentValue:this.value
    }
  },
  props:{
     options:{
        type:Array,
        required: true
      },
      value:Array
  },

  watch:{
    // 监测currentValue的值，改变触发一个更新事件
     currentValue(val) {
      this.$emit('update:value',val)
      }
    }

}
</script>


<style lang='less'>
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';
.@{name}checklist{
  height: 44px;
  label{
    display: flex;
    flex-direction: row;
    height: 44px;
    align-items: center;
  }
  input[type='checkbox']{
    display: none;
    &:checked + .@{name}checkbox-handle:after{
      content:'\e72b';
      border-color:@color-blue;
      background-color: @color-blue;
      color: #fff;
      line-height: 20px;
      text-align: center;
      .cusfont();
    }
  }
  .@{name}checkbox-handle{
    position: relative;
    width: 20px;
    height: 20px;
    &:after{
      content:'';
      position: absolute;
      left:0;
      top:0;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border:1px solid @color-text-gray-light;
      border-radius:50%;
      transition:all .2s;
    }
  }
  .@{name}checklist-label{
    padding-left: 10px;
  }
  &.is-disabled{
     input[type='checkbox']{
      &:checked + .@{name}checkbox-handle:after{
        border-color: @color-text-gray-light;
        background-color: @color-text-gray-light;
      }
      & + .@{name}checkbox-handle:after{
        border-color: @color-text-gray-light;
        background-color: @color-text-gray-light;
      }
    }
  }
}
</style>
