<template>
<div class="mui-header" :class="[{'is-fixed':fixed},headerMode]">
	<div class="mui-header-left">
		<slot name="left"></slot>
	</div>
	<div class="mui-header-right">
		<slot name="right"></slot>
	</div>
	<div class="mui-header-title">
		<span v-if="!segment">{{title}}</span>
		<slot v-else name="middle"></slot>
	</div>
</div>
</template>

<script>
/**
 * mui-header
 * @desc 顶部导航
 * @param {(type|number)} [mode=dark] - 显示颜色，可选 `dark`,`light`
 * @param {string} size - 尺寸，可选 `noraml`,`large`
 * @param {string} title - 标题
 * @param {Boolean} fixed - 是否浮动到顶部
 * @param {Boolean} segment - title区中间tab按钮
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 * @param {slot} [middle] - 显示在中间区域的tab内容
 * @example
 *

 *       <mui-header style="margin-top:10px;" tabs mode="white">
 *           <router-link to='List' slot="left" tag="span">
 *               <i class="iconfont">&#xe72a;</i>
 *               <span class="mui-header-left-text">返回</span>
 *           </router-link>
 *           <div class="mui-header-tabs-title" slot="middle">
 *               <span class="mui-header-tabs-title-item is-active">类别1</span>
 *               <span class="mui-header-tabs-title-item">类别2</span>
 *           </div>
 *           <div slot="right">
 *               <i class="iconfont">&#xe708;</i>
 *               <i class="iconfont">&#xe732;</i>
 *           </div>
 *       </mui-header>

 */
export default {
    name: 'mui-header',
    props: {
        title: {
            type: String,
            default: ''
        },
        mode: {
            type: String,
            default: 'dark'
        },
        fixed: {
            type: Boolean,
            default: false
        },
        segment: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            name: 'mui-header--'
        }
    },
    computed: {
        headerMode () {
            return this.name + this.mode
        }
    }
}
</script>


<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
@header-height:88/@rem;
.@{name}header{
    position: relative;
    height:@header-height;
    overflow: hidden;
    color: #fff;
    // padding:0 10/@rem;
    .page-width;
    .sideline(bottom,@color-split);
   .mui-button{
       background: transparent;
       border: none;
       &:not(.is-disabled):active{
             background: transparent;
             border: none;
        }
    } 
   &.is-fixed{
       position: fixed;
       left: 0;
       right: 0;
       top: 0;
       z-index: 9;
   }
   &--dark{
        background-color:@color-primary;
        .mui-button{
            color:#fff;
        }
   }
  
   &--light{
    background-color:#fff;
    color: @color-text;
    .mui-button{
       
        color: @color-text;
        }
   }
   .mui-button{
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        }
  
}
.@{name}header-title{
    position: absolute;
    left: 160/@rem;
    right: 160/@rem;
    top: 0;
    text-align: center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    padding:0 10px;
    height: @header-height;
    line-height: @header-height;
    .font-dpr(16px);
}
.@{name}header-left,.@{name}header-right{
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 160/@rem;
    height:@header-height;
    font-size: 0;
    
    .icon-img{
        width: 80/@rem;
        height:80/@rem;
        &:active{
            opacity: 0.5;
        }
    }
    .flex{
         display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
   
    a,span,i{
        .font-dpr(14px);
        &:active{
            opacity: 0.5;
        }
    }
    .mui-button .iconfont,.iconfont{
        .font-dpr(18px);
        margin-right: 5/@rem;
        line-height:1.15;
    }
    .text{
        //display: block;
       // height: 100%;
       line-height:1.15;
    }
    .mui-button .text{
        margin-top:3/@rem;
        padding-left: 2/@rem;
    }
    &-text{
        display: inline-block;
        line-height: @header-height;
    }
   
}
.@{name}header-right{
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
   
    height:@header-height;
    .icon-img{
        width: 80/@rem;
        height:80/@rem;
        &:active{
            opacity: 0.5;
        }
    }
    a,span{
        .font-dpr(14px);
        &:active{
            opacity: 0.5;
        }
    }
   .mui-button .iconfont,.iconfont{
        .font-dpr(18px);
       // margin-right: 20/@rem;
    }
    .mui-button{
        padding: 6/@rem 12/@rem 6/@rem 6/@rem;
    }
}

</style>
