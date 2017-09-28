<template>
    <mui-page>
        <mui-header mode='light' fixed title="Spinner 加载器">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
          
            
            <mui-wing-blank>
				<div class="sub-title">
					正常
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-cell title="Dot Badge" value="20"></mui-cell>
            <mui-cell title="Dot Badge"><mui-badge slot="extra" type="danger" size="normal">12</mui-badge></mui-cell>
            <mui-cell>
                <template slot="title">
                    <span class="title">上新啦</span>
                    <mui-badge slot="extra" type="danger" size="normal">new</mui-badge>
                </template>
            </mui-cell>
            <mui-cell>
                <template slot="title">
                    <span class="title">上新啦</span>
                    <mui-badge slot="extra" type="dot" size="normal"></mui-badge>
                </template>
            </mui-cell>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-badge type="danger" size="normal">12</mui-badge>
                <mui-badge type="warning" size="normal">13</mui-badge>
                <mui-badge type="success" size="normal">14</mui-badge>
            </mui-wing-blank >
            <mui-wing-blank>
				<div class="sub-title">
					自定义颜色
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-badge  color="#f00">1</mui-badge>
                <mui-badge color="#ccc" size="normal">自定义颜色</mui-badge>
            </mui-wing-blank >
            
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'button',
    mixins: [back]
}
</script>

<style>

</style>
