<template>
    <mui-page>
        <mui-header title="example" fixed mode='light'>
            <mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
        </mui-header>
        <mui-page-container>
            <div class="catgory-title">
                布局组件
            </div>
            <mui-cell title="Flex布局" :to="{name:'Flex'}"></mui-cell>
            <mui-cell title="上下留白" :to="{name:'WhiteSpace'}"></mui-cell>
            <mui-cell title="两翼留白" :to="{name:'wingBlank'}"></mui-cell>
            <div class="catgory-title">
                css组件
            </div>
            <mui-cell title="Button 按钮" :to="{name:'Button'}"></mui-cell>
            <mui-cell title="Spinner 加载器" :to="{name:'Spinner'}"></mui-cell>
             <div class="catgory-title">
                js组件
            </div>
            <mui-cell title="Indicator 指示器" :to="{name:'Indicator'}"></mui-cell>
            <mui-cell title="Toast 提示" :to="{name:'Toast'}"></mui-cell>
            <mui-cell title="Dialog 弹出层" :to="{name:'Dialog'}"></mui-cell>
            <div class="catgory-title">
                表单组件
            </div>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'list',
    mixins: [back]
}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.catgory-title {
    padding: 30/@rem;
    background: #f5f5f9;
    .font-dpr(16px);
}
</style>
