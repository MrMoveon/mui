<template>
    <mui-page>
        <mui-header mode='light' fixed title="Popover">
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
           <mui-popover :visible.sync="visible">
               <mui-cell title="分享" :arrow="false" icon="sharealt"></mui-cell>
               <mui-cell title="收藏" :arrow="false" icon="hearto"></mui-cell>
           </mui-popover>
            
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'popover',
    mixins: [back],
    data () {
        return {
            visible: false
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
