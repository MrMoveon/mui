<template>
  <div class="mui-tabbar" :style="{'background':barTintColor}">
      <mui-tabbar-item 
        v-for="(item,index) in tabbar" 
        :key="index" 
        :title="item.title" 
        :icon="item.icon" 
        :selectedIcon="item.selectedIcon" 
        :selected="selected===index" 
        :style="{'color':selected==index?tintColor:unselectedTintColor}"
        @click="selectedTabbar(index)" 
        >
        </mui-tabbar-item>
  </div>
</template>

<script>
export default {
    name: 'mui-tabbar',
    props: {
        tabbar: {
            type: Array
        },
        selected: {
            type: Number,
            default: 0
        },
        barTintColor: {
            type: String,
            default: '#fff'
        },
        tintColor: {
            type: String,
            default: ''
        },
        unselectedTintColor: {
            type: String,
            default: ''
        },
        hidden: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        selectedTabbar (index) {
            this.$emit('update:selected', index)
            this.$emit('onChange', index)
        }
    }
}
</script>

<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-tabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    text-align: center;
    .sideline(top,#f8f8f8);
    z-index: 2;
}
.mui-tabbar-item{
    
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align: center;
    .iconfont{
        .font-dpr(20px);
    }
}
</style>
