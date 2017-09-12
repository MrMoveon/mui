<template>
    <mui-page>
        <mui-header mode='light' fixed title="Button 按钮">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					普通按钮
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button>按钮</mui-button>
                <mui-button type="primary">按钮</mui-button>
                <mui-button type="danger">按钮</mui-button>
                <mui-button type="warning">按钮</mui-button>
                <mui-button type="success">按钮</mui-button>
            </mui-wing-blank >
            <mui-wing-blank>
				<div class="sub-title">
					图标按钮
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button type="primary" icon='smileo'> 按钮</mui-button>
                <mui-button type="danger" icon='staro'> 按钮</mui-button>
                <mui-button type="warning" icon='hearto'> 按钮</mui-button>
                <mui-button type="success" icon='like'> 按钮</mui-button>
            </mui-wing-blank >

           <mui-wing-blank>
				<div class="sub-title">
					无底色按钮
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button type="primary" outlined>按钮</mui-button>
                <mui-button type="danger" outlined>按钮</mui-button>
                <mui-button type="warning" outlined>按钮</mui-button>
                <mui-button type="success" outlined>按钮</mui-button>
            </mui-wing-blank >
          
            <mui-wing-blank>
				<div class="sub-title">
					禁用按钮
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button type="primary" disabled>按钮</mui-button>
                <mui-button type="danger" disabled>按钮</mui-button>
                <mui-button type="warning" disabled>按钮</mui-button>
                <mui-button type="success" disabled>按钮</mui-button>
                <mui-button type="primary" outlined disabled>按钮</mui-button>
                <mui-button type="danger" outlined disabled>按钮</mui-button>
            </mui-wing-blank >
            
            <mui-wing-blank>
				<div class="sub-title">
					块级按钮
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button type="primary" size="large">按钮</mui-button>
                <mui-button type="danger" size="large">按钮</mui-button>
                <mui-button type="warning" size="large">按钮</mui-button>
                <mui-button type="success" size="large">按钮</mui-button>
                <mui-button type="success" size="large" disabled>按钮(禁用)</mui-button>
                <mui-button type="primary" size="large" outlined>按钮</mui-button>
                <mui-button type="danger" size="large" outlined>按钮</mui-button>
                <mui-button type="warning" size="large" outlined>按钮</mui-button>
                <mui-button type="success" size="large" outlined>按钮</mui-button>
                <mui-button type="success" size="large" outlined disabled>按钮(禁用)</mui-button>
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
