<template>
	<mui-page>
		<mui-header mode='light' fixed title="flex布局">
			<mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
		</mui-header>
		<mui-page-container>
			<mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
			<mui-white-space size='xl'></mui-white-space>
			<mui-wing-blank size="lg">
				<mui-flex>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">1</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">2</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">3</div>
					</mui-flex-item>
				</mui-flex>
			</mui-wing-blank>
			<mui-white-space size='md'></mui-white-space>
			<mui-wing-blank size="lg">
				<mui-flex>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">1</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">2</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">3</div>
					</mui-flex-item>
				</mui-flex>
			</mui-wing-blank>
			<mui-white-space size='lg'></mui-white-space>
			<mui-wing-blank size="lg">
				<mui-flex>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">1</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">2</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">3</div>
					</mui-flex-item>
				</mui-flex>
			</mui-wing-blank>
			<mui-white-space size='sm'></mui-white-space>
			<mui-wing-blank size="lg">
				<mui-flex>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">1</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">2</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">3</div>
					</mui-flex-item>
				</mui-flex>
			</mui-wing-blank>
			<mui-white-space size='xs'></mui-white-space>
			<mui-wing-blank size="lg">
				<mui-flex>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">1</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">2</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">3</div>
					</mui-flex-item>
				</mui-flex>
			</mui-wing-blank>
		</mui-page-container>
	</mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'white-space',
    mixins: [back]
}
</script>
<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
	.inline{
		background:#eee;
		color:#bbb;
		text-align:center;
		line-height:0.6rem;
		width:120/@rem;
		margin:15/@rem 30/@rem 15/@rem 0;
		.font-dpr(12px);
	
	}
</style>