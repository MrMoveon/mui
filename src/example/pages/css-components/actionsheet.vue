<template>
    <mui-page>
        <mui-header mode='light' fixed title="ActionSheet 动作面板">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
            <mui-button icon="more_light" slot="right" @click="show"></mui-button>
        </mui-header>
        <mui-page-container>
          
            
            <mui-wing-blank>
				<div class="sub-title">
					正常
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
             <mui-wing-blank size="lg">
				 <mui-button @click="show"  size="large">显示</mui-button>
			</mui-wing-blank>
            <mui-actionsheet  :visible.sync="visible" :options="actionsheet">
                <mui-cell title="选择图片" :arrow="false"></mui-cell>
                <mui-cell title="拍照" :arrow="false"></mui-cell>
            </mui-actionsheet>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'actionsheet',
    mixins: [back],
    data () {
        return {
            visible: false,
            actionsheet: ['选择图片', '拍照']
        }
    },
    methods: {
        show () {
            this.visible = true
        }
    }
}
</script>

<style>

</style>
