<template>
    <mui-page>
        <mui-header mode='light' fixed title="Tabbar 底部导航">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
                <div class="sub-title">
                    light
                </div>
            </mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-tabbar tintColor="#41b883" unselectedTintColor="#888" :selected.sync="selectedIndex" :tabbar="tabbar" style="position:relative"></mui-tabbar>
            <mui-white-space></mui-white-space>
            <mui-wing-blank>
                <div class="sub-title">
                    夜间模式
                </div>
            </mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-tabbar barTintColor="#222" tintColor="#fff" unselectedTintColor="#888" :selected.sync="selectedIndex" :tabbar="tabbar" style="position:relative"></mui-tabbar>
            <mui-white-space></mui-white-space>
            <mui-wing-blank>
                <div class="sub-title">
                    自定义颜色
                </div>
            </mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-tabbar barTintColor="#fff" tintColor="#1e1e1e" unselectedTintColor="#888" :selected.sync="selectedIndex" :tabbar="tabbar" style="position:relative"></mui-tabbar>
             <mui-white-space></mui-white-space>
            <mui-wing-blank>
                <div class="sub-title">
                    点击事件
                </div>
            </mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-tabbar barTintColor="#fff" tintColor="#0271bc" unselectedTintColor="#888" :selected.sync="selectedIndex" :tabbar="tabbar" v-on:onChange="go" style="position:relative"></mui-tabbar>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'header',
    mixins: [back],
    data () {
        return {
            selectedIndex: 0,
            tabbar: [
                {
                    title: '首页',
                    icon: 'staro',
                    selectedIcon: 'star',
                    to: 'Main'
                },
                {
                    title: '组件',
                    icon: 'appstoreo',
                    selectedIcon: 'appstore',
                    to: 'List'
                },
                {
                    title: '拍照',
                    icon: 'camerao',
                    selectedIcon: 'camera',
                    to: 'List'
                },
                {
                    title: '拍照',
                    icon: 'enviromento',
                    selectedIcon: 'enviroment',
                    to: 'List'
                }
            ]
        }
    },
    methods: {
        go (index) {
            this.$Toast({
                msg: '点击了- ' + index,
                position: 'bottom'
            })
        }
    }
}
</script>

<style>

</style>
