<template>
    <mui-page>
        <mui-header title="example" fixed mode='light'>
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-scroll-view class="list-scroll-view" ref="list-scroll-view" name="list-scroll-view" direction="vertical" slidesPerView="auto" :scrollbar="null">
                <mui-scroll-view-item style="height:auto">
                    <div class="catgory-title">
                        布局组件
                    </div>
                    <mui-cell title="Flex布局" :to="{name:'Flex'}"></mui-cell>
                    <mui-cell title="上下留白" :to="{name:'WhiteSpace'}"></mui-cell>
                    <mui-cell title="两翼留白" :to="{name:'wingBlank'}"></mui-cell>
                    <div class="catgory-title">
                        基础组件
                    </div>
                    <mui-cell title="Button 按钮" :to="{name:'Button'}"></mui-cell>
                    <mui-cell title="Badge 徽标" :to="{name:'Badge'}"></mui-cell>
                    <mui-cell title="Cell 列表" :to="{name:'Cell'}"></mui-cell>
                    <mui-cell title="Spinner 加载器" :to="{name:'Spinner'}"></mui-cell>
                    <mui-cell title="Search 搜索" :to="{name:'Search'}"></mui-cell>
                    <mui-cell title="Stepper 步进器" :to="{name:'Stepper'}"></mui-cell>
                   
                    <div class="catgory-title">
                    Navigation组件
                    </div>
                    <mui-cell title="Header 导航" :to="{name:'Header'}"></mui-cell>
                    <mui-cell title="Segment 分段器" :to="{name:'Segment'}"></mui-cell>
                    <mui-cell title="Tabbar 底部导航" :to="{name:'Tabbar'}"></mui-cell>
                    <div class="catgory-title">
                    Swiper组件
                    </div>
                    <mui-cell title="Slide 幻灯片切换" :to="{name:'Slide'}"></mui-cell>
                    <mui-cell title="ScrollView 视图滚动" :to="{name:'Scroll'}"></mui-cell>
                    <mui-cell title="Loadmore 加载更多" :to="{name:'Loadmore'}"></mui-cell>
                   
                    
                   
                    <div class="catgory-title">
                        触摸反馈
                    </div>
                    <mui-cell title="Progress 进度条" :to="{name:'Progress'}"></mui-cell>
                    <mui-cell title="Indicator 指示器" :to="{name:'Indicator'}"></mui-cell>
                    <mui-cell title="Toast 提示" :to="{name:'Toast'}"></mui-cell>
                    <mui-cell title="Dialog 弹出层" :to="{name:'Dialog'}"></mui-cell>
                    <mui-cell title="Popover 气泡" :to="{name:'Popover'}"></mui-cell>
                    <mui-cell title="ActionSheet 动作面板 " :to="{name:'ActionSheet'}"></mui-cell>
                    <mui-cell title="Picker 选择器" :to="{name:'Picker'}"></mui-cell>
                    <mui-cell title="DtPicker 选择器" :to="{name:'DtPicker'}"></mui-cell>
                    <div class="catgory-title">
                        表单组件
                    </div>
                    <mui-cell title="Switch 开关" :to="{name:'Switch'}"></mui-cell>
                    <mui-cell title="CheckList 多选" :to="{name:'CheckList'}"></mui-cell>
                    <mui-cell title="RadioList 多选" :to="{name:'RadioList'}"></mui-cell>
                    <mui-cell title="Field 输入框" :to="{name:'Field'}"></mui-cell>
                </mui-scroll-view-item>
            </mui-scroll-view>
            
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'list',
    mixins: [back],
    data () {
        return {

        }
    }
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
