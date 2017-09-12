<template>
    <mui-page>
        <mui-header mode='light' fixed title="Segment 分段器">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-segment :values="segment01" :selectedIndex.sync="selectedIndex01"></mui-segment>
            </mui-wing-blank>
            <mui-wing-blank>
				<div class="sub-title">
					tintColor
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-segment :values="segment02" :selectedIndex.sync="selectedIndex02"  tintColor="#f00"></mui-segment>
            </mui-wing-blank>
            <mui-wing-blank>
				<div class="sub-title">
					onChange
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-segment :values="segment03" :selectedIndex.sync="selectedIndex03" v-on:onChange="onChange"></mui-segment>
            </mui-wing-blank>
            <mui-wing-blank>
				<div class="sub-title">
					disabled
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
            <mui-wing-blank size="lg">
               
                <mui-segment :values="segment04" :selectedIndex.sync="selectedIndex04" disabled></mui-segment>
            </mui-wing-blank>
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
            segment01: [
                '分类01',
                '分类02'
            ],
            segment02: [
                '分类01',
                '分类02',
                '分类03'
            ],
            segment03: [
                '分类01',
                '分类02',
                '分类03',
                '分类04'
            ],
            segment04: [
                '分类01',
                '分类02',
                '分类03',
                '分类04'
            ],
            selectedIndex01: 0,
            selectedIndex02: 0,
            selectedIndex03: 0,
            selectedIndex04: 0
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
