<template>
    <mui-page>

        <mui-header mode='light' fixed title="Switch">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>

        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					默认
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-cell-group>
                <mui-cell title="开关" :arrow="false">
                    <template slot="extra">
                    {{isChecked1}}<mui-switch :value.sync='isChecked1'></mui-switch>
                    </template>
                </mui-cell>
             </mui-cell-group>
            <mui-wing-blank>
				<div class="sub-title">
                    多种颜色
				</div>
			</mui-wing-blank>
            <mui-cell-group>
                <mui-cell title="蓝色" :arrow="false">
                    <template slot="extra">
                        <mui-switch :value.sync='isChecked2' color="blue"></mui-switch>
                    </template>
                </mui-cell>
                <mui-cell title="绿色" :arrow="false">
                    <template slot="extra">
                        <mui-switch :value.sync='isChecked2' color="green"></mui-switch>
                    </template>
                </mui-cell>
                <mui-cell title="橙色" :arrow="false">
                    <template slot="extra">
                        <mui-switch :value.sync='isChecked2' color="org"></mui-switch>
                    </template>
                </mui-cell>
            </mui-cell-group>
            <mui-wing-blank>
				<div class="sub-title">
					onChange
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-cell-group>
                <mui-cell  title="开关" :arrow="false">
                    <template slot="extra">
                        <mui-switch  :value.sync='isChecked5' v-on:on-change="onChange"></mui-switch>
                    </template>
                </mui-cell>
               
             </mui-cell-group>
            <mui-wing-blank>
				<div class="sub-title">
					禁用
				</div>
			</mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-cell-group>
                <mui-cell  title="开关" :arrow="false">
                    <template slot="extra">
                        <mui-switch disabled :value.sync='isChecked3'></mui-switch>
                    </template>
                </mui-cell>
                <mui-cell  title="开关" :arrow="false">
                    <template slot="extra">
                        <mui-switch disabled :value.sync='isChecked4'></mui-switch>
                    </template>
                </mui-cell>
             </mui-cell-group>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
import {Toast} from '@/components'
export default {
    name: 'switch',
    mixins: [back],
    data () {
        return {
            isChecked1: false,
            isChecked2: false,
            isChecked3: false,
            isChecked4: true,
            isChecked5: true
        }
    },
    methods: {
        onChange () {
            Toast('改变了：' + this.isChecked5)
        }
    }
}
</script>

<style>

</style>
