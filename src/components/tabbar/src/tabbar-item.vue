<template>
   <div class="mui-tabbar-item" @click="onPress" :style="{'color':selected?tintColor:unselectedTintColor}">
          <span class="iconfont" :class="'icon-'+tIcon"></span>
          <span class="title">{{title}}</span>
          <mui-badge type="dot" v-if="dot"></mui-badge>
              <mui-badge type="danger" size="normal" v-if="!dot && badge" class="is-fixed">{{badge}}</mui-badge>
      </div>
</template>

<script>
/**
 * @description app底部导航栏 导航item
 * @param {Number} [index] - 当前导航索引  必填
 * @param {String} [title] - 导航标题  必填
 * @param {String} [icon] - 导航图标  必填
 * @param {String} [selectedIcon] - 导航选中图标  必填
 * @param {Boolean} [selected] - 选中导航栏
 * @param {String} [tintColor] - 导航选中的颜色
 * @param {String} [unselectedTintColor] - 导航未选中的颜色
 * @param {Boolean} [dot] - 小圆点
 * @param {String} [badge] - 徽章
 */
export default {
    name: 'mui-tabbar-item',
    props: {
        index: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        selectedIcon: {
            type: String,
            default: ''
        },
        selected: {
            type: Boolean,
            default: false
        },
        tintColor: {
            type: String,
            default: ''
        },
        unselectedTintColor: {
            type: String,
            default: ''
        },
        dot: {
            type: Boolean,
            default: false
        },
        badge: {
            type: String,
            default: ''
        }
    },
    computed: {
        tIcon () {
            let icon = ''
            icon = this.selected ? this.selectedIcon : this.icon
            return icon
        }
    },
    methods: {
        onPress (e) {
            var obj = {
                e: e,
                index: this.index
            }
            this.$emit('onPress', obj)
        }
    }
}
</script>

<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-tabbar-item{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align: center;
    .iconfont{
        position: relative;
        .font-dpr(20px);
    }
    .mui-badge.is-fixed{
        position: absolute;
        right: 0;
        transform: translateX(80%);
        top:0;
        .font-dpr(12px);
    }
    .mui-badge.mui-badge--dot{
        top:5/@rem;
    }
}
</style>
