<template>
    <mui-page>
        <mui-header mode='light' fixed title="Indicator 指示器">
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
                <mui-button size="large" @click="type01">显示(默认加载)</mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="type02">显示(ellipsis加载)</mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="type03">显示(带文字加载)</mui-button>
            </mui-wing-blank >
            
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
import Indicator from '@/components/indicator'
export default {
    name: 'indicator',
    mixins: [back],
    methods: {
        type01 () {
            Indicator.open()
            setTimeout(() => {
                console.log(Indicator)
                Indicator.close()
            }, 1000)
        },
        type02 () {
            Indicator.open({
                spinnerType: 'ellipsis'
            })
            setTimeout(() => {
                Indicator.close()
            }, 1000)
        },
        type03 () {
            Indicator.open('加载中...')
            setTimeout(() => {
                Indicator.close()
            }, 1000)
        }
    }
}
</script>

<style>

</style>
