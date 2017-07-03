<template>
<div class="m-checklist-wrap">
  <div class="m-checklist" v-for="(item,index) in options" :key='index'>
    <label>
      <input type="checkbox" v-model="options.item" :value="item.value" @click="$emit('update:value',item.value)">
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
     
    }
  },
  props:{
     options:{
        type:Array,
        default:function(){
          return []
        }
      }
  },
  mounted(){
    console.log(this.options)
  }
}
</script>


<style lang='less'>
@import '../assets/less/variables.less';
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
      border-color:@color-blue;
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
    }
  }
  .@{name}checklist-label{
    padding-left: 10px;
  }
}
</style>
