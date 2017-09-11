<template>
  <div class="mui-flex" :class="classObj">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'mui-flex',
    props: {
        direction: {
            type: String,
            default: ''
        },
        wrap: {
            type: String,
            default: ''
        },
        justify: {
            type: String,
            default: ''
        },
        align: {
            type: String,
            default: ''
        },
        alignContent: {
            type: String,
            default: ''
        }
    },
    computed: {
        classObj () {
            let prefix = 'mui-flex-'
            let className = ' '
            if (this.direction) {
                className += ' ' + prefix + this.direction
            }
            if (this.wrap) {
                className += ' ' + prefix + this.wrap
            }
            if (this.justify) {
                className += ' ' + prefix + 'justify-' + this.justify
            }
            if (this.align) {
                className += ' ' + prefix + 'align-' + this.align
            }
            if (this.alignContent) {
                className += ' ' + prefix + 'alignContent' + this.alignContent
            }
            return className
        }
    }

}
</script>

<style lang="less">
.mui-flex{
    display: flex;
    flex-direction: row;
    // 方向
    &-row{
        flex-direction: row;
    }
    &-row-reverse{
        flex-direction: row-reverse;
    }
    &-column{
         flex-direction:column;
    }
    &-column-reverse{
         flex-direction:column-reverse;
    }
    // 子元素的换行方式
    &-wrap{
        flex-wrap: wrap;
    }
    &-nowrap{
        flex-wrap: nowrap;
    }
    &-wrap-reverse{
        flex-wrap: wrap-reverse;
    }
    //子元素在主轴上的对齐方式
    &-justify-start{
        justify-content: flex-start;
    }
    &-justify-center{
        justify-content:center;
    }
    &-justify-end{
        justify-content: flex-end;
    }
    &-justify-around{
        justify-content: space-around;
    }
    &-justify-between{
        justify-content: space-between;
    }
    //子元素在交叉轴上的对齐方式
    &-align-start{
        align-items: flex-start;
    }
    &-align-center{
        align-items: center;
    }
    &-align-end{
        align-items: flex-end;
    }
    &-align-baseline{
        align-items: baseline;
    }
    &-align-stretch{
        align-items: stretch;
    }
    //有多根轴线时的对齐方式
    &-alignContent-start{
        align-content: flex-start;
    }
    &-alignContent-center{
        align-content: center;
    }
    &-alignContent-end{
        align-content: flex-end;
    }
    &-alignContent-stretch{
        align-content: stretch;
    }
    &-alignContent-between{
        align-content:space-between;
    }
    &-alignContent-around{
        align-content:space-around;
    }
}
</style>
