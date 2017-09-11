<template>
	<mui-page>
		<mui-header mode='light' fixed title="flex布局"></mui-header>
		<mui-page-container>
			<mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
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
			<mui-white-space size='md'></mui-white-space>
			<mui-wing-blank size="lg">
				<mui-flex>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">1</div>
					</mui-flex-item>
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">2</div>
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
					<mui-flex-item>
						<div style="background:#eee;color:#bbb;text-align:center;line-height:0.6rem;width:100%">4</div>
					</mui-flex-item>
				</mui-flex>
			</mui-wing-blank>
			<mui-wing-blank>
				<div class="sub-title">
					wrap换行
				</div>
			</mui-wing-blank>
			<mui-wing-blank size="lg">
				<mui-flex wrap="wrap">
					<div class="inline">1</div>
					<div class="inline">2</div>
					<div class="inline">3</div>
					<div class="inline">4</div>
					<div class="inline">5</div>
					<div class="inline">6</div>
				</mui-flex>
			</mui-wing-blank>
			<mui-wing-blank>
				<div class="sub-title">
					justify-content轴对齐方式
				</div>
			</mui-wing-blank>
			<mui-wing-blank size="lg">
				<mui-flex justify="center">
					<div class="inline">1</div>
					<div class="inline">2</div>
					<div class="inline">3</div>
				</mui-flex>
				<mui-flex justify="start">
					<div class="inline">1</div>
					<div class="inline">2</div>
					<div class="inline">3</div>
				</mui-flex>
				<mui-flex justify="end">
					<div class="inline">1</div>
					<div class="inline">2</div>
					<div class="inline">3</div>
				</mui-flex>
				<mui-flex justify="betwen">
					<div class="inline">1</div>
					<div class="inline">2</div>
					<div class="inline">3</div>
				</mui-flex>
				<mui-flex justify="around">
					<div class="inline">1</div>
					<div class="inline">2</div>
					<div class="inline">3</div>
				</mui-flex>
			</mui-wing-blank>
		</mui-page-container>
	</mui-page>
</template>

<script>

export default {
    name: 'flex'
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