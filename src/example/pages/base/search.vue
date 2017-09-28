<template>
    <mui-page>
        <mui-header mode='light' fixed title="Search 搜索器">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
          
            
            <mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-search></mui-search>

            <mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-search></mui-search>

            <mui-wing-blank>
				<div class="sub-title">
					文本修改
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-search placeholder="请输入查询的信息" cancel-text="放弃"></mui-search>

            <mui-wing-blank>
				<div class="sub-title">
					搜索按钮
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-search placeholder="search" :default-value.sync="defaultValue" show-search-button v-on:on-submit="onSubmit"></mui-search>

             <mui-wing-blank>
				<div class="sub-title">
					事件
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-search ref="input" v-on:on-clear="onClear" v-on:on-cancel="onCancel" default-value="mui+vue"></mui-search>
            <mui-white-space size='lg'></mui-white-space>
             <mui-wing-blank size="lg">
				 <mui-button @click="setFocus"  size="large">获取焦点</mui-button>
			</mui-wing-blank>
           
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
import {Toast} from '@/components'
export default {
    name: 'search',
    mixins: [back],
    data () {
        return {
            defaultValue: 'search'
        }
    },
    methods: {
        onClear () {
            Toast({
                msg: '清空了',
                position: 'bottom'
            })
        },
        onCancel (e) {
            Toast({
                msg: '取消了',
                position: 'bottom'
            })
        },
        // 设置焦点
        setFocus () {
            this.$refs.input.setFocus()
        },
        onSubmit (e) {
            if (this.defaultValue) {
                Toast({
                    msg: '搜索中:' + this.defaultValue,
                    position: 'bottom'
                })
            } else {
                Toast({
                    msg: '请输入内容',
                    position: 'bottom'
                })
            }
        }
    }
}
</script>

<style>

</style>
