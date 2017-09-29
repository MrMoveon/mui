<template>
    <mui-page>
        <mui-header mode='light' fixed title="Stepper 步进器">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
          
            
            <mui-wing-blank>
				<div class="sub-title">
					基础用法
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
               <mui-stepper  v-model="stepper1"></mui-stepper>
            </mui-wing-blank >
            
            <mui-wing-blank>
				<div class="sub-title">
					禁用状态
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
               <mui-stepper disabled></mui-stepper>
            </mui-wing-blank >
            
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'stepper',
    mixins: [back],
    data () {
        return {
            stepper1: 5
        }
    }
}
</script>

<style>

</style>
