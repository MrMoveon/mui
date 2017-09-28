<template>
    <mui-page>
        <mui-header mode='light' fixed title="ActionSheet 动作面板">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
            <mui-button icon="more_light" slot="right" @click="toggle"></mui-button>
        </mui-header>
        <mui-page-container>
          
            
            <mui-wing-blank>
				<div class="sub-title">
					动作面板
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
				 <mui-button @click="toggle"  size="large">显示 </mui-button>
			</mui-wing-blank>
            
             <mui-wing-blank>
				<div class="sub-title">
					显示分享
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
				 <mui-button @click="toggleShare"  size="large">显示 </mui-button>
			</mui-wing-blank>


        </mui-page-container>
        <mui-actionsheet  :visible.sync="visible" :options="actionsheet" v-on:on-press="onPress">
            <mui-cell title="选择图片" :arrow="false"></mui-cell>
            <mui-cell title="拍照" :arrow="false"></mui-cell>
        </mui-actionsheet>
        <mui-actionsheet title="分享到"  :visible.sync="visibleShare" :share-options="actionsheetShare" v-on:on-press="onPressShare">
            <mui-cell title="选择图片" :arrow="false"></mui-cell>
            <mui-cell title="拍照" :arrow="false"></mui-cell>
        </mui-actionsheet>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
import {Toast} from '@/components'
export default {
    name: 'actionsheet',
    mixins: [back],
    data () {
        return {
            visible: false,
            actionsheet: ['选择图片', '拍照'],
            visibleShare: false,
            actionsheetShare: [
                {
                    icon: 'github',
                    name: 'github'
                },
                {
                    icon: 'qq',
                    name: 'QQ'
                },
                {
                    icon: 'pengyouquan',
                    name: '朋友圈'
                },
                {
                    icon: 'weixin',
                    name: '微信'
                },
                {
                    icon: 'weibo',
                    name: '微博'
                },
                {
                    icon: 'erweima',
                    name: '二维码'
                },
                {
                    icon: 'lianjie',
                    name: '链接'
                }
            ]
        }
    },
    methods: {
        toggle () {
            this.visible = !this.visible
        },
        toggleShare () {
            this.visibleShare = !this.visibleShare
        },
        onPress (index) {
            Toast('点击了' + this.actionsheet[index])
        },
        onPressShare (index) {
            Toast('点击了' + this.actionsheetShare[index].name)
        }

    }
}
</script>

<style>

</style>
