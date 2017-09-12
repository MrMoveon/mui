<template>
<div class="mui-segment" :class="{'is-disabled':disabled}">
    <div  class="mui-segment-item" v-for="(item,index) in values" :key="index" :class="{'active':selectedIndex==index}" :style="selectedIndex==index?'background:'+tintColor+';color:#fff;border-color:'+tintColor+';':'border-color:'+tintColor+';color:'+tintColor"  @click="onChange(index)">
        {{item}}
    </div>
   
</div>
</template>

<script>
/**
 * @description SegmentedControl 分段器 由至少 2 个分段控件组成，用作不同视图的显示
 * @param {Array} [values] - 分段器数组 例如： ['item1','item2']
 * @param {String} [tintColor] - 颜色值
 * @param {Number} [selectedIndex] - 选中的索引
 * @param {Function} [onChange] - 回调函数
 * @example
 * <mui-segment slot="middle" :values="segment" :selectedIndex.sync="selectedIndex" v-on:onChange="onChange"></mui-segment>
 * data:
 *  segment: [
        '分类01',
        '分类02'
    ],
    selectedIndex: 1

    onChange (e) {
            console.log(e.index + '--' + e.value)
        }
 */
export default {
    name: 'mui-segment',
    props: {
        values: Array,
        disabled: {
            type: Boolean,
            default: false
        },
        tintColor: {
            type: String,
            default: '#0894ec'
        },
        selectedIndex: {
            type: Number,
            default: 0
        }
    },
    computed: {
        styles () {
            return
        }
    },
    methods: {
        onChange (index) {
            if (this.disabled) return
            var item = {
                index: index,
                value: this.values[index]
            }
            this.$emit('update:selectedIndex', index)
            this.$emit('onChange', item)
        }
    }
}
</script>


<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
@header-height:88/@rem;
.@{name}segment{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: @header-height;
    font-size: 0;
    text-align: center;
    &.is-disabled{
        opacity: 0.5;
    }
    
    &-item{
        display:inline-block;
        flex:1;
        height: @header-height - 28/@rem;
        line-height: @header-height - 28/@rem;
        background: #fff;
        .font-dpr(15px);
        border-width: 1px;
        border-style:solid;
        border-color:@color-primary;
        margin-left:-1px;
        &:first-of-type{
            border-radius:6/@rem 0 0 6/@rem;
        }
        &:last-of-type{
            border-radius:0 6/@rem 6/@rem 0;
        }
    }
   
}
  
</style>
