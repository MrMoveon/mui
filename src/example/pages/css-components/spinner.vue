<template>
    <mui-page>
        <mui-header mode='light' fixed title="Spinner 加载器">
            <mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					基本加载器
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button>
                    <mui-spinner type="default-dark"></mui-spinner>
                </mui-button>
                <mui-button>
                    <mui-spinner type="ellipsis-dark" ></mui-spinner>
                </mui-button>
                <mui-button>
                    <mui-spinner type="ring"></mui-spinner>
                </mui-button>
            </mui-wing-blank >
            <mui-wing-blank>
				<div class="sub-title">
					浅色加载器
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                 <mui-button type="primary">
                    <mui-spinner type="default"></mui-spinner>
                </mui-button>
                <mui-button type="primary">
                    <mui-spinner type="ellipsis"></mui-spinner>
                </mui-button>
            </mui-wing-blank >
            <mui-wing-blank>
				<div class="sub-title">
					蓝色加载器
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button>
                    <mui-spinner type="default-primary"></mui-spinner>
                </mui-button>
                <mui-button>
                    <mui-spinner type="ellipsis-primary"></mui-spinner>
                </mui-button>
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
