<template>
    <mui-page>
        <mui-header mode='light' fixed title="Tabbar 底部导航">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
                <div class="sub-title">
                    app选项卡
                </div>
            </mui-wing-blank>
            <div class="tabbar-container">
                <div class="tabbar-container-item" v-show="config.selectedIndex===index" v-for="(nav,index) in config.tabbarItem" :key="index">
                    <p>{{nav.title}}内容</p>
                    <p style="color:#41b883" @click="visible">点击显示隐藏tabbar</p>
                    <p style="color:#1e1e1e" @click='changeColor'>点击改变tabbar颜色</p>
                </div>
            </div>
            <mui-tabbar :hidden="config.hidden">
                <mui-tabbar-item 
                    v-for="(item,index) in config.tabbarItem" 
                    :key="index" 
                    :index="index"
                    :title="item.title" 
                    :icon="item.icon" 
                    :selectedIcon="item.selectedIcon" 
                    :selected="config.selectedIndex===index" 
                    :tintColor="config.tintColor" 
                    :unselectedTintColor="config.unselectedTintColor"
                    :dot="item.dot"
                    :badge="item.badge"
                    v-on:onPress="selectedTabbar" 
                >
                </mui-tabbar-item>
            </mui-tabbar>
            <mui-white-space></mui-white-space>
            
           
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'tabbar',
    mixins: [back],
    data () {
        return {
            config: {
                selectedIndex: 0,
                tintColor: '#41b883',
                unselectedTintColor: '#888',
                hidden: false,
                tabbarItem: [
                    {
                        title: '首页',
                        icon: 'staro',
                        selectedIcon: 'star',
                        to: 'Main',
                        badge: '1'
                    },
                    {
                        title: '组件',
                        icon: 'appstoreo',
                        selectedIcon: 'appstore',
                        to: 'List',
                        dot: true
                    },
                    {
                        title: '拍照',
                        icon: 'camerao',
                        selectedIcon: 'camera',
                        to: 'List',
                        badge: 'new'
                    },
                    {
                        title: '定位',
                        icon: 'enviromento',
                        selectedIcon: 'enviroment',
                        to: 'List'
                    }
                ]
            }

        }
    },
    methods: {
        selectedTabbar (e) {
            this.config.selectedIndex = e.index
            this.$Toast({
                msg: '点击了- ' + e.index,
                position: 'middle'
            })
        },

        visible () {
            this.config.hidden = !this.config.hidden
        },
        changeColor () {
            let colors = ['#e74c3c', '#3498db', '#9b59b6', '#34495e', '#9a89b9', '#78c06e', '#38a0ff', '#f7b55e', '#00c6ff']
            this.config.tintColor = colors[parseInt(Math.random() * 10)]
        }
    }
}
</script>

<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
    .tabbar-container{
        position: absolute;
        left: 0;
        right:0;
        bottom:0;
        padding-bottom:88/@rem;
        top:200/@rem;
        background: #f8f8f8;
        .tabbar-container-item{
            line-height:2rem;
            text-align: center;
        }
    }
</style>
