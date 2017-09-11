<template>
	<mui-page class="main">
		<mui-page-container>
			<mui-flex class="main-logo" direction="column" align="center">
					<img class="logo" src="../assets/logo.png" alt="">
					<p class="title-en">Vue+Mui Mobile</p>
					<p class="title-zh">vue移动端组件库</p>
			</mui-flex>
			<mui-white-space size="xl"></mui-white-space>
			<mui-wing-blank size="lg">
				<mui-cell  title="Mui Example" icon='appstoreo' :to="{name:'List'}"></mui-cell>
				<mui-white-space size="lg"></mui-white-space>
				<mui-cell  title="Github" icon='github' to="https://github.com/MrMoveon/mui/tree/dev2.0"></mui-cell>
			</mui-wing-blank>
		
		</mui-page-container>
	</mui-page>
</template>

<script>

export default {
    name: 'main'
}
</script>
<style lang="less">
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';
.main{
	background: #f5f5f9;
}
.main-logo{
	margin-bottom:60/@rem;
	.logo{
		width: 168/@rem;
		height:168/@rem;
		margin-top: 90/@rem;
	}
	.title-en{
		.font-dpr(18px);
	}
	.title-zh{
		.font-dpr(12px);
	}
}
.top-title{
	.font-dpr(18px);
}
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