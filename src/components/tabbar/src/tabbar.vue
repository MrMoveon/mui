<template>
  <div class="mui-tabbar" :style="{'background':barTintColor}" v-show="!hidden">
      <slot></slot>
  </div>
</template>

<script>
/**
 * @description app底部导航栏
 * @param {String} [barTintColor] - 导航栏背景色
 * @param {Boolean} [hidden] - 导航栏显示隐藏
 */
export default {
    name: 'mui-tabbar',
    props: {
        barTintColor: {
            type: String,
            default: '#fff'
        },
        hidden: {
            type: Boolean,
            default: false
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

</style>
