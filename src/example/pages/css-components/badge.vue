<template>
    <mui-page>
        <mui-header mode='light' fixed title="Spinner 加载器">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					小号
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                    <mui-badge type="primary" size="small">1</mui-badge>
                    <mui-badge type="danger" size="small">12</mui-badge>
                    <mui-badge type="warning" size="small">13</mui-badge>
                    <mui-badge type="success" size="small">14</mui-badge>
            </mui-wing-blank >
            <mui-wing-blank>
				<div class="sub-title">
					正常
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-badge type="primary" size="normal">1</mui-badge>
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
                <mui-badge>1</mui-badge>
                <mui-badge color="#666" size="small">自定义颜色</mui-badge>
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
