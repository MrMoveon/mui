<template>
  <div class="mui-checklist-wrap">
    <div class="mui-checklist" :class="{'is-disabled':item.disabled}" v-for="(item,index) in options" :key='index' @click="onChange">
      <label :class="{'is-right':direction=='right'}">
        <input type="checkbox" v-model="currentValue" :value="item.value" :disabled="item.disabled">
        <div class="mui-checkbox-handle"></div>
        <span class="mui-checklist-label">{{item.label}}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
    name: 'mui-checklist',
    data () {
        return {
            currentValue: this.value
        }
    },
    props: {
        options: {
            type: Array,
            required: true
        },
        direction: String,
        value: Array
    },
    watch: {
    // 监测currentValue的值，改变触发一个更新事件
        currentValue (val) {
            this.$emit('update:value', val)
        }
    },
    methods: {
        onChange () {
            this.$emit('on-change', this.currentValue)
        }
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
@height: 88/@rem;

.@{name}checklist {
  position: relative;
  height: 88/@rem;
  padding: 0 30/@rem;
  background:#fff;
  .sideline(bottom,#eee);
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 88/@rem;
    .font-dpr(14px);
   
    &.is-right {
      flex-direction: row-reverse;
      justify-content: space-between;
      .@{name}checklist-label {
        padding-left: 0px;
      }
    }
  }
  input[type='checkbox'] {
    display: none;
    &:checked+.@{name}checkbox-handle:after {
      content: '\e730';
      color: @color-blue;
      text-align: center;
     
      
    }
  }
  .@{name}checkbox-handle {
    position: relative;
    &:after {
      content: '\e72f';
      color: #ccc;
      box-sizing: border-box;
      vertical-align: top;
      .font-dpr(20px);
      .cusfont();
    }
  }
  .@{name}checklist-label {
    padding-left: 10/@rem;
  }
  &.is-disabled {
    input[type='checkbox'] {
      &:checked+.@{name}checkbox-handle:after {
        opacity: 0.5;
      }
      &+.@{name}checkbox-handle:after {
        opacity: 0.5;
      }
    }
  }
}
</style>