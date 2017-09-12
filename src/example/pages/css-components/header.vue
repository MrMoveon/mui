<template>
    <mui-page>
        <mui-header mode='light' fixed title="Header 导航">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>


            <mui-wing-blank><div class="sub-title">基本</div></mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-header title="标题太长太长太长太长太长太长太长太长太长太长">
                <mui-button icon="arrowleft" slot="left"></mui-button>
                <mui-button icon="hearto" slot="right"></mui-button>
            </mui-header>


            <mui-wing-blank><div class="sub-title">mode-light</div></mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-header  mode='light' title="页面标题">
                <mui-button icon="caidan" slot="left"></mui-button>
                <mui-button  slot="right">完成</mui-button>
            </mui-header>


            <mui-wing-blank><div class="sub-title">多图标</div></mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-header title="标题">
                <mui-button icon="arrowleft" slot="left"></mui-button>
                
                <template slot="right">
                    <mui-button icon="hearto"></mui-button>
                    <mui-button icon="more_light"></mui-button>
                </template>
            </mui-header>


            <mui-wing-blank><div class="sub-title">中间segment</div></mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-header  mode='light' segment>
                <mui-button icon="arrowleft" slot="left">返回</mui-button>
                <mui-segment slot="middle" :values="segment" :selectedIndex.sync="selectedIndex" v-on:onChange="onChange" tintColor="#f00"></mui-segment>
            </mui-header>

            
            <mui-header  segment>
                <mui-button icon="arrowleft" slot="left">返回</mui-button>
                <mui-segment slot="middle" :values="segment" :selectedIndex.sync="selectedIndex" v-on:onChange="onChange" tintColor="#0271bc"></mui-segment>
            </mui-header>

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
            segment: [
                '分类01',
                '分类02'
            ],
            selectedIndex: 1
        }
    },
    methods: {
        onChange (e) {
            console.log(e.index + '--' + e.value)
        }
    }
}
</script>

<style>

</style>
