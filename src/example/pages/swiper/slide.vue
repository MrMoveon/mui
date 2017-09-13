<template>
    <mui-page>
        <mui-header mode='light' fixed title="slide 幻灯">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-slide name="silde01">
                <mui-slide-item v-for="(item,index) in slideData" :key='index' :item='item'></mui-slide-item>
            </mui-slide>
            <mui-wing-blank>
				<div class="sub-title">
					循环，自动播放
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-slide  name="silde02" :autoPlay='3000' :loop="true">
                <mui-slide-item v-for="(item,index) in slideData" :key='index' :item='item'></mui-slide-item>
            </mui-slide>
            <mui-wing-blank>
				<div class="sub-title">
					隐藏dot
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-slide  name="silde03" :showDot="false">
                <mui-slide-item v-for="(item,index) in slideData" :key='index' :item='item'></mui-slide-item>
            </mui-slide>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'slide',
    mixins: [back],
    data () {
        return {
            slideData: [
                {
                    picUrl: 'http://szimg.mukewang.com/59af72390001c84609000300.jpg',
                    linkUrl: ''
                },
                {
                    picUrl: 'http://szimg.mukewang.com/59b8cb2b000150e307500250.jpg',
                    linkUrl: ''
                },
                {
                    picUrl: 'http://szimg.mukewang.com/59ad400200011c7d07500250.jpg',
                    linkUrl: ''
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
