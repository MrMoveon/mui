<template>
    <mui-page>
        <mui-header mode='light' fixed title="Progress 进度条">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-progress :percent.sync='percent' position></mui-progress>
               <mui-progress :percent.sync='percent'></mui-progress>
               <mui-white-space size='md'></mui-white-space>
               <mui-button @click="add">+10</mui-button>
            </mui-wing-blank >
            <mui-wing-blank>
				<div class="sub-title">
					无背景色
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
               <mui-progress :percent.sync='percent' :unfilled='false'></mui-progress>
            </mui-wing-blank >
            <mui-wing-blank>
				<div class="sub-title">
					圆环进度条
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
               <mui-progress type="circle" :percent.sync='cPercent' :unfilled='false' cw='2rem'></mui-progress>
               <mui-white-space size='md'></mui-white-space>
               <mui-button @click="circlePercent">加载</mui-button>
            </mui-wing-blank >
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'progress',
    mixins: [back],
    data () {
        return {
            percent: 10,
            cPercent: 0
        }
    },
    methods: {
        add () {
            if (this.percent >= 100) {
                this.percent = 0
            } else {
                this.percent += 10
            }
        },
        circlePercent () {
            this.timer = setInterval(() => {
                this.cPercent += 1
                if (this.cPercent >= 100) {
                    this.cPercent = 100
                    clearInterval(this.timer)
                }
            }, 10)
        }
    }
}
</script>

<style>

</style>
