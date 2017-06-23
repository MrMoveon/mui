<template>
<div class="m-dialog">
    <div class="m-dialog-wrap">
        <div class="m-dialog-inner">
            <div class="m-dialog-title">提示</div>
            <div class="m-dialog-text">欢迎使用mui框架</div>
        </div>
        <div class="m-dialog-buttons">
            <span class="m-dialog-button">取消</span>
            <span class="m-dialog-button">确定</span>
        </div>
    </div>    
    <div class="m-dialog-mask"></div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.m-dialog{
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    z-index: 9999;
    &-wrap{
        width: 270px;
        background: #fff;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        border-radius:12px;
    }
    &-inner{
       padding: 15px;
    }
    &-title{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
    }
    &-text{
        text-align: center;
        font-size: 14px;
        padding-top:10px;
    }
    &-buttons{
        position: relative;
        display: flex;
        text-align: center;
        height: 44px;
        .hairline(top,#eee);
        .m-dialog-button{
            position: relative;
            flex: 1;
            line-height: 44px;
            color: @color-primary;
            .hairline(right,#eee);
            &:last-child{
                .hairline-remove(right);
            }
        }
    }
    &-mask{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
    }
}
</style>
